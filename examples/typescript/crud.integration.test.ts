/**
 * Integration test for the Pescheck TypeScript client.
 *
 * NO MOCKS — exercises the real Pescheck v2 API using an OAuth2 bearer token
 * supplied via PESCHECK_ACCESS_TOKEN. Mirrors examples/typescript/crud_lifecycle.ts:
 *
 *   checks      list -> retrieve one
 *   profiles    create -> retrieve -> patch -> (appears in list) -> delete
 *   screenings  create (needs a profile + candidate) -> retrieve -> list documents
 *   webhooks    create -> list -> delete
 *   divisions   list -> reuse-or-create by name -> patch
 *
 * The suite is SKIPPED (green) when PESCHECK_ACCESS_TOKEN is unset, so it is
 * safe to run in CI without credentials.
 *
 * Environment variables:
 *   PESCHECK_BASE_URL      default https://api-staging.pescheck.io
 *   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token (required to run)
 *   PESCHECK_TEST_EMAIL    candidate email (default noreply@pescheck.nl)
 */
import { randomBytes } from 'crypto';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import {
  Configuration,
  ChecksApi,
  ProfilesApi,
  ScreeningsApi,
  WebhooksApi,
  DivisionsApi,
  V2ProfileCheckCheckTypeEnum,
} from '@pescheckit/pescheck-client';

const basePath = process.env.PESCHECK_BASE_URL || 'https://api-staging.pescheck.io';
const accessToken = process.env.PESCHECK_ACCESS_TOKEN;
const testEmail = process.env.PESCHECK_TEST_EMAIL || 'noreply@pescheck.nl';

// Profile/webhook names must be unique per run: the API soft-deletes and returns
// a 500 on a duplicate name, so we suffix the names (and the webhook URL). The
// division has no delete endpoint, so we reuse a fixed-named one instead.
const SUFFIX = randomBytes(4).toString('hex');
const DIVISION_NAME = 'E2E CI division';

// 60s timeout per test — these are real network round-trips.
const TIMEOUT = 60_000;

// The accessToken config sets the OAuth2 / JWT bearer Authorization header.
const config = new Configuration({ basePath, accessToken });
const checks = new ChecksApi(config);
const profiles = new ProfilesApi(config);
const screenings = new ScreeningsApi(config);
const webhooks = new WebhooksApi(config);
const divisions = new DivisionsApi(config);

// Shared state across the ordered lifecycle steps.
let checkType: string;
let profileId: string | null = null;

describe.skipIf(!accessToken)('Pescheck TypeScript client CRUD lifecycle', () => {
  afterAll(async () => {
    // best-effort cleanup of the profile we created
    if (profileId) {
      try {
        await profiles.v2ProfilesDestroy({ id: profileId });
      } catch {
        // ignore
      }
    }
  });

  it(
    'checks: lists types and retrieves one',
    async () => {
      const checkList = await checks.v2ChecksList();
      expect(checkList.length).toBeGreaterThan(0);
      checkType = checkList[0].checkType;
      const retrieved = await checks.v2ChecksRetrieve({ checkType });
      expect(retrieved.checkType).toBe(checkType);
    },
    TIMEOUT,
  );

  it(
    'profiles: create -> retrieve -> patch -> appears in list',
    async () => {
      const created = await profiles.v2ProfilesCreate({
        v2ProfileCreate: {
          name: `E2E test profile ${SUFFIX}`,
          description: 'created by e2e',
          checks: [{ checkType: checkType as V2ProfileCheckCheckTypeEnum }],
        },
      });
      expect(created.id).toBeTruthy();
      profileId = created.id;

      const retrieved = await profiles.v2ProfilesRetrieve({ id: profileId });
      expect(retrieved.id).toBe(profileId);

      const patched = await profiles.v2ProfilesPartialUpdate({
        id: profileId,
        patchedV2ProfilePartialUpdate: { description: 'updated by e2e' },
      });
      expect(patched.description).toBe('updated by e2e');

      const list = await profiles.v2ProfilesList();
      const ids = list.results.map((p) => p.id);
      expect(ids).toContain(profileId);
    },
    TIMEOUT,
  );

  it(
    'screenings: create -> retrieve -> list documents',
    async () => {
      expect(profileId).toBeTruthy();
      const screening = await screenings.v2ScreeningsCreate({
        v2ScreeningCreate: {
          profileId: profileId!,
          candidate: { firstName: 'E2E', lastName: 'Tester', email: testEmail },
        },
      });
      expect(screening.id).toBeTruthy();
      expect(screening.status).toBeTruthy();

      const retrieved = await screenings.v2ScreeningsRetrieve({ id: screening.id });
      expect(retrieved.id).toBe(screening.id);

      // documents list should resolve (may be empty for a fresh screening)
      await expect(
        screenings.v2ScreeningsDocumentsList({ id: screening.id }),
      ).resolves.toBeDefined();
    },
    TIMEOUT,
  );

  it(
    'webhooks: create -> list -> delete',
    async () => {
      const hook = await webhooks.createWebhook2({
        webhook: {
          name: `E2E webhook ${SUFFIX}`,
          url: `https://example.com/e2e-hook-${SUFFIX}`,
          events: ['screening.status_changed'],
        },
      });
      expect(hook.id).toBeTruthy();

      const list = await webhooks.listWebhooks2();
      const ids = list.map((w) => w.id);
      expect(ids).toContain(hook.id);

      await webhooks.deleteWebhook2({ webhookId: hook.id });
    },
    TIMEOUT,
  );

  it(
    'divisions: list -> reuse-or-create -> patch',
    async () => {
      const existing = (await divisions.v2OrganisationsDivisionsList()).results;
      let div = existing.find((d) => d.name === DIVISION_NAME);
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
      }
      expect(div.id).toBeTruthy();

      const patched = await divisions.v2OrganisationsDivisionsPartialUpdate({
        id: div.id,
        patchedDivisionWrite: { city: 'Rotterdam' },
      });
      expect(patched).toBeDefined();
    },
    TIMEOUT,
  );
});
