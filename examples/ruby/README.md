# Ruby end-to-end example

Minimal end-to-end check that the generated `pescheck` Ruby gem can authenticate
and list check types via `GET /api/v2/checks/`.

Get a client ID and secret by creating a test account at [dashboard-staging.pescheck.io](https://dashboard-staging.pescheck.io/) (enable the **API & MCP Access** add-on under *Settings → Add-ons*, then *Development → Add app*), and exchange them for an access token as shown in the [main README](../../README.md#quickstart).

## Environment

| Variable | Description |
| --- | --- |
| `PESCHECK_BASE_URL` | API base URL, e.g. `https://api.pescheck.io` |
| `PESCHECK_ACCESS_TOKEN` | OAuth2 / JWT bearer access token |

## Run

```shell
# Build and install the generated gem (pulls runtime deps: faraday, etc.)
cd clients/ruby
gem build pescheck-client.gemspec
gem install ./pescheck-2.0.0.gem
cd -

PESCHECK_BASE_URL=https://api.pescheck.io \
PESCHECK_ACCESS_TOKEN=xxxxx \
  ruby examples/ruby/list_check_types.rb
```

On success it prints `E2E OK: <N> check types` and exits 0. On any error it
writes to stderr and exits non-zero.
