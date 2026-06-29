# OAuthApplicationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] [readonly] 
**Name** | Pointer to **string** |  | [optional] 
**ClientId** | Pointer to **string** |  | [optional] 
**ClientSecret** | Pointer to **string** |  | [optional] [readonly] 
**ClientType** | **string** | * &#x60;confidential&#x60; - Confidential * &#x60;public&#x60; - Public | 
**AuthorizationGrantType** | **string** | * &#x60;authorization-code&#x60; - Authorization code * &#x60;implicit&#x60; - Implicit * &#x60;password&#x60; - Resource owner password-based * &#x60;client-credentials&#x60; - Client credentials * &#x60;openid-hybrid&#x60; - OpenID connect hybrid | 
**Created** | Pointer to **time.Time** |  | [optional] [readonly] 
**Updated** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewOAuthApplicationResponse

`func NewOAuthApplicationResponse(clientType string, authorizationGrantType string, ) *OAuthApplicationResponse`

NewOAuthApplicationResponse instantiates a new OAuthApplicationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOAuthApplicationResponseWithDefaults

`func NewOAuthApplicationResponseWithDefaults() *OAuthApplicationResponse`

NewOAuthApplicationResponseWithDefaults instantiates a new OAuthApplicationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *OAuthApplicationResponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *OAuthApplicationResponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *OAuthApplicationResponse) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *OAuthApplicationResponse) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *OAuthApplicationResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OAuthApplicationResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OAuthApplicationResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *OAuthApplicationResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetClientId

`func (o *OAuthApplicationResponse) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *OAuthApplicationResponse) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *OAuthApplicationResponse) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *OAuthApplicationResponse) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetClientSecret

`func (o *OAuthApplicationResponse) GetClientSecret() string`

GetClientSecret returns the ClientSecret field if non-nil, zero value otherwise.

### GetClientSecretOk

`func (o *OAuthApplicationResponse) GetClientSecretOk() (*string, bool)`

GetClientSecretOk returns a tuple with the ClientSecret field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientSecret

`func (o *OAuthApplicationResponse) SetClientSecret(v string)`

SetClientSecret sets ClientSecret field to given value.

### HasClientSecret

`func (o *OAuthApplicationResponse) HasClientSecret() bool`

HasClientSecret returns a boolean if a field has been set.

### GetClientType

`func (o *OAuthApplicationResponse) GetClientType() string`

GetClientType returns the ClientType field if non-nil, zero value otherwise.

### GetClientTypeOk

`func (o *OAuthApplicationResponse) GetClientTypeOk() (*string, bool)`

GetClientTypeOk returns a tuple with the ClientType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientType

`func (o *OAuthApplicationResponse) SetClientType(v string)`

SetClientType sets ClientType field to given value.


### GetAuthorizationGrantType

`func (o *OAuthApplicationResponse) GetAuthorizationGrantType() string`

GetAuthorizationGrantType returns the AuthorizationGrantType field if non-nil, zero value otherwise.

### GetAuthorizationGrantTypeOk

`func (o *OAuthApplicationResponse) GetAuthorizationGrantTypeOk() (*string, bool)`

GetAuthorizationGrantTypeOk returns a tuple with the AuthorizationGrantType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizationGrantType

`func (o *OAuthApplicationResponse) SetAuthorizationGrantType(v string)`

SetAuthorizationGrantType sets AuthorizationGrantType field to given value.


### GetCreated

`func (o *OAuthApplicationResponse) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *OAuthApplicationResponse) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *OAuthApplicationResponse) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *OAuthApplicationResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetUpdated

`func (o *OAuthApplicationResponse) GetUpdated() time.Time`

GetUpdated returns the Updated field if non-nil, zero value otherwise.

### GetUpdatedOk

`func (o *OAuthApplicationResponse) GetUpdatedOk() (*time.Time, bool)`

GetUpdatedOk returns a tuple with the Updated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdated

`func (o *OAuthApplicationResponse) SetUpdated(v time.Time)`

SetUpdated sets Updated field to given value.

### HasUpdated

`func (o *OAuthApplicationResponse) HasUpdated() bool`

HasUpdated returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


