<?php

declare(strict_types=1);

namespace Pescheck\Contract\Tests;

use PHPUnit\Framework\TestCase;
use Pescheck\Client\ApiException;
use Pescheck\Client\Configuration;
use Pescheck\Client\Api\AddOnsApi;
use Pescheck\Client\Api\ChecksApi;
use Pescheck\Client\Api\DivisionsApi;
use Pescheck\Client\Api\ProfilesApi;
use Pescheck\Client\Api\ScreeningsApi;
use Pescheck\Client\Api\WebhooksApi;
use Pescheck\Client\Model;

/** Contract test: the PHP client against the mock API (see contract/README.md). */
final class ContractTest extends TestCase
{
    private const ID = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
    private const EMAIL = 'contract@example.invalid';

    private static function config(?string $token = null): Configuration
    {
        // Host comes from PESCHECK_BASE_URL.
        return (new Configuration())->setAccessToken($token ?? (string) getenv('PESCHECK_ACCESS_TOKEN'));
    }

    public function testChecks(): void
    {
        $checks = new ChecksApi(null, self::config());
        $this->assertContainsOnlyInstancesOf(Model\V2CheckInfo::class, $checks->v2ChecksList());
        $this->assertInstanceOf(Model\V2CheckInfo::class, $checks->v2ChecksRetrieve('id2check'));
    }

    public function testAddOns(): void
    {
        $addons = new AddOnsApi(null, self::config());
        $this->assertContainsOnlyInstancesOf(Model\OrganisationAddon::class, $addons->v2OrganisationsAddonsList());
        $this->assertInstanceOf(Model\OrganisationAddon::class, $addons->v2OrganisationsAddonsRetrieve('api_access'));
    }

    public function testProfiles(): void
    {
        $profiles = new ProfilesApi(null, self::config());
        $created = $profiles->v2ProfilesCreate(new Model\V2ProfileCreate([
            'name' => 'Contract test',
            'checks' => [new Model\V2ProfileCheck(['check_type' => 'id2check'])],
        ]));
        $this->assertInstanceOf(Model\V2ProfileDetail::class, $created);
        $this->assertInstanceOf(Model\PaginatedV2ProfileListItemList::class, $profiles->v2ProfilesList());
        $this->assertInstanceOf(Model\V2ProfileDetail::class, $profiles->v2ProfilesRetrieve(self::ID));
        $updated = $profiles->v2ProfilesPartialUpdate(
            self::ID,
            new Model\PatchedV2ProfilePartialUpdate(['description' => 'updated'])
        );
        $this->assertInstanceOf(Model\V2ProfileDetail::class, $updated);
    }

    public function testScreenings(): void
    {
        $screenings = new ScreeningsApi(null, self::config());
        $created = $screenings->v2ScreeningsCreate(new Model\V2ScreeningCreate([
            'profile_id' => self::ID,
            'candidate' => new Model\V2Candidate([
                'first_name' => 'Contract',
                'last_name' => 'Test',
                'email' => self::EMAIL,
            ]),
        ]));
        $this->assertInstanceOf(Model\V2ScreeningDetail::class, $created);
        $this->assertInstanceOf(Model\PaginatedV2ScreeningListItemList::class, $screenings->v2ScreeningsList());
        $this->assertInstanceOf(Model\V2ScreeningDetail::class, $screenings->v2ScreeningsRetrieve(self::ID));
        $this->assertContainsOnlyInstancesOf(Model\V2Document::class, $screenings->v2ScreeningsDocumentsList(self::ID));
    }

    public function testWebhooks(): void
    {
        $webhooks = new WebhooksApi(null, self::config());
        $created = $webhooks->createWebhook2(new Model\Webhook([
            'name' => 'Contract test',
            'url' => 'https://example.invalid/hook',
            'events' => ['screening.status_changed'],
        ]));
        $this->assertInstanceOf(Model\WebhookResponse::class, $created);
        $this->assertContainsOnlyInstancesOf(Model\WebhookResponse::class, $webhooks->listWebhooks2());
    }

    public function testDivisions(): void
    {
        $divisions = new DivisionsApi(null, self::config());
        $created = $divisions->v2OrganisationsDivisionsCreate(new Model\DivisionWrite([
            'name' => 'Contract test',
            'city' => 'Utrecht',
            'address' => 'Teststraat 1',
            'postal' => '1234AB',
            'phone' => '0301234567',
            'contact_name' => 'Contract Test',
            'contact_email' => self::EMAIL,
            'invoice_email' => self::EMAIL,
        ]));
        $this->assertInstanceOf(Model\DivisionWrite::class, $created);
        $this->assertInstanceOf(Model\PaginatedDivisionReadOnlyList::class, $divisions->v2OrganisationsDivisionsList());
    }

    public function testUnauthorized(): void
    {
        try {
            (new ProfilesApi(null, self::config('')))->v2ProfilesList();
            $this->fail('expected HTTP 401');
        } catch (ApiException $e) {
            $this->assertSame(401, $e->getCode());
        }
    }
}
