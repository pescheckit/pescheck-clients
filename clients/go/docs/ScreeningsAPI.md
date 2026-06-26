# \ScreeningsAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2ScreeningsCreate**](ScreeningsAPI.md#V2ScreeningsCreate) | **Post** /api/v2/screenings/ | 
[**V2ScreeningsDocumentsList**](ScreeningsAPI.md#V2ScreeningsDocumentsList) | **Get** /api/v2/screenings/{id}/documents/ | Retrieve screening documents
[**V2ScreeningsList**](ScreeningsAPI.md#V2ScreeningsList) | **Get** /api/v2/screenings/ | 
[**V2ScreeningsRetrieve**](ScreeningsAPI.md#V2ScreeningsRetrieve) | **Get** /api/v2/screenings/{id}/ | 



## V2ScreeningsCreate

> V2ScreeningDetail V2ScreeningsCreate(ctx).V2ScreeningCreate(v2ScreeningCreate).Execute()



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
	v2ScreeningCreate := *openapiclient.NewV2ScreeningCreate("ProfileId_example", *openapiclient.NewV2Candidate("FirstName_example", "LastName_example", "Email_example")) // V2ScreeningCreate | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ScreeningsAPI.V2ScreeningsCreate(context.Background()).V2ScreeningCreate(v2ScreeningCreate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScreeningsAPI.V2ScreeningsCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ScreeningsCreate`: V2ScreeningDetail
	fmt.Fprintf(os.Stdout, "Response from `ScreeningsAPI.V2ScreeningsCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2ScreeningsCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v2ScreeningCreate** | [**V2ScreeningCreate**](V2ScreeningCreate.md) |  | 

### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ScreeningsDocumentsList

> []V2Document V2ScreeningsDocumentsList(ctx, id).CheckId(checkId).CheckType(checkType).Execute()

Retrieve screening documents



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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	checkId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | Only documents from the check with this id. (optional)
	checkType := "checkType_example" // string | Only documents from checks of this type. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ScreeningsAPI.V2ScreeningsDocumentsList(context.Background(), id).CheckId(checkId).CheckType(checkType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScreeningsAPI.V2ScreeningsDocumentsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ScreeningsDocumentsList`: []V2Document
	fmt.Fprintf(os.Stdout, "Response from `ScreeningsAPI.V2ScreeningsDocumentsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2ScreeningsDocumentsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **checkId** | **string** | Only documents from the check with this id. | 
 **checkType** | **string** | Only documents from checks of this type. | 

### Return type

[**[]V2Document**](V2Document.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ScreeningsList

> PaginatedV2ScreeningListItemList V2ScreeningsList(ctx).Page(page).PageSize(pageSize).Paginate(paginate).Execute()



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
	resp, r, err := apiClient.ScreeningsAPI.V2ScreeningsList(context.Background()).Page(page).PageSize(pageSize).Paginate(paginate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScreeningsAPI.V2ScreeningsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ScreeningsList`: PaginatedV2ScreeningListItemList
	fmt.Fprintf(os.Stdout, "Response from `ScreeningsAPI.V2ScreeningsList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2ScreeningsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int32** | A page number within the paginated result set. | [default to 1]
 **pageSize** | **int32** | Number of results to return per page. | [default to 50]
 **paginate** | **bool** | Enable/disable pagination. When false, max 500 records returned. | [default to true]

### Return type

[**PaginatedV2ScreeningListItemList**](PaginatedV2ScreeningListItemList.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ScreeningsRetrieve

> V2ScreeningDetail V2ScreeningsRetrieve(ctx, id).Execute()



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
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | A UUID string identifying this screening.

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ScreeningsAPI.V2ScreeningsRetrieve(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScreeningsAPI.V2ScreeningsRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ScreeningsRetrieve`: V2ScreeningDetail
	fmt.Fprintf(os.Stdout, "Response from `ScreeningsAPI.V2ScreeningsRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | A UUID string identifying this screening. | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2ScreeningsRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**V2ScreeningDetail**](V2ScreeningDetail.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

