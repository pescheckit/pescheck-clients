# AuthenticationApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateJWTToken2**](AuthenticationApi.md#generateJWTToken2) | **POST** /api/v2/jwt/generate/ |  |
| [**jwtCreate**](AuthenticationApi.md#jwtCreate) | **POST** /api/jwt/ |  |
| [**jwtRefreshCreate**](AuthenticationApi.md#jwtRefreshCreate) | **POST** /api/jwt/refresh/ |  |


<a id="generateJWTToken2"></a>
# **generateJWTToken2**
> JWTResponse generateJWTToken2(jwTGeneration)



Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id. Without it, your single organization is used; accounts with access to more than one organization must specify one.  For a plain login, use POST /api/jwt/.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    JWTGeneration jwTGeneration = new JWTGeneration(); // JWTGeneration | 
    try {
      JWTResponse result = apiInstance.generateJWTToken2(jwTGeneration);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#generateJWTToken2");
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
| **jwTGeneration** | [**JWTGeneration**](JWTGeneration.md)|  | |

### Return type

[**JWTResponse**](JWTResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

<a id="jwtCreate"></a>
# **jwtCreate**
> CustomTokenObtainPair jwtCreate(customTokenObtainPair)



Log in with email + password. Returns a JWT pair scoped to one organization.  Pass organization_id to select the organization or division to act for; it is required when your account has access to more than one. Without it, your single organization is used.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    CustomTokenObtainPair customTokenObtainPair = new CustomTokenObtainPair(); // CustomTokenObtainPair | 
    try {
      CustomTokenObtainPair result = apiInstance.jwtCreate(customTokenObtainPair);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#jwtCreate");
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
| **customTokenObtainPair** | [**CustomTokenObtainPair**](CustomTokenObtainPair.md)|  | |

### Return type

[**CustomTokenObtainPair**](CustomTokenObtainPair.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

<a id="jwtRefreshCreate"></a>
# **jwtRefreshCreate**
> TokenRefresh jwtRefreshCreate(tokenRefresh)



Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example
```java
// Import classes:
import io.pescheck.client.ApiClient;
import io.pescheck.client.ApiException;
import io.pescheck.client.Configuration;
import io.pescheck.client.auth.*;
import io.pescheck.client.models.*;
import io.pescheck.client.api.AuthenticationApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api.pescheck.io");
    
    // Configure OAuth2 access token for authorization: oauth2
    OAuth oauth2 = (OAuth) defaultClient.getAuthentication("oauth2");
    oauth2.setAccessToken("YOUR ACCESS TOKEN");

    AuthenticationApi apiInstance = new AuthenticationApi(defaultClient);
    TokenRefresh tokenRefresh = new TokenRefresh(); // TokenRefresh | 
    try {
      TokenRefresh result = apiInstance.jwtRefreshCreate(tokenRefresh);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling AuthenticationApi#jwtRefreshCreate");
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
| **tokenRefresh** | [**TokenRefresh**](TokenRefresh.md)|  | |

### Return type

[**TokenRefresh**](TokenRefresh.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

