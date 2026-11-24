package io.pescheck.contract;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.net.URI;
import java.util.List;
import java.util.UUID;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.api.AddOnsApi;
import io.pescheck.client.api.ChecksApi;
import io.pescheck.client.api.DivisionsApi;
import io.pescheck.client.api.ProfilesApi;
import io.pescheck.client.api.ScreeningsApi;
import io.pescheck.client.api.WebhooksApi;
import io.pescheck.client.model.DivisionWrite;
import io.pescheck.client.model.PatchedV2ProfilePartialUpdate;
import io.pescheck.client.model.V2Candidate;
import io.pescheck.client.model.V2ProfileCheck;
import io.pescheck.client.model.V2ProfileCreate;
import io.pescheck.client.model.V2ScreeningCreate;
import io.pescheck.client.model.Webhook;

/** Contract test: the Java client against the mock API (see contract/README.md). */
class ContractTest {

  static final UUID ID = UUID.fromString("3fa85f64-5717-4562-b3fc-2c963f66afa6");
  static final String EMAIL = "contract@example.invalid";

  @BeforeAll
  static void auth() {
    // Host comes from PESCHECK_BASE_URL (the client's default).
    Configuration.getDefaultApiClient().setAccessToken(System.getenv("PESCHECK_ACCESS_TOKEN"));
  }

  @Test
  void checks() throws ApiException {
    ChecksApi checks = new ChecksApi();
    assertNotNull(checks.v2ChecksList(null));
    assertNotNull(checks.v2ChecksRetrieve("id2check"));
  }

  @Test
  void addons() throws ApiException {
    AddOnsApi addons = new AddOnsApi();
    assertNotNull(addons.v2OrganisationsAddonsList(null));
    assertNotNull(addons.v2OrganisationsAddonsRetrieve("api_access", null));
  }

  @Test
  void profiles() throws ApiException {
    ProfilesApi profiles = new ProfilesApi();
    assertNotNull(profiles.v2ProfilesCreate(new V2ProfileCreate()
        .name("Contract test")
        .checks(List.of(new V2ProfileCheck().checkType(V2ProfileCheck.CheckTypeEnum.ID2CHECK)))));
    assertNotNull(profiles.v2ProfilesList(null, null, null, null, null, null, null));
    assertNotNull(profiles.v2ProfilesRetrieve(ID));
    assertNotNull(profiles.v2ProfilesPartialUpdate(ID,
        new PatchedV2ProfilePartialUpdate().description("updated")));
  }

  @Test
  void screenings() throws ApiException {
    ScreeningsApi screenings = new ScreeningsApi();
    assertNotNull(screenings.v2ScreeningsCreate(new V2ScreeningCreate()
        .profileId(ID)
        .candidate(new V2Candidate().firstName("Contract").lastName("Test").email(EMAIL))));
    assertNotNull(screenings.v2ScreeningsList(null, null, null, null));
    assertNotNull(screenings.v2ScreeningsRetrieve(ID));
    assertNotNull(screenings.v2ScreeningsDocumentsList(ID, null, null));
  }

  @Test
  void webhooks() throws ApiException {
    WebhooksApi webhooks = new WebhooksApi();
    assertNotNull(webhooks.createWebhook2(new Webhook()
        .name("Contract test")
        .url(URI.create("https://example.invalid/hook"))
        .events(List.of(Webhook.EventsEnum.SCREENING_STATUS_CHANGED)), null, null));
    assertNotNull(webhooks.listWebhooks2());
  }

  @Test
  void divisions() throws ApiException {
    DivisionsApi divisions = new DivisionsApi();
    assertNotNull(divisions.v2OrganisationsDivisionsCreate(new DivisionWrite()
        .name("Contract test")
        .city("Utrecht")
        .address("Teststraat 1")
        .postal("1234AB")
        .phone("0301234567")
        .contactName("Contract Test")
        .contactEmail(EMAIL)
        .invoiceEmail(EMAIL)));
    assertNotNull(divisions.v2OrganisationsDivisionsList(null, null, null));
  }

  @Test
  void unauthorized() {
    ProfilesApi anonymous = new ProfilesApi(new ApiClient()); // no token
    ApiException e = assertThrows(ApiException.class,
        () -> anonymous.v2ProfilesList(null, null, null, null, null, null, null));
    assertEquals(401, e.getCode());
  }
}
