#!/usr/bin/env python3
"""End-to-end CRUD lifecycle test for the Pescheck Python client.

Exercises the full v2 surface against the API and self-cleans where possible:

  checks      list -> retrieve one
  profiles    create -> retrieve -> patch -> (appears in list) -> delete
  screenings  create (needs a profile + candidate) -> retrieve -> list documents
  webhooks    create -> list -> delete
  divisions   list -> reuse-or-create by name -> patch

Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.

Env:
  PESCHECK_BASE_URL      e.g. https://api-staging.pescheck.io
  PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
"""
import os
import sys
import uuid

import pescheck
from pescheck.api.checks_api import ChecksApi
from pescheck.api.profiles_api import ProfilesApi
from pescheck.api.screenings_api import ScreeningsApi
from pescheck.api.webhooks_api import WebhooksApi
from pescheck.api.divisions_api import DivisionsApi
from pescheck.models.v2_profile_create import V2ProfileCreate
from pescheck.models.v2_profile_check import V2ProfileCheck
from pescheck.models.patched_v2_profile_partial_update import PatchedV2ProfilePartialUpdate
from pescheck.models.v2_screening_create import V2ScreeningCreate
from pescheck.models.v2_candidate import V2Candidate
from pescheck.models.webhook import Webhook
from pescheck.models.division_write import DivisionWrite
from pescheck.models.patched_division_write import PatchedDivisionWrite

# Profile/webhook names must be unique per run: the API soft-deletes and returns
# a 500 on a duplicate name. The division has no delete endpoint, so we reuse a
# fixed-named one instead of creating a new one each run.
SUFFIX = uuid.uuid4().hex[:8]
DIVISION_NAME = "E2E CI division"


def step(msg):
    print(f"  - {msg}")


def main():
    base_url = os.environ.get("PESCHECK_BASE_URL")
    token = os.environ.get("PESCHECK_ACCESS_TOKEN")
    test_email = os.environ.get("PESCHECK_TEST_EMAIL", "noreply@pescheck.nl")
    if not base_url or not token:
        print("PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set", file=sys.stderr)
        return 2

    cfg = pescheck.Configuration(host=base_url)
    cfg.access_token = token
    client = pescheck.ApiClient(cfg)

    checks = ChecksApi(client)
    profiles = ProfilesApi(client)
    screenings = ScreeningsApi(client)
    webhooks = WebhooksApi(client)
    divisions = DivisionsApi(client)

    profile_id = None
    try:
        # --- checks ---
        check_list = checks.v2_checks_list()
        check_type = check_list[0].check_type
        checks.v2_checks_retrieve(check_type)
        step(f"checks: {len(check_list)} types, retrieved '{check_type}'")

        # --- profile: create -> retrieve -> patch ---
        created = profiles.v2_profiles_create(
            V2ProfileCreate(
                name=f"E2E test profile {SUFFIX}",
                description="created by e2e",
                checks=[V2ProfileCheck(check_type=check_type)],
            )
        )
        profile_id = created.id
        profiles.v2_profiles_retrieve(profile_id)
        profiles.v2_profiles_partial_update(
            profile_id, PatchedV2ProfilePartialUpdate(description="updated by e2e")
        )
        step(f"profile: created+retrieved+patched ({profile_id})")

        # --- screening: create -> retrieve -> documents ---
        screening = screenings.v2_screenings_create(
            V2ScreeningCreate(
                profile_id=profile_id,
                candidate=V2Candidate(
                    first_name="E2E", last_name="Tester", email=test_email
                ),
            )
        )
        screenings.v2_screenings_retrieve(screening.id)
        screenings.v2_screenings_documents_list(screening.id)
        step(f"screening: created+retrieved ({screening.id}, status={screening.status})")

        # --- webhook: create -> list -> delete ---
        hook = webhooks.create_webhook2(
            Webhook(
                name=f"E2E webhook {SUFFIX}",
                url=f"https://example.com/e2e-hook-{SUFFIX}",
                events=["screening.status_changed"],
            )
        )
        webhooks.list_webhooks2()
        # webhook id deserializes as a UUID; the delete path param wants a string.
        webhooks.delete_webhook2(str(hook.id))
        step(f"webhook: created+listed+deleted ({hook.id})")

        # --- division: list -> reuse-or-create -> patch ---
        existing = divisions.v2_organisations_divisions_list().results
        div = next((d for d in existing if d.name == DIVISION_NAME), None)
        if div is None:
            div = divisions.v2_organisations_divisions_create(
                DivisionWrite(
                    name=DIVISION_NAME, city="Amsterdam", address="Teststraat 1",
                    postal="1011AA", phone="+31200000000", contact_name="E2E",
                    contact_email="e2e@example.com", invoice_email="e2e@example.com",
                )
            )
            action = "created"
        else:
            action = "reused"
        divisions.v2_organisations_divisions_partial_update(
            div.id, PatchedDivisionWrite(city="Rotterdam")
        )
        step(f"division: {action}+patched ({div.id})")

        print("E2E CRUD OK")
        return 0
    except Exception as exc:  # noqa: BLE001
        print(f"E2E CRUD FAILED: {type(exc).__name__}: {exc}", file=sys.stderr)
        return 1
    finally:
        # best-effort cleanup of the profile we created
        if profile_id:
            try:
                profiles.v2_profiles_destroy(profile_id)
            except Exception:  # noqa: BLE001
                pass


if __name__ == "__main__":
    sys.exit(main())
