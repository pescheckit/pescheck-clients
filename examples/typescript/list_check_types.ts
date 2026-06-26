/**
 * Minimal end-to-end example for the Pescheck TypeScript client.
 *
 * Lists the check types supported by the API (GET /api/v2/checks/) and prints a
 * single line on success. Intended to be run in CI as a smoke test.
 *
 * Required environment variables:
 *   PESCHECK_BASE_URL       e.g. https://api-staging.pescheck.io
 *   PESCHECK_ACCESS_TOKEN   OAuth2 / JWT bearer access token
 */
import { Configuration, ChecksApi } from '@pescheckit/api-client';

async function main(): Promise<number> {
  const basePath = process.env.PESCHECK_BASE_URL;
  const accessToken = process.env.PESCHECK_ACCESS_TOKEN;
  if (!basePath || !accessToken) {
    console.error('ERROR: PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set');
    return 2;
  }

  // The accessToken config sets the OAuth2 / JWT bearer Authorization header.
  const config = new Configuration({ basePath, accessToken });
  const api = new ChecksApi(config);

  try {
    const checkTypes = await api.v2ChecksList();
    console.log(`E2E OK: ${checkTypes.length} check types`);
    return 0;
  } catch (error) {
    console.error(`ERROR: API call failed: ${error}`);
    return 1;
  }
}

main()
  .then((code) => process.exit(code))
  .catch((error) => {
    console.error(`ERROR: ${error}`);
    process.exit(1);
  });
