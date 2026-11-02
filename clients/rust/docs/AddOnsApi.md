# \AddOnsApi

All URIs are relative to *https://api.pescheck.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v2_organisations_addons_list**](AddOnsApi.md#v2_organisations_addons_list) | **GET** /api/v2/organisations/addons/ | 
[**v2_organisations_addons_partial_update**](AddOnsApi.md#v2_organisations_addons_partial_update) | **PATCH** /api/v2/organisations/addons/{addon}/ | 
[**v2_organisations_addons_retrieve**](AddOnsApi.md#v2_organisations_addons_retrieve) | **GET** /api/v2/organisations/addons/{addon}/ | 
[**v2_organisations_addons_update**](AddOnsApi.md#v2_organisations_addons_update) | **PUT** /api/v2/organisations/addons/{addon}/ | 



## v2_organisations_addons_list

> Vec<models::OrganisationAddon> v2_organisations_addons_list(division_id)


List every add-on with whether it is enabled for the organisation.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**division_id** | Option<**String**> | Act on this division instead of the organisation the token belongs to. |  |

### Return type

[**Vec<models::OrganisationAddon>**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_organisations_addons_partial_update

> models::OrganisationAddonUpdateResult v2_organisations_addons_partial_update(addon, division_id, patched_organisation_addon_update)


Switch an add-on on or off. Enabling is billed monthly from today.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**addon** | **String** | The add-on to act on. | [required] |
**division_id** | Option<**String**> | Act on this division instead of the organisation the token belongs to. |  |
**patched_organisation_addon_update** | Option<[**PatchedOrganisationAddonUpdate**](PatchedOrganisationAddonUpdate.md)> |  |  |

### Return type

[**models::OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_organisations_addons_retrieve

> models::OrganisationAddon v2_organisations_addons_retrieve(addon, division_id)


Get one add-on's state for the organisation.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**addon** | **String** | The add-on to act on. | [required] |
**division_id** | Option<**String**> | Act on this division instead of the organisation the token belongs to. |  |

### Return type

[**models::OrganisationAddon**](OrganisationAddon.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## v2_organisations_addons_update

> models::OrganisationAddonUpdateResult v2_organisations_addons_update(addon, organisation_addon_update, division_id)


Switch an add-on on or off. Enabling is billed monthly from today.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**addon** | **String** | The add-on to act on. | [required] |
**organisation_addon_update** | [**OrganisationAddonUpdate**](OrganisationAddonUpdate.md) |  | [required] |
**division_id** | Option<**String**> | Act on this division instead of the organisation the token belongs to. |  |

### Return type

[**models::OrganisationAddonUpdateResult**](OrganisationAddonUpdateResult.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

