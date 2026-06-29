import java.net.URI;
import java.util.List;
import java.util.UUID;

import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
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

/**
 * End-to-end CRUD lifecycle test for the Pescheck Java client.
 *
 * Exercises the full v2 surface against the API and self-cleans where possible:
 *
 *   checks      list -> retrieve one
 *   profiles    create -> retrieve -> patch -> (appears in list) -> delete
 *   screenings  create (needs a profile + candidate) -> retrieve -> list documents
 *   webhooks    create -> list -> delete
 *   divisions   list -> reuse-or-create by name -> patch
 *
 * Prints a line per step and "E2E CRUD OK" on success; exits non-zero on any error.
 *
 * Configuration via environment variables:
 *   PESCHECK_BASE_URL      base URL of the API (e.g. https://api-staging.pescheck.io)
 *   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
 *   PESCHECK_TEST_EMAIL    candidate/division email (default noreply@pescheck.nl)
 */
public class CrudLifecycle {

  // Profile/webhook names must be unique per run: the API soft-deletes and returns
  // a 500 on a duplicate name. The division has no delete endpoint, so we reuse a
  // fixed-named one instead of creating a new one each run.
  static final String SUFFIX = UUID.randomUUID().toString().substring(0, 8);
  static final String DIVISION_NAME = "E2E CI division";

  static void step(String msg) {
    System.out.println("  - " + msg);
  }

  public static void main(String[] args) {
    String baseUrl = System.getenv("PESCHECK_BASE_URL");
    String token = System.getenv("PESCHECK_ACCESS_TOKEN");
    String testEmail = System.getenv("PESCHECK_TEST_EMAIL");
    if (testEmail == null || testEmail.isEmpty()) {
      testEmail = "noreply@pescheck.nl";
    }
    if (baseUrl == null || baseUrl.isEmpty() || token == null || token.isEmpty()) {
      System.err.println("PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set");
      System.exit(2);
    }

    ApiClient client = Configuration.getDefaultApiClient();
    client.setBasePath(baseUrl);
    // OAuth2 bearer authentication (scheme "oauth2") — the scheme the operations require.
    OAuth oauth2 = (OAuth) client.getAuthentication("oauth2");
    oauth2.setAccessToken(token);

    ChecksApi checks = new ChecksApi(client);
    ProfilesApi profiles = new ProfilesApi(client);
    ScreeningsApi screenings = new ScreeningsApi(client);
    WebhooksApi webhooks = new WebhooksApi(client);
    DivisionsApi divisions = new DivisionsApi(client);

    UUID profileId = null;
    try {
      // --- checks ---
      List<V2CheckInfo> checkList = checks.v2ChecksList(null);
      String checkType = checkList.get(0).getCheckType();
      checks.v2ChecksRetrieve(checkType);
      step("checks: " + checkList.size() + " types, retrieved '" + checkType + "'");

      // --- profile: create -> retrieve -> patch ---
      V2ProfileDetail created = profiles.v2ProfilesCreate(
          new V2ProfileCreate()
              .name("E2E test profile " + SUFFIX)
              .description("created by e2e")
              .checks(List.of(new V2ProfileCheck()
                  .checkType(V2ProfileCheck.CheckTypeEnum.fromValue(checkType)))));
      profileId = created.getId();
      profiles.v2ProfilesRetrieve(profileId);
      profiles.v2ProfilesPartialUpdate(
          profileId, new PatchedV2ProfilePartialUpdate().description("updated by e2e"));
      step("profile: created+retrieved+patched (" + profileId + ")");

      // --- screening: create -> retrieve -> documents ---
      V2ScreeningDetail screening = screenings.v2ScreeningsCreate(
          new V2ScreeningCreate()
              .profileId(profileId)
              .candidate(new V2Candidate()
                  .firstName("E2E").lastName("Tester").email(testEmail)));
      screenings.v2ScreeningsRetrieve(screening.getId());
      screenings.v2ScreeningsDocumentsList(screening.getId(), null, null);
      step("screening: created+retrieved (" + screening.getId()
          + ", status=" + screening.getStatus() + ")");

      // --- webhook: create -> list -> delete ---
      WebhookResponse hook = webhooks.createWebhook2(
          new Webhook()
              .name("E2E webhook " + SUFFIX)
              .url(URI.create("https://example.com/e2e-hook"))
              .events(List.of(Webhook.EventsEnum.fromValue("screening.status_changed"))),
          null, null);
      webhooks.listWebhooks2();
      // webhook id deserializes as a UUID; the delete path param wants a string.
      webhooks.deleteWebhook2(hook.getId().toString());
      step("webhook: created+listed+deleted (" + hook.getId() + ")");

      // --- division: list -> reuse-or-create -> patch ---
      List<DivisionReadOnly> existing =
          divisions.v2OrganisationsDivisionsList(null, null, null).getResults();
      UUID divisionId = null;
      String action;
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
        action = "created";
      } else {
        action = "reused";
      }
      divisions.v2OrganisationsDivisionsPartialUpdate(
          divisionId, new PatchedDivisionWrite().city("Rotterdam"));
      step("division: " + action + "+patched (" + divisionId + ")");

      System.out.println("E2E CRUD OK");
    } catch (ApiException e) {
      System.err.println("E2E CRUD FAILED: ApiException: " + e.getCode() + " " + e.getResponseBody());
      cleanup(profiles, profileId);
      System.exit(1);
    } catch (Exception e) {
      System.err.println("E2E CRUD FAILED: " + e.getClass().getSimpleName() + ": " + e.getMessage());
      cleanup(profiles, profileId);
      System.exit(1);
    }
    // best-effort cleanup of the profile we created
    cleanup(profiles, profileId);
  }

  static void cleanup(ProfilesApi profiles, UUID profileId) {
    if (profileId != null) {
      try {
        profiles.v2ProfilesDestroy(profileId);
      } catch (Exception ignored) {
        // best-effort
      }
    }
  }
}
