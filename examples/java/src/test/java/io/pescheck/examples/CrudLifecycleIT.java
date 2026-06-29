package io.pescheck.examples;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assumptions.assumeTrue;

import java.net.URI;
import java.util.List;
import java.util.UUID;

import io.pescheck.client.ApiClient;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.OAuth;
import io.pescheck.client.api.ChecksApi;
import io.pescheck.client.api.ProfilesApi;
import io.pescheck.client.api.ScreeningsApi;
import io.pescheck.client.api.WebhooksApi;
import io.pescheck.client.api.DivisionsApi;
import io.pescheck.client.model.V2CheckInfo;
import io.pescheck.client.model.V2ProfileCheck;
import io.pescheck.client.model.V2ProfileCreate;
import io.pescheck.client.model.V2ProfileDetail;
import io.pescheck.client.model.PatchedV2ProfilePartialUpdate;
import io.pescheck.client.model.V2Candidate;
import io.pescheck.client.model.V2ScreeningCreate;
import io.pescheck.client.model.V2ScreeningDetail;
import io.pescheck.client.model.Webhook;
import io.pescheck.client.model.WebhookResponse;
import io.pescheck.client.model.DivisionWrite;
import io.pescheck.client.model.PatchedDivisionWrite;
import io.pescheck.client.model.DivisionReadOnly;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

/**
 * End-to-end CRUD lifecycle integration test for the Pescheck Java client.
 *
 * Runs against the real Pescheck API (no mocks), authenticating with an OAuth2
 * bearer token. The test self-skips (assumeTrue) when no token is configured, so
 * it is green in CI without credentials.
 *
 * Configuration via environment variables:
 *   PESCHECK_BASE_URL      base URL of the API (default https://api-staging.pescheck.io)
 *   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token (test skipped if absent)
 *   PESCHECK_TEST_EMAIL    candidate/division email (default noreply@pescheck.nl)
 *
 * Mirrors examples/java/CrudLifecycle.java.
 */
class CrudLifecycleIT {

  // Profile/webhook names must be unique per run: the API soft-deletes and returns
  // a 500 on a duplicate name. The division has no delete endpoint, so we reuse a
  // fixed-named one instead of creating a new one each run.
  private static final String SUFFIX = UUID.randomUUID().toString().substring(0, 8);
  private static final String DIVISION_NAME = "E2E CI division";

  private String testEmail;
  private ChecksApi checks;
  private ProfilesApi profiles;
  private ScreeningsApi screenings;
  private WebhooksApi webhooks;
  private DivisionsApi divisions;

  private UUID profileId;

  @BeforeEach
  void setUp() {
    String baseUrl = System.getenv("PESCHECK_BASE_URL");
    String token = System.getenv("PESCHECK_ACCESS_TOKEN");
    testEmail = System.getenv("PESCHECK_TEST_EMAIL");
    if (baseUrl == null || baseUrl.isEmpty()) {
      baseUrl = "https://api-staging.pescheck.io";
    }
    if (testEmail == null || testEmail.isEmpty()) {
      testEmail = "noreply@pescheck.nl";
    }

    assumeTrue(token != null && !token.isEmpty(), "PESCHECK_ACCESS_TOKEN not set");

    ApiClient client = Configuration.getDefaultApiClient();
    client.setBasePath(baseUrl);
    // OAuth2 bearer authentication (scheme "oauth2") — the scheme the operations require.
    OAuth oauth2 = (OAuth) client.getAuthentication("oauth2");
    oauth2.setAccessToken(token);

    checks = new ChecksApi(client);
    profiles = new ProfilesApi(client);
    screenings = new ScreeningsApi(client);
    webhooks = new WebhooksApi(client);
    divisions = new DivisionsApi(client);
  }

  @AfterEach
  void tearDown() {
    // best-effort cleanup of the profile we created
    if (profileId != null) {
      try {
        profiles.v2ProfilesDestroy(profileId);
      } catch (Exception ignored) {
        // best-effort
      }
    }
  }

  @Test
  @DisplayName("full v2 CRUD lifecycle against the live API")
  void crudLifecycle() throws Exception {
    // --- checks: list -> retrieve one ---
    List<V2CheckInfo> checkList = checks.v2ChecksList(null);
    assertFalse(checkList.isEmpty(), "expected at least one check type");
    String checkType = checkList.get(0).getCheckType();
    V2CheckInfo retrievedCheck = checks.v2ChecksRetrieve(checkType);
    assertNotNull(retrievedCheck, "retrieved check should not be null");

    // --- profile: create -> retrieve -> patch -> appears in list ---
    V2ProfileDetail created = profiles.v2ProfilesCreate(
        new V2ProfileCreate()
            .name("E2E test profile " + SUFFIX)
            .description("created by e2e")
            .checks(List.of(new V2ProfileCheck()
                .checkType(V2ProfileCheck.CheckTypeEnum.fromValue(checkType)))));
    profileId = created.getId();
    assertNotNull(profileId, "created profile should have an id");

    V2ProfileDetail fetched = profiles.v2ProfilesRetrieve(profileId);
    assertEquals(profileId, fetched.getId(), "retrieved profile id should match");

    V2ProfileDetail patched = profiles.v2ProfilesPartialUpdate(
        profileId, new PatchedV2ProfilePartialUpdate().description("updated by e2e"));
    assertEquals("updated by e2e", patched.getDescription(),
        "patched profile description should be updated");

    boolean inList = profiles.v2ProfilesList(null, null, null, null, null, null, null)
        .getResults().stream()
        .anyMatch(p -> profileId.equals(p.getId()));
    assertTrue(inList, "created profile should appear in the list");

    // --- screening: create -> retrieve -> documents ---
    V2ScreeningDetail screening = screenings.v2ScreeningsCreate(
        new V2ScreeningCreate()
            .profileId(profileId)
            .candidate(new V2Candidate()
                .firstName("E2E").lastName("Tester").email(testEmail)));
    assertNotNull(screening.getId(), "created screening should have an id");
    assertNotNull(screening.getStatus(), "created screening should have a status");

    V2ScreeningDetail fetchedScreening = screenings.v2ScreeningsRetrieve(screening.getId());
    assertEquals(screening.getId(), fetchedScreening.getId(),
        "retrieved screening id should match");
    screenings.v2ScreeningsDocumentsList(screening.getId(), null, null);

    // --- webhook: create -> list -> delete ---
    WebhookResponse hook = webhooks.createWebhook2(
        new Webhook()
            .name("E2E webhook " + SUFFIX)
            .url(URI.create("https://example.com/e2e-hook-" + SUFFIX))
            .events(List.of(Webhook.EventsEnum.fromValue("screening.status_changed"))),
        null, null);
    assertNotNull(hook.getId(), "created webhook should have an id");

    boolean hookListed = webhooks.listWebhooks2().stream()
        .anyMatch(w -> hook.getId().equals(w.getId()));
    assertTrue(hookListed, "created webhook should appear in the list");
    // webhook id deserializes as a UUID; the delete path param wants a string.
    webhooks.deleteWebhook2(hook.getId().toString());

    // --- division: list -> reuse-or-create by name -> patch ---
    List<DivisionReadOnly> existing =
        divisions.v2OrganisationsDivisionsList(null, null, null).getResults();
    UUID divisionId = null;
    for (DivisionReadOnly d : existing) {
      if (DIVISION_NAME.equals(d.getName())) {
        divisionId = d.getId();
        break;
      }
    }
    if (divisionId == null) {
      DivisionWrite div = divisions.v2OrganisationsDivisionsCreate(
          new DivisionWrite()
              .name(DIVISION_NAME).city("Amsterdam").address("Teststraat 1")
              .postal("1011AA").phone("+31200000000").contactName("E2E")
              .contactEmail(testEmail).invoiceEmail(testEmail));
      divisionId = div.getId();
    }
    assertNotNull(divisionId, "division id should be resolved");
    PatchedDivisionWrite divPatch = new PatchedDivisionWrite().city("Rotterdam");
    divisions.v2OrganisationsDivisionsPartialUpdate(divisionId, divPatch);
  }
}
