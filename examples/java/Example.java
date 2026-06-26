import java.util.List;

import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.OAuth;
import io.pescheck.client.api.ChecksApi;
import io.pescheck.client.model.V2CheckInfo;

/**
 * Minimal end-to-end smoke test for the Pescheck Java client.
 *
 * Lists the available check types via GET /api/v2/checks/ and prints
 * "E2E OK: <N> check types" on success.
 *
 * Configuration via environment variables:
 *   PESCHECK_BASE_URL  base URL of the API (e.g. https://api.pescheck.io)
 *   PESCHECK_ACCESS_TOKEN     JWT bearer token for the "jwtAuth" scheme
 */
public class Example {
  public static void main(String[] args) {
    String baseUrl = System.getenv("PESCHECK_BASE_URL");
    String token = System.getenv("PESCHECK_ACCESS_TOKEN");

    if (baseUrl == null || baseUrl.isEmpty()) {
      System.err.println("PESCHECK_BASE_URL is not set");
      System.exit(1);
    }
    if (token == null || token.isEmpty()) {
      System.err.println("PESCHECK_ACCESS_TOKEN is not set");
      System.exit(1);
    }

    ApiClient client = Configuration.getDefaultApiClient();
    client.setBasePath(baseUrl);

    // OAuth2 bearer authentication (scheme "oauth2") — the scheme the operations require.
    OAuth oauth2 = (OAuth) client.getAuthentication("oauth2");
    oauth2.setAccessToken(token);

    try {
      ChecksApi checksApi = new ChecksApi(client);
      // checkType = null lists all check types.
      List<V2CheckInfo> checks = checksApi.v2ChecksList(null);
      System.out.println("E2E OK: " + checks.size() + " check types");
    } catch (ApiException e) {
      System.err.println("Exception when calling ChecksApi#v2ChecksList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      System.exit(1);
    } catch (Exception e) {
      System.err.println("Unexpected error: " + e.getMessage());
      System.exit(1);
    }
  }
}
