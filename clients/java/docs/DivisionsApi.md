# DivisionsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganisationsDivisionsCreate**](DivisionsApi.md#v2OrganisationsDivisionsCreate) | **POST** /api/v2/organisations/divisions/ |  |
| [**v2OrganisationsDivisionsList**](DivisionsApi.md#v2OrganisationsDivisionsList) | **GET** /api/v2/organisations/divisions/ |  |
| [**v2OrganisationsDivisionsPartialUpdate**](DivisionsApi.md#v2OrganisationsDivisionsPartialUpdate) | **PATCH** /api/v2/organisations/divisions/{id}/ |  |
| [**v2OrganisationsDivisionsRetrieve**](DivisionsApi.md#v2OrganisationsDivisionsRetrieve) | **GET** /api/v2/organisations/divisions/{id}/ |  |
| [**v2OrganisationsDivisionsUpdate**](DivisionsApi.md#v2OrganisationsDivisionsUpdate) | **PUT** /api/v2/organisations/divisions/{id}/ |  |


<a id="v2OrganisationsDivisionsCreate"></a>
# **v2OrganisationsDivisionsCreate**
> DivisionWrite v2OrganisationsDivisionsCreate(divisionWrite)



Create a division (a child organisation under the current parent org). Divisions are an advanced, rarely-needed feature: create one ONLY when the user has clearly stated they want to manage a separate business unit, location, or legal entity under their account. Do NOT create a division just to organise screenings, for a single-person or single-member organisation, or without an explicit request to do so. When in doubt, ask the user to confirm before calling this tool.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.DivisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    DivisionsApi apiInstance = new DivisionsApi(defaultClient);
    DivisionWrite divisionWrite = new DivisionWrite(); // DivisionWrite | 
    try {
      DivisionWrite result = apiInstance.v2OrganisationsDivisionsCreate(divisionWrite);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DivisionsApi#v2OrganisationsDivisionsCreate");
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
| **divisionWrite** | [**DivisionWrite**](DivisionWrite.md)|  | |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

<a id="v2OrganisationsDivisionsList"></a>
# **v2OrganisationsDivisionsList**
> PaginatedDivisionReadOnlyList v2OrganisationsDivisionsList(page, pageSize, paginate)



List method that handles both paginated and unpaginated responses and enforces the max_total_records limit (500).

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.DivisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    DivisionsApi apiInstance = new DivisionsApi(defaultClient);
    Integer page = 1; // Integer | A page number within the paginated result set.
    Integer pageSize = 50; // Integer | Number of results to return per page.
    Boolean paginate = true; // Boolean | Enable/disable pagination. When false, max 500 records returned.
    try {
      PaginatedDivisionReadOnlyList result = apiInstance.v2OrganisationsDivisionsList(page, pageSize, paginate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DivisionsApi#v2OrganisationsDivisionsList");
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
| **page** | **Integer**| A page number within the paginated result set. | [optional] [default to 1] |
| **pageSize** | **Integer**| Number of results to return per page. | [optional] [default to 50] |
| **paginate** | **Boolean**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true] |

### Return type

[**PaginatedDivisionReadOnlyList**](PaginatedDivisionReadOnlyList.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2OrganisationsDivisionsPartialUpdate"></a>
# **v2OrganisationsDivisionsPartialUpdate**
> DivisionWrite v2OrganisationsDivisionsPartialUpdate(id, patchedDivisionWrite)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.DivisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    DivisionsApi apiInstance = new DivisionsApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this organisation.
    PatchedDivisionWrite patchedDivisionWrite = new PatchedDivisionWrite(); // PatchedDivisionWrite | 
    try {
      DivisionWrite result = apiInstance.v2OrganisationsDivisionsPartialUpdate(id, patchedDivisionWrite);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DivisionsApi#v2OrganisationsDivisionsPartialUpdate");
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
| **id** | **UUID**| A UUID string identifying this organisation. | |
| **patchedDivisionWrite** | [**PatchedDivisionWrite**](PatchedDivisionWrite.md)|  | [optional] |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2OrganisationsDivisionsRetrieve"></a>
# **v2OrganisationsDivisionsRetrieve**
> DivisionReadOnly v2OrganisationsDivisionsRetrieve(id)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.DivisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    DivisionsApi apiInstance = new DivisionsApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this organisation.
    try {
      DivisionReadOnly result = apiInstance.v2OrganisationsDivisionsRetrieve(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DivisionsApi#v2OrganisationsDivisionsRetrieve");
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
| **id** | **UUID**| A UUID string identifying this organisation. | |

### Return type

[**DivisionReadOnly**](DivisionReadOnly.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2OrganisationsDivisionsUpdate"></a>
# **v2OrganisationsDivisionsUpdate**
> DivisionWrite v2OrganisationsDivisionsUpdate(id, divisionWrite)



Update an existing division&#39;s contact, billing, and address details.  Override also triggers a webhook on successful PUT and PATCH requests.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.DivisionsApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    DivisionsApi apiInstance = new DivisionsApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this organisation.
    DivisionWrite divisionWrite = new DivisionWrite(); // DivisionWrite | 
    try {
      DivisionWrite result = apiInstance.v2OrganisationsDivisionsUpdate(id, divisionWrite);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling DivisionsApi#v2OrganisationsDivisionsUpdate");
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
| **id** | **UUID**| A UUID string identifying this organisation. | |
| **divisionWrite** | [**DivisionWrite**](DivisionWrite.md)|  | |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

