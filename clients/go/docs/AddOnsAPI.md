# \AddOnsAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2OrganisationsAddonsList**](AddOnsAPI.md#V2OrganisationsAddonsList) | **Get** /api/v2/organisations/addons/ | 
[**V2OrganisationsAddonsPartialUpdate**](AddOnsAPI.md#V2OrganisationsAddonsPartialUpdate) | **Patch** /api/v2/organisations/addons/{addon}/ | 
[**V2OrganisationsAddonsRetrieve**](AddOnsAPI.md#V2OrganisationsAddonsRetrieve) | **Get** /api/v2/organisations/addons/{addon}/ | 
[**V2OrganisationsAddonsUpdate**](AddOnsAPI.md#V2OrganisationsAddonsUpdate) | **Put** /api/v2/organisations/addons/{addon}/ | 



## V2OrganisationsAddonsList

> []OrganisationAddon V2OrganisationsAddonsList(ctx).DivisionId(divisionId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/pescheckit/pescheck-clients/clients/go"
)

func main() {
	divisionId := "divisionId_example" // string | Act on this division instead of the organisation the token belongs to. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AddOnsAPI.V2OrganisationsAddonsList(context.Background()).DivisionId(divisionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AddOnsAPI.V2OrganisationsAddonsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsAddonsList`: []OrganisationAddon
	fmt.Fprintf(os.Stdout, "Response from `AddOnsAPI.V2OrganisationsAddonsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsAddonsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divisionId** | **string** | Act on this division instead of the organisation the token belongs to. | 

### Return type

[**[]OrganisationAddon**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganisationsAddonsPartialUpdate

> OrganisationAddonUpdateResult V2OrganisationsAddonsPartialUpdate(ctx, addon).DivisionId(divisionId).PatchedOrganisationAddonUpdate(patchedOrganisationAddonUpdate).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/pescheckit/pescheck-clients/clients/go"
)

func main() {
	addon := "addon_example" // string | The add-on to act on.
	divisionId := "divisionId_example" // string | Act on this division instead of the organisation the token belongs to. (optional)
	patchedOrganisationAddonUpdate := *openapiclient.NewPatchedOrganisationAddonUpdate() // PatchedOrganisationAddonUpdate |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AddOnsAPI.V2OrganisationsAddonsPartialUpdate(context.Background(), addon).DivisionId(divisionId).PatchedOrganisationAddonUpdate(patchedOrganisationAddonUpdate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AddOnsAPI.V2OrganisationsAddonsPartialUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsAddonsPartialUpdate`: OrganisationAddonUpdateResult
	fmt.Fprintf(os.Stdout, "Response from `AddOnsAPI.V2OrganisationsAddonsPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**addon** | **string** | The add-on to act on. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsAddonsPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **divisionId** | **string** | Act on this division instead of the organisation the token belongs to. | 
 **patchedOrganisationAddonUpdate** | [**PatchedOrganisationAddonUpdate**](PatchedOrganisationAddonUpdate.md) |  | 

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganisationsAddonsRetrieve

> OrganisationAddon V2OrganisationsAddonsRetrieve(ctx, addon).DivisionId(divisionId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/pescheckit/pescheck-clients/clients/go"
)

func main() {
	addon := "addon_example" // string | The add-on to act on.
	divisionId := "divisionId_example" // string | Act on this division instead of the organisation the token belongs to. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AddOnsAPI.V2OrganisationsAddonsRetrieve(context.Background(), addon).DivisionId(divisionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AddOnsAPI.V2OrganisationsAddonsRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsAddonsRetrieve`: OrganisationAddon
	fmt.Fprintf(os.Stdout, "Response from `AddOnsAPI.V2OrganisationsAddonsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**addon** | **string** | The add-on to act on. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsAddonsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **divisionId** | **string** | Act on this division instead of the organisation the token belongs to. | 

### Return type

[**OrganisationAddon**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganisationsAddonsUpdate

> OrganisationAddonUpdateResult V2OrganisationsAddonsUpdate(ctx, addon).OrganisationAddonUpdate(organisationAddonUpdate).DivisionId(divisionId).Execute()





### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/pescheckit/pescheck-clients/clients/go"
)

func main() {
	addon := "addon_example" // string | The add-on to act on.
	organisationAddonUpdate := *openapiclient.NewOrganisationAddonUpdate(false) // OrganisationAddonUpdate | 
	divisionId := "divisionId_example" // string | Act on this division instead of the organisation the token belongs to. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AddOnsAPI.V2OrganisationsAddonsUpdate(context.Background(), addon).OrganisationAddonUpdate(organisationAddonUpdate).DivisionId(divisionId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AddOnsAPI.V2OrganisationsAddonsUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsAddonsUpdate`: OrganisationAddonUpdateResult
	fmt.Fprintf(os.Stdout, "Response from `AddOnsAPI.V2OrganisationsAddonsUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**addon** | **string** | The add-on to act on. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsAddonsUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **organisationAddonUpdate** | [**OrganisationAddonUpdate**](OrganisationAddonUpdate.md) |  | 
 **divisionId** | **string** | Act on this division instead of the organisation the token belongs to. | 

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

