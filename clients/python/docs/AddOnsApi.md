# pescheck.AddOnsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_organisations_addons_list**](AddOnsApi.md#v2_organisations_addons_list) | **GET** /api/v2/organisations/addons/ | 
[**v2_organisations_addons_partial_update**](AddOnsApi.md#v2_organisations_addons_partial_update) | **PATCH** /api/v2/organisations/addons/{addon}/ | 
[**v2_organisations_addons_retrieve**](AddOnsApi.md#v2_organisations_addons_retrieve) | **GET** /api/v2/organisations/addons/{addon}/ | 
[**v2_organisations_addons_update**](AddOnsApi.md#v2_organisations_addons_update) | **PUT** /api/v2/organisations/addons/{addon}/ | 


# **v2_organisations_addons_list**
> List[OrganisationAddon] v2_organisations_addons_list(division_id=division_id)

List every add-on with whether it is enabled for the organisation.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.organisation_addon import OrganisationAddon
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
    api_instance = pescheck.AddOnsApi(api_client)
    division_id = 'division_id_example' # str | Act on this division instead of the organisation the token belongs to. (optional)

    try:
        api_response = api_instance.v2_organisations_addons_list(division_id=division_id)
        print("The response of AddOnsApi->v2_organisations_addons_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddOnsApi->v2_organisations_addons_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **division_id** | **str**| Act on this division instead of the organisation the token belongs to. | [optional] 

### Return type

[**List[OrganisationAddon]**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organisations_addons_partial_update**
> OrganisationAddonUpdateResult v2_organisations_addons_partial_update(addon, division_id=division_id, patched_organisation_addon_update=patched_organisation_addon_update)

Switch an add-on on or off. Enabling is billed monthly from today.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.organisation_addon_update_result import OrganisationAddonUpdateResult
from pescheck.models.patched_organisation_addon_update import PatchedOrganisationAddonUpdate
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
    api_instance = pescheck.AddOnsApi(api_client)
    addon = 'addon_example' # str | The add-on to act on.
    division_id = 'division_id_example' # str | Act on this division instead of the organisation the token belongs to. (optional)
    patched_organisation_addon_update = {"enabled":false} # PatchedOrganisationAddonUpdate |  (optional)

    try:
        api_response = api_instance.v2_organisations_addons_partial_update(addon, division_id=division_id, patched_organisation_addon_update=patched_organisation_addon_update)
        print("The response of AddOnsApi->v2_organisations_addons_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddOnsApi->v2_organisations_addons_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon** | **str**| The add-on to act on. | 
 **division_id** | **str**| Act on this division instead of the organisation the token belongs to. | [optional] 
 **patched_organisation_addon_update** | [**PatchedOrganisationAddonUpdate**](PatchedOrganisationAddonUpdate.md)|  | [optional] 

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organisations_addons_retrieve**
> OrganisationAddon v2_organisations_addons_retrieve(addon, division_id=division_id)

Get one add-on's state for the organisation.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.organisation_addon import OrganisationAddon
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
    api_instance = pescheck.AddOnsApi(api_client)
    addon = 'addon_example' # str | The add-on to act on.
    division_id = 'division_id_example' # str | Act on this division instead of the organisation the token belongs to. (optional)

    try:
        api_response = api_instance.v2_organisations_addons_retrieve(addon, division_id=division_id)
        print("The response of AddOnsApi->v2_organisations_addons_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddOnsApi->v2_organisations_addons_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon** | **str**| The add-on to act on. | 
 **division_id** | **str**| Act on this division instead of the organisation the token belongs to. | [optional] 

### Return type

[**OrganisationAddon**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **v2_organisations_addons_update**
> OrganisationAddonUpdateResult v2_organisations_addons_update(addon, organisation_addon_update, division_id=division_id)

Switch an add-on on or off. Enabling is billed monthly from today.

### Example

* OAuth Authentication (oauth2):

```python
import pescheck
from pescheck.models.organisation_addon_update import OrganisationAddonUpdate
from pescheck.models.organisation_addon_update_result import OrganisationAddonUpdateResult
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
    api_instance = pescheck.AddOnsApi(api_client)
    addon = 'addon_example' # str | The add-on to act on.
    organisation_addon_update = {"enabled":false} # OrganisationAddonUpdate | 
    division_id = 'division_id_example' # str | Act on this division instead of the organisation the token belongs to. (optional)

    try:
        api_response = api_instance.v2_organisations_addons_update(addon, organisation_addon_update, division_id=division_id)
        print("The response of AddOnsApi->v2_organisations_addons_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddOnsApi->v2_organisations_addons_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addon** | **str**| The add-on to act on. | 
 **organisation_addon_update** | [**OrganisationAddonUpdate**](OrganisationAddonUpdate.md)|  | 
 **division_id** | **str**| Act on this division instead of the organisation the token belongs to. | [optional] 

### Return type

[**OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

