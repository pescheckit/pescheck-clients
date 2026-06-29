# Pescheck Clients

The **official Pescheck API client libraries** for the
[Pescheck API](https://api.pescheck.io/api/schema/swagger-ui/), generated from the OpenAPI schema
for the **10 most popular programming languages**. These are the official, supported SDKs;
any other Pescheck clients are unofficial.

All clients are generated with [OpenAPI Generator](https://openapi-generator.tech) `7.23.0`
from a v2-only slice of the schema (`spec/openapi.v2.yaml`). Regenerate everything with a single
command whenever the API changes.

## Clients

| Language   | Path                  | Generator         | Package                          | Registry        |
|------------|-----------------------|-------------------|----------------------------------|-----------------|
| Python     | `clients/python`      | `python`          | `pescheck-client`                | PyPI            |
| JavaScript | `clients/javascript`  | `javascript`      | `@pescheckit/pescheck-client-js`            | npm             |
| TypeScript | `clients/typescript`  | `typescript-fetch`| `@pescheckit/pescheck-client`           | npm             |
| Java       | `clients/java`        | `java`            | `io.pescheck:pescheck-client`| Maven / GH Pkgs |
| C#         | `clients/csharp`      | `csharp`          | `Pescheck.Client`                | NuGet           |
| C++        | `clients/cpp`         | `cpp-restsdk`     | `PescheckApi`                    | GitHub Release  |
| Go         | `clients/go`          | `go`              | `github.com/pescheckit/pescheck-clients/clients/go` | Go modules (git tag) |
| PHP        | `clients/php`         | `php`             | `pescheckit/pescheck-client`     | Packagist       |
| Rust       | `clients/rust`        | `rust`            | `pescheck-client`                | crates.io       |
| Ruby       | `clients/ruby`        | `ruby`            | `pescheck-client`                | RubyGems        |

Each client directory has its own generated `README.md` with full install and per-endpoint usage.

## Regenerating

```bash
npm install          # one-time: installs openapi-generator-cli + js-yaml
make build           # fetch schema -> filter to v2 -> generate all 10 clients
# or individually:
make fetch           # curl the upstream schema into spec/openapi.yaml
make filter          # write the v2-only spec/openapi.v2.yaml
make generate        # run openapi-generator batch over config/*.yaml
```

The schema URL defaults to production; override with `PESCHECK_SCHEMA_URL` (e.g. a localhost
or staging instance). Per-language settings live in `config/<lang>.yaml`.

## Authentication

The API supports **OAuth2 client-credentials** (recommended for service clients) and
**JWT bearer** (for user-scoped access). Generated clients accept a bearer token but do not run
the OAuth2 token exchange themselves - obtain a token first, then set it on the client.

### OAuth2 client credentials

```bash
curl -X POST https://api.pescheck.io/api/o/token/ \
  -d grant_type=client_credentials \
  -d client_id=YOUR_CLIENT_ID \
  -d client_secret=YOUR_CLIENT_SECRET
# -> { "access_token": "…", "token_type": "Bearer", "expires_in": 3600, … }
```

Use the returned `access_token` as the bearer token. Example (Python):

```python
import pescheck
from pescheck.api.checks_api import ChecksApi

cfg = pescheck.Configuration(host="https://api.pescheck.io")
cfg.access_token = "YOUR_ACCESS_TOKEN"   # from the token endpoint above
with pescheck.ApiClient(cfg) as client:
    print(ChecksApi(client).v2_checks_list())
```

### JWT bearer (user-scoped)

```bash
curl -X POST https://api.pescheck.io/api/jwt/ \
  -H "Content-Type: application/json" \
  -d '{"email":"you@example.com","password":"…"}'
# -> { "access": "<jwt>", "refresh": "<jwt>" }
```

Set the `access` JWT as the client's bearer token the same way.

## Servers

`https://api.pescheck.io` (production) and `https://api-staging.pescheck.io` (staging).
Point a client at staging by setting its base URL / host in the client configuration.

## CI

- `.github/workflows/generate.yml` - scheduled + manual regeneration; opens a PR on changes.
- `.github/workflows/publish.yml` - on a release tag (`vX.Y.Z`), publishes each client to its
  registry. See the workflow header for the required secrets and per-language notes (Maven Central signing, Go tag).
