<?php
/**
 * End-to-end CRUD lifecycle test for the Pescheck PHP client.
 *
 * Exercises the full v2 surface against the API and self-cleans where possible:
 *   checks      list -> retrieve one
 *   profiles    create -> retrieve -> patch -> delete
 *   screenings  create (needs a profile + candidate) -> retrieve -> documents
 *   webhooks    create -> list -> delete
 *   divisions   list -> reuse-or-create by name -> patch
 *
 * Prints a line per step and "E2E CRUD OK" on success; exits non-zero on error.
 *
 * Env:
 *   PESCHECK_BASE_URL      e.g. https://api-staging.pescheck.io
 *   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
 *   PESCHECK_TEST_EMAIL    candidate email for the screening (default noreply@pescheck.nl)
 */

require __DIR__ . '/vendor/autoload.php';

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
use Pescheck\Client\Model\V2ScreeningCreate;
use Pescheck\Client\Model\V2Candidate;
use Pescheck\Client\Model\Webhook;
use Pescheck\Client\Model\DivisionWrite;
use Pescheck\Client\Model\PatchedDivisionWrite;

const DIVISION_NAME = 'E2E CI division';

function step(string $msg): void
{
    echo "  - {$msg}\n";
}

$baseUrl = getenv('PESCHECK_BASE_URL') ?: '';
$token = getenv('PESCHECK_ACCESS_TOKEN') ?: '';
$email = getenv('PESCHECK_TEST_EMAIL') ?: 'noreply@pescheck.nl';
if ($baseUrl === '' || $token === '') {
    fwrite(STDERR, "PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set\n");
    exit(2);
}

// Profile/webhook names must be unique per run: the API soft-deletes and 500s on
// a duplicate name. The division has no delete, so we reuse a fixed-named one.
$suffix = bin2hex(random_bytes(4));

$config = Configuration::getDefaultConfiguration()->setHost($baseUrl)->setAccessToken($token);
$http = new \GuzzleHttp\Client();
$checks = new ChecksApi($http, $config);
$profiles = new ProfilesApi($http, $config);
$screenings = new ScreeningsApi($http, $config);
$webhooks = new WebhooksApi($http, $config);
$divisions = new DivisionsApi($http, $config);

$profileId = null;
try {
    // --- checks ---
    $checkList = $checks->v2ChecksList();
    $checkType = $checkList[0]->getCheckType();
    $checks->v2ChecksRetrieve($checkType);
    step(sprintf("checks: %d types, retrieved '%s'", count($checkList), $checkType));

    // --- profile: create -> retrieve -> patch ---
    $created = $profiles->v2ProfilesCreate(new V2ProfileCreate([
        'name' => "E2E test profile {$suffix}",
        'description' => 'created by e2e',
        'checks' => [new V2ProfileCheck(['check_type' => $checkType])],
    ]));
    $profileId = $created->getId();
    $profiles->v2ProfilesRetrieve($profileId);
    $profiles->v2ProfilesPartialUpdate($profileId, new PatchedV2ProfilePartialUpdate([
        'description' => 'updated by e2e',
    ]));
    step("profile: created+retrieved+patched ({$profileId})");

    // --- screening: create -> retrieve -> documents ---
    $screening = $screenings->v2ScreeningsCreate(new V2ScreeningCreate([
        'profile_id' => $profileId,
        'candidate' => new V2Candidate([
            'first_name' => 'E2E', 'last_name' => 'Tester', 'email' => $email,
        ]),
    ]));
    $screeningId = $screening->getId();
    $screenings->v2ScreeningsRetrieve($screeningId);
    $screenings->v2ScreeningsDocumentsList($screeningId);
    step("screening: created+retrieved ({$screeningId}, status={$screening->getStatus()})");

    // --- webhook: create -> list -> delete ---
    $hook = $webhooks->createWebhook2(new Webhook([
        'name' => "E2E webhook {$suffix}",
        'url' => "https://example.com/e2e-hook-{$suffix}",
        'events' => ['screening.status_changed'],
    ]));
    $webhooks->listWebhooks2();
    $webhooks->deleteWebhook2($hook->getId());
    step("webhook: created+listed+deleted ({$hook->getId()})");

    // --- division: list -> reuse-or-create -> patch ---
    $existing = $divisions->v2OrganisationsDivisionsList()->getResults();
    $div = null;
    foreach ($existing as $d) {
        if ($d->getName() === DIVISION_NAME) {
            $div = $d;
            break;
        }
    }
    if ($div === null) {
        $div = $divisions->v2OrganisationsDivisionsCreate(new DivisionWrite([
            'name' => DIVISION_NAME, 'city' => 'Amsterdam', 'address' => 'Teststraat 1',
            'postal' => '1011AA', 'phone' => '+31200000000', 'contact_name' => 'E2E',
            'contact_email' => $email, 'invoice_email' => $email,
        ]));
        $action = 'created';
    } else {
        $action = 'reused';
    }
    $divisions->v2OrganisationsDivisionsPartialUpdate($div->getId(), new PatchedDivisionWrite([
        'city' => 'Rotterdam',
    ]));
    step("division: {$action}+patched ({$div->getId()})");

    echo "E2E CRUD OK\n";
    $exit = 0;
} catch (ApiException $e) {
    fwrite(STDERR, "E2E CRUD FAILED: ApiException {$e->getCode()}: {$e->getMessage()}\n");
    fwrite(STDERR, (string) $e->getResponseBody() . "\n");
    $exit = 1;
} catch (\Throwable $e) {
    fwrite(STDERR, "E2E CRUD FAILED: " . get_class($e) . ": {$e->getMessage()}\n");
    $exit = 1;
} finally {
    // best-effort cleanup of the profile we created
    if ($profileId !== null) {
        try {
            $profiles->v2ProfilesDestroy($profileId);
        } catch (\Throwable $e) {
            // ignore
        }
    }
}

exit($exit);
