#!/usr/bin/env bash
# Run a command against a mock Pescheck API generated from the committed spec.
#
#   scripts/with-mock.sh <command> [args...]
#
# Starts Prism (https://stoplight.io/open-source/prism) on spec/openapi.v2.yaml,
# waits until it answers, runs the command with PESCHECK_BASE_URL and
# PESCHECK_ACCESS_TOKEN pointing at it, and stops Prism afterwards. Prism
# validates every request against the spec (wrong path, missing field, bad type
# -> error) and answers with a response that matches the spec, so a client that
# builds the wrong request or cannot parse the documented response fails.
# No network, no credentials, no staging: the same result locally and in CI.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PORT="${PESCHECK_MOCK_PORT:-4010}"
SPEC="${ROOT}/spec/openapi.v2.yaml"
LOG="$(mktemp)"

"${ROOT}/node_modules/.bin/prism" mock --host 127.0.0.1 --port "${PORT}" --dynamic --seed 1 --errors "${SPEC}" >"${LOG}" 2>&1 &
PRISM_PID=$!
trap 'kill "${PRISM_PID}" 2>/dev/null || true; wait "${PRISM_PID}" 2>/dev/null || true; rm -f "${LOG}"' EXIT

for _ in $(seq 1 60); do
  if grep -q "Prism is listening" "${LOG}"; then break; fi
  if ! kill -0 "${PRISM_PID}" 2>/dev/null; then
    echo "Prism failed to start:" >&2
    cat "${LOG}" >&2
    exit 1
  fi
  sleep 0.5
done
grep -q "Prism is listening" "${LOG}" || { echo "Prism did not start in time" >&2; cat "${LOG}" >&2; exit 1; }

export PESCHECK_BASE_URL="http://127.0.0.1:${PORT}"
export PESCHECK_ACCESS_TOKEN="${PESCHECK_ACCESS_TOKEN:-mock-token}"
echo "Mock Pescheck API on ${PESCHECK_BASE_URL} (from spec/openapi.v2.yaml)"

set +e
"$@"
STATUS=$?
set -e
if [ "${STATUS}" -ne 0 ]; then
  echo "--- mock API log (last 40 lines) ---" >&2
  tail -40 "${LOG}" >&2
fi
exit "${STATUS}"
