# Pescheck API clients

Official client libraries for the [Pescheck API](https://api.pescheck.io/api/schema/swagger-ui/), available in 10 languages. Use them to run background screenings from your own software: create profiles, invite candidates, follow screening status and receive webhooks.

## Install

| Language | Install | Package |
| --- | --- | --- |
| Python | `pip install pescheck-client` | [PyPI](https://pypi.org/project/pescheck-client/) |
| TypeScript | `npm install @pescheckit/pescheck-client` | npm |
| JavaScript | `npm install @pescheckit/pescheck-client-js` | npm |
| Java | `io.pescheck:pescheck-client` | GitHub Packages, see [`clients/java`](clients/java/README.md) |
| C# | `dotnet add package Pescheck.Client` | NuGet |
| PHP | `composer require pescheckit/pescheck-client` | Packagist |
| Go | `go get github.com/pescheckit/pescheck-clients/clients/go` | Go modules |
| Ruby | `gem install pescheck-client` | RubyGems |
| Rust | `cargo add pescheck-client` | crates.io |
| C++ | Source zip on the [Releases](https://github.com/pescheckit/pescheck-clients/releases) page | GitHub Releases |

Each language has its own README under [`clients/`](clients/) with every endpoint and model.

## Quickstart

**1. Get API credentials.** Ask your Pescheck contact for an OAuth2 client ID and secret. Staging and production use separate credentials.

**2. Choose the environment.** All clients read the API address from `PESCHECK_BASE_URL`. If it is not set, they use production.

```bash
export PESCHECK_BASE_URL=https://api-staging.pescheck.io
```

**3. Get an access token.**

```bash
curl -X POST "$PESCHECK_BASE_URL/api/o/token/" \
  -d grant_type=client_credentials \
  -d client_id=YOUR_CLIENT_ID \
  -d client_secret=YOUR_CLIENT_SECRET
# {"access_token": "...", "token_type": "Bearer", "expires_in": 3600}
```

**4. Call the API.** Python shown; the other languages work the same way.

```python
import pescheck
from pescheck.api.checks_api import ChecksApi

cfg = pescheck.Configuration() # uses PESCHECK_BASE_URL
cfg.access_token = "YOUR_ACCESS_TOKEN"
with pescheck.ApiClient(cfg) as client:
    print(ChecksApi(client).v2_checks_list())
```

## Environments

| Environment | `PESCHECK_BASE_URL` |
| --- | --- |
| Production (default) | not set, or `https://api.pescheck.io` |
| Staging | `https://api-staging.pescheck.io` |

Build and test your integration on staging, then go live by unsetting `PESCHECK_BASE_URL` (or setting it to production). No code change is needed. Always request the token from the same environment you call.

A host set in code (for example Python `Configuration(host=...)` or Java `setBasePath(...)`) takes precedence over the variable.

## Authentication

- **OAuth2 client credentials** (recommended): server-to-server access for your organisation, as in the quickstart.
- **JWT bearer**: access as a specific user. Get a token with `POST $PESCHECK_BASE_URL/api/jwt/` and the user's email and password, then use the returned `access` token the same way.

The clients do not fetch tokens for you (except Java, which can). Request a token first, then set it on the client.

## Examples

Complete, runnable examples for every language are in [`examples/`](examples/). They go through the full lifecycle: checks, profiles, screenings, webhooks and divisions.

---

## For maintainers

> **The clients are generated from the staging schema.** `scripts/fetch-spec.sh` fetches `https://api-staging.pescheck.io/api/schema/`, so the clients can include endpoints that are not on production yet. Before publishing a release, make sure production has caught up. The URL used is recorded in `spec/SOURCE`.

Everything in `clients/` is generated: do not edit it by hand. Fixes to the generated code go in `scripts/postprocess.mjs`, and schema adjustments go in `scripts/filter-spec.mjs`. Both run on every regeneration.

```bash
npm install # once
make build # fetch schema, filter to v2, generate all 10 clients
PESCHECK_SCHEMA_URL=http://localhost/api/schema/ make build # generate from a local API
```

**Automation**

- `generate.yml` runs daily (and on `repository_dispatch: openapi-schema-changed`). When the schema changed, it opens or updates a pull request and starts the build and e2e checks on it.
- `e2e.yml` runs the integration tests in `examples/` against staging every day, and gates publishing.
- `build.yml` builds every client on pull requests.
- `publish.yml` publishes each client to its registry when a `vX.Y.Z` release is created.

**Run the integration tests locally**

```bash
export PESCHECK_BASE_URL=https://api-staging.pescheck.io
export PESCHECK_CLIENT_ID=... PESCHECK_CLIENT_SECRET=...
export PESCHECK_ACCESS_TOKEN=$(bash scripts/get-token.sh)
pip install -e clients/python
cd examples/python && python -m unittest test_crud_integration -v
```

The tests skip when `PESCHECK_ACCESS_TOKEN` is not set.
