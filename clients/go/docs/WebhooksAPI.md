# \WebhooksAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreateWebhook2**](WebhooksAPI.md#CreateWebhook2) | **Post** /api/v2/webhooks/ | 
[**DeleteWebhook2**](WebhooksAPI.md#DeleteWebhook2) | **Delete** /api/v2/webhooks/{webhook_id}/ | 
[**ListWebhooks2**](WebhooksAPI.md#ListWebhooks2) | **Get** /api/v2/webhooks/list/ | 
[**VerifyWebhook2**](WebhooksAPI.md#VerifyWebhook2) | **Post** /api/v2/webhooks/{webhook_id}/verify/ | 



## CreateWebhook2

> WebhookResponse CreateWebhook2(ctx).Webhook(webhook).XOrganizationId(xOrganizationId).OrganizationId(organizationId).Execute()





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
	webhook := *openapiclient.NewWebhook("Name_example", "Url_example", []string{"Events_example"}) // Webhook | 
	xOrganizationId := "xOrganizationId_example" // string | Organization ID (for JWT/Session auth only) (optional)
	organizationId := "organizationId_example" // string | Organization ID (for JWT/Session auth only) (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.WebhooksAPI.CreateWebhook2(context.Background()).Webhook(webhook).XOrganizationId(xOrganizationId).OrganizationId(organizationId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.CreateWebhook2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateWebhook2`: WebhookResponse
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.CreateWebhook2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateWebhook2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md) |  | 
 **xOrganizationId** | **string** | Organization ID (for JWT/Session auth only) | 
 **organizationId** | **string** | Organization ID (for JWT/Session auth only) | 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteWebhook2

> DeleteWebhook2(ctx, webhookId).Execute()





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
	webhookId := "webhookId_example" // string | Webhook ID to delete

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WebhooksAPI.DeleteWebhook2(context.Background(), webhookId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.DeleteWebhook2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**webhookId** | **string** | Webhook ID to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteWebhook2Request struct via the builder pattern


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


## ListWebhooks2

> []WebhookResponse ListWebhooks2(ctx).Execute()





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
	resp, r, err := apiClient.WebhooksAPI.ListWebhooks2(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.ListWebhooks2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListWebhooks2`: []WebhookResponse
	fmt.Fprintf(os.Stdout, "Response from `WebhooksAPI.ListWebhooks2`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiListWebhooks2Request struct via the builder pattern


### Return type

[**[]WebhookResponse**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyWebhook2

> VerifyWebhook2(ctx, webhookId).VerifyWebhook(verifyWebhook).Execute()





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
	webhookId := "webhookId_example" // string | Webhook ID
	verifyWebhook := *openapiclient.NewVerifyWebhook("VerificationCode_example") // VerifyWebhook | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WebhooksAPI.VerifyWebhook2(context.Background(), webhookId).VerifyWebhook(verifyWebhook).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.VerifyWebhook2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**webhookId** | **string** | Webhook ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiVerifyWebhook2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **verifyWebhook** | [**VerifyWebhook**](VerifyWebhook.md) |  | 

### Return type

 (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

