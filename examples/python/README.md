# Python end-to-end example

Minimal smoke test for the `pescheck` Python client: lists the supported check
types via `GET /api/v2/checks/`.

Get a client ID and secret by creating a test account at [dashboard-staging.pescheck.io](https://dashboard-staging.pescheck.io/) (enable the **API & MCP Access** add-on under *Settings → Add-ons*, then *Development → Add app*), and exchange them for an access token as shown in the [main README](../../README.md#quickstart).

## Run

```sh
pip install ./clients/python
export PESCHECK_BASE_URL="https://api-staging.pescheck.io"
export PESCHECK_ACCESS_TOKEN="<oauth2-bearer-access-token>"
python examples/python/list_check_types.py
```

On success it prints `E2E OK: <N> check types` and exits 0. On error it prints
to stderr and exits non-zero.
