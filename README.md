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

**1. Get API credentials.** Create a test account at [dashboard-staging.pescheck.io](https://dashboard-staging.pescheck.io/). In the dashboard, enable the **API & MCP Access** add-on (*Settings → Add-ons*), then create an app under *Development → Add app*. You get a client ID and a client secret.

**2. Get an access token** from the environment you want to use (staging while you integrate):

```bash
curl -X POST https://api-staging.pescheck.io/api/o/token/ \
  -d grant_type=client_credentials \
  -d client_id=YOUR_CLIENT_ID \
  -d client_secret=YOUR_CLIENT_SECRET
# {"access_token": "...", "token_type": "Bearer", "expires_in": 3600}
```

Copy the `access_token` (it is valid for one hour), and point the client at the same environment:

```bash
export PESCHECK_BASE_URL=https://api-staging.pescheck.io
export PESCHECK_ACCESS_TOKEN=paste-the-access-token-here
```

**3. Make your first call.** Python shown; every client's README (under [`clients/`](clients/), and on its package registry) has the same quickstart in its own language.

```python
import os
import pescheck

config = pescheck.Configuration() # host from PESCHECK_BASE_URL
config.access_token = os.environ["PESCHECK_ACCESS_TOKEN"]

with pescheck.ApiClient(config) as client:
    checks = pescheck.ChecksApi(client).v2_checks_list()
    print(f"{len(checks)} check types available")
```

**4. Go live.** Use your production credentials and request the token from `https://api.pescheck.io/api/o/token/`. Then unset `PESCHECK_BASE_URL`: the clients use production by default. Your code does not change.

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

> **The clients are generated from the staging schema.** The schema is fetched from `https://api-staging.pescheck.io/api/schema/` and committed in `spec/`, so the clients can include endpoints that are not on production yet. Before publishing a release, make sure production has caught up.

Everything in `clients/` is generated: do not edit it by hand. Fixes to the generated code go in `scripts/postprocess.mjs`, schema adjustments in `scripts/filter-spec.mjs`. Both run on every generation.

### Working on this repo

`spec/` is the source of truth. Everything except the daily regeneration works from the committed spec, so your local result is the same as CI.

```bash
npm install # once
make regenerate # regenerate clients/ from the committed spec/ (no network)
make contract # test every client against a mock API built from spec/
```

Change a script or config, run `make regenerate`, commit the regenerated `clients/` with your change, and run `make contract`. A pull request is green when its own changes are correct:

| Pull request check | What it verifies |
| --- | --- |
| Build clients | every client compiles |
| Generated code up to date | `clients/` is exactly what `make regenerate` produces |
| Contract tests | every client sends valid requests and parses the responses of a mock API built from `spec/` ([details](contract/README.md)) |

### When the API changes

1. `generate.yml` runs daily, and on `repository_dispatch: openapi-schema-changed` (send it from the API repository after a staging deploy). It fetches the staging schema and, when it changed, opens a **Regenerate clients** pull request with the new `spec/` and `clients/`, and starts the pull request checks on it.
2. The pull request is labelled **breaking-change** or **non-breaking** by [oasdiff](https://github.com/oasdiff/oasdiff), with a list of every change in its description. Run it yourself with `scripts/api-diff.sh`.
3. A non-breaking change must not need any change in `examples/` or `contract/`. A breaking change needs fixes there (push them to that pull request and merge promptly: the next regeneration replaces the branch) and a new major version.
4. Merge when green.

### Keeping additive API changes non-breaking

Adding things to the API must never break a customer's code. The generator is configured for that, and the contract tests check it:

- **New optional parameters:** every call takes its parameters by name or in one request object (Java builders, Rust `Params` structs with `..Default::default()`), never as a fixed argument list. C++ has no such option in its generator; there a new parameter changes the call.
- **New response fields:** all clients ignore fields they don't know (the mock adds some to every response).
- **New enum values in responses:** response enums are plain strings with the known values documented, so a new value can't crash a client. Request enums stay typed.

To regenerate from another environment: `PESCHECK_SCHEMA_URL=http://localhost/api/schema/ make build`. The output does not depend on the environment, only on the API.

### Live tests against staging

`e2e.yml` runs the tests in `examples/` against the real staging API every night, after every merge, and before publishing. It is not a pull request check, because staging changes on its own. When it fails, it opens a GitHub issue, which usually means the API changed. To run it locally:

```bash
export PESCHECK_BASE_URL=https://api-staging.pescheck.io
export PESCHECK_CLIENT_ID=... PESCHECK_CLIENT_SECRET=...
export PESCHECK_ACCESS_TOKEN=$(bash scripts/get-token.sh)
pip install -e clients/python
cd examples/python && python -m unittest test_crud_integration -v
```

### Releasing

`publish.yml` publishes every client to its registry when a `vX.Y.Z` release is created, after the live tests pass.
