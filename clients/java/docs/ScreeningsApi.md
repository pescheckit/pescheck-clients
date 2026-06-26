# ScreeningsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2ScreeningsCreate**](ScreeningsApi.md#v2ScreeningsCreate) | **POST** /api/v2/screenings/ |  |
| [**v2ScreeningsDocumentsList**](ScreeningsApi.md#v2ScreeningsDocumentsList) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents |
| [**v2ScreeningsList**](ScreeningsApi.md#v2ScreeningsList) | **GET** /api/v2/screenings/ |  |
| [**v2ScreeningsRetrieve**](ScreeningsApi.md#v2ScreeningsRetrieve) | **GET** /api/v2/screenings/{id}/ |  |


<a id="v2ScreeningsCreate"></a>
# **v2ScreeningsCreate**
> V2ScreeningDetail v2ScreeningsCreate(v2ScreeningCreate)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ScreeningsApi;

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

    ScreeningsApi apiInstance = new ScreeningsApi(defaultClient);
    V2ScreeningCreate v2ScreeningCreate = new V2ScreeningCreate(); // V2ScreeningCreate | 
    try {
      V2ScreeningDetail result = apiInstance.v2ScreeningsCreate(v2ScreeningCreate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ScreeningsApi#v2ScreeningsCreate");
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
| **v2ScreeningCreate** | [**V2ScreeningCreate**](V2ScreeningCreate.md)|  | |

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

<a id="v2ScreeningsDocumentsList"></a>
# **v2ScreeningsDocumentsList**
> List&lt;V2Document&gt; v2ScreeningsDocumentsList(id, checkId, checkType)

Retrieve screening documents

Documents attached to the screening&#39;s checks. Files are delivered inline as Base64 in &#x60;content&#x60;. Narrow the result with &#x60;check_id&#x60; or &#x60;check_type&#x60;.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ScreeningsApi;

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

    ScreeningsApi apiInstance = new ScreeningsApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | 
    UUID checkId = UUID.randomUUID(); // UUID | Only documents from the check with this id.
    String checkType = "checkType_example"; // String | Only documents from checks of this type.
    try {
      List<V2Document> result = apiInstance.v2ScreeningsDocumentsList(id, checkId, checkType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ScreeningsApi#v2ScreeningsDocumentsList");
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
| **id** | **UUID**|  | |
| **checkId** | **UUID**| Only documents from the check with this id. | [optional] |
| **checkType** | **String**| Only documents from checks of this type. | [optional] |

### Return type

[**List&lt;V2Document&gt;**](V2Document.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2ScreeningsList"></a>
# **v2ScreeningsList**
> PaginatedV2ScreeningListItemList v2ScreeningsList(page, pageSize, paginate)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ScreeningsApi;

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

    ScreeningsApi apiInstance = new ScreeningsApi(defaultClient);
    Integer page = 1; // Integer | A page number within the paginated result set.
    Integer pageSize = 50; // Integer | Number of results to return per page.
    Boolean paginate = true; // Boolean | Enable/disable pagination. When false, max 500 records returned.
    try {
      PaginatedV2ScreeningListItemList result = apiInstance.v2ScreeningsList(page, pageSize, paginate);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ScreeningsApi#v2ScreeningsList");
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

[**PaginatedV2ScreeningListItemList**](PaginatedV2ScreeningListItemList.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2ScreeningsRetrieve"></a>
# **v2ScreeningsRetrieve**
> V2ScreeningDetail v2ScreeningsRetrieve(id)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ScreeningsApi;

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

    ScreeningsApi apiInstance = new ScreeningsApi(defaultClient);
    UUID id = UUID.randomUUID(); // UUID | A UUID string identifying this screening.
    try {
      V2ScreeningDetail result = apiInstance.v2ScreeningsRetrieve(id);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ScreeningsApi#v2ScreeningsRetrieve");
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
| **id** | **UUID**| A UUID string identifying this screening. | |

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

