# \ProfilesAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2ProfilesCreate**](ProfilesAPI.md#V2ProfilesCreate) | **Post** /api/v2/profiles/ | 
[**V2ProfilesDestroy**](ProfilesAPI.md#V2ProfilesDestroy) | **Delete** /api/v2/profiles/{id}/ | 
[**V2ProfilesList**](ProfilesAPI.md#V2ProfilesList) | **Get** /api/v2/profiles/ | 
[**V2ProfilesPartialUpdate**](ProfilesAPI.md#V2ProfilesPartialUpdate) | **Patch** /api/v2/profiles/{id}/ | 
[**V2ProfilesRetrieve**](ProfilesAPI.md#V2ProfilesRetrieve) | **Get** /api/v2/profiles/{id}/ | 
[**V2ProfilesUpdate**](ProfilesAPI.md#V2ProfilesUpdate) | **Put** /api/v2/profiles/{id}/ | 



## V2ProfilesCreate

> V2ProfileDetail V2ProfilesCreate(ctx).V2ProfileCreate(v2ProfileCreate).Execute()



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
	v2ProfileCreate := *openapiclient.NewV2ProfileCreate("Name_example", []openapiclient.V2ProfileCheck{*openapiclient.NewV2ProfileCheck("CheckType_example")}) // V2ProfileCreate | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProfilesAPI.V2ProfilesCreate(context.Background()).V2ProfileCreate(v2ProfileCreate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfilesAPI.V2ProfilesCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ProfilesCreate`: V2ProfileDetail
	fmt.Fprintf(os.Stdout, "Response from `ProfilesAPI.V2ProfilesCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2ProfilesCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2ProfileCreate** | [**V2ProfileCreate**](V2ProfileCreate.md) |  | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ProfilesDestroy

> V2ProfilesDestroy(ctx, id).Execute()



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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this profile.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ProfilesAPI.V2ProfilesDestroy(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfilesAPI.V2ProfilesDestroy``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2ProfilesDestroyRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ProfilesList

> PaginatedV2ProfileListItemList V2ProfilesList(ctx).CheckType(checkType).IsCustom(isCustom).Name(name).Page(page).PageSize(pageSize).Paginate(paginate).Sort(sort).Execute()



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
	checkType := "checkType_example" // string | Restrict to profiles containing at least one check of this type. (optional)
	isCustom := true // bool | Restrict to custom (true) or system (false) profiles. (optional)
	name := "name_example" // string | Restrict to profiles whose name contains this value (case-insensitive). (optional)
	page := int32(1) // int32 | A page number within the paginated result set. (optional) (default to 1)
	pageSize := int32(50) // int32 | Number of results to return per page. (optional) (default to 50)
	paginate := true // bool | Enable/disable pagination. When false, max 500 records returned. (optional) (default to true)
	sort := "sort_example" // string | Which field to use when ordering the results. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProfilesAPI.V2ProfilesList(context.Background()).CheckType(checkType).IsCustom(isCustom).Name(name).Page(page).PageSize(pageSize).Paginate(paginate).Sort(sort).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfilesAPI.V2ProfilesList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ProfilesList`: PaginatedV2ProfileListItemList
	fmt.Fprintf(os.Stdout, "Response from `ProfilesAPI.V2ProfilesList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2ProfilesListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkType** | **string** | Restrict to profiles containing at least one check of this type. | 
 **isCustom** | **bool** | Restrict to custom (true) or system (false) profiles. | 
 **name** | **string** | Restrict to profiles whose name contains this value (case-insensitive). | 
 **page** | **int32** | A page number within the paginated result set. | [default to 1]
 **pageSize** | **int32** | Number of results to return per page. | [default to 50]
 **paginate** | **bool** | Enable/disable pagination. When false, max 500 records returned. | [default to true]
 **sort** | **string** | Which field to use when ordering the results. | 

### Return type

[**PaginatedV2ProfileListItemList**](PaginatedV2ProfileListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ProfilesPartialUpdate

> V2ProfileDetail V2ProfilesPartialUpdate(ctx, id).PatchedV2ProfilePartialUpdate(patchedV2ProfilePartialUpdate).Execute()





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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this profile.
	patchedV2ProfilePartialUpdate := *openapiclient.NewPatchedV2ProfilePartialUpdate() // PatchedV2ProfilePartialUpdate |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProfilesAPI.V2ProfilesPartialUpdate(context.Background(), id).PatchedV2ProfilePartialUpdate(patchedV2ProfilePartialUpdate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfilesAPI.V2ProfilesPartialUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ProfilesPartialUpdate`: V2ProfileDetail
	fmt.Fprintf(os.Stdout, "Response from `ProfilesAPI.V2ProfilesPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2ProfilesPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedV2ProfilePartialUpdate** | [**PatchedV2ProfilePartialUpdate**](PatchedV2ProfilePartialUpdate.md) |  | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ProfilesRetrieve

> V2ProfileDetail V2ProfilesRetrieve(ctx, id).Execute()



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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this profile.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProfilesAPI.V2ProfilesRetrieve(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfilesAPI.V2ProfilesRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ProfilesRetrieve`: V2ProfileDetail
	fmt.Fprintf(os.Stdout, "Response from `ProfilesAPI.V2ProfilesRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2ProfilesRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ProfilesUpdate

> V2ProfileDetail V2ProfilesUpdate(ctx, id).V2ProfileUpdate(v2ProfileUpdate).Execute()





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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this profile.
	v2ProfileUpdate := *openapiclient.NewV2ProfileUpdate("Name_example", []openapiclient.V2ProfileUpdateCheck{*openapiclient.NewV2ProfileUpdateCheck("CheckType_example")}) // V2ProfileUpdate | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ProfilesAPI.V2ProfilesUpdate(context.Background(), id).V2ProfileUpdate(v2ProfileUpdate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ProfilesAPI.V2ProfilesUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ProfilesUpdate`: V2ProfileDetail
	fmt.Fprintf(os.Stdout, "Response from `ProfilesAPI.V2ProfilesUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2ProfilesUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **v2ProfileUpdate** | [**V2ProfileUpdate**](V2ProfileUpdate.md) |  | 

### Return type

[**V2ProfileDetail**](V2ProfileDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

