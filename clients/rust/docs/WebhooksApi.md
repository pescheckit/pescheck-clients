# \WebhooksApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_webhook2**](WebhooksApi.md#create_webhook2) | **POST** /api/v2/webhooks/ | 
[**delete_webhook2**](WebhooksApi.md#delete_webhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ | 
[**list_webhooks2**](WebhooksApi.md#list_webhooks2) | **GET** /api/v2/webhooks/list/ | 
[**verify_webhook2**](WebhooksApi.md#verify_webhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ | 



## create_webhook2

> models::WebhookResponse create_webhook2(webhook, x_organization_id, organization_id)


Create webhook for event notifications.          **Authentication Notes:**         - OAuth2: Organization is automatically determined from the OAuth application         - If your OAuth app has no organization set, pass it via `X-Organization-Id` header or `organization_id` query parameter          **Valid Events:**         - `check.started` - Check has been initiated         - `check.completed` - Check has been completed successfully         - `check.failed` - Check has failed         - `screening.created` - New screening has been created         - `screening.completed` - Screening has been completed         - `screening.archived` - Screening has been archived         - `package.created` - New package has been created         - `package.updated` - Package has been updated         - `division.created` - New division has been created         - `division.updated` - Division has been updated          Limited to 5 webhooks per organization/division.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**webhook** | [**Webhook**](Webhook.md) |  | [required] |
**x_organization_id** | Option<**String**> | Organization ID (for JWT/Session auth only) |  |
**organization_id** | Option<**String**> | Organization ID (for JWT/Session auth only) |  |

### Return type

[**models::WebhookResponse**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_webhook2

> delete_webhook2(webhook_id)


Delete a webhook

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**webhook_id** | **String** | Webhook ID to delete | [required] |

### Return type

 (empty response body)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## list_webhooks2

> Vec<models::WebhookResponse> list_webhooks2()


List webhooks for the organization

### Parameters

This endpoint does not need any parameter.

### Return type

[**Vec<models::WebhookResponse>**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## verify_webhook2

> verify_webhook2(webhook_id, verify_webhook)


Verify webhook ownership

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**webhook_id** | **String** | Webhook ID | [required] |
**verify_webhook** | [**VerifyWebhook**](VerifyWebhook.md) |  | [required] |

### Return type

 (empty response body)

### Authorization

[oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

