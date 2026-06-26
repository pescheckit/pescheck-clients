#!/usr/bin/env python3
"""Minimal end-to-end example for the Pescheck Python client.

Lists the check types supported by the API (GET /api/v2/checks/) and prints a
single line on success. Intended to be run in CI as a smoke test.

Required environment variables:
  PESCHECK_BASE_URL       e.g. https://api-staging.pescheck.io
  PESCHECK_ACCESS_TOKEN   OAuth2 / JWT bearer access token
"""
import os
import sys

import pescheck
from pescheck.rest import ApiException


def main() -> int:
    base_url = os.environ.get("PESCHECK_BASE_URL")
    token = os.environ.get("PESCHECK_ACCESS_TOKEN")
    if not base_url or not token:
        print(
            "ERROR: PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set",
            file=sys.stderr,
        )
        return 2

    configuration = pescheck.Configuration(host=base_url)
    # This API authenticates with an OAuth2 / JWT bearer access token.
    configuration.access_token = token

    try:
        with pescheck.ApiClient(configuration) as api_client:
            api_instance = pescheck.ChecksApi(api_client)
            check_types = api_instance.v2_checks_list()
    except ApiException as e:
        print(f"ERROR: API call failed: {e}", file=sys.stderr)
        return 1
    except Exception as e:  # noqa: BLE001 - surface any failure for CI
        print(f"ERROR: {e}", file=sys.stderr)
        return 1

    print(f"E2E OK: {len(check_types)} check types")
    return 0


if __name__ == "__main__":
    sys.exit(main())
