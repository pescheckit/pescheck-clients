using System;
using System.Collections.Generic;
using System.Linq;
using Pescheck.Client.Api;
using Pescheck.Client.Client;
using Pescheck.Client.Model;

// End-to-end CRUD lifecycle test for the Pescheck C# client.
//
// Exercises the full v2 surface against the API and self-cleans where possible:
//
//   checks      list -> retrieve one
//   profiles    create -> retrieve -> patch -> (appears in list) -> delete
//   screenings  create (needs a profile + candidate) -> retrieve -> list documents
//   webhooks    create -> list -> delete
//   divisions   list -> reuse-or-create by name -> patch
//
// Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.

// Profile/webhook names must be unique per run: the API soft-deletes and returns
// a 500 on a duplicate name. The division has no delete endpoint, so we reuse a
// fixed-named one instead of creating a new one each run.
string suffix = Guid.NewGuid().ToString("N").Substring(0, 8);
const string DivisionName = "E2E CI division";

void Step(string msg) => Console.WriteLine($"  - {msg}");

string? basePath = Environment.GetEnvironmentVariable("PESCHECK_BASE_URL");
string? accessToken = Environment.GetEnvironmentVariable("PESCHECK_ACCESS_TOKEN");
string testEmail = Environment.GetEnvironmentVariable("PESCHECK_TEST_EMAIL") ?? "noreply@pescheck.nl";

if (string.IsNullOrWhiteSpace(basePath) || string.IsNullOrWhiteSpace(accessToken))
{
    Console.Error.WriteLine("PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set");
    return 2;
}

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
    string checkType = checkList[0].CheckType;
    checks.V2ChecksRetrieve(checkType);
    Step($"checks: {checkList.Count} types, retrieved '{checkType}'");

    // The profile-check model takes a typed enum; the listing returns the raw
    // string value (e.g. "vogcheck"). Enum member names are the value with the
    // first letter capitalised, so a case-insensitive parse round-trips them.
    var checkTypeEnum = (V2ProfileCheck.CheckTypeEnum)Enum.Parse(
        typeof(V2ProfileCheck.CheckTypeEnum), checkType, ignoreCase: true);

    // --- profile: create -> retrieve -> patch ---
    V2ProfileDetail created = profiles.V2ProfilesCreate(
        new V2ProfileCreate(
            name: $"E2E test profile {suffix}",
            description: "created by e2e",
            checks: new List<V2ProfileCheck> { new V2ProfileCheck(checkType: checkTypeEnum) }));
    profileId = created.Id;
    profiles.V2ProfilesRetrieve(profileId.Value);
    profiles.V2ProfilesPartialUpdate(
        profileId.Value, new PatchedV2ProfilePartialUpdate(description: "updated by e2e"));
    Step($"profile: created+retrieved+patched ({profileId})");

    // --- screening: create -> retrieve -> documents ---
    V2ScreeningDetail screening = screenings.V2ScreeningsCreate(
        new V2ScreeningCreate(
            profileId: profileId.Value,
            candidate: new V2Candidate(
                firstName: "E2E", lastName: "Tester", email: testEmail)));
    screenings.V2ScreeningsRetrieve(screening.Id);
    screenings.V2ScreeningsDocumentsList(screening.Id);
    Step($"screening: created+retrieved ({screening.Id}, status={screening.Status})");

    // --- webhook: create -> list -> delete ---
    WebhookResponse hook = webhooks.CreateWebhook2(
        new Webhook(
            name: $"E2E webhook {suffix}",
            url: $"https://example.com/e2e-hook-{suffix}",
            events: new List<Webhook.EventsEnum> { Webhook.EventsEnum.ScreeningStatusChanged }));
    webhooks.ListWebhooks2();
    // The webhook id is a Guid; the delete path param wants a string.
    webhooks.DeleteWebhook2(hook.Id.ToString());
    Step($"webhook: created+listed+deleted ({hook.Id})");

    // --- division: list -> reuse-or-create -> patch ---
    List<DivisionReadOnly> existing = divisions.V2OrganisationsDivisionsList().Results;
    DivisionReadOnly? div = existing.FirstOrDefault(d => d.Name == DivisionName);
    Guid divisionId;
    string action;
    if (div is null)
    {
        DivisionWrite createdDiv = divisions.V2OrganisationsDivisionsCreate(
            new DivisionWrite(
                name: DivisionName, city: "Amsterdam", address: "Teststraat 1",
                postal: "1011AA", phone: "+31200000000", contactName: "E2E",
                contactEmail: "e2e@example.com", invoiceEmail: "e2e@example.com"));
        divisionId = createdDiv.Id;
        action = "created";
    }
    else
    {
        divisionId = div.Id;
        action = "reused";
    }
    divisions.V2OrganisationsDivisionsPartialUpdate(
        divisionId, new PatchedDivisionWrite(city: "Rotterdam"));
    Step($"division: {action}+patched ({divisionId})");

    Console.WriteLine("E2E CRUD OK");
    return 0;
}
catch (ApiException e)
{
    Console.Error.WriteLine($"E2E CRUD FAILED: ApiException {e.ErrorCode}: {e.Message}");
    return 1;
}
catch (Exception e)
{
    Console.Error.WriteLine($"E2E CRUD FAILED: {e.GetType().Name}: {e.Message}");
    return 1;
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
