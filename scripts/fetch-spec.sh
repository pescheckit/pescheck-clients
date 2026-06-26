#!/usr/bin/env bash
# Fetch the upstream Pescheck OpenAPI schema and snapshot it to spec/openapi.yaml.
set -euo pipefail

SCHEMA_URL="${PESCHECK_SCHEMA_URL:-https://api.pescheck.io/api/schema/}"
OUT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/spec"
OUT_FILE="${OUT_DIR}/openapi.yaml"

mkdir -p "${OUT_DIR}"
echo "Fetching ${SCHEMA_URL} -> ${OUT_FILE}"
curl -fsSL -m 30 "${SCHEMA_URL}" -o "${OUT_FILE}"
echo "Wrote $(wc -c < "${OUT_FILE}") bytes."
