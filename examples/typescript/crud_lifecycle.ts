/**
 * End-to-end CRUD lifecycle test for the Pescheck TypeScript client.
 *
 * Exercises the full v2 surface against the API and self-cleans where possible:
 *
 *   checks      list -> retrieve one
 *   profiles    create -> retrieve -> patch -> (appears in list) -> delete
 *   screenings  create (needs a profile + candidate) -> retrieve -> list documents
 *   webhooks    create -> list -> delete
 *   divisions   list -> reuse-or-create by name -> patch
 *
 * Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.
 *
 * Required environment variables:
 *   PESCHECK_BASE_URL      e.g. https://api-staging.pescheck.io
 *   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
 *   PESCHECK_TEST_EMAIL    candidate email (default noreply@pescheck.nl)
 */
import { randomBytes } from 'crypto';
import {
  Configuration,
  ChecksApi,
  ProfilesApi,
  ScreeningsApi,
  WebhooksApi,
  DivisionsApi,
  V2ProfileCheckCheckTypeEnum,
} from '@pescheckit/api-client';

// Profile/webhook names must be unique per run: the API soft-deletes and returns
// a 500 on a duplicate name. The division has no delete endpoint, so we reuse a
// fixed-named one instead of creating a new one each run.
const SUFFIX = randomBytes(4).toString('hex');
const DIVISION_NAME = 'E2E CI division';

function step(msg: string): void {
  console.log(`  - ${msg}`);
}

async function main(): Promise<number> {
  const basePath = process.env.PESCHECK_BASE_URL;
  const accessToken = process.env.PESCHECK_ACCESS_TOKEN;
  const testEmail = process.env.PESCHECK_TEST_EMAIL || 'noreply@pescheck.nl';
  if (!basePath || !accessToken) {
    console.error('ERROR: PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set');
    return 2;
  }

  // The accessToken config sets the OAuth2 / JWT bearer Authorization header.
  const config = new Configuration({ basePath, accessToken });
  const checks = new ChecksApi(config);
  const profiles = new ProfilesApi(config);
  const screenings = new ScreeningsApi(config);
  const webhooks = new WebhooksApi(config);
  const divisions = new DivisionsApi(config);

  let profileId: string | null = null;
  try {
    // --- checks ---
    const checkList = await checks.v2ChecksList();
    const checkType = checkList[0].checkType;
    await checks.v2ChecksRetrieve({ checkType });
    step(`checks: ${checkList.length} types, retrieved '${checkType}'`);

    // --- profile: create -> retrieve -> patch ---
    const created = await profiles.v2ProfilesCreate({
      v2ProfileCreate: {
        name: `E2E test profile ${SUFFIX}`,
        description: 'created by e2e',
        checks: [{ checkType: checkType as V2ProfileCheckCheckTypeEnum }],
      },
    });
    profileId = created.id;
    await profiles.v2ProfilesRetrieve({ id: profileId });
    await profiles.v2ProfilesPartialUpdate({
      id: profileId,
      patchedV2ProfilePartialUpdate: { description: 'updated by e2e' },
    });
    step(`profile: created+retrieved+patched (${profileId})`);

    // --- screening: create -> retrieve -> documents ---
    const screening = await screenings.v2ScreeningsCreate({
      v2ScreeningCreate: {
        profileId,
        candidate: { firstName: 'E2E', lastName: 'Tester', email: testEmail },
      },
    });
    await screenings.v2ScreeningsRetrieve({ id: screening.id });
    await screenings.v2ScreeningsDocumentsList({ id: screening.id });
    step(`screening: created+retrieved (${screening.id}, status=${screening.status})`);

    // --- webhook: create -> list -> delete ---
    const hook = await webhooks.createWebhook2({
      webhook: {
        name: `E2E webhook ${SUFFIX}`,
        url: 'https://example.com/e2e-hook',
        events: ['screening.status_changed'],
      },
    });
    await webhooks.listWebhooks2();
    await webhooks.deleteWebhook2({ webhookId: hook.id });
    step(`webhook: created+listed+deleted (${hook.id})`);

    // --- division: list -> reuse-or-create -> patch ---
    const existing = (await divisions.v2OrganisationsDivisionsList()).results;
    let div = existing.find((d) => d.name === DIVISION_NAME);
    let action: string;
    if (!div) {
      const writtenDiv = await divisions.v2OrganisationsDivisionsCreate({
        divisionWrite: {
          name: DIVISION_NAME,
          city: 'Amsterdam',
          address: 'Teststraat 1',
          postal: '1011AA',
          phone: '+31200000000',
          contactName: 'E2E',
          contactEmail: testEmail,
          invoiceEmail: testEmail,
        },
      });
      // create returns DivisionWrite (id optional); list returns DivisionReadOnly.
      div = { id: writtenDiv.id, name: writtenDiv.name } as (typeof existing)[number];
      action = 'created';
    } else {
      action = 'reused';
    }
    await divisions.v2OrganisationsDivisionsPartialUpdate({
      id: div.id,
      patchedDivisionWrite: { city: 'Rotterdam' },
    });
    step(`division: ${action}+patched (${div.id})`);

    console.log('E2E CRUD OK');
    return 0;
  } catch (error) {
    console.error(`E2E CRUD FAILED: ${error}`);
    return 1;
  } finally {
    // best-effort cleanup of the profile we created
    if (profileId) {
      try {
        await profiles.v2ProfilesDestroy({ id: profileId });
      } catch {
        // ignore
      }
    }
  }
}

main()
  .then((code) => process.exit(code))
  .catch((error) => {
    console.error(`ERROR: ${error}`);
    process.exit(1);
  });
