# Pescheck.Client.Model.CustomTokenObtainPair
Custom JWT serializer that scopes the token to one organization.  The organization comes from the optional ``organization_id`` field, or from the user's single organization when the field is absent. Users with access to multiple organizations must pass ``organization_id`` explicitly; the token is never scoped implicitly (e.g. via the last viewed organization, which is mutable web-UI state).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrganizationId** | **Guid** | Organization or division ID to scope the token to. Required when your account has access to more than one organization. | [optional] 
**Email** | **string** |  | 
**Password** | **string** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

