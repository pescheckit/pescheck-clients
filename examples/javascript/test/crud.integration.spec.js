// Integration test for the Pescheck JavaScript client.
//
// Exercises the full v2 CRUD surface against the real Pescheck API. No mocks:
// it authenticates with an OAuth2 bearer token and self-cleans where possible.
//
// The suite is skipped (reported pending, exit 0) unless PESCHECK_ACCESS_TOKEN
// is set, so it stays green without credentials.
//
// Environment variables:
//   PESCHECK_BASE_URL      - API base URL (default https://api-staging.pescheck.io)
//   PESCHECK_ACCESS_TOKEN  - OAuth2 client-credentials access token (required to run)
//   PESCHECK_TEST_EMAIL    - candidate email (default noreply@pescheck.nl)

const assert = require('node:assert');
const crypto = require('node:crypto');
const PescheckApi = require('@pescheckit/pescheck-client-js');

// Profile/webhook names must be unique per run: the API soft-deletes and returns
// a 500 on a duplicate name, so we suffix them (and the webhook URL). The division
// has no delete endpoint, so we reuse a fixed-named one instead.
const SUFFIX = crypto.randomBytes(4).toString('hex');
const DIVISION_NAME = 'E2E CI division';

describe('Pescheck client CRUD lifecycle', function () {
  // Real network calls: give each step generous headroom.
  this.timeout(60000);

  const baseUrl = process.env.PESCHECK_BASE_URL || 'https://api-staging.pescheck.io';
  const testEmail = process.env.PESCHECK_TEST_EMAIL || 'noreply@pescheck.nl';

  let checks, profiles, screenings, webhooks, divisions;
  let checkType;
  let profileId = null;

  before(function () {
    if (!process.env.PESCHECK_ACCESS_TOKEN) {
      this.skip();
    }

    // Configure the shared default client: base path + OAuth2 bearer access token.
    const defaultClient = PescheckApi.ApiClient.instance;
    defaultClient.basePath = baseUrl;
    defaultClient.authentications['oauth2'].accessToken = process.env.PESCHECK_ACCESS_TOKEN;

    checks = new PescheckApi.ChecksApi();
    profiles = new PescheckApi.ProfilesApi();
    screenings = new PescheckApi.ScreeningsApi();
    webhooks = new PescheckApi.WebhooksApi();
    divisions = new PescheckApi.DivisionsApi();
  });

  after(async function () {
    // Best-effort cleanup of the profile we created.
    if (profileId) {
      try {
        await profiles.v2ProfilesDestroy(profileId);
      } catch (e) {
        // ignore
      }
    }
  });

  it('lists and retrieves checks', async function () {
    const checkList = await checks.v2ChecksList();
    assert.ok(checkList.length > 0, 'expected at least one check type');
    checkType = checkList[0].check_type;
    const retrieved = await checks.v2ChecksRetrieve(checkType);
    assert.strictEqual(retrieved.check_type, checkType);
  });

  it('creates, retrieves and patches a profile', async function () {
    const created = await profiles.v2ProfilesCreate({
      name: `E2E test profile ${SUFFIX}`,
      description: 'created by e2e',
      checks: [{ check_type: checkType }],
    });
    profileId = created.id;
    assert.ok(profileId, 'expected a profile id');

    const retrieved = await profiles.v2ProfilesRetrieve(profileId);
    assert.strictEqual(retrieved.id, profileId);

    const patched = await profiles.v2ProfilesPartialUpdate(profileId, {
      patchedV2ProfilePartialUpdate: { description: 'updated by e2e' },
    });
    assert.strictEqual(patched.description, 'updated by e2e');

    const list = await profiles.v2ProfilesList();
    const items = Array.isArray(list) ? list : list.results;
    assert.ok(items.some((p) => p.id === profileId), 'profile should appear in list');
  });

  it('creates and retrieves a screening with documents', async function () {
    const screening = await screenings.v2ScreeningsCreate({
      profile_id: profileId,
      candidate: { first_name: 'E2E', last_name: 'Tester', email: testEmail },
    });
    assert.ok(screening.status, 'expected a screening status');

    const retrieved = await screenings.v2ScreeningsRetrieve(screening.id);
    assert.strictEqual(retrieved.id, screening.id);

    await screenings.v2ScreeningsDocumentsList(screening.id);
  });

  it('creates, lists and deletes a webhook', async function () {
    const hook = await webhooks.createWebhook2({
      name: `E2E webhook ${SUFFIX}`,
      url: `https://example.com/e2e-hook-${SUFFIX}`,
      events: ['screening.status_changed'],
    });
    assert.ok(hook.id, 'expected a webhook id');

    const list = await webhooks.listWebhooks2();
    const items = Array.isArray(list) ? list : list.results;
    assert.ok(items.some((w) => String(w.id) === String(hook.id)), 'webhook should appear in list');

    await webhooks.deleteWebhook2(String(hook.id));
  });

  it('lists, reuses-or-creates and patches a division', async function () {
    const existing = (await divisions.v2OrganisationsDivisionsList()).results;
    let div = existing.find((d) => d.name === DIVISION_NAME);
    if (!div) {
      div = await divisions.v2OrganisationsDivisionsCreate({
        name: DIVISION_NAME, city: 'Amsterdam', address: 'Teststraat 1',
        postal: '1011AA', phone: '+31200000000', contact_name: 'E2E',
        contact_email: 'e2e@example.com', invoice_email: 'e2e@example.com',
      });
    }
    assert.ok(div.id, 'expected a division id');

    const patched = await divisions.v2OrganisationsDivisionsPartialUpdate(div.id, {
      patchedDivisionWrite: { city: 'Rotterdam' },
    });
    assert.strictEqual(patched.city, 'Rotterdam');
  });
});
