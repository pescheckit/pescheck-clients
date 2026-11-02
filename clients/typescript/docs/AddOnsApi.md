# AddOnsApi

All URIs are relative to *https://api.pescheck.io*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**v2OrganisationsAddonsList**](AddOnsApi.md#v2organisationsaddonslist) | **GET** /api/v2/organisations/addons/ |  |
| [**v2OrganisationsAddonsPartialUpdate**](AddOnsApi.md#v2organisationsaddonspartialupdate) | **PATCH** /api/v2/organisations/addons/{addon}/ |  |
| [**v2OrganisationsAddonsRetrieve**](AddOnsApi.md#v2organisationsaddonsretrieve) | **GET** /api/v2/organisations/addons/{addon}/ |  |
| [**v2OrganisationsAddonsUpdate**](AddOnsApi.md#v2organisationsaddonsupdate) | **PUT** /api/v2/organisations/addons/{addon}/ |  |



## v2OrganisationsAddonsList

> Array&lt;OrganisationAddon&gt; v2OrganisationsAddonsList(divisionId)



List every add-on with whether it is enabled for the organisation.

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from '@pescheckit/pescheck-client';
import type { V2OrganisationsAddonsListRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // string | Act on this division instead of the organisation the token belongs to. (optional)
    divisionId: divisionId_example,
  } satisfies V2OrganisationsAddonsListRequest;

  try {
    const data = await api.v2OrganisationsAddonsList(body);
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
| **divisionId** | `string` | Act on this division instead of the organisation the token belongs to. | [Optional] [Defaults to `undefined`] |

### Return type

[**Array&lt;OrganisationAddon&gt;**](OrganisationAddon.md)

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


## v2OrganisationsAddonsPartialUpdate

> OrganisationAddonUpdateResult v2OrganisationsAddonsPartialUpdate(addon, divisionId, patchedOrganisationAddonUpdate)



Switch an add-on on or off. Enabling is billed monthly from today.

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from '@pescheckit/pescheck-client';
import type { V2OrganisationsAddonsPartialUpdateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // 'api_access' | 'branded_journey' | 'connected_ats' | 'sso' | The add-on to act on.
    addon: addon_example,
    // string | Act on this division instead of the organisation the token belongs to. (optional)
    divisionId: divisionId_example,
    // PatchedOrganisationAddonUpdate (optional)
    patchedOrganisationAddonUpdate: {"enabled":false},
  } satisfies V2OrganisationsAddonsPartialUpdateRequest;

  try {
    const data = await api.v2OrganisationsAddonsPartialUpdate(body);
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
| **addon** | `api_access`, `branded_journey`, `connected_ats`, `sso` | The add-on to act on. | [Defaults to `undefined`] [Enum: api_access, branded_journey, connected_ats, sso] |
| **divisionId** | `string` | Act on this division instead of the organisation the token belongs to. | [Optional] [Defaults to `undefined`] |
| **patchedOrganisationAddonUpdate** | [PatchedOrganisationAddonUpdate](PatchedOrganisationAddonUpdate.md) |  | [Optional] |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

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


## v2OrganisationsAddonsRetrieve

> OrganisationAddon v2OrganisationsAddonsRetrieve(addon, divisionId)



Get one add-on\&#39;s state for the organisation.

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from '@pescheckit/pescheck-client';
import type { V2OrganisationsAddonsRetrieveRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // 'api_access' | 'branded_journey' | 'connected_ats' | 'sso' | The add-on to act on.
    addon: addon_example,
    // string | Act on this division instead of the organisation the token belongs to. (optional)
    divisionId: divisionId_example,
  } satisfies V2OrganisationsAddonsRetrieveRequest;

  try {
    const data = await api.v2OrganisationsAddonsRetrieve(body);
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
| **addon** | `api_access`, `branded_journey`, `connected_ats`, `sso` | The add-on to act on. | [Defaults to `undefined`] [Enum: api_access, branded_journey, connected_ats, sso] |
| **divisionId** | `string` | Act on this division instead of the organisation the token belongs to. | [Optional] [Defaults to `undefined`] |

### Return type

[**OrganisationAddon**](OrganisationAddon.md)

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


## v2OrganisationsAddonsUpdate

> OrganisationAddonUpdateResult v2OrganisationsAddonsUpdate(addon, organisationAddonUpdate, divisionId)



Switch an add-on on or off. Enabling is billed monthly from today.

### Example

```ts
import {
  Configuration,
  AddOnsApi,
} from '@pescheckit/pescheck-client';
import type { V2OrganisationsAddonsUpdateRequest } from '@pescheckit/pescheck-client';

async function example() {
  console.log("🚀 Testing @pescheckit/pescheck-client SDK...");
  const config = new Configuration({ 
    // To configure OAuth2 access token for authorization: oauth2 application
    accessToken: "YOUR ACCESS TOKEN",
  });
  const api = new AddOnsApi(config);

  const body = {
    // 'api_access' | 'branded_journey' | 'connected_ats' | 'sso' | The add-on to act on.
    addon: addon_example,
    // OrganisationAddonUpdate
    organisationAddonUpdate: {"enabled":false},
    // string | Act on this division instead of the organisation the token belongs to. (optional)
    divisionId: divisionId_example,
  } satisfies V2OrganisationsAddonsUpdateRequest;

  try {
    const data = await api.v2OrganisationsAddonsUpdate(body);
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
| **addon** | `api_access`, `branded_journey`, `connected_ats`, `sso` | The add-on to act on. | [Defaults to `undefined`] [Enum: api_access, branded_journey, connected_ats, sso] |
| **organisationAddonUpdate** | [OrganisationAddonUpdate](OrganisationAddonUpdate.md) |  | |
| **divisionId** | `string` | Act on this division instead of the organisation the token belongs to. | [Optional] [Defaults to `undefined`] |

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

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

