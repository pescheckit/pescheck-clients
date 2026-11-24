using Pescheck.Client.Api;
using Pescheck.Client.Client;
using Pescheck.Client.Model;
using Xunit;

namespace Pescheck.Client.ContractTests;

// Contract test: the C# client against the mock API (see contract/README.md).
public class ContractTests
{
    private static readonly Guid Id = Guid.Parse("3fa85f64-5717-4562-b3fc-2c963f66afa6");
    private const string Email = "contract@example.invalid";

    // Host comes from PESCHECK_BASE_URL (the Configuration default).
    private static Configuration Config(string? token) => new() { AccessToken = token! };

    private readonly Configuration _config = Config(Environment.GetEnvironmentVariable("PESCHECK_ACCESS_TOKEN"));

    [Fact]
    public void Checks()
    {
        var checks = new ChecksApi(_config);
        Assert.NotNull(checks.V2ChecksList());
        Assert.NotNull(checks.V2ChecksRetrieve("id2check"));
    }

    [Fact]
    public void AddOns()
    {
        var addons = new AddOnsApi(_config);
        Assert.NotNull(addons.V2OrganisationsAddonsList());
        Assert.NotNull(addons.V2OrganisationsAddonsRetrieve("api_access"));
    }

    [Fact]
    public void Profiles()
    {
        var profiles = new ProfilesApi(_config);
        Assert.NotNull(profiles.V2ProfilesCreate(new V2ProfileCreate(
            name: "Contract test",
            checks: new List<V2ProfileCheck> { new(V2ProfileCheck.CheckTypeEnum.Id2check) })));
        Assert.NotNull(profiles.V2ProfilesList());
        Assert.NotNull(profiles.V2ProfilesRetrieve(Id));
        Assert.NotNull(profiles.V2ProfilesPartialUpdate(Id,
            new PatchedV2ProfilePartialUpdate(description: "updated")));
    }

    [Fact]
    public void Screenings()
    {
        var screenings = new ScreeningsApi(_config);
        Assert.NotNull(screenings.V2ScreeningsCreate(new V2ScreeningCreate(
            profileId: Id,
            candidate: new V2Candidate(firstName: "Contract", lastName: "Test", email: Email))));
        Assert.NotNull(screenings.V2ScreeningsList());
        Assert.NotNull(screenings.V2ScreeningsRetrieve(Id));
        Assert.NotNull(screenings.V2ScreeningsDocumentsList(Id));
    }

    [Fact]
    public void Webhooks()
    {
        var webhooks = new WebhooksApi(_config);
        Assert.NotNull(webhooks.CreateWebhook2(new Webhook(
            name: "Contract test",
            url: "https://example.invalid/hook",
            events: new List<Webhook.EventsEnum> { Webhook.EventsEnum.ScreeningStatusChanged })));
        Assert.NotNull(webhooks.ListWebhooks2());
    }

    [Fact]
    public void Divisions()
    {
        var divisions = new DivisionsApi(_config);
        Assert.NotNull(divisions.V2OrganisationsDivisionsCreate(new DivisionWrite(
            name: "Contract test",
            city: "Utrecht",
            address: "Teststraat 1",
            postal: "1234AB",
            phone: "0301234567",
            contactName: "Contract Test",
            contactEmail: Email,
            invoiceEmail: Email)));
        Assert.NotNull(divisions.V2OrganisationsDivisionsList());
    }

    [Fact]
    public void Unauthorized()
    {
        var anonymous = new ProfilesApi(new Configuration()); // no token
        var e = Assert.Throws<ApiException>(() => anonymous.V2ProfilesList());
        Assert.Equal(401, e.ErrorCode);
    }
}
