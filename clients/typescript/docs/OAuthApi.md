# OAuthApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOAuthApplication2**](OAuthApi.md#createoauthapplication2) | **POST** /api/v2/oauth/applications/ |  |
| [**deleteOAuthApplication2**](OAuthApi.md#deleteoauthapplication2) | **DELETE** /api/v2/oauth/applications/{application_id}/ |  |
| [**listOAuthApplications2**](OAuthApi.md#listoauthapplications2) | **GET** /api/v2/oauth/applications/list/ |  |



## createOAuthApplication2

> OAuthApplicationResponse createOAuthApplication2(oAuthApplication)



Create OAuth application for API access

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@pescheckit/pescheck-client';
import type { CreateOAuthApplication2Request } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OAuthApi(config);

  const body = {
    // OAuthApplication
    oAuthApplication: ...,
  } satisfies CreateOAuthApplication2Request;

  try {
    const data = await api.createOAuthApplication2(body);
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
| **oAuthApplication** | [OAuthApplication](OAuthApplication.md) |  | |

### Return type

[**OAuthApplicationResponse**](OAuthApplicationResponse.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **400** | Bad Request |  -  |
| **403** | Forbidden |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteOAuthApplication2

> deleteOAuthApplication2(applicationId)



Delete an OAuth application

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@pescheckit/pescheck-client';
import type { DeleteOAuthApplication2Request } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OAuthApi(config);

  const body = {
    // string | Application ID to delete
    applicationId: applicationId_example,
  } satisfies DeleteOAuthApplication2Request;

  try {
    const data = await api.deleteOAuthApplication2(body);
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
| **applicationId** | `string` | Application ID to delete | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Application deleted |  -  |
| **403** | Forbidden |  -  |
| **404** | Application not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOAuthApplications2

> Array&lt;OAuthApplicationResponse&gt; listOAuthApplications2()



List OAuth applications for the organization

### Example

```ts
import {
  Configuration,
  OAuthApi,
} from '@pescheckit/pescheck-client';
import type { ListOAuthApplications2Request } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new OAuthApi(config);

  try {
    const data = await api.listOAuthApplications2();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Array&lt;OAuthApplicationResponse&gt;**](OAuthApplicationResponse.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

