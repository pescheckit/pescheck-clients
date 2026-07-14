# ProfilesApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2ProfilesCreate**](ProfilesApi.md#v2profilescreate) | **POST** /api/v2/profiles/ |  |
| [**v2ProfilesDestroy**](ProfilesApi.md#v2profilesdestroy) | **DELETE** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesList**](ProfilesApi.md#v2profileslist) | **GET** /api/v2/profiles/ |  |
| [**v2ProfilesPartialUpdate**](ProfilesApi.md#v2profilespartialupdate) | **PATCH** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesRetrieve**](ProfilesApi.md#v2profilesretrieve) | **GET** /api/v2/profiles/{id}/ |  |
| [**v2ProfilesUpdate**](ProfilesApi.md#v2profilesupdate) | **PUT** /api/v2/profiles/{id}/ |  |



## v2ProfilesCreate

> V2ProfileDetail v2ProfilesCreate(v2ProfileCreate)



### Example

```ts
import {
  Configuration,
  ProfilesApi,
} from '@pescheckit/pescheck-client';
import type { V2ProfilesCreateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ProfilesApi(config);

  const body = {
    // V2ProfileCreate
    v2ProfileCreate: {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Senior Accountant","profiles":["11","12"]}},{"check_type":"watchlist2check","config":{"threshold":80,"cutoff":50,"topics":["sanctions","pep"]}}]},
  } satisfies V2ProfilesCreateRequest;

  try {
    const data = await api.v2ProfilesCreate(body);
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
| **v2ProfileCreate** | [V2ProfileCreate](V2ProfileCreate.md) |  | |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

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


## v2ProfilesDestroy

> v2ProfilesDestroy(id)



### Example

```ts
import {
  Configuration,
  ProfilesApi,
} from '@pescheckit/pescheck-client';
import type { V2ProfilesDestroyRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ProfilesApi(config);

  const body = {
    // string | A UUID string identifying this profile.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V2ProfilesDestroyRequest;

  try {
    const data = await api.v2ProfilesDestroy(body);
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
| **id** | `string` | A UUID string identifying this profile. | [Defaults to `undefined`] |

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
| **204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v2ProfilesList

> PaginatedV2ProfileListItemList v2ProfilesList(checkType, isCustom, name, page, pageSize, paginate, sort)



### Example

```ts
import {
  Configuration,
  ProfilesApi,
} from '@pescheckit/pescheck-client';
import type { V2ProfilesListRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ProfilesApi(config);

  const body = {
    // 'addresscheck' | 'adversemedia2check' | 'adversemediacheck' | 'bigcheck' | 'criminalrecordscheck' | 'criminalrecordsuploadcheck' | 'customintegritycheck' | 'cvcheck' | 'edrcheck' | 'id2check' | 'integritycheck' | 'openhealthcarecheck' | 'qualificationcheck' | 'righttoworkcheck' | 'vogcheck' | 'watchlist2check' | 'watchlistcheck' | 'workreferencecheck' | 'worldwidecreditcheck' | Restrict to profiles containing at least one check of this type. (optional)
    checkType: checkType_example,
    // boolean | Restrict to custom (true) or system (false) profiles. (optional)
    isCustom: true,
    // string | Restrict to profiles whose name contains this value (case-insensitive). (optional)
    name: name_example,
    // number | A page number within the paginated result set. (optional)
    page: 1,
    // number | Number of results to return per page. (optional)
    pageSize: 50,
    // boolean | Enable/disable pagination. When false, max 500 records returned. (optional)
    paginate: true,
    // string | Which field to use when ordering the results. (optional)
    sort: sort_example,
  } satisfies V2ProfilesListRequest;

  try {
    const data = await api.v2ProfilesList(body);
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
| **checkType** | `addresscheck`, `adversemedia2check`, `adversemediacheck`, `bigcheck`, `criminalrecordscheck`, `criminalrecordsuploadcheck`, `customintegritycheck`, `cvcheck`, `edrcheck`, `id2check`, `integritycheck`, `openhealthcarecheck`, `qualificationcheck`, `righttoworkcheck`, `vogcheck`, `watchlist2check`, `watchlistcheck`, `workreferencecheck`, `worldwidecreditcheck` | Restrict to profiles containing at least one check of this type. | [Optional] [Defaults to `undefined`] [Enum: addresscheck, adversemedia2check, adversemediacheck, bigcheck, criminalrecordscheck, criminalrecordsuploadcheck, customintegritycheck, cvcheck, edrcheck, id2check, integritycheck, openhealthcarecheck, qualificationcheck, righttoworkcheck, vogcheck, watchlist2check, watchlistcheck, workreferencecheck, worldwidecreditcheck] |
| **isCustom** | `boolean` | Restrict to custom (true) or system (false) profiles. | [Optional] [Defaults to `undefined`] |
| **name** | `string` | Restrict to profiles whose name contains this value (case-insensitive). | [Optional] [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `1`] |
| **pageSize** | `number` | Number of results to return per page. | [Optional] [Defaults to `50`] |
| **paginate** | `boolean` | Enable/disable pagination. When false, max 500 records returned. | [Optional] [Defaults to `true`] |
| **sort** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedV2ProfileListItemList**](PaginatedV2ProfileListItemList.md)

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


## v2ProfilesPartialUpdate

> V2ProfileDetail v2ProfilesPartialUpdate(id, patchedV2ProfilePartialUpdate)



Update name and/or description only. Use PUT to change the check list.

### Example

```ts
import {
  Configuration,
  ProfilesApi,
} from '@pescheckit/pescheck-client';
import type { V2ProfilesPartialUpdateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ProfilesApi(config);

  const body = {
    // string | A UUID string identifying this profile.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchedV2ProfilePartialUpdate (optional)
    patchedV2ProfilePartialUpdate: {"name":"VOG + Watchlist Screening (NL)","description":"Adjusted description for the Dutch market."},
  } satisfies V2ProfilesPartialUpdateRequest;

  try {
    const data = await api.v2ProfilesPartialUpdate(body);
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
| **id** | `string` | A UUID string identifying this profile. | [Defaults to `undefined`] |
| **patchedV2ProfilePartialUpdate** | [PatchedV2ProfilePartialUpdate](PatchedV2ProfilePartialUpdate.md) |  | [Optional] |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

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


## v2ProfilesRetrieve

> V2ProfileDetail v2ProfilesRetrieve(id)



### Example

```ts
import {
  Configuration,
  ProfilesApi,
} from '@pescheckit/pescheck-client';
import type { V2ProfilesRetrieveRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ProfilesApi(config);

  const body = {
    // string | A UUID string identifying this profile.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V2ProfilesRetrieveRequest;

  try {
    const data = await api.v2ProfilesRetrieve(body);
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
| **id** | `string` | A UUID string identifying this profile. | [Defaults to `undefined`] |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

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


## v2ProfilesUpdate

> V2ProfileDetail v2ProfilesUpdate(id, v2ProfileUpdate)



Replace the profile. Checks matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

### Example

```ts
import {
  Configuration,
  ProfilesApi,
} from '@pescheckit/pescheck-client';
import type { V2ProfilesUpdateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new ProfilesApi(config);

  const body = {
    // string | A UUID string identifying this profile.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // V2ProfileUpdate
    v2ProfileUpdate: {"name":"VOG + Watchlist Screening","description":"Dutch certificate of good behavior plus international watchlist check.","checks":[{"profile_check_id":"018e9f1e-3a85-7f50-a4f3-d4f6e7b9c1d2","check_type":"vogcheck","config":{"org_name":"Pescheck","function":"Lead Engineer","profiles":["11","12","13"]}},{"check_type":"watchlist2check","config":{"threshold":85,"topics":["sanctions","pep","crime"]}}]},
  } satisfies V2ProfilesUpdateRequest;

  try {
    const data = await api.v2ProfilesUpdate(body);
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
| **id** | `string` | A UUID string identifying this profile. | [Defaults to `undefined`] |
| **v2ProfileUpdate** | [V2ProfileUpdate](V2ProfileUpdate.md) |  | |

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

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

