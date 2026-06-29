using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
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
    private const string DivisionName = "E2E CI division cs";

    // Staging intermittently returns a 5xx on otherwise-valid read/list calls.
    // Retry such a call a few times with a short backoff, but only on >= 500 so
    // genuine 4xx responses (auth/not-found) surface immediately and keep the
    // negative-path assertions meaningful.
    private static T Retry<T>(Func<T> call)
    {
        const int maxAttempts = 3;
        for (int attempt = 1; ; attempt++)
        {
            try
            {
                return call();
            }
            catch (ApiException ex) when (ex.ErrorCode >= 500 && attempt < maxAttempts)
            {
                Thread.Sleep(500);
            }
        }
    }

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
            List<V2CheckInfo> checkList = Retry(() => checks.V2ChecksList());
            Assert.NotEmpty(checkList);
            string checkType = checkList[0].CheckType;
            V2CheckInfo retrievedCheck = Retry(() => checks.V2ChecksRetrieve(checkType));
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
            Assert.Equal($"E2E test profile {suffix}", created.Name);

            V2ProfileDetail retrievedProfile = profiles.V2ProfilesRetrieve(profileId.Value);
            Assert.Equal(profileId.Value, retrievedProfile.Id);
            Assert.Equal($"E2E test profile {suffix}", retrievedProfile.Name);

            V2ProfileDetail patched = profiles.V2ProfilesPartialUpdate(
                profileId.Value, new PatchedV2ProfilePartialUpdate(description: "updated by e2e"));
            Assert.Equal("updated by e2e", patched.Description);

            // Full replace (PUT). name + checks are both required on V2ProfileUpdate;
            // the update-check enum follows the same value->member casing as the
            // create-check enum, so a case-insensitive parse round-trips the raw type.
            // The API rejects a PUT that re-sends an existing check_type without its
            // profile_check_id (400: "Profile already has ProfileCheck(s) ..."), so
            // carry over the id of the check already on the profile to update it
            // in place rather than add a duplicate.
            var putCheckTypeEnum = (V2ProfileUpdateCheck.CheckTypeEnum)Enum.Parse(
                typeof(V2ProfileUpdateCheck.CheckTypeEnum), checkType, ignoreCase: true);
            V2ProfileCheckEntry existingCheck = patched.Checks[0];
            V2ProfileDetail putProfile = profiles.V2ProfilesUpdate(
                profileId.Value,
                new V2ProfileUpdate(
                    name: $"E2E test profile {suffix} (PUT)",
                    description: "replaced by e2e",
                    checks: new List<V2ProfileUpdateCheck>
                    {
                        new V2ProfileUpdateCheck(
                            checkType: putCheckTypeEnum, profileCheckId: existingCheck.Id!.Value),
                    }));
            Assert.Equal($"E2E test profile {suffix} (PUT)", putProfile.Name);
            Assert.Equal("replaced by e2e", putProfile.Description);

            List<V2ProfileListItem> profileList = Retry(() => profiles.V2ProfilesList()).Results;
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
            Assert.Equal(testEmail, retrievedScreening.Candidate.Email);

            // The created screening should show up in the (paginated) listing.
            List<V2ScreeningListItem> screeningList = Retry(() => screenings.V2ScreeningsList()).Results;
            Assert.NotEmpty(screeningList);
            Assert.Contains(screeningList, s => s.Id == screening.Id);

            // Documents endpoint should return a (possibly empty) list, not throw.
            var documents = screenings.V2ScreeningsDocumentsList(screening.Id);
            Assert.NotNull(documents);

            // --- webhook: create -> list -> delete ---
            string hookName = $"E2E webhook {suffix}";
            string hookUrl = $"https://example.com/e2e-hook-{suffix}";
            WebhookResponse hook = webhooks.CreateWebhook2(
                new Webhook(
                    name: hookName,
                    url: hookUrl,
                    events: new List<Webhook.EventsEnum> { Webhook.EventsEnum.ScreeningStatusChanged }));
            Assert.NotEqual(Guid.Empty, hook.Id);
            Assert.Equal(hookName, hook.Name);
            Assert.Equal(hookUrl, hook.Url);
            // Events round-trips as a free-form object on the response model; just
            // confirm the server echoed something back rather than dropping it.
            Assert.NotNull(hook.Events);

            var hookList = webhooks.ListWebhooks2();
            Assert.NotNull(hookList);

            // The webhook id is a Guid; the delete path param wants a string.
            webhooks.DeleteWebhook2(hook.Id.ToString());

            // --- division: list -> reuse-or-create -> patch ---
            List<DivisionReadOnly> existing = Retry(() => divisions.V2OrganisationsDivisionsList()).Results;
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

            // Full replace (PUT): DivisionWrite carries the complete record.
            DivisionWrite putDiv = divisions.V2OrganisationsDivisionsUpdate(
                divisionId,
                new DivisionWrite(
                    name: DivisionName, city: "Utrecht", address: "Teststraat 2",
                    postal: "3511AA", phone: "+31300000000", contactName: "E2E",
                    contactEmail: "e2e@example.com", invoiceEmail: "e2e@example.com"));
            Assert.Equal("Utrecht", putDiv.City);

            DivisionReadOnly retrievedDiv = Retry(() => divisions.V2OrganisationsDivisionsRetrieve(divisionId));
            Assert.Equal(divisionId, retrievedDiv.Id);
            Assert.Equal(DivisionName, retrievedDiv.Name);
            Assert.Equal("Utrecht", retrievedDiv.City);
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

    // A bad bearer token must be rejected by the API with a 401, surfaced as an
    // ApiException whose ErrorCode is the HTTP status. Guarded by the real token
    // so it only runs in e2e (we still need a live API to reject against).
    [Fact]
    public void UnauthorizedRequestThrows401()
    {
        string basePath = Environment.GetEnvironmentVariable("PESCHECK_BASE_URL")
            ?? "https://api-staging.pescheck.io";
        string? accessToken = Environment.GetEnvironmentVariable("PESCHECK_ACCESS_TOKEN");
        if (string.IsNullOrEmpty(accessToken))
        {
            return;
        }

        var config = new Configuration { BasePath = basePath, AccessToken = "invalid" };
        var checks = new ChecksApi(config);

        var ex = Assert.Throws<ApiException>(() => checks.V2ChecksList());
        Assert.Equal(401, ex.ErrorCode);
    }

    // Retrieving a profile that does not exist must yield a 404 ApiException.
    [Fact]
    public void RetrieveMissingProfileThrows404()
    {
        string basePath = Environment.GetEnvironmentVariable("PESCHECK_BASE_URL")
            ?? "https://api-staging.pescheck.io";
        string? accessToken = Environment.GetEnvironmentVariable("PESCHECK_ACCESS_TOKEN");
        if (string.IsNullOrEmpty(accessToken))
        {
            return;
        }

        var config = new Configuration { BasePath = basePath, AccessToken = accessToken };
        var profiles = new ProfilesApi(config);

        var ex = Assert.Throws<ApiException>(() => profiles.V2ProfilesRetrieve(Guid.NewGuid()));
        Assert.Equal(404, ex.ErrorCode);
    }
}
