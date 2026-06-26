# \DivisionsAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2OrganisationsDivisionsCreate**](DivisionsAPI.md#V2OrganisationsDivisionsCreate) | **Post** /api/v2/organisations/divisions/ | 
[**V2OrganisationsDivisionsList**](DivisionsAPI.md#V2OrganisationsDivisionsList) | **Get** /api/v2/organisations/divisions/ | 
[**V2OrganisationsDivisionsPartialUpdate**](DivisionsAPI.md#V2OrganisationsDivisionsPartialUpdate) | **Patch** /api/v2/organisations/divisions/{id}/ | 
[**V2OrganisationsDivisionsRetrieve**](DivisionsAPI.md#V2OrganisationsDivisionsRetrieve) | **Get** /api/v2/organisations/divisions/{id}/ | 
[**V2OrganisationsDivisionsUpdate**](DivisionsAPI.md#V2OrganisationsDivisionsUpdate) | **Put** /api/v2/organisations/divisions/{id}/ | 



## V2OrganisationsDivisionsCreate

> DivisionWrite V2OrganisationsDivisionsCreate(ctx).DivisionWrite(divisionWrite).Execute()





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
	divisionWrite := *openapiclient.NewDivisionWrite("Id_example", "Name_example", "City_example", "Address_example", "Postal_example", "Phone_example", "ContactName_example", "ContactEmail_example", "InvoiceEmail_example") // DivisionWrite | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DivisionsAPI.V2OrganisationsDivisionsCreate(context.Background()).DivisionWrite(divisionWrite).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DivisionsAPI.V2OrganisationsDivisionsCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsDivisionsCreate`: DivisionWrite
	fmt.Fprintf(os.Stdout, "Response from `DivisionsAPI.V2OrganisationsDivisionsCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsDivisionsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **divisionWrite** | [**DivisionWrite**](DivisionWrite.md) |  | 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganisationsDivisionsList

> PaginatedDivisionReadOnlyList V2OrganisationsDivisionsList(ctx).Page(page).PageSize(pageSize).Paginate(paginate).Execute()





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
	page := int32(1) // int32 | A page number within the paginated result set. (optional) (default to 1)
	pageSize := int32(50) // int32 | Number of results to return per page. (optional) (default to 50)
	paginate := true // bool | Enable/disable pagination. When false, max 500 records returned. (optional) (default to true)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DivisionsAPI.V2OrganisationsDivisionsList(context.Background()).Page(page).PageSize(pageSize).Paginate(paginate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DivisionsAPI.V2OrganisationsDivisionsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsDivisionsList`: PaginatedDivisionReadOnlyList
	fmt.Fprintf(os.Stdout, "Response from `DivisionsAPI.V2OrganisationsDivisionsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsDivisionsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | A page number within the paginated result set. | [default to 1]
 **pageSize** | **int32** | Number of results to return per page. | [default to 50]
 **paginate** | **bool** | Enable/disable pagination. When false, max 500 records returned. | [default to true]

### Return type

[**PaginatedDivisionReadOnlyList**](PaginatedDivisionReadOnlyList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganisationsDivisionsPartialUpdate

> DivisionWrite V2OrganisationsDivisionsPartialUpdate(ctx, id).PatchedDivisionWrite(patchedDivisionWrite).Execute()





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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this organisation.
	patchedDivisionWrite := *openapiclient.NewPatchedDivisionWrite() // PatchedDivisionWrite |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DivisionsAPI.V2OrganisationsDivisionsPartialUpdate(context.Background(), id).PatchedDivisionWrite(patchedDivisionWrite).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DivisionsAPI.V2OrganisationsDivisionsPartialUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsDivisionsPartialUpdate`: DivisionWrite
	fmt.Fprintf(os.Stdout, "Response from `DivisionsAPI.V2OrganisationsDivisionsPartialUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this organisation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsDivisionsPartialUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchedDivisionWrite** | [**PatchedDivisionWrite**](PatchedDivisionWrite.md) |  | 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganisationsDivisionsRetrieve

> DivisionReadOnly V2OrganisationsDivisionsRetrieve(ctx, id).Execute()





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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this organisation.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DivisionsAPI.V2OrganisationsDivisionsRetrieve(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DivisionsAPI.V2OrganisationsDivisionsRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsDivisionsRetrieve`: DivisionReadOnly
	fmt.Fprintf(os.Stdout, "Response from `DivisionsAPI.V2OrganisationsDivisionsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this organisation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsDivisionsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**DivisionReadOnly**](DivisionReadOnly.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2OrganisationsDivisionsUpdate

> DivisionWrite V2OrganisationsDivisionsUpdate(ctx, id).DivisionWrite(divisionWrite).Execute()





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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this organisation.
	divisionWrite := *openapiclient.NewDivisionWrite("Id_example", "Name_example", "City_example", "Address_example", "Postal_example", "Phone_example", "ContactName_example", "ContactEmail_example", "InvoiceEmail_example") // DivisionWrite | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.DivisionsAPI.V2OrganisationsDivisionsUpdate(context.Background(), id).DivisionWrite(divisionWrite).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `DivisionsAPI.V2OrganisationsDivisionsUpdate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2OrganisationsDivisionsUpdate`: DivisionWrite
	fmt.Fprintf(os.Stdout, "Response from `DivisionsAPI.V2OrganisationsDivisionsUpdate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this organisation. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2OrganisationsDivisionsUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **divisionWrite** | [**DivisionWrite**](DivisionWrite.md) |  | 

### Return type

[**DivisionWrite**](DivisionWrite.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

