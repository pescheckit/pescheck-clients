// Contract test: the TypeScript client against the mock API (see contract/README.md).
import { describe, expect, it } from 'vitest';
import {
  AddOnsApi,
  ChecksApi,
  Configuration,
  DivisionsApi,
  ProfilesApi,
  ResponseError,
  ScreeningsApi,
  V2ProfileCheckCheckTypeEnum,
  WebhookEventsEnum,
  WebhooksApi,
} from '@pescheckit/pescheck-client';

const ID = '3fa85f64-5717-4562-b3fc-2c963f66afa6';
const EMAIL = 'contract@example.invalid';

// Host comes from PESCHECK_BASE_URL (the client's default base path).
const config = new Configuration({ accessToken: process.env.PESCHECK_ACCESS_TOKEN });

describe('contract', () => {
  it('checks', async () => {
    const checks = new ChecksApi(config);
    expect(Array.isArray(await checks.v2ChecksList())).toBe(true);
    expect(await checks.v2ChecksRetrieve({ checkType: 'id2check' })).toBeTruthy();
  });

  it('add-ons', async () => {
    const addons = new AddOnsApi(config);
    expect(Array.isArray(await addons.v2OrganisationsAddonsList())).toBe(true);
    expect(await addons.v2OrganisationsAddonsRetrieve({ addon: 'api_access' })).toBeTruthy();
  });

  it('profiles', async () => {
    const profiles = new ProfilesApi(config);
    expect(
      await profiles.v2ProfilesCreate({
        v2ProfileCreate: {
          name: 'Contract test',
          checks: [{ checkType: V2ProfileCheckCheckTypeEnum.Id2check }],
        },
      }),
    ).toBeTruthy();
    expect(await profiles.v2ProfilesList()).toBeTruthy();
    expect(await profiles.v2ProfilesRetrieve({ id: ID })).toBeTruthy();
    expect(
      await profiles.v2ProfilesPartialUpdate({
        id: ID,
        patchedV2ProfilePartialUpdate: { description: 'updated' },
      }),
    ).toBeTruthy();
  });

  it('screenings', async () => {
    const screenings = new ScreeningsApi(config);
    expect(
      await screenings.v2ScreeningsCreate({
        v2ScreeningCreate: {
          profileId: ID,
          candidate: { firstName: 'Contract', lastName: 'Test', email: EMAIL },
        },
      }),
    ).toBeTruthy();
    expect(await screenings.v2ScreeningsList()).toBeTruthy();
    expect(await screenings.v2ScreeningsRetrieve({ id: ID })).toBeTruthy();
    expect(Array.isArray(await screenings.v2ScreeningsDocumentsList({ id: ID }))).toBe(true);
  });

  it('webhooks', async () => {
    const webhooks = new WebhooksApi(config);
    expect(
      await webhooks.createWebhook2({
        webhook: {
          name: 'Contract test',
          url: 'https://example.invalid/hook',
          events: [WebhookEventsEnum.ScreeningStatusChanged],
        },
      }),
    ).toBeTruthy();
    expect(Array.isArray(await webhooks.listWebhooks2())).toBe(true);
  });

  it('divisions', async () => {
    const divisions = new DivisionsApi(config);
    expect(
      await divisions.v2OrganisationsDivisionsCreate({
        divisionWrite: {
          name: 'Contract test',
          city: 'Utrecht',
          address: 'Teststraat 1',
          postal: '1234AB',
          phone: '0301234567',
          contactName: 'Contract Test',
          contactEmail: EMAIL,
          invoiceEmail: EMAIL,
        },
      }),
    ).toBeTruthy();
    expect(await divisions.v2OrganisationsDivisionsList()).toBeTruthy();
  });

  it('rejects a request without a token', async () => {
    const error = await new ProfilesApi(new Configuration()).v2ProfilesList().catch((e) => e);
    expect(error).toBeInstanceOf(ResponseError);
    expect((error as ResponseError).response.status).toBe(401);
  });
});
