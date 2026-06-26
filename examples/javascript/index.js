// Minimal end-to-end example for the generated Pescheck JavaScript client.
//
// Lists the check types the API supports (GET /api/v2/checks/) and prints a
// one-line result, so it can be used as a smoke test in CI.
//
// Required environment variables:
//   PESCHECK_BASE_URL      - API base URL, e.g. https://api.pescheck.io
//   PESCHECK_ACCESS_TOKEN  - OAuth2 access token (client credentials flow)

const PescheckApi = require('@pescheckit/api-client-js');

const baseUrl = process.env.PESCHECK_BASE_URL;
const accessToken = process.env.PESCHECK_ACCESS_TOKEN;

if (!baseUrl || !accessToken) {
  console.error('Missing PESCHECK_BASE_URL and/or PESCHECK_ACCESS_TOKEN environment variables.');
  process.exit(1);
}

// Configure the shared default client: base path + OAuth2 bearer access token.
const defaultClient = PescheckApi.ApiClient.instance;
defaultClient.basePath = baseUrl;
defaultClient.authentications['oauth2'].accessToken = accessToken;

const checksApi = new PescheckApi.ChecksApi();

// usePromises is enabled in the generated client, so v2ChecksList returns a Promise
// resolving to a flat array of V2CheckInfo (this endpoint is not paginated).
checksApi.v2ChecksList()
  .then((data) => {
    console.log(`E2E OK: ${data.length} check types`);
    process.exit(0);
  })
  .catch((error) => {
    console.error('E2E FAILED:', error && error.message ? error.message : error);
    process.exit(1);
  });
