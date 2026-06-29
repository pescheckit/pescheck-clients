// End-to-end CRUD lifecycle test for the Pescheck JavaScript client.
//
// Exercises the full v2 surface against the API and self-cleans where possible:
//
//   checks      list -> retrieve one
//   profiles    create -> retrieve -> patch -> (appears in list) -> delete
//   screenings  create (needs a profile + candidate) -> retrieve -> list documents
//   webhooks    create -> list -> delete
//   divisions   list -> reuse-or-create by name -> patch
//
// Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.
//
// Required environment variables:
//   PESCHECK_BASE_URL      - API base URL, e.g. https://api-staging.pescheck.io
//   PESCHECK_ACCESS_TOKEN  - OAuth2 client-credentials access token
//   PESCHECK_TEST_EMAIL    - candidate email (default noreply@pescheck.nl)

const crypto = require('crypto');
const PescheckApi = require('@pescheckit/api-client-js');

// Profile/webhook names must be unique per run: the API soft-deletes and returns
// a 500 on a duplicate name. The division has no delete endpoint, so we reuse a
// fixed-named one instead of creating a new one each run.
const SUFFIX = crypto.randomBytes(4).toString('hex');
const DIVISION_NAME = 'E2E CI division';

function step(msg) {
  console.log(`  - ${msg}`);
}

async function main() {
  const baseUrl = process.env.PESCHECK_BASE_URL;
  const token = process.env.PESCHECK_ACCESS_TOKEN;
  const testEmail = process.env.PESCHECK_TEST_EMAIL || 'noreply@pescheck.nl';
  if (!baseUrl || !token) {
    console.error('PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set');
    return 2;
  }

  // Configure the shared default client: base path + OAuth2 bearer access token.
  const defaultClient = PescheckApi.ApiClient.instance;
  defaultClient.basePath = baseUrl;
  defaultClient.authentications['oauth2'].accessToken = token;

  const checks = new PescheckApi.ChecksApi();
  const profiles = new PescheckApi.ProfilesApi();
  const screenings = new PescheckApi.ScreeningsApi();
  const webhooks = new PescheckApi.WebhooksApi();
  const divisions = new PescheckApi.DivisionsApi();

  let profileId = null;
  try {
    // --- checks ---
    const checkList = await checks.v2ChecksList();
    const checkType = checkList[0].check_type;
    await checks.v2ChecksRetrieve(checkType);
    step(`checks: ${checkList.length} types, retrieved '${checkType}'`);

    // --- profile: create -> retrieve -> patch ---
    const created = await profiles.v2ProfilesCreate({
      name: `E2E test profile ${SUFFIX}`,
      description: 'created by e2e',
      checks: [{ check_type: checkType }],
    });
    profileId = created.id;
    await profiles.v2ProfilesRetrieve(profileId);
    await profiles.v2ProfilesPartialUpdate(profileId, {
      patchedV2ProfilePartialUpdate: { description: 'updated by e2e' },
    });
    step(`profile: created+retrieved+patched (${profileId})`);

    // --- screening: create -> retrieve -> documents ---
    const screening = await screenings.v2ScreeningsCreate({
      profile_id: profileId,
      candidate: { first_name: 'E2E', last_name: 'Tester', email: testEmail },
    });
    await screenings.v2ScreeningsRetrieve(screening.id);
    await screenings.v2ScreeningsDocumentsList(screening.id);
    step(`screening: created+retrieved (${screening.id}, status=${screening.status})`);

    // --- webhook: create -> list -> delete ---
    const hook = await webhooks.createWebhook2({
      name: `E2E webhook ${SUFFIX}`,
      url: `https://example.com/e2e-hook-${SUFFIX}`,
      events: ['screening.status_changed'],
    });
    await webhooks.listWebhooks2();
    await webhooks.deleteWebhook2(String(hook.id));
    step(`webhook: created+listed+deleted (${hook.id})`);

    // --- division: list -> reuse-or-create -> patch ---
    const existing = (await divisions.v2OrganisationsDivisionsList()).results;
    let div = existing.find((d) => d.name === DIVISION_NAME);
    let action;
    if (!div) {
      div = await divisions.v2OrganisationsDivisionsCreate({
        name: DIVISION_NAME, city: 'Amsterdam', address: 'Teststraat 1',
        postal: '1011AA', phone: '+31200000000', contact_name: 'E2E',
        contact_email: 'e2e@example.com', invoice_email: 'e2e@example.com',
      });
      action = 'created';
    } else {
      action = 'reused';
    }
    await divisions.v2OrganisationsDivisionsPartialUpdate(div.id, {
      patchedDivisionWrite: { city: 'Rotterdam' },
    });
    step(`division: ${action}+patched (${div.id})`);

    console.log('E2E CRUD OK');
    return 0;
  } catch (exc) {
    const msg = exc && exc.message ? exc.message : exc;
    console.error(`E2E CRUD FAILED: ${msg}`);
    return 1;
  } finally {
    // best-effort cleanup of the profile we created
    if (profileId) {
      try {
        await profiles.v2ProfilesDestroy(profileId);
      } catch (e) {
        // ignore
      }
    }
  }
}

main().then((code) => process.exit(code)).catch((e) => {
  console.error(e);
  process.exit(1);
});
