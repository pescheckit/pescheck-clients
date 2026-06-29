# Pescheck.Client.Model.OAuthApplicationResponse
Serializer for OAuth application responses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Guid** |  | [optional] [readonly] 
**Name** | **string** |  | [optional] 
**ClientId** | **string** |  | [optional] 
**ClientSecret** | **string** |  | [optional] [readonly] 
**ClientType** | **string** | * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | 
**AuthorizationGrantType** | **string** | * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | 
**Created** | **DateTime** |  | [optional] [readonly] 
**Updated** | **DateTime** |  | [optional] [readonly] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

