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
  let screeningId = null;
  let divId = null;

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
    const name = `E2E test profile ${SUFFIX}`;
    const created = await profiles.v2ProfilesCreate({
      name,
      description: 'created by e2e',
      checks: [{ check_type: checkType }],
    });
    profileId = created.id;
    assert.ok(profileId, 'expected a profile id');

    const retrieved = await profiles.v2ProfilesRetrieve(profileId);
    assert.strictEqual(retrieved.id, profileId);
    assert.strictEqual(retrieved.name, name, 'profile should keep the name it was created with');

    const patched = await profiles.v2ProfilesPartialUpdate(profileId, {
      patchedV2ProfilePartialUpdate: { description: 'updated by e2e' },
    });
    assert.strictEqual(patched.description, 'updated by e2e');
    assert.strictEqual(patched.name, name, 'PATCH of description should leave the name unchanged');

    const list = await profiles.v2ProfilesList();
    const items = Array.isArray(list) ? list : list.results;
    assert.ok(items.some((p) => p.id === profileId), 'profile should appear in list');
  });

  it('replaces a profile with PUT', async function () {
    // PUT replaces the whole profile (name + description + checks). Existing
    // checks must be referenced by their profile_check_id to be updated in
    // place; sending a bare check_type the profile already has is rejected. A
    // duplicate name would 500, so the replacement name keeps the unique suffix.
    const current = await profiles.v2ProfilesRetrieve(profileId);
    const checksUpdate = current.checks.map((c) => ({
      check_type: c.check_type,
      profile_check_id: c.id,
    }));
    const newName = `E2E test profile (PUT) ${SUFFIX}`;
    const updated = await profiles.v2ProfilesUpdate(profileId, {
      name: newName,
      description: 'replaced by e2e PUT',
      checks: checksUpdate,
    });
    assert.strictEqual(updated.id, profileId);
    assert.strictEqual(updated.name, newName, 'PUT should replace the profile name');
    assert.strictEqual(updated.description, 'replaced by e2e PUT');
    assert.ok(updated.checks.some((c) => c.check_type === checkType), 'PUT should keep the check');
  });

  it('creates and retrieves a screening with documents', async function () {
    const screening = await screenings.v2ScreeningsCreate({
      profile_id: profileId,
      candidate: { first_name: 'E2E', last_name: 'Tester', email: testEmail },
    });
    assert.ok(screening.status, 'expected a screening status');
    screeningId = screening.id;

    const retrieved = await screenings.v2ScreeningsRetrieve(screening.id);
    assert.strictEqual(retrieved.id, screening.id);
    assert.ok(retrieved.candidate, 'expected the screening to carry a candidate');
    assert.strictEqual(retrieved.candidate.email, testEmail, 'candidate email should round-trip');

    await screenings.v2ScreeningsDocumentsList(screening.id);
  });

  it('lists screenings and finds the created screening', async function () {
    const list = await screenings.v2ScreeningsList();
    const items = Array.isArray(list) ? list : list.results;
    assert.ok(items.length > 0, 'expected at least one screening in the list');
    assert.ok(
      items.some((s) => s.id === screeningId),
      'the screening we created should appear in the list'
    );
  });

  it('creates, lists and deletes a webhook', async function () {
    const url = `https://example.com/e2e-hook-${SUFFIX}`;
    const events = ['screening.status_changed'];
    const hook = await webhooks.createWebhook2({
      name: `E2E webhook ${SUFFIX}`,
      url,
      events,
    });
    assert.ok(hook.id, 'expected a webhook id');
    assert.strictEqual(hook.url, url, 'webhook url should round-trip');
    assert.deepStrictEqual(hook.events, events, 'webhook events should round-trip');

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
    assert.strictEqual(div.name, DIVISION_NAME, 'division should carry the expected name');
    divId = div.id;

    const patched = await divisions.v2OrganisationsDivisionsPartialUpdate(div.id, {
      patchedDivisionWrite: { city: 'Rotterdam' },
    });
    assert.strictEqual(patched.city, 'Rotterdam');
  });

  it('retrieves and replaces a division with PUT', async function () {
    const retrieved = await divisions.v2OrganisationsDivisionsRetrieve(divId);
    assert.strictEqual(retrieved.id, divId);
    assert.strictEqual(retrieved.name, DIVISION_NAME, 'retrieved division should keep its name');
    // The previous PATCH set the city to Rotterdam.
    assert.strictEqual(retrieved.city, 'Rotterdam', 'retrieve should reflect the prior PATCH');

    // PUT requires the full DivisionWrite body; reuse the retrieved fields and
    // change the city so we can assert the replacement took effect.
    const updated = await divisions.v2OrganisationsDivisionsUpdate(divId, {
      name: DIVISION_NAME, city: 'Utrecht', address: retrieved.address,
      postal: retrieved.postal, phone: retrieved.phone,
      contact_name: retrieved.contact_name, contact_email: retrieved.contact_email,
      invoice_email: retrieved.invoice_email,
    });
    assert.strictEqual(updated.city, 'Utrecht', 'PUT should replace the division city');
    assert.strictEqual(updated.name, DIVISION_NAME);
  });

  it('rejects unauthorized requests with 401', async function () {
    // A fresh client carrying a bogus OAuth2 token must be refused. superagent
    // surfaces the HTTP status on the rejected error as err.status.
    const badClient = new PescheckApi.ApiClient();
    badClient.basePath = baseUrl;
    badClient.authentications['oauth2'].accessToken = 'definitely-not-a-valid-token';
    const unauthChecks = new PescheckApi.ChecksApi(badClient);

    await assert.rejects(
      () => unauthChecks.v2ChecksList(),
      (err) => {
        assert.strictEqual(err.status, 401, `expected 401, got ${err.status}`);
        return true;
      }
    );
  });

  it('rejects retrieving an unknown profile with 404', async function () {
    const missingId = crypto.randomUUID();
    await assert.rejects(
      () => profiles.v2ProfilesRetrieve(missingId),
      (err) => {
        assert.strictEqual(err.status, 404, `expected 404, got ${err.status}`);
        return true;
      }
    );
  });
});
