"""Contract test: the Python client against the mock API (see contract/README.md)."""

import os
import unittest

import pescheck
from pescheck.exceptions import ApiException

ID = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
EMAIL = "contract@example.invalid"


def client(token=None):
    cfg = pescheck.Configuration()  # host from PESCHECK_BASE_URL
    cfg.access_token = os.environ["PESCHECK_ACCESS_TOKEN"] if token is None else token
    return pescheck.ApiClient(cfg)


class ContractTest(unittest.TestCase):
    def setUp(self):
        self.api = client()

    def test_checks(self):
        checks = pescheck.ChecksApi(self.api)
        self.assertIsInstance(checks.v2_checks_list(), list)
        self.assertIsNotNone(checks.v2_checks_retrieve("id2check"))

    def test_addons(self):
        addons = pescheck.AddOnsApi(self.api)
        self.assertIsNotNone(addons.v2_organisations_addons_list())
        self.assertIsNotNone(addons.v2_organisations_addons_retrieve("api_access"))

    def test_profiles(self):
        profiles = pescheck.ProfilesApi(self.api)
        created = profiles.v2_profiles_create(
            pescheck.V2ProfileCreate(
                name="Contract test",
                checks=[pescheck.V2ProfileCheck(check_type="id2check")],
            )
        )
        self.assertIsNotNone(created)
        self.assertIsNotNone(profiles.v2_profiles_list())
        self.assertIsNotNone(profiles.v2_profiles_retrieve(ID))
        self.assertIsNotNone(
            profiles.v2_profiles_partial_update(
                ID, pescheck.PatchedV2ProfilePartialUpdate(description="updated")
            )
        )

    def test_screenings(self):
        screenings = pescheck.ScreeningsApi(self.api)
        created = screenings.v2_screenings_create(
            pescheck.V2ScreeningCreate(
                profile_id=ID,
                candidate=pescheck.V2Candidate(
                    first_name="Contract", last_name="Test", email=EMAIL
                ),
            )
        )
        self.assertIsNotNone(created)
        self.assertIsNotNone(screenings.v2_screenings_list())
        self.assertIsNotNone(screenings.v2_screenings_retrieve(ID))
        self.assertIsNotNone(screenings.v2_screenings_documents_list(ID))

    def test_webhooks(self):
        webhooks = pescheck.WebhooksApi(self.api)
        created = webhooks.create_webhook2(
            pescheck.Webhook(
                name="Contract test",
                url="https://example.invalid/hook",
                events=["screening.status_changed"],
            )
        )
        self.assertIsNotNone(created)
        self.assertIsNotNone(webhooks.list_webhooks2())

    def test_divisions(self):
        divisions = pescheck.DivisionsApi(self.api)
        created = divisions.v2_organisations_divisions_create(
            pescheck.DivisionWrite(
                name="Contract test",
                city="Utrecht",
                address="Teststraat 1",
                postal="1234AB",
                phone="0301234567",
                contact_name="Contract Test",
                contact_email=EMAIL,
                invoice_email=EMAIL,
            )
        )
        self.assertIsNotNone(created)
        self.assertIsNotNone(divisions.v2_organisations_divisions_list())

    def test_unauthorized(self):
        with self.assertRaises(ApiException) as ctx:
            pescheck.ProfilesApi(client(token="")).v2_profiles_list()
        self.assertEqual(ctx.exception.status, 401)


if __name__ == "__main__":
    unittest.main()
