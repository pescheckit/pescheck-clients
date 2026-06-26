# TypeScript end-to-end example

Minimal smoke test for the `@pescheckit/api-client` TypeScript client
(typescript-fetch): lists the supported check types via `GET /api/v2/checks/`.

## Environment

| Variable | Description |
| -------- | ----------- |
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
