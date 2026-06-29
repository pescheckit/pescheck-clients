<?php

declare(strict_types=1);

namespace Pescheck\Example\Tests;

use PHPUnit\Framework\TestCase;
use Pescheck\Client\Configuration;
use Pescheck\Client\Api\ChecksApi;
use Pescheck\Client\Api\ProfilesApi;
use Pescheck\Client\Api\ScreeningsApi;
use Pescheck\Client\Api\WebhooksApi;
use Pescheck\Client\Api\DivisionsApi;
use Pescheck\Client\Model\V2ProfileCreate;
use Pescheck\Client\Model\V2ProfileCheck;
use Pescheck\Client\Model\PatchedV2ProfilePartialUpdate;
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

    public function testFullCrudLifecycle(): void
    {
        // --- checks: list -> retrieve one ---
        $checkList = $this->checks->v2ChecksList();
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

        $patched = $this->profiles->v2ProfilesPartialUpdate($this->profileId, new PatchedV2ProfilePartialUpdate([
            'description' => 'updated by e2e',
        ]));
        $this->assertSame('updated by e2e', $patched->getDescription());

        $profileList = $this->profiles->v2ProfilesList()->getResults();
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

        $hookList = $this->webhooks->listWebhooks2();
        $hookIds = array_map(static fn ($w) => $w->getId(), $hookList);
        $this->assertContains($hookId, $hookIds, 'created webhook should appear in the webhook list');

        $this->webhooks->deleteWebhook2($hookId);

        // --- division: list -> reuse-or-create by name -> patch ---
        $existing = $this->divisions->v2OrganisationsDivisionsList()->getResults();
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

        $patchedDiv = $this->divisions->v2OrganisationsDivisionsPartialUpdate($div->getId(), new PatchedDivisionWrite([
            'city' => 'Rotterdam',
        ]));
        $this->assertSame('Rotterdam', $patchedDiv->getCity());
    }
}
