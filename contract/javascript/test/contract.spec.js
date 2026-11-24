// Contract test: the JavaScript client against the mock API (see contract/README.md).
const assert = require('node:assert');
const P = require('@pescheckit/pescheck-client-js');

const ID = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
const EMAIL = 'contract@example.invalid';

function client(token) {
  const c = new P.ApiClient(); // host from PESCHECK_BASE_URL
  c.authentications.oauth2.accessToken = token;
  return c;
}

const api = client(process.env.PESCHECK_ACCESS_TOKEN);

describe('contract', function () {
  it('checks', async function () {
    const checks = new P.ChecksApi(api);
    const list = await checks.v2ChecksList();
    assert.ok(Array.isArray(list) && list.every((c) => c instanceof P.V2CheckInfo));
    assert.ok((await checks.v2ChecksRetrieve('id2check')) instanceof P.V2CheckInfo);
  });

  it('add-ons', async function () {
    const addons = new P.AddOnsApi(api);
    const list = await addons.v2OrganisationsAddonsList();
    assert.ok(Array.isArray(list) && list.every((a) => a instanceof P.OrganisationAddon));
    assert.ok((await addons.v2OrganisationsAddonsRetrieve('api_access')) instanceof P.OrganisationAddon);
  });

  it('profiles', async function () {
    const profiles = new P.ProfilesApi(api);
    const created = await profiles.v2ProfilesCreate(
      new P.V2ProfileCreate('Contract test', [new P.V2ProfileCheck('id2check')]),
    );
    assert.ok(created instanceof P.V2ProfileDetail);
    assert.ok((await profiles.v2ProfilesList()) instanceof P.PaginatedV2ProfileListItemList);
    assert.ok((await profiles.v2ProfilesRetrieve(ID)) instanceof P.V2ProfileDetail);
    const patch = new P.PatchedV2ProfilePartialUpdate();
    patch.description = 'updated';
    const updated = await profiles.v2ProfilesPartialUpdate(ID, { patchedV2ProfilePartialUpdate: patch });
    assert.ok(updated instanceof P.V2ProfileDetail);
  });

  it('screenings', async function () {
    const screenings = new P.ScreeningsApi(api);
    const created = await screenings.v2ScreeningsCreate(
      new P.V2ScreeningCreate(ID, new P.V2Candidate('Contract', 'Test', EMAIL)),
    );
    assert.ok(created instanceof P.V2ScreeningDetail);
    assert.ok((await screenings.v2ScreeningsList()) instanceof P.PaginatedV2ScreeningListItemList);
    assert.ok((await screenings.v2ScreeningsRetrieve(ID)) instanceof P.V2ScreeningDetail);
    const docs = await screenings.v2ScreeningsDocumentsList(ID);
    assert.ok(Array.isArray(docs) && docs.every((d) => d instanceof P.V2Document));
  });

  it('webhooks', async function () {
    const webhooks = new P.WebhooksApi(api);
    const created = await webhooks.createWebhook2(
      new P.Webhook('Contract test', 'https://example.invalid/hook', ['screening.status_changed']),
    );
    assert.ok(created instanceof P.WebhookResponse);
    const list = await webhooks.listWebhooks2();
    assert.ok(Array.isArray(list) && list.every((w) => w instanceof P.WebhookResponse));
  });

  it('divisions', async function () {
    const divisions = new P.DivisionsApi(api);
    const created = await divisions.v2OrganisationsDivisionsCreate(
      new P.DivisionWrite('Contract test', 'Utrecht', 'Teststraat 1', '1234AB', '0301234567',
        'Contract Test', EMAIL, EMAIL),
    );
    assert.ok(created instanceof P.DivisionWrite);
    assert.ok((await divisions.v2OrganisationsDivisionsList()) instanceof P.PaginatedDivisionReadOnlyList);
  });

  it('rejects a request without a token', async function () {
    await assert.rejects(new P.ProfilesApi(client('')).v2ProfilesList(), (err) => err.status === 401);
  });
});
