#!/usr/bin/env python3
"""Integration test for the Pescheck Python client.

NO MOCKS: this hits the real Pescheck API using an OAuth2 bearer access token
read from the environment. It mirrors the validated lifecycle in
``crud_lifecycle.py`` but expresses it as a unittest with real assertions.

The whole test is skipped (green) when PESCHECK_ACCESS_TOKEN is unset, so it is
safe to run in CI without credentials.

Env:
  PESCHECK_BASE_URL      default https://api-staging.pescheck.io
  PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token (required to run)
  PESCHECK_TEST_EMAIL    default noreply@pescheck.nl
"""
import os
import unittest
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

# The division API has no delete endpoint, so we reuse a fixed-named division
# instead of creating a fresh one on every run.
DIVISION_NAME = "E2E CI division"


@unittest.skipUnless(
    os.environ.get("PESCHECK_ACCESS_TOKEN"), "PESCHECK_ACCESS_TOKEN not set"
)
class CrudIntegrationTest(unittest.TestCase):
    """Full CRUD lifecycle against the live Pescheck API."""

    def setUp(self):
        base_url = os.environ.get(
            "PESCHECK_BASE_URL", "https://api-staging.pescheck.io"
        )
        self.test_email = os.environ.get("PESCHECK_TEST_EMAIL", "noreply@pescheck.nl")
        # Profile/webhook names must be unique per run: the API soft-deletes and
        # returns a 500 on a duplicate name, so suffix everything with a uuid.
        self.suffix = uuid.uuid4().hex[:8]

        cfg = pescheck.Configuration(host=base_url)
        cfg.access_token = os.environ["PESCHECK_ACCESS_TOKEN"]
        self.client = pescheck.ApiClient(cfg)

        self.checks = ChecksApi(self.client)
        self.profiles = ProfilesApi(self.client)
        self.screenings = ScreeningsApi(self.client)
        self.webhooks = WebhooksApi(self.client)
        self.divisions = DivisionsApi(self.client)

        self.profile_id = None

    def tearDown(self):
        # Best-effort cleanup of the profile created during the test.
        if self.profile_id:
            try:
                self.profiles.v2_profiles_destroy(self.profile_id)
            except Exception:  # noqa: BLE001
                pass

    def test_full_lifecycle(self):
        # --- checks: list -> retrieve one ---
        check_list = self.checks.v2_checks_list()
        self.assertTrue(len(check_list) > 0, "expected at least one check type")
        check_type = check_list[0].check_type
        retrieved_check = self.checks.v2_checks_retrieve(check_type)
        self.assertEqual(retrieved_check.check_type, check_type)

        # --- profile: create -> retrieve -> patch -> appears in list -> delete ---
        created = self.profiles.v2_profiles_create(
            V2ProfileCreate(
                name=f"E2E test profile {self.suffix}",
                description="created by e2e",
                checks=[V2ProfileCheck(check_type=check_type)],
            )
        )
        self.profile_id = created.id
        self.assertIsNotNone(self.profile_id)

        fetched = self.profiles.v2_profiles_retrieve(self.profile_id)
        self.assertEqual(fetched.id, self.profile_id)

        patched = self.profiles.v2_profiles_partial_update(
            self.profile_id,
            PatchedV2ProfilePartialUpdate(description="updated by e2e"),
        )
        self.assertEqual(patched.description, "updated by e2e")

        profile_list = self.profiles.v2_profiles_list()
        # The list payload may be a bare list or a paginated wrapper; normalise.
        rows = getattr(profile_list, "results", profile_list)
        self.assertIn(self.profile_id, [p.id for p in rows])

        # --- screening: create -> retrieve -> documents ---
        screening = self.screenings.v2_screenings_create(
            V2ScreeningCreate(
                profile_id=self.profile_id,
                candidate=V2Candidate(
                    first_name="E2E", last_name="Tester", email=self.test_email
                ),
            )
        )
        self.assertIsNotNone(screening.id)
        self.assertTrue(screening.status, "screening should have a status")

        fetched_screening = self.screenings.v2_screenings_retrieve(screening.id)
        self.assertEqual(fetched_screening.id, screening.id)

        # documents list should at least return without error
        self.screenings.v2_screenings_documents_list(screening.id)

        # --- webhook: create -> list -> delete ---
        hook = self.webhooks.create_webhook2(
            Webhook(
                name=f"E2E webhook {self.suffix}",
                url=f"https://example.com/e2e-hook-{self.suffix}",
                events=["screening.status_changed"],
            )
        )
        self.assertIsNotNone(hook.id)

        hook_list = self.webhooks.list_webhooks2()
        hook_rows = getattr(hook_list, "results", hook_list)
        self.assertIn(str(hook.id), [str(h.id) for h in hook_rows])

        # webhook id deserializes as a UUID; the delete path param wants a string.
        self.webhooks.delete_webhook2(str(hook.id))

        # --- division: list -> reuse-or-create by name -> patch ---
        existing = self.divisions.v2_organisations_divisions_list().results
        div = next((d for d in existing if d.name == DIVISION_NAME), None)
        if div is None:
            div = self.divisions.v2_organisations_divisions_create(
                DivisionWrite(
                    name=DIVISION_NAME,
                    city="Amsterdam",
                    address="Teststraat 1",
                    postal="1011AA",
                    phone="+31200000000",
                    contact_name="E2E",
                    contact_email="e2e@example.com",
                    invoice_email="e2e@example.com",
                )
            )
        self.assertEqual(div.name, DIVISION_NAME)

        updated_div = self.divisions.v2_organisations_divisions_partial_update(
            div.id, PatchedDivisionWrite(city="Rotterdam")
        )
        self.assertEqual(updated_div.city, "Rotterdam")


if __name__ == "__main__":
    unittest.main()
