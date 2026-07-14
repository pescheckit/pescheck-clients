# ProfilesApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2ProfilesCreate**](ProfilesApi.md#v2ProfilesCreate) | **POST** /api/v2/profiles/ |  |
| [**v2ProfilesDestroy**](ProfilesApi.md#v2ProfilesDestroy) | **DELETE** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesList**](ProfilesApi.md#v2ProfilesList) | **GET** /api/v2/profiles/ |  |
| [**v2ProfilesPartialUpdate**](ProfilesApi.md#v2ProfilesPartialUpdate) | **PATCH** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesRetrieve**](ProfilesApi.md#v2ProfilesRetrieve) | **GET** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesUpdate**](ProfilesApi.md#v2ProfilesUpdate) | **PUT** /api/v2/profiles/{id}/ |  |


<a id="v2ProfilesCreate"></a>
# **v2ProfilesCreate**
> V2ProfileDetail v2ProfilesCreate(v2ProfileCreate)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ProfilesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ProfilesApi apiInstance = new ProfilesApi(defaultClient);
    V2ProfileCreate v2ProfileCreate = new V2ProfileCreate(); // V2ProfileCreate | 
    try {
      V2ProfileDetail result = apiInstance.v2ProfilesCreate(v2ProfileCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProfilesApi#v2ProfilesCreate");
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
| **v2ProfileCreate** | [**V2ProfileCreate**](V2ProfileCreate.md)|  | |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

<a id="v2ProfilesDestroy"></a>
# **v2ProfilesDestroy**
> v2ProfilesDestroy(id)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ProfilesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ProfilesApi apiInstance = new ProfilesApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this profile.
    try {
      apiInstance.v2ProfilesDestroy(id);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProfilesApi#v2ProfilesDestroy");
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
| **id** | **UUID**| A UUID string identifying this profile. | |

### Return type

null (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | No response body |  -  |

<a id="v2ProfilesList"></a>
# **v2ProfilesList**
> PaginatedV2ProfileListItemList v2ProfilesList(checkType, isCustom, name, page, pageSize, paginate, sort)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ProfilesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ProfilesApi apiInstance = new ProfilesApi(defaultClient);
    String checkType = "addresscheck"; // String | Restrict to profiles containing at least one check of this type.
    Boolean isCustom = true; // Boolean | Restrict to custom (true) or system (false) profiles.
    String name = "name_example"; // String | Restrict to profiles whose name contains this value (case-insensitive).
    Integer page = 1; // Integer | A page number within the paginated result set.
    Integer pageSize = 50; // Integer | Number of results to return per page.
    Boolean paginate = true; // Boolean | Enable/disable pagination. When false, max 500 records returned.
    String sort = "sort_example"; // String | Which field to use when ordering the results.
    try {
      PaginatedV2ProfileListItemList result = apiInstance.v2ProfilesList(checkType, isCustom, name, page, pageSize, paginate, sort);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProfilesApi#v2ProfilesList");
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
| **checkType** | **String**| Restrict to profiles containing at least one check of this type. | [optional] [enum: addresscheck, adversemedia2check, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, id2check, integritycheck, openhealthcarecheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck] |
| **isCustom** | **Boolean**| Restrict to custom (true) or system (false) profiles. | [optional] |
| **name** | **String**| Restrict to profiles whose name contains this value (case-insensitive). | [optional] |
| **page** | **Integer**| A page number within the paginated result set. | [optional] [default to 1] |
| **pageSize** | **Integer**| Number of results to return per page. | [optional] [default to 50] |
| **paginate** | **Boolean**| Enable/disable pagination. When false, max 500 records returned. | [optional] [default to true] |
| **sort** | **String**| Which field to use when ordering the results. | [optional] |

### Return type

[**PaginatedV2ProfileListItemList**](PaginatedV2ProfileListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2ProfilesPartialUpdate"></a>
# **v2ProfilesPartialUpdate**
> V2ProfileDetail v2ProfilesPartialUpdate(id, patchedV2ProfilePartialUpdate)



Update name and/or description only. Use PUT to change the check list.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ProfilesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ProfilesApi apiInstance = new ProfilesApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this profile.
    PatchedV2ProfilePartialUpdate patchedV2ProfilePartialUpdate = new PatchedV2ProfilePartialUpdate(); // PatchedV2ProfilePartialUpdate | 
    try {
      V2ProfileDetail result = apiInstance.v2ProfilesPartialUpdate(id, patchedV2ProfilePartialUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProfilesApi#v2ProfilesPartialUpdate");
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
| **id** | **UUID**| A UUID string identifying this profile. | |
| **patchedV2ProfilePartialUpdate** | [**PatchedV2ProfilePartialUpdate**](PatchedV2ProfilePartialUpdate.md)|  | [optional] |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2ProfilesRetrieve"></a>
# **v2ProfilesRetrieve**
> V2ProfileDetail v2ProfilesRetrieve(id)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ProfilesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ProfilesApi apiInstance = new ProfilesApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this profile.
    try {
      V2ProfileDetail result = apiInstance.v2ProfilesRetrieve(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProfilesApi#v2ProfilesRetrieve");
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
| **id** | **UUID**| A UUID string identifying this profile. | |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2ProfilesUpdate"></a>
# **v2ProfilesUpdate**
> V2ProfileDetail v2ProfilesUpdate(id, v2ProfileUpdate)



Replace the profile. Checks matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ProfilesApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ProfilesApi apiInstance = new ProfilesApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this profile.
    V2ProfileUpdate v2ProfileUpdate = new V2ProfileUpdate(); // V2ProfileUpdate | 
    try {
      V2ProfileDetail result = apiInstance.v2ProfilesUpdate(id, v2ProfileUpdate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ProfilesApi#v2ProfilesUpdate");
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
| **id** | **UUID**| A UUID string identifying this profile. | |
| **v2ProfileUpdate** | [**V2ProfileUpdate**](V2ProfileUpdate.md)|  | |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

