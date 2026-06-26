# Python end-to-end example

Minimal smoke test for the `pescheck` Python client: lists the supported check
types via `GET /api/v2/checks/`.

## Run

```sh
pip install ./clients/python
export PESCHECK_BASE_URL="https://api-staging.pescheck.io"
export PESCHECK_ACCESS_TOKEN="<oauth2-bearer-access-token>"
python examples/python/list_check_types.py
```

On success it prints `E2E OK: <N> check types` and exits 0. On error it prints
to stderr and exits non-zero.
