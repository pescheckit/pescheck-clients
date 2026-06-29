<?php

declare(strict_types=1);

namespace Pescheck\Example\Tests;

use PHPUnit\Framework\TestCase;
use Pescheck\Client\Configuration;
use Pescheck\Client\ApiException;
use Pescheck\Client\Api\ChecksApi;
use Pescheck\Client\Api\ProfilesApi;
use Pescheck\Client\Api\ScreeningsApi;
use Pescheck\Client\Api\WebhooksApi;
use Pescheck\Client\Api\DivisionsApi;
use Pescheck\Client\Model\V2ProfileCreate;
use Pescheck\Client\Model\V2ProfileCheck;
use Pescheck\Client\Model\PatchedV2ProfilePartialUpdate;
use Pescheck\Client\Model\V2ProfileUpdate;
use Pescheck\Client\Model\V2ProfileUpdateCheck;
use Pescheck\Client\Model\V2ScreeningCreate;
use Pescheck\Client\Model\V2Candidate;
use Pescheck\Client\Model\Webhook;
use Pescheck\Client\Model\DivisionWrite;
use Pescheck\Client\Model\PatchedDivisionWrite;

/**
 * Live integration test for the generated Pescheck PHP client.
 *
 * Mirrors examples/php/crud_lifecycle.php: it runs the full v2 CRUD surface
 * against the real Pescheck API using an OAuth2 bearer token. There are no
 * mocks — without PESCHECK_ACCESS_TOKEN the test skips (and the suite is green).
 *
 * Env:
 *   PESCHECK_BASE_URL      default https://api-staging.pescheck.io
 *   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token (required to run)
 *   PESCHECK_TEST_EMAIL    candidate email for the screening (default noreply@pescheck.nl)
 */
final class CrudIntegrationTest extends TestCase
{
    private const DIVISION_NAME = 'E2E CI division';

    private ChecksApi $checks;
    private ProfilesApi $profiles;
    private ScreeningsApi $screenings;
    private WebhooksApi $webhooks;
    private DivisionsApi $divisions;

    private string $email;
    /** Unique per run: profile/webhook names 500 on a duplicate (soft-deleted) name. */
    private string $suffix;
    private ?string $profileId = null;

    protected function setUp(): void
    {
        $token = getenv('PESCHECK_ACCESS_TOKEN') ?: '';
        if ($token === '') {
            $this->markTestSkipped('PESCHECK_ACCESS_TOKEN not set');
        }

        $baseUrl = getenv('PESCHECK_BASE_URL') ?: 'https://api-staging.pescheck.io';
        $this->email = getenv('PESCHECK_TEST_EMAIL') ?: 'noreply@pescheck.nl';
        $this->suffix = bin2hex(random_bytes(4));

        $config = Configuration::getDefaultConfiguration()
            ->setHost($baseUrl)
            ->setAccessToken($token);
        $http = new \GuzzleHttp\Client();

        $this->checks = new ChecksApi($http, $config);
        $this->profiles = new ProfilesApi($http, $config);
        $this->screenings = new ScreeningsApi($http, $config);
        $this->webhooks = new WebhooksApi($http, $config);
        $this->divisions = new DivisionsApi($http, $config);
    }

    protected function tearDown(): void
    {
        // Best-effort cleanup of the profile we created.
        if ($this->profileId !== null) {
            try {
                $this->profiles->v2ProfilesDestroy($this->profileId);
            } catch (\Throwable $e) {
                // ignore
            }
            $this->profileId = null;
        }
    }

    /**
     * Staging intermittently returns HTTP 5xx on read/list calls. Retry the
     * given call up to 3 times with a short sleep on a 5xx ApiException; never
     * retry 4xx (those are surfaced immediately).
     *
     * @template T
     * @param callable():T $fn
     * @return T
     */
    private function retryOn5xx(callable $fn)
    {
        $attempts = 3;
        for ($attempt = 1; ; $attempt++) {
            try {
                return $fn();
            } catch (ApiException $e) {
                if ($e->getCode() >= 500 && $attempt < $attempts) {
                    usleep(500_000); // 0.5s before retrying
                    continue;
                }
                throw $e;
            }
        }
    }

    public function testFullCrudLifecycle(): void
    {
        // --- checks: list -> retrieve one ---
        $checkList = $this->retryOn5xx(fn () => $this->checks->v2ChecksList());
        $this->assertNotEmpty($checkList, 'expected at least one check type');
        $checkType = $checkList[0]->getCheckType();
        $this->assertNotEmpty($checkType);
        $retrievedCheck = $this->checks->v2ChecksRetrieve($checkType);
        $this->assertSame($checkType, $retrievedCheck->getCheckType());

        // --- profile: create -> retrieve -> patch -> appears in list ---
        $created = $this->profiles->v2ProfilesCreate(new V2ProfileCreate([
            'name' => "E2E test profile {$this->suffix}",
            'description' => 'created by e2e',
            'checks' => [new V2ProfileCheck(['check_type' => $checkType])],
        ]));
        $this->profileId = $created->getId();
        $this->assertNotEmpty($this->profileId);

        $retrievedProfile = $this->profiles->v2ProfilesRetrieve($this->profileId);
        $this->assertSame($this->profileId, $retrievedProfile->getId());
        $this->assertSame("E2E test profile {$this->suffix}", $retrievedProfile->getName());

        $patched = $this->profiles->v2ProfilesPartialUpdate($this->profileId, new PatchedV2ProfilePartialUpdate([
            'description' => 'updated by e2e',
        ]));
        $this->assertSame('updated by e2e', $patched->getDescription());

        // PUT (full replacement) alongside the PATCH above: name + checks are
        // required by V2ProfileUpdate, so we resend them plus a new description.
        // The profile already has its check(s), so each existing check must be
        // re-sent with its profile_check_id — otherwise the API 400s with
        // "Profile already has ProfileCheck(s) of type '...'. Include their
        // profile_check_id to update them." Carry the ids over from the current
        // profile's checks (V2ProfileCheckEntry::getId()).
        $updateChecks = array_map(
            static fn ($c) => new V2ProfileUpdateCheck([
                'check_type' => $c->getCheckType(),
                'profile_check_id' => $c->getId(),
            ]),
            $patched->getChecks()
        );
        $putProfile = $this->profiles->v2ProfilesUpdate($this->profileId, new V2ProfileUpdate([
            'name' => "E2E test profile {$this->suffix}",
            'description' => 'replaced by e2e (PUT)',
            'checks' => $updateChecks,
        ]));
        $this->assertSame('replaced by e2e (PUT)', $putProfile->getDescription());
        $this->assertSame("E2E test profile {$this->suffix}", $putProfile->getName());

        $profileList = $this->retryOn5xx(fn () => $this->profiles->v2ProfilesList()->getResults());
        $ids = array_map(static fn ($p) => $p->getId(), $profileList);
        $this->assertContains($this->profileId, $ids, 'created profile should appear in the profile list');

        // --- screening: create -> retrieve -> documents ---
        $screening = $this->screenings->v2ScreeningsCreate(new V2ScreeningCreate([
            'profile_id' => $this->profileId,
            'candidate' => new V2Candidate([
                'first_name' => 'E2E',
                'last_name' => 'Tester',
                'email' => $this->email,
            ]),
        ]));
        $screeningId = $screening->getId();
        $this->assertNotEmpty($screeningId);
        $this->assertNotEmpty($screening->getStatus(), 'screening should have a status');

        $retrievedScreening = $this->screenings->v2ScreeningsRetrieve($screeningId);
        $this->assertSame($screeningId, $retrievedScreening->getId());
        $this->assertSame($this->email, $retrievedScreening->getCandidate()->getEmail());

        // screening should appear in the list
        $screeningList = $this->retryOn5xx(fn () => $this->screenings->v2ScreeningsList()->getResults());
        $this->assertNotEmpty($screeningList, 'expected at least the screening we just created');
        $screeningIds = array_map(static fn ($s) => $s->getId(), $screeningList);
        $this->assertContains($screeningId, $screeningIds, 'created screening should appear in the screening list');

        // documents list should not error (may be empty for a fresh screening)
        $this->screenings->v2ScreeningsDocumentsList($screeningId);

        // --- webhook: create -> list -> delete ---
        $hook = $this->webhooks->createWebhook2(new Webhook([
            'name' => "E2E webhook {$this->suffix}",
            'url' => "https://example.com/e2e-hook-{$this->suffix}",
            'events' => ['screening.status_changed'],
        ]));
        $hookId = $hook->getId();
        $this->assertNotEmpty($hookId);
        $this->assertSame("https://example.com/e2e-hook-{$this->suffix}", $hook->getUrl());
        $this->assertSame(['screening.status_changed'], $hook->getEvents());

        $hookList = $this->webhooks->listWebhooks2();
        $hookIds = array_map(static fn ($w) => $w->getId(), $hookList);
        $this->assertContains($hookId, $hookIds, 'created webhook should appear in the webhook list');

        $this->webhooks->deleteWebhook2($hookId);

        // --- division: list -> reuse-or-create by name -> patch ---
        $existing = $this->retryOn5xx(fn () => $this->divisions->v2OrganisationsDivisionsList()->getResults());
        $div = null;
        foreach ($existing as $d) {
            if ($d->getName() === self::DIVISION_NAME) {
                $div = $d;
                break;
            }
        }
        if ($div === null) {
            $div = $this->divisions->v2OrganisationsDivisionsCreate(new DivisionWrite([
                'name' => self::DIVISION_NAME,
                'city' => 'Amsterdam',
                'address' => 'Teststraat 1',
                'postal' => '1011AA',
                'phone' => '+31200000000',
                'contact_name' => 'E2E',
                'contact_email' => $this->email,
                'invoice_email' => $this->email,
            ]));
        }
        $this->assertSame(self::DIVISION_NAME, $div->getName());
        $divisionId = $div->getId();

        // retrieve the division by id and assert identity + a couple of fields
        $retrievedDiv = $this->retryOn5xx(fn () => $this->divisions->v2OrganisationsDivisionsRetrieve($divisionId));
        $this->assertSame($divisionId, $retrievedDiv->getId());
        $this->assertSame(self::DIVISION_NAME, $retrievedDiv->getName());

        $patchedDiv = $this->divisions->v2OrganisationsDivisionsPartialUpdate($divisionId, new PatchedDivisionWrite([
            'city' => 'Rotterdam',
        ]));
        $this->assertSame('Rotterdam', $patchedDiv->getCity());

        // PUT (full replacement) alongside the PATCH above.
        $putDiv = $this->divisions->v2OrganisationsDivisionsUpdate($divisionId, new DivisionWrite([
            'name' => self::DIVISION_NAME,
            'city' => 'Utrecht',
            'address' => 'Teststraat 2',
            'postal' => '3500AA',
            'phone' => '+31300000000',
            'contact_name' => 'E2E PUT',
            'contact_email' => $this->email,
            'invoice_email' => $this->email,
        ]));
        $this->assertSame(self::DIVISION_NAME, $putDiv->getName());
        $this->assertSame('Utrecht', $putDiv->getCity());

        // confirm the PUT stuck on a fresh retrieve
        $reRetrievedDiv = $this->retryOn5xx(fn () => $this->divisions->v2OrganisationsDivisionsRetrieve($divisionId));
        $this->assertSame('Utrecht', $reRetrievedDiv->getCity());
        $this->assertSame('Teststraat 2', $reRetrievedDiv->getAddress());
        $this->assertSame('3500AA', $reRetrievedDiv->getPostal());
    }

    /**
     * A ChecksApi built with a bogus access token must be rejected with HTTP 401.
     */
    public function testUnauthorized(): void
    {
        $baseUrl = getenv('PESCHECK_BASE_URL') ?: 'https://api-staging.pescheck.io';
        $config = Configuration::getDefaultConfiguration()
            ->setHost($baseUrl)
            ->setAccessToken('definitely-not-a-valid-token');
        $checks = new ChecksApi(new \GuzzleHttp\Client(), $config);

        try {
            $checks->v2ChecksList();
            $this->fail('expected ApiException for unauthorized request');
        } catch (ApiException $e) {
            $this->assertSame(401, $e->getCode());
        }
    }

    /**
     * Retrieving a profile by a random (non-existent) UUID must yield HTTP 404.
     */
    public function testNotFound(): void
    {
        $randomUuid = sprintf(
            '%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
            random_int(0, 0xffff), random_int(0, 0xffff),
            random_int(0, 0xffff),
            random_int(0, 0x0fff) | 0x4000,
            random_int(0, 0x3fff) | 0x8000,
            random_int(0, 0xffff), random_int(0, 0xffff), random_int(0, 0xffff)
        );

        $this->expectException(ApiException::class);
        try {
            $this->profiles->v2ProfilesRetrieve($randomUuid);
        } catch (ApiException $e) {
            $this->assertSame(404, $e->getCode());
            throw $e;
        }
    }
}
