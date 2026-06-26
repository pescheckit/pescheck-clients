# Pescheck.Client.Model.V2ProfileUpdate
Replaces the profile - name, description and full checks list. Entries matched by profile_check_id are updated in place; entries without one are added; existing checks not referenced in the request are removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | **string** |  | [optional] [default to ""]
**Checks** | [**List&lt;V2ProfileUpdateCheck&gt;**](V2ProfileUpdateCheck.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

