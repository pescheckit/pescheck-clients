# ChecksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2ChecksList**](ChecksApi.md#v2ChecksList) | **GET** /api/v2/checks/ |  |
| [**v2ChecksRetrieve**](ChecksApi.md#v2ChecksRetrieve) | **GET** /api/v2/checks/{check_type}/ |  |


<a id="v2ChecksList"></a>
# **v2ChecksList**
> List&lt;V2CheckInfo&gt; v2ChecksList(checkType)



List the check types this API supports. The list is bounded metadata about the available check types (not a paginated collection), so the response is a flat array.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ChecksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ChecksApi apiInstance = new ChecksApi(defaultClient);
    String checkType = "checkType_example"; // String | Restrict the list to a single check type.
    try {
      List<V2CheckInfo> result = apiInstance.v2ChecksList(checkType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ChecksApi#v2ChecksList");
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
| **checkType** | **String**| Restrict the list to a single check type. | [optional] |

### Return type

[**List&lt;V2CheckInfo&gt;**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="v2ChecksRetrieve"></a>
# **v2ChecksRetrieve**
> V2CheckInfo v2ChecksRetrieve(checkType)



### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.ChecksApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    ChecksApi apiInstance = new ChecksApi(defaultClient);
    String checkType = "checkType_example"; // String | 
    try {
      V2CheckInfo result = apiInstance.v2ChecksRetrieve(checkType);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling ChecksApi#v2ChecksRetrieve");
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
| **checkType** | **String**|  | |

### Return type

[**V2CheckInfo**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

