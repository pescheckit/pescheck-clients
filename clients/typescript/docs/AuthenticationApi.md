# AuthenticationApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**generateJWTToken2**](AuthenticationApi.md#generatejwttoken2) | **POST** /api/v2/jwt/generate/ |  |
| [**jwtCreate**](AuthenticationApi.md#jwtcreate) | **POST** /api/jwt/ |  |
| [**jwtRefreshCreate**](AuthenticationApi.md#jwtrefreshcreate) | **POST** /api/jwt/refresh/ |  |



## generateJWTToken2

> JWTResponse generateJWTToken2(jWTGeneration)



Log in with email + password. Returns a JWT pair scoped to the organization or division specified by organisation_id/division_id (defaults to your current org).  For a plain login, use POST /api/jwt/.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@pescheckit/pescheck-client';
import type { GenerateJWTToken2Request } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // JWTGeneration
    jWTGeneration: ...,
  } satisfies GenerateJWTToken2Request;

  try {
    const data = await api.generateJWTToken2(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **jWTGeneration** | [JWTGeneration](JWTGeneration.md) |  | |

### Return type

[**JWTResponse**](JWTResponse.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **400** | Bad Request |  -  |
| **401** | Unauthorized |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## jwtCreate

> CustomTokenObtainPair jwtCreate(customTokenObtainPair)



Log in with email + password. Returns a JWT pair scoped to your current organization (last viewed, or first available).  For a token scoped to a specific org or division, use POST /api/v2/jwt/generate/.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@pescheckit/pescheck-client';
import type { JwtCreateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // CustomTokenObtainPair
    customTokenObtainPair: ...,
  } satisfies JwtCreateRequest;

  try {
    const data = await api.jwtCreate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **customTokenObtainPair** | [CustomTokenObtainPair](CustomTokenObtainPair.md) |  | |

### Return type

[**CustomTokenObtainPair**](CustomTokenObtainPair.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## jwtRefreshCreate

> TokenRefresh jwtRefreshCreate(tokenRefresh)



Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.

### Example

```ts
import {
  Configuration,
  AuthenticationApi,
} from '@pescheckit/pescheck-client';
import type { JwtRefreshCreateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AuthenticationApi(config);

  const body = {
    // TokenRefresh
    tokenRefresh: ...,
  } satisfies JwtRefreshCreateRequest;

  try {
    const data = await api.jwtRefreshCreate(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **tokenRefresh** | [TokenRefresh](TokenRefresh.md) |  | |

### Return type

[**TokenRefresh**](TokenRefresh.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

