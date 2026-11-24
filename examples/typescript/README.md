# TypeScript end-to-end example

Minimal smoke test for the `@pescheckit/pescheck-client` TypeScript client
(typescript-fetch): lists the supported check types via `GET /api/v2/checks/`.

Get a client ID and secret by creating a test account at [dashboard-staging.pescheck.io](https://dashboard-staging.pescheck.io/) (enable the **API & MCP Access** add-on under *Settings → Add-ons*, then *Development → Add app*), and exchange them for an access token as shown in the [main README](../../README.md#quickstart).

## Environment

| Variable | Description |
| --- | --- |
| `PESCHECK_BASE_URL` | API base URL, e.g. `https://api.pescheck.io` |
| `PESCHECK_ACCESS_TOKEN` | OAuth2 / JWT bearer access token |

## Run

Requires Node.js 20+ (uses the global `fetch`).

```sh
# Build the generated client (produces clients/typescript/dist/).
cd clients/typescript && npm install && cd -

# Install and build this example (resolves the client via a file: dependency).
cd examples/typescript && npm install && npm run build && cd -

PESCHECK_BASE_URL="https://api.pescheck.io" \
PESCHECK_ACCESS_TOKEN="<oauth2-bearer-access-token>" \
  node examples/typescript/dist/list_check_types.js
```

On success it prints `E2E OK: <N> check types` and exits 0. On any error it
writes to stderr and exits non-zero.
