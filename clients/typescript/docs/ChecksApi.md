# ChecksApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2ChecksList**](ChecksApi.md#v2checkslist) | **GET** /api/v2/checks/ |  |
| [**v2ChecksRetrieve**](ChecksApi.md#v2checksretrieve) | **GET** /api/v2/checks/{check_type}/ |  |



## v2ChecksList

> Array&lt;V2CheckInfo&gt; v2ChecksList(checkType)



List the check types this API supports. The list is bounded metadata about the available check types (not a paginated collection), so the response is a flat array.

### Example

```ts
import {
  Configuration,
  ChecksApi,
} from '@pescheckit/pescheck-client';
import type { V2ChecksListRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChecksApi(config);

  const body = {
    // string | Restrict the list to a single check type. (optional)
    checkType: checkType_example,
  } satisfies V2ChecksListRequest;

  try {
    const data = await api.v2ChecksList(body);
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
| **checkType** | `string` | Restrict the list to a single check type. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;V2CheckInfo&gt;**](V2CheckInfo.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v2ChecksRetrieve

> V2CheckInfo v2ChecksRetrieve(checkType)



### Example

```ts
import {
  Configuration,
  ChecksApi,
} from '@pescheckit/pescheck-client';
import type { V2ChecksRetrieveRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ChecksApi(config);

  const body = {
    // string
    checkType: checkType_example,
  } satisfies V2ChecksRetrieveRequest;

  try {
    const data = await api.v2ChecksRetrieve(body);
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
| **checkType** | `string` |  | [Defaults to `undefined`] |

### Return type

[**V2CheckInfo**](V2CheckInfo.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

