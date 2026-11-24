# AddOnsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganisationsAddonsList**](AddOnsApi.md#v2OrganisationsAddonsList) | **GET** /api/v2/organisations/addons/ |  |
| [**v2OrganisationsAddonsPartialUpdate**](AddOnsApi.md#v2OrganisationsAddonsPartialUpdate) | **PATCH** /api/v2/organisations/addons/{addon}/ |  |
| [**v2OrganisationsAddonsRetrieve**](AddOnsApi.md#v2OrganisationsAddonsRetrieve) | **GET** /api/v2/organisations/addons/{addon}/ |  |
| [**v2OrganisationsAddonsUpdate**](AddOnsApi.md#v2OrganisationsAddonsUpdate) | **PUT** /api/v2/organisations/addons/{addon}/ |  |


<a id="v2OrganisationsAddonsList"></a>
# **v2OrganisationsAddonsList**
> List&lt;OrganisationAddon&gt; v2OrganisationsAddonsList(divisionId)



List every add-on with whether it is enabled for the organisation.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.AddOnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    AddOnsApi apiInstance = new AddOnsApi(defaultClient);
    String divisionId = "divisionId_example"; // String | Act on this division instead of the organisation the token belongs to.
    try {
      List<OrganisationAddon> result = apiInstance.v2OrganisationsAddonsList(divisionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddOnsApi#v2OrganisationsAddonsList");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**List&lt;OrganisationAddon&gt;**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2OrganisationsAddonsPartialUpdate"></a>
# **v2OrganisationsAddonsPartialUpdate**
> OrganisationAddonUpdateResult v2OrganisationsAddonsPartialUpdate(addon, divisionId, patchedOrganisationAddonUpdate)



Switch an add-on on or off. Enabling is billed monthly from today.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.AddOnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    AddOnsApi apiInstance = new AddOnsApi(defaultClient);
    String addon = "api_access"; // String | The add-on to act on.
    String divisionId = "divisionId_example"; // String | Act on this division instead of the organisation the token belongs to.
    PatchedOrganisationAddonUpdate patchedOrganisationAddonUpdate = new PatchedOrganisationAddonUpdate(); // PatchedOrganisationAddonUpdate | 
    try {
      OrganisationAddonUpdateResult result = apiInstance.v2OrganisationsAddonsPartialUpdate(addon, divisionId, patchedOrganisationAddonUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddOnsApi#v2OrganisationsAddonsPartialUpdate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addon** | **String**| The add-on to act on. | [enum: api_access, branded_journey, connected_ats, sso] |
| **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] |
| **patchedOrganisationAddonUpdate** | [**PatchedOrganisationAddonUpdate**](PatchedOrganisationAddonUpdate.md)|  | [optional] |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2OrganisationsAddonsRetrieve"></a>
# **v2OrganisationsAddonsRetrieve**
> OrganisationAddon v2OrganisationsAddonsRetrieve(addon, divisionId)



Get one add-on&#39;s state for the organisation.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.AddOnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    AddOnsApi apiInstance = new AddOnsApi(defaultClient);
    String addon = "api_access"; // String | The add-on to act on.
    String divisionId = "divisionId_example"; // String | Act on this division instead of the organisation the token belongs to.
    try {
      OrganisationAddon result = apiInstance.v2OrganisationsAddonsRetrieve(addon, divisionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddOnsApi#v2OrganisationsAddonsRetrieve");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addon** | **String**| The add-on to act on. | [enum: api_access, branded_journey, connected_ats, sso] |
| **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**OrganisationAddon**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2OrganisationsAddonsUpdate"></a>
# **v2OrganisationsAddonsUpdate**
> OrganisationAddonUpdateResult v2OrganisationsAddonsUpdate(addon, organisationAddonUpdate, divisionId)



Switch an add-on on or off. Enabling is billed monthly from today.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.AddOnsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    AddOnsApi apiInstance = new AddOnsApi(defaultClient);
    String addon = "api_access"; // String | The add-on to act on.
    OrganisationAddonUpdate organisationAddonUpdate = new OrganisationAddonUpdate(); // OrganisationAddonUpdate | 
    String divisionId = "divisionId_example"; // String | Act on this division instead of the organisation the token belongs to.
    try {
      OrganisationAddonUpdateResult result = apiInstance.v2OrganisationsAddonsUpdate(addon, organisationAddonUpdate, divisionId);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AddOnsApi#v2OrganisationsAddonsUpdate");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **addon** | **String**| The add-on to act on. | [enum: api_access, branded_journey, connected_ats, sso] |
| **organisationAddonUpdate** | [**OrganisationAddonUpdate**](OrganisationAddonUpdate.md)|  | |
| **divisionId** | **String**| Act on this division instead of the organisation the token belongs to. | [optional] |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

