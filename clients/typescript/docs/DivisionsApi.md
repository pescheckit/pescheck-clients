# DivisionsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganisationsDivisionsCreate**](DivisionsApi.md#v2organisationsdivisionscreate) | **POST** /api/v2/organisations/divisions/ |  |
| [**v2OrganisationsDivisionsList**](DivisionsApi.md#v2organisationsdivisionslist) | **GET** /api/v2/organisations/divisions/ |  |
| [**v2OrganisationsDivisionsPartialUpdate**](DivisionsApi.md#v2organisationsdivisionspartialupdate) | **PATCH** /api/v2/organisations/divisions/{id}/ |  |
| [**v2OrganisationsDivisionsRetrieve**](DivisionsApi.md#v2organisationsdivisionsretrieve) | **GET** /api/v2/organisations/divisions/{id}/ |  |
| [**v2OrganisationsDivisionsUpdate**](DivisionsApi.md#v2organisationsdivisionsupdate) | **PUT** /api/v2/organisations/divisions/{id}/ |  |



## v2OrganisationsDivisionsCreate

> DivisionWrite v2OrganisationsDivisionsCreate(divisionWrite)



Create a division (a child organisation under the current parent org). Divisions are an advanced, rarely-needed feature: create one ONLY when the user has clearly stated they want to manage a separate business unit, location, or legal entity under their account. Do NOT create a division just to organise screenings, for a single-person or single-member organisation, or without an explicit request to do so. When in doubt, ask the user to confirm before calling this tool.

### Example

```ts
import {
  Configuration,
  DivisionsApi,
} from '@pescheck/api-client';
import type { V2OrganisationsDivisionsCreateRequest } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DivisionsApi(config);

  const body = {
    // DivisionWrite
    divisionWrite: ...,
  } satisfies V2OrganisationsDivisionsCreateRequest;

  try {
    const data = await api.v2OrganisationsDivisionsCreate(body);
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
| **divisionWrite** | [DivisionWrite](DivisionWrite.md) |  | |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v2OrganisationsDivisionsList

> PaginatedDivisionReadOnlyList v2OrganisationsDivisionsList(page, pageSize, paginate)



List method that handles both paginated and unpaginated responses and enforces the max_total_records limit (500).

### Example

```ts
import {
  Configuration,
  DivisionsApi,
} from '@pescheck/api-client';
import type { V2OrganisationsDivisionsListRequest } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DivisionsApi(config);

  const body = {
    // number | A page number within the paginated result set. (optional)
    page: 1,
    // number | Number of results to return per page. (optional)
    pageSize: 50,
    // boolean | Enable/disable pagination. When false, max 500 records returned. (optional)
    paginate: true,
  } satisfies V2OrganisationsDivisionsListRequest;

  try {
    const data = await api.v2OrganisationsDivisionsList(body);
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

[**PaginatedDivisionReadOnlyList**](PaginatedDivisionReadOnlyList.md)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v2OrganisationsDivisionsPartialUpdate

> DivisionWrite v2OrganisationsDivisionsPartialUpdate(id, patchedDivisionWrite)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example

```ts
import {
  Configuration,
  DivisionsApi,
} from '@pescheck/api-client';
import type { V2OrganisationsDivisionsPartialUpdateRequest } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DivisionsApi(config);

  const body = {
    // string | A UUID string identifying this organisation.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // PatchedDivisionWrite (optional)
    patchedDivisionWrite: ...,
  } satisfies V2OrganisationsDivisionsPartialUpdateRequest;

  try {
    const data = await api.v2OrganisationsDivisionsPartialUpdate(body);
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
| **id** | `string` | A UUID string identifying this organisation. | [Defaults to `undefined`] |
| **patchedDivisionWrite** | [PatchedDivisionWrite](PatchedDivisionWrite.md) |  | [Optional] |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v2OrganisationsDivisionsRetrieve

> DivisionReadOnly v2OrganisationsDivisionsRetrieve(id)



A division is a child organisation under a parent org, used only when a customer needs to manage genuinely separate business units, locations, or legal entities under one account. The vast majority of organisations operate as a single entity and need no divisions. Only top-level (parent) organisations can have divisions.

### Example

```ts
import {
  Configuration,
  DivisionsApi,
} from '@pescheck/api-client';
import type { V2OrganisationsDivisionsRetrieveRequest } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DivisionsApi(config);

  const body = {
    // string | A UUID string identifying this organisation.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies V2OrganisationsDivisionsRetrieveRequest;

  try {
    const data = await api.v2OrganisationsDivisionsRetrieve(body);
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
| **id** | `string` | A UUID string identifying this organisation. | [Defaults to `undefined`] |

### Return type

[**DivisionReadOnly**](DivisionReadOnly.md)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## v2OrganisationsDivisionsUpdate

> DivisionWrite v2OrganisationsDivisionsUpdate(id, divisionWrite)



Update an existing division\&#39;s contact, billing, and address details.  Override also triggers a webhook on successful PUT and PATCH requests.

### Example

```ts
import {
  Configuration,
  DivisionsApi,
} from '@pescheck/api-client';
import type { V2OrganisationsDivisionsUpdateRequest } from '@pescheck/api-client';

async function example() {
  console.log("🚀 Testing @pescheck/api-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 password
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
    // To configure OAuth2 access token for authorization: oauth2 accessCode
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new DivisionsApi(config);

  const body = {
    // string | A UUID string identifying this organisation.
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // DivisionWrite
    divisionWrite: ...,
  } satisfies V2OrganisationsDivisionsUpdateRequest;

  try {
    const data = await api.v2OrganisationsDivisionsUpdate(body);
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
| **id** | `string` | A UUID string identifying this organisation. | [Defaults to `undefined`] |
| **divisionWrite** | [DivisionWrite](DivisionWrite.md) |  | |

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2 password](../README.md#oauth2-password), [oauth2 application](../README.md#oauth2-application), [oauth2 accessCode](../README.md#oauth2-accessCode)

### HTTP request headers

- **Content-Type**: `application/json`, `multipart/form-data`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

