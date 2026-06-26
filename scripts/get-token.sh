#!/usr/bin/env bash
# Exchange OAuth2 client credentials for an access token and print it to stdout.
#
# Env:
#   PESCHECK_BASE_URL      e.g. https://api-staging.pescheck.io   (required)
#   PESCHECK_CLIENT_ID     OAuth2 application client id           (required)
#   PESCHECK_CLIENT_SECRET OAuth2 application client secret       (required)
#   PESCHECK_SCOPE         optional space-separated scopes (e.g. "read:api")
#
# Prints only the access_token on success; on failure prints details to stderr
# and exits non-zero.
set -euo pipefail

: "${PESCHECK_BASE_URL:?PESCHECK_BASE_URL is required}"
: "${PESCHECK_CLIENT_ID:?PESCHECK_CLIENT_ID is required}"
: "${PESCHECK_CLIENT_SECRET:?PESCHECK_CLIENT_SECRET is required}"

token_url="${PESCHECK_BASE_URL%/}/api/o/token/"

args=(
  --silent --show-error --max-time 30
  -X POST "${token_url}"
  -d grant_type=client_credentials
  -d "client_id=${PESCHECK_CLIENT_ID}"
  -d "client_secret=${PESCHECK_CLIENT_SECRET}"
)
[ -n "${PESCHECK_SCOPE:-}" ] && args+=(-d "scope=${PESCHECK_SCOPE}")

response="$(curl "${args[@]}")"

# Parse access_token with python3 (always present on CI runners).
token="$(printf '%s' "${response}" | python3 -c \
  'import json,sys; print(json.load(sys.stdin).get("access_token",""))' 2>/dev/null || true)"

if [ -z "${token}" ]; then
  echo "Failed to obtain access token from ${token_url}" >&2
  echo "Response: ${response}" >&2
  exit 1
fi

printf '%s' "${token}"
