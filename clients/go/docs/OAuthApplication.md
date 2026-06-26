# OAuthApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name for the OAuth application | 
**ClientType** | Pointer to **string** | Client type (confidential recommended for server-to-server)  * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | [optional] [default to "confidential"]
**AuthorizationGrantType** | Pointer to **string** | Grant type (client_credentials for API access)  * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | [optional] [default to "client-credentials"]
**RedirectUris** | Pointer to **string** | Space-separated redirect URIs (optional for client_credentials) | [optional] 
**DivisionId** | Pointer to **string** | Division ID to create application for (optional) | [optional] 

## Methods

### NewOAuthApplication

`func NewOAuthApplication(name string, ) *OAuthApplication`

NewOAuthApplication instantiates a new OAuthApplication object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOAuthApplicationWithDefaults

`func NewOAuthApplicationWithDefaults() *OAuthApplication`

NewOAuthApplicationWithDefaults instantiates a new OAuthApplication object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *OAuthApplication) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OAuthApplication) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OAuthApplication) SetName(v string)`

SetName sets Name field to given value.


### GetClientType

`func (o *OAuthApplication) GetClientType() string`

GetClientType returns the ClientType field if non-nil, zero value otherwise.

### GetClientTypeOk

`func (o *OAuthApplication) GetClientTypeOk() (*string, bool)`

GetClientTypeOk returns a tuple with the ClientType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientType

`func (o *OAuthApplication) SetClientType(v string)`

SetClientType sets ClientType field to given value.

### HasClientType

`func (o *OAuthApplication) HasClientType() bool`

HasClientType returns a boolean if a field has been set.

### GetAuthorizationGrantType

`func (o *OAuthApplication) GetAuthorizationGrantType() string`

GetAuthorizationGrantType returns the AuthorizationGrantType field if non-nil, zero value otherwise.

### GetAuthorizationGrantTypeOk

`func (o *OAuthApplication) GetAuthorizationGrantTypeOk() (*string, bool)`

GetAuthorizationGrantTypeOk returns a tuple with the AuthorizationGrantType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationGrantType

`func (o *OAuthApplication) SetAuthorizationGrantType(v string)`

SetAuthorizationGrantType sets AuthorizationGrantType field to given value.

### HasAuthorizationGrantType

`func (o *OAuthApplication) HasAuthorizationGrantType() bool`

HasAuthorizationGrantType returns a boolean if a field has been set.

### GetRedirectUris

`func (o *OAuthApplication) GetRedirectUris() string`

GetRedirectUris returns the RedirectUris field if non-nil, zero value otherwise.

### GetRedirectUrisOk

`func (o *OAuthApplication) GetRedirectUrisOk() (*string, bool)`

GetRedirectUrisOk returns a tuple with the RedirectUris field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedirectUris

`func (o *OAuthApplication) SetRedirectUris(v string)`

SetRedirectUris sets RedirectUris field to given value.

### HasRedirectUris

`func (o *OAuthApplication) HasRedirectUris() bool`

HasRedirectUris returns a boolean if a field has been set.

### GetDivisionId

`func (o *OAuthApplication) GetDivisionId() string`

GetDivisionId returns the DivisionId field if non-nil, zero value otherwise.

### GetDivisionIdOk

`func (o *OAuthApplication) GetDivisionIdOk() (*string, bool)`

GetDivisionIdOk returns a tuple with the DivisionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivisionId

`func (o *OAuthApplication) SetDivisionId(v string)`

SetDivisionId sets DivisionId field to given value.

### HasDivisionId

`func (o *OAuthApplication) HasDivisionId() bool`

HasDivisionId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


