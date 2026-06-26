# \OAuthAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateOAuthApplication2**](OAuthAPI.md#CreateOAuthApplication2) | **Post** /api/v2/oauth/applications/ | 
[**DeleteOAuthApplication2**](OAuthAPI.md#DeleteOAuthApplication2) | **Delete** /api/v2/oauth/applications/{application_id}/ | 
[**ListOAuthApplications2**](OAuthAPI.md#ListOAuthApplications2) | **Get** /api/v2/oauth/applications/list/ | 



## CreateOAuthApplication2

> OAuthApplicationResponse CreateOAuthApplication2(ctx).OAuthApplication(oAuthApplication).Execute()





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
	oAuthApplication := *openapiclient.NewOAuthApplication("Name_example") // OAuthApplication | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OAuthAPI.CreateOAuthApplication2(context.Background()).OAuthApplication(oAuthApplication).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthAPI.CreateOAuthApplication2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateOAuthApplication2`: OAuthApplicationResponse
	fmt.Fprintf(os.Stdout, "Response from `OAuthAPI.CreateOAuthApplication2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateOAuthApplication2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **oAuthApplication** | [**OAuthApplication**](OAuthApplication.md) |  | 

### Return type

[**OAuthApplicationResponse**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteOAuthApplication2

> DeleteOAuthApplication2(ctx, applicationId).Execute()





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
	applicationId := "applicationId_example" // string | Application ID to delete

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.OAuthAPI.DeleteOAuthApplication2(context.Background(), applicationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthAPI.DeleteOAuthApplication2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**applicationId** | **string** | Application ID to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOAuthApplication2Request struct via the builder pattern


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


## ListOAuthApplications2

> []OAuthApplicationResponse ListOAuthApplications2(ctx).Execute()





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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.OAuthAPI.ListOAuthApplications2(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthAPI.ListOAuthApplications2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOAuthApplications2`: []OAuthApplicationResponse
	fmt.Fprintf(os.Stdout, "Response from `OAuthAPI.ListOAuthApplications2`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListOAuthApplications2Request struct via the builder pattern


### Return type

[**[]OAuthApplicationResponse**](OAuthApplicationResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

