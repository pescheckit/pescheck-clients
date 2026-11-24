#!/usr/bin/env bash
# Classify the API change between two versions of the spec with oasdiff.
#
#   scripts/api-diff.sh [base.yaml] [revision.yaml] [summary.md]
#
# Defaults: base = spec/openapi.v2.yaml as committed at HEAD, revision = the
# working-tree spec/openapi.v2.yaml, summary = api-changes.md. Writes a Markdown
# summary (used as the regen pull request body) and prints `breaking=true|false`.
# A breaking change means existing client code can stop working: release it as
# a new major version. Non-breaking changes (new endpoints, new optional
# parameters, new response fields or enum values) must not need code changes.
set -euo pipefail

VERSION="1.36.0" # pinned oasdiff release
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REVISION="${2:-${ROOT}/spec/openapi.v2.yaml}"
SUMMARY="${3:-${ROOT}/api-changes.md}"
WORK="$(mktemp -d)"
trap 'rm -rf "${WORK}"' EXIT

if [ -n "${1:-}" ]; then
  BASE="$1"
else
  BASE="${WORK}/base.yaml"
  git -C "${ROOT}" show HEAD:spec/openapi.v2.yaml >"${BASE}"
fi

# Download the pinned release binary once (checksum-verified) and cache it.
case "$(uname -s)-$(uname -m)" in
  Linux-x86_64) ASSET="oasdiff_${VERSION}_linux_amd64.tar.gz" ;;
  Linux-aarch64 | Linux-arm64) ASSET="oasdiff_${VERSION}_linux_arm64.tar.gz" ;;
  *) echo "api-diff: unsupported platform $(uname -s)-$(uname -m); run it on Linux or in CI" >&2; exit 1 ;;
esac
BIN_DIR="${ROOT}/node_modules/.cache/oasdiff-${VERSION}"
if [ ! -x "${BIN_DIR}/oasdiff" ]; then
  URL="https://github.com/oasdiff/oasdiff/releases/download/v${VERSION}"
  curl -fsSL "${URL}/${ASSET}" -o "${WORK}/${ASSET}"
  curl -fsSL "${URL}/checksums.txt" -o "${WORK}/checksums.txt"
  (cd "${WORK}" && grep " ${ASSET}\$" checksums.txt | sha256sum -c - >/dev/null)
  mkdir -p "${BIN_DIR}"
  tar -xzf "${WORK}/${ASSET}" -C "${BIN_DIR}" oasdiff
fi
OASDIFF="${BIN_DIR}/oasdiff"

BREAKING_COUNT="$("${OASDIFF}" breaking "${BASE}" "${REVISION}" --fail-on ERR --format text >"${WORK}/breaking.txt" 2>&1 && echo 0 || grep -c '^error' "${WORK}/breaking.txt" || true)"
BREAKING_COUNT="${BREAKING_COUNT:-0}"
"${OASDIFF}" changelog "${BASE}" "${REVISION}" --format markdown >"${WORK}/changelog.md" 2>&1 || true

{
  if [ "${BREAKING_COUNT}" != "0" ]; then
    echo "### :warning: Breaking API change (${BREAKING_COUNT})"
    echo
    echo "Existing client code can stop working. Release this as a **new major version** and mention it in the release notes."
  else
    echo "### Non-breaking API change"
    echo
    echo "Existing client code keeps working. This must not need changes in \`examples/\` or \`contract/\`; if it does, a generator setting is wrong."
  fi
  echo
  echo "<details><summary>All changes (oasdiff ${VERSION})</summary>"
  echo
  if [ -s "${WORK}/changelog.md" ]; then cat "${WORK}/changelog.md"; else echo "No changes."; fi
  echo
  echo "</details>"
} >"${SUMMARY}"

if [ "${BREAKING_COUNT}" != "0" ]; then echo "breaking=true"; else echo "breaking=false"; fi
