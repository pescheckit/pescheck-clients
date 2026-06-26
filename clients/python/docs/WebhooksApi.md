# pescheck.WebhooksApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_webhook2**](WebhooksApi.md#create_webhook2) | **POST** /api/v2/webhooks/ | 
[**delete_webhook2**](WebhooksApi.md#delete_webhook2) | **DELETE** /api/v2/webhooks/{webhook_id}/ | 
[**list_webhooks2**](WebhooksApi.md#list_webhooks2) | **GET** /api/v2/webhooks/list/ | 
[**verify_webhook2**](WebhooksApi.md#verify_webhook2) | **POST** /api/v2/webhooks/{webhook_id}/verify/ | 


# **create_webhook2**
> WebhookResponse create_webhook2(webhook, x_organization_id=x_organization_id, organization_id=organization_id)

Create webhook for event notifications.

        **Authentication Notes:**
        - OAuth2: Organization is automatically determined from the OAuth application
        - If your OAuth app has no organization set, pass it via `X-Organization-Id` header or `organization_id` query parameter

        **Valid Events:**
        - `check.started` - Check has been initiated
        - `check.completed` - Check has been completed successfully
        - `check.failed` - Check has failed
        - `screening.created` - New screening has been created
        - `screening.completed` - Screening has been completed
        - `screening.archived` - Screening has been archived
        - `package.created` - New package has been created
        - `package.updated` - Package has been updated
        - `division.created` - New division has been created
        - `division.updated` - Division has been updated

        Limited to 5 webhooks per organization/division.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.webhook import Webhook
from pescheck.models.webhook_response import WebhookResponse
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.WebhooksApi(api_client)
    webhook = {"name":"My Event Webhook","url":"https://webhook.site/4a33d2f6-48a8-4b49-b6c4-a7bb044c8cb3","events":["check.completed","screening.created","screening.completed"],"active":true,"division_id":"3fa85f64-5717-4562-b3fc-2c963f66afa6"} # Webhook | 
    x_organization_id = 'x_organization_id_example' # str | Organization ID (for JWT/Session auth only) (optional)
    organization_id = 'organization_id_example' # str | Organization ID (for JWT/Session auth only) (optional)

    try:
        api_response = api_instance.create_webhook2(webhook, x_organization_id=x_organization_id, organization_id=organization_id)
        print("The response of WebhooksApi->create_webhook2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->create_webhook2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook** | [**Webhook**](Webhook.md)|  | 
 **x_organization_id** | **str**| Organization ID (for JWT/Session auth only) | [optional] 
 **organization_id** | **str**| Organization ID (for JWT/Session auth only) | [optional] 

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden - Organization not found or no permission |  -  |
**409** | Conflict - Max webhooks reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_webhook2**
> delete_webhook2(webhook_id)

Delete a webhook

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Webhook ID to delete

    try:
        api_instance.delete_webhook2(webhook_id)
    except Exception as e:
        print("Exception when calling WebhooksApi->delete_webhook2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Webhook ID to delete | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Webhook deleted |  -  |
**403** | Forbidden |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_webhooks2**
> List[WebhookResponse] list_webhooks2()

List webhooks for the organization

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.webhook_response import WebhookResponse
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.WebhooksApi(api_client)

    try:
        api_response = api_instance.list_webhooks2()
        print("The response of WebhooksApi->list_webhooks2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WebhooksApi->list_webhooks2: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[WebhookResponse]**](WebhookResponse.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verify_webhook2**
> verify_webhook2(webhook_id, verify_webhook)

Verify webhook ownership

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.verify_webhook import VerifyWebhook
from pescheck.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.pescheck.io
# See configuration.py for a list of all supported configuration parameters.
configuration = pescheck.Configuration(
    host = "https://api.pescheck.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with pescheck.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = pescheck.WebhooksApi(api_client)
    webhook_id = 'webhook_id_example' # str | Webhook ID
    verify_webhook = pescheck.VerifyWebhook() # VerifyWebhook | 

    try:
        api_instance.verify_webhook2(webhook_id, verify_webhook)
    except Exception as e:
        print("Exception when calling WebhooksApi->verify_webhook2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhook_id** | **str**| Webhook ID | 
 **verify_webhook** | [**VerifyWebhook**](VerifyWebhook.md)|  | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook verified |  -  |
**400** | Invalid verification code |  -  |
**404** | Webhook not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

