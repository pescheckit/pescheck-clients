#!/usr/bin/env bash
# Fetch the upstream Pescheck OpenAPI schema and snapshot it to spec/openapi.yaml.
set -euo pipefail

# Single source of truth for which environment the clients track: STAGING.
# CI regeneration (generate.yml) and the e2e tests (e2e.yml) both use staging,
# so local builds must too - otherwise a local regen silently drops staging-only
# fields. Override with PESCHECK_SCHEMA_URL for one-off builds (e.g. localhost).
SCHEMA_URL="${PESCHECK_SCHEMA_URL:-https://api-staging.pescheck.io/api/schema/}"
OUT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/spec"
OUT_FILE="${OUT_DIR}/openapi.yaml"

mkdir -p "${OUT_DIR}"
echo "Fetching ${SCHEMA_URL} -> ${OUT_FILE}"
curl -fsSL -m 30 "${SCHEMA_URL}" -o "${OUT_FILE}"
echo "Wrote $(wc -c < "${OUT_FILE}") bytes."

# Record where the snapshot came from so diffs/PRs show the environment.
# URL only - no timestamp, or every scheduled regen would show a diff.
echo "${SCHEMA_URL}" > "${OUT_DIR}/SOURCE"
