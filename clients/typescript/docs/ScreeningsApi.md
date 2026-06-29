# ScreeningsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2ScreeningsCreate**](ScreeningsApi.md#v2screeningscreate) | **POST** /api/v2/screenings/ |  |
| [**v2ScreeningsDocumentsList**](ScreeningsApi.md#v2screeningsdocumentslist) | **GET** /api/v2/screenings/{id}/documents/ | Retrieve screening documents |
| [**v2ScreeningsList**](ScreeningsApi.md#v2screeningslist) | **GET** /api/v2/screenings/ |  |
| [**v2ScreeningsRetrieve**](ScreeningsApi.md#v2screeningsretrieve) | **GET** /api/v2/screenings/{id}/ |  |



## v2ScreeningsCreate

> V2ScreeningDetail v2ScreeningsCreate(v2ScreeningCreate)



### Example

```ts
import {
  Configuration,
  ScreeningsApi,
} from '@pescheckit/pescheck-client';
import type { V2ScreeningsCreateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ScreeningsApi(config);

  const body = {
    // V2ScreeningCreate
    v2ScreeningCreate: {"profile_id":"018e9f1e-3a73-7eba-b29c-c2c4a8c40c8a","candidate":{"first_name":"Jan","last_name":"de Vries","email":"jan.devries@example.com","date_of_birth":"1985-04-12"}},
  } satisfies V2ScreeningsCreateRequest;

  try {
    const data = await api.v2ScreeningsCreate(body);
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
| **v2ScreeningCreate** | [V2ScreeningCreate](V2ScreeningCreate.md) |  | |

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2 application](../README.md#oauth2-application)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v2ScreeningsDocumentsList

> Array&lt;V2Document&gt; v2ScreeningsDocumentsList(id, checkId, checkType)

Retrieve screening documents

Documents attached to the screening\&#39;s checks. Files are delivered inline as Base64 in &#x60;content&#x60;. Narrow the result with &#x60;check_id&#x60; or &#x60;check_type&#x60;.

### Example

```ts
import {
  Configuration,
  ScreeningsApi,
} from '@pescheckit/pescheck-client';
import type { V2ScreeningsDocumentsListRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ScreeningsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Only documents from the check with this id. (optional)
    checkId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // string | Only documents from checks of this type. (optional)
    checkType: checkType_example,
  } satisfies V2ScreeningsDocumentsListRequest;

  try {
    const data = await api.v2ScreeningsDocumentsList(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **checkId** | `string` | Only documents from the check with this id. | [Optional] [Defaults to `undefined`] |
| **checkType** | `string` | Only documents from checks of this type. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;V2Document&gt;**](V2Document.md)

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


## v2ScreeningsList

> PaginatedV2ScreeningListItemList v2ScreeningsList(page, pageSize, paginate)



### Example

```ts
import {
  Configuration,
  ScreeningsApi,
} from '@pescheckit/pescheck-client';
import type { V2ScreeningsListRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ScreeningsApi(config);

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 1,
    // number | Number of results to return per page. (optional)
    pageSize: 50,
    // boolean | Enable/disable pagination. When false, max 500 records returned. (optional)
    paginate: true,
  } satisfies V2ScreeningsListRequest;

  try {
    const data = await api.v2ScreeningsList(body);
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
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `50`] |
| **paginate** | `boolean` | Enable/disable pagination. When false, max 500 records returned. | [Optional] [Defaults to `true`] |

### Return type

[**PaginatedV2ScreeningListItemList**](PaginatedV2ScreeningListItemList.md)

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


## v2ScreeningsRetrieve

> V2ScreeningDetail v2ScreeningsRetrieve(id)



### Example

```ts
import {
  Configuration,
  ScreeningsApi,
} from '@pescheckit/pescheck-client';
import type { V2ScreeningsRetrieveRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ScreeningsApi(config);

  const body = {
    // string | A UUID string identifying this screening.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V2ScreeningsRetrieveRequest;

  try {
    const data = await api.v2ScreeningsRetrieve(body);
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
| **id** | `string` | A UUID string identifying this screening. | [Defaults to `undefined`] |

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

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

