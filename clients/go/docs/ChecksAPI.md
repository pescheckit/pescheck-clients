# \ChecksAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**V2ChecksList**](ChecksAPI.md#V2ChecksList) | **Get** /api/v2/checks/ | 
[**V2ChecksRetrieve**](ChecksAPI.md#V2ChecksRetrieve) | **Get** /api/v2/checks/{check_type}/ | 



## V2ChecksList

> []V2CheckInfo V2ChecksList(ctx).CheckType(checkType).Execute()





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
	checkType := "checkType_example" // string | Restrict the list to a single check type. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ChecksAPI.V2ChecksList(context.Background()).CheckType(checkType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ChecksAPI.V2ChecksList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ChecksList`: []V2CheckInfo
	fmt.Fprintf(os.Stdout, "Response from `ChecksAPI.V2ChecksList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiV2ChecksListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **checkType** | **string** | Restrict the list to a single check type. | 

### Return type

[**[]V2CheckInfo**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## V2ChecksRetrieve

> V2CheckInfo V2ChecksRetrieve(ctx, checkType).Execute()



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
	checkType := "checkType_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ChecksAPI.V2ChecksRetrieve(context.Background(), checkType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ChecksAPI.V2ChecksRetrieve``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `V2ChecksRetrieve`: V2CheckInfo
	fmt.Fprintf(os.Stdout, "Response from `ChecksAPI.V2ChecksRetrieve`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**checkType** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiV2ChecksRetrieveRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**V2CheckInfo**](V2CheckInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

