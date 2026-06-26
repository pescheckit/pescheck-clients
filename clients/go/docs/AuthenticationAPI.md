# \AuthenticationAPI

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GenerateJWTToken2**](AuthenticationAPI.md#GenerateJWTToken2) | **Post** /api/v2/jwt/generate/ | 
[**JwtCreate**](AuthenticationAPI.md#JwtCreate) | **Post** /api/jwt/ | 
[**JwtRefreshCreate**](AuthenticationAPI.md#JwtRefreshCreate) | **Post** /api/jwt/refresh/ | 



## GenerateJWTToken2

> JWTResponse GenerateJWTToken2(ctx).JWTGeneration(jWTGeneration).Execute()





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
	jWTGeneration := *openapiclient.NewJWTGeneration("Email_example", "Password_example") // JWTGeneration | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthenticationAPI.GenerateJWTToken2(context.Background()).JWTGeneration(jWTGeneration).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationAPI.GenerateJWTToken2``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GenerateJWTToken2`: JWTResponse
	fmt.Fprintf(os.Stdout, "Response from `AuthenticationAPI.GenerateJWTToken2`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGenerateJWTToken2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jWTGeneration** | [**JWTGeneration**](JWTGeneration.md) |  | 

### Return type

[**JWTResponse**](JWTResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## JwtCreate

> CustomTokenObtainPair JwtCreate(ctx).CustomTokenObtainPair(customTokenObtainPair).Execute()





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
	customTokenObtainPair := *openapiclient.NewCustomTokenObtainPair("Email_example", "Password_example") // CustomTokenObtainPair | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthenticationAPI.JwtCreate(context.Background()).CustomTokenObtainPair(customTokenObtainPair).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationAPI.JwtCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `JwtCreate`: CustomTokenObtainPair
	fmt.Fprintf(os.Stdout, "Response from `AuthenticationAPI.JwtCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiJwtCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customTokenObtainPair** | [**CustomTokenObtainPair**](CustomTokenObtainPair.md) |  | 

### Return type

[**CustomTokenObtainPair**](CustomTokenObtainPair.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## JwtRefreshCreate

> TokenRefresh JwtRefreshCreate(ctx).TokenRefresh(tokenRefresh).Execute()





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
	tokenRefresh := *openapiclient.NewTokenRefresh("Access_example", "Refresh_example") // TokenRefresh | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AuthenticationAPI.JwtRefreshCreate(context.Background()).TokenRefresh(tokenRefresh).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationAPI.JwtRefreshCreate``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `JwtRefreshCreate`: TokenRefresh
	fmt.Fprintf(os.Stdout, "Response from `AuthenticationAPI.JwtRefreshCreate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiJwtRefreshCreateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenRefresh** | [**TokenRefresh**](TokenRefresh.md) |  | 

### Return type

[**TokenRefresh**](TokenRefresh.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

