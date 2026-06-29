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
from pescheck.exceptions import ApiException
from pescheck.api.checks_api import ChecksApi
from pescheck.api.profiles_api import ProfilesApi
from pescheck.api.screenings_api import ScreeningsApi
from pescheck.api.webhooks_api import WebhooksApi
from pescheck.api.divisions_api import DivisionsApi
from pescheck.models.v2_profile_create import V2ProfileCreate
from pescheck.models.v2_profile_check import V2ProfileCheck
from pescheck.models.v2_profile_update import V2ProfileUpdate
from pescheck.models.v2_profile_update_check import V2ProfileUpdateCheck
from pescheck.models.patched_v2_profile_partial_update import PatchedV2ProfilePartialUpdate
from pescheck.models.v2_screening_create import V2ScreeningCreate
from pescheck.models.v2_candidate import V2Candidate
from pescheck.models.webhook import Webhook
from pescheck.models.division_write import DivisionWrite
from pescheck.models.patched_division_write import PatchedDivisionWrite

# The division API has no delete endpoint, so we reuse a fixed-named division
# instead of creating a fresh one on every run.
DIVISION_NAME = "E2E CI division py"


@unittest.skipUnless(
    os.environ.get("PESCHECK_ACCESS_TOKEN"), "PESCHECK_ACCESS_TOKEN not set"
)
class CrudIntegrationTest(unittest.TestCase):
    """Full CRUD lifecycle plus negative cases against the live Pescheck API."""

    def setUp(self):
        self.base_url = os.environ.get(
            "PESCHECK_BASE_URL", "https://api-staging.pescheck.io"
        )
        self.test_email = os.environ.get("PESCHECK_TEST_EMAIL", "noreply@pescheck.nl")
        # Profile/webhook names must be unique per run: the API soft-deletes and
        # returns a 500 on a duplicate name, so suffix everything with a uuid.
        self.suffix = uuid.uuid4().hex[:8]

        cfg = pescheck.Configuration(host=self.base_url)
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

    def test_crud_lifecycle(self):
        # --- checks: list -> retrieve one ---
        check_list = self.checks.v2_checks_list()
        self.assertTrue(len(check_list) > 0, "expected at least one check type")
        check_type = check_list[0].check_type
        retrieved_check = self.checks.v2_checks_retrieve(check_type)
        self.assertEqual(retrieved_check.check_type, check_type)

        # --- profile: create -> retrieve -> patch -> put -> appears in list ---
        profile_name = f"E2E test profile {self.suffix}"
        created = self.profiles.v2_profiles_create(
            V2ProfileCreate(
                name=profile_name,
                description="created by e2e",
                checks=[V2ProfileCheck(check_type=check_type)],
            )
        )
        self.profile_id = created.id
        self.assertIsNotNone(self.profile_id)
        # The created profile should echo exactly the name we sent.
        self.assertEqual(created.name, profile_name)

        fetched = self.profiles.v2_profiles_retrieve(self.profile_id)
        self.assertEqual(fetched.id, self.profile_id)
        self.assertEqual(fetched.name, profile_name)

        # PATCH: partial update of a single field.
        patched = self.profiles.v2_profiles_partial_update(
            self.profile_id,
            PatchedV2ProfilePartialUpdate(description="updated by e2e"),
        )
        self.assertEqual(patched.description, "updated by e2e")

        # PUT: full replace. Use a fresh unique name to avoid the duplicate-name
        # 500, and confirm the rename took effect. The API requires the existing
        # check's profile_check_id to update it in place (otherwise it rejects a
        # duplicate check_type), so carry it over from the current profile.
        existing_check = fetched.checks[0]
        put_name = f"E2E test profile {self.suffix} (put)"
        put_updated = self.profiles.v2_profiles_update(
            self.profile_id,
            V2ProfileUpdate(
                name=put_name,
                description="replaced by e2e put",
                checks=[
                    V2ProfileUpdateCheck(
                        check_type=check_type,
                        profile_check_id=existing_check.id,
                    )
                ],
            ),
        )
        self.assertEqual(put_updated.name, put_name)
        self.assertEqual(put_updated.description, "replaced by e2e put")
        # Re-fetch to confirm the PUT was persisted, not just echoed.
        refetched = self.profiles.v2_profiles_retrieve(self.profile_id)
        self.assertEqual(refetched.name, put_name)

        profile_list = self.profiles.v2_profiles_list()
        # The list payload may be a bare list or a paginated wrapper; normalise.
        rows = getattr(profile_list, "results", profile_list)
        self.assertIn(self.profile_id, [p.id for p in rows])

        # --- screening: create -> retrieve -> appears in list -> documents ---
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
        # The candidate email should echo exactly what we submitted.
        self.assertEqual(screening.candidate.email, self.test_email)

        fetched_screening = self.screenings.v2_screenings_retrieve(screening.id)
        self.assertEqual(fetched_screening.id, screening.id)
        self.assertEqual(fetched_screening.candidate.email, self.test_email)

        # The created screening should appear in the screenings list.
        screening_list = self.screenings.v2_screenings_list()
        screening_rows = getattr(screening_list, "results", screening_list)
        self.assertTrue(len(screening_rows) > 0, "expected a non-empty screening list")
        self.assertIn(
            str(screening.id), [str(s.id) for s in screening_rows]
        )

        # documents list should at least return without error
        self.screenings.v2_screenings_documents_list(screening.id)

        # --- webhook: create -> list -> delete ---
        hook_url = f"https://example.com/e2e-hook-{self.suffix}"
        hook_events = ["screening.status_changed"]
        hook = self.webhooks.create_webhook2(
            Webhook(
                name=f"E2E webhook {self.suffix}",
                url=hook_url,
                events=hook_events,
            )
        )
        self.assertIsNotNone(hook.id)
        # The created webhook should echo the url and events we sent.
        self.assertEqual(hook.url, hook_url)
        self.assertEqual(list(hook.events), hook_events)

        hook_list = self.webhooks.list_webhooks2()
        hook_rows = getattr(hook_list, "results", hook_list)
        self.assertIn(str(hook.id), [str(h.id) for h in hook_rows])

        # webhook id deserializes as a UUID; the delete path param wants a string.
        self.webhooks.delete_webhook2(str(hook.id))

        # --- division: list -> reuse-or-create by name -> retrieve -> patch -> put ---
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

        # GET a single division by id and confirm identity.
        retrieved_div = self.divisions.v2_organisations_divisions_retrieve(div.id)
        self.assertEqual(str(retrieved_div.id), str(div.id))
        self.assertEqual(retrieved_div.name, DIVISION_NAME)

        # PATCH: partial update of a single field.
        updated_div = self.divisions.v2_organisations_divisions_partial_update(
            div.id, PatchedDivisionWrite(city="Rotterdam")
        )
        self.assertEqual(updated_div.city, "Rotterdam")

        # PUT: full replace of all required fields. Confirm each field round-trips.
        put_div = self.divisions.v2_organisations_divisions_update(
            div.id,
            DivisionWrite(
                name=DIVISION_NAME,
                city="Utrecht",
                address="Putstraat 2",
                postal="3511AB",
                phone="+31300000000",
                contact_name="E2E PUT",
                contact_email="e2e-put@example.com",
                invoice_email="e2e-put@example.com",
            ),
        )
        self.assertEqual(put_div.name, DIVISION_NAME)
        self.assertEqual(put_div.city, "Utrecht")
        self.assertEqual(put_div.address, "Putstraat 2")
        self.assertEqual(put_div.postal, "3511AB")
        self.assertEqual(put_div.contact_name, "E2E PUT")
        self.assertEqual(put_div.contact_email, "e2e-put@example.com")
        # Re-fetch to confirm the PUT was persisted, not just echoed.
        refetched_div = self.divisions.v2_organisations_divisions_retrieve(div.id)
        self.assertEqual(refetched_div.city, "Utrecht")

    def test_unauthorized(self):
        """A bogus access token should yield a 401 from the real API."""
        cfg = pescheck.Configuration(host=self.base_url)
        cfg.access_token = "invalid"
        bad_client = pescheck.ApiClient(cfg)
        bad_checks = ChecksApi(bad_client)

        with self.assertRaises(ApiException) as ctx:
            bad_checks.v2_checks_list()
        self.assertEqual(ctx.exception.status, 401)

    def test_not_found(self):
        """Retrieving a well-formed but non-existent profile id yields a 404."""
        missing_id = str(uuid.uuid4())
        with self.assertRaises(ApiException) as ctx:
            self.profiles.v2_profiles_retrieve(missing_id)
        self.assertEqual(ctx.exception.status, 404)


if __name__ == "__main__":
    unittest.main()
