# OAuthApplicationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | Option<**uuid::Uuid**> |  | [optional][readonly]
**name** | Option<**String**> |  | [optional]
**client_id** | Option<**String**> |  | [optional]
**client_secret** | Option<**String**> |  | [optional][readonly]
**client_type** | **ClientType** | * `confidential` - Confidential * `public` - Public (enum: confidential, public) | 
**authorization_grant_type** | **AuthorizationGrantType** | * `authorization-code` - Authorization code * `implicit` - Implicit * `password` - Resource owner password-based * `client-credentials` - Client credentials * `openid-hybrid` - OpenID connect hybrid (enum: authorization-code, implicit, password, client-credentials, openid-hybrid) | 
**created** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]
**updated** | Option<**chrono::DateTime<chrono::FixedOffset>**> |  | [optional][readonly]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


