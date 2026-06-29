using System;
using System.Collections.Generic;
using System.Linq;
using Pescheck.Client.Api;
using Pescheck.Client.Client;
using Pescheck.Client.Model;
using Xunit;

namespace Pescheck.Client.IntegrationTests;

// End-to-end CRUD lifecycle integration test for the Pescheck C# client.
//
// Hits the real Pescheck API (no mocks) with an OAuth2 bearer token from the
// environment and exercises the full v2 surface, self-cleaning where possible:
//
//   checks      list -> retrieve one
//   profiles    create -> retrieve -> patch -> (appears in list) -> delete
//   screenings  create (needs a profile + candidate) -> retrieve -> list documents
//   webhooks    create -> list -> delete
//   divisions   list -> reuse-or-create by name -> patch
//
// Skips cleanly (green no-op) when PESCHECK_ACCESS_TOKEN is unset, so the suite
// stays green locally / in PRs without credentials and only runs for real in the
// e2e workflow where the token is injected.
public class CrudLifecycleTests
{
    private const string DivisionName = "E2E CI division";

    [Fact]
    public void CrudLifecycle()
    {
        string basePath = Environment.GetEnvironmentVariable("PESCHECK_BASE_URL")
            ?? "https://api-staging.pescheck.io";
        string? accessToken = Environment.GetEnvironmentVariable("PESCHECK_ACCESS_TOKEN");
        string testEmail = Environment.GetEnvironmentVariable("PESCHECK_TEST_EMAIL")
            ?? "noreply@pescheck.nl";

        // No credentials -> nothing to assert against the live API; pass as a no-op.
        if (string.IsNullOrEmpty(accessToken))
        {
            return;
        }

        // Profile/webhook names must be unique per run: the API soft-deletes and
        // returns a 500 on a duplicate name. The division has no delete endpoint,
        // so we reuse a fixed-named one instead of creating a new one each run.
        string suffix = Guid.NewGuid().ToString("N").Substring(0, 8);

        var config = new Configuration
        {
            BasePath = basePath,
            AccessToken = accessToken,
        };

        var checks = new ChecksApi(config);
        var profiles = new ProfilesApi(config);
        var screenings = new ScreeningsApi(config);
        var webhooks = new WebhooksApi(config);
        var divisions = new DivisionsApi(config);

        Guid? profileId = null;
        try
        {
            // --- checks ---
            List<V2CheckInfo> checkList = checks.V2ChecksList();
            Assert.NotEmpty(checkList);
            string checkType = checkList[0].CheckType;
            V2CheckInfo retrievedCheck = checks.V2ChecksRetrieve(checkType);
            Assert.Equal(checkType, retrievedCheck.CheckType);

            // The profile-check model takes a typed enum; the listing returns the
            // raw string value (e.g. "vogcheck"). Enum member names are the value
            // with the first letter capitalised, so a case-insensitive parse
            // round-trips them.
            var checkTypeEnum = (V2ProfileCheck.CheckTypeEnum)Enum.Parse(
                typeof(V2ProfileCheck.CheckTypeEnum), checkType, ignoreCase: true);

            // --- profile: create -> retrieve -> patch -> appears in list ---
            V2ProfileDetail created = profiles.V2ProfilesCreate(
                new V2ProfileCreate(
                    name: $"E2E test profile {suffix}",
                    description: "created by e2e",
                    checks: new List<V2ProfileCheck> { new V2ProfileCheck(checkType: checkTypeEnum) }));
            profileId = created.Id;

            V2ProfileDetail retrievedProfile = profiles.V2ProfilesRetrieve(profileId.Value);
            Assert.Equal(profileId.Value, retrievedProfile.Id);

            V2ProfileDetail patched = profiles.V2ProfilesPartialUpdate(
                profileId.Value, new PatchedV2ProfilePartialUpdate(description: "updated by e2e"));
            Assert.Equal("updated by e2e", patched.Description);

            List<V2ProfileListItem> profileList = profiles.V2ProfilesList().Results;
            Assert.Contains(profileList, p => p.Id == profileId.Value);

            // --- screening: create -> retrieve -> documents ---
            V2ScreeningDetail screening = screenings.V2ScreeningsCreate(
                new V2ScreeningCreate(
                    profileId: profileId.Value,
                    candidate: new V2Candidate(
                        firstName: "E2E", lastName: "Tester", email: testEmail)));
            Assert.False(string.IsNullOrEmpty(screening.Status));

            V2ScreeningDetail retrievedScreening = screenings.V2ScreeningsRetrieve(screening.Id);
            Assert.Equal(screening.Id, retrievedScreening.Id);

            // Documents endpoint should return a (possibly empty) list, not throw.
            var documents = screenings.V2ScreeningsDocumentsList(screening.Id);
            Assert.NotNull(documents);

            // --- webhook: create -> list -> delete ---
            WebhookResponse hook = webhooks.CreateWebhook2(
                new Webhook(
                    name: $"E2E webhook {suffix}",
                    url: $"https://example.com/e2e-hook-{suffix}",
                    events: new List<Webhook.EventsEnum> { Webhook.EventsEnum.ScreeningStatusChanged }));
            Assert.NotEqual(Guid.Empty, hook.Id);

            var hookList = webhooks.ListWebhooks2();
            Assert.NotNull(hookList);

            // The webhook id is a Guid; the delete path param wants a string.
            webhooks.DeleteWebhook2(hook.Id.ToString());

            // --- division: list -> reuse-or-create -> patch ---
            List<DivisionReadOnly> existing = divisions.V2OrganisationsDivisionsList().Results;
            DivisionReadOnly? div = existing.FirstOrDefault(d => d.Name == DivisionName);
            Guid divisionId;
            if (div is null)
            {
                DivisionWrite createdDiv = divisions.V2OrganisationsDivisionsCreate(
                    new DivisionWrite(
                        name: DivisionName, city: "Amsterdam", address: "Teststraat 1",
                        postal: "1011AA", phone: "+31200000000", contactName: "E2E",
                        contactEmail: "e2e@example.com", invoiceEmail: "e2e@example.com"));
                divisionId = createdDiv.Id;
            }
            else
            {
                divisionId = div.Id;
            }

            DivisionWrite patchedDiv = divisions.V2OrganisationsDivisionsPartialUpdate(
                divisionId, new PatchedDivisionWrite(city: "Rotterdam"));
            Assert.Equal("Rotterdam", patchedDiv.City);
        }
        finally
        {
            // best-effort cleanup of the profile we created
            if (profileId is not null)
            {
                try { profiles.V2ProfilesDestroy(profileId.Value); }
                catch { /* ignore */ }
            }
        }
    }
}
