

# CustomTokenObtainPair

Custom JWT serializer that scopes the token to one organization.  The organization comes from the optional ``organization_id`` field, or from the user's single organization when the field is absent. Users with access to multiple organizations must pass ``organization_id`` explicitly; the token is never scoped implicitly (e.g. via the last viewed organization, which is mutable web-UI state).

## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
|**organizationId** | **UUID** | Organization or division ID to scope the token to. Required when your account has access to more than one organization. |  [optional] |
|**email** | **String** |  |  |
|**password** | **String** |  |  |



