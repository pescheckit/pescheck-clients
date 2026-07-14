# CustomTokenObtainPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrganizationId** | Pointer to **string** | Organization or division ID to scope the token to. Required when your account has access to more than one organization. | [optional] 
**Email** | **string** |  | 
**Password** | **string** |  | 

## Methods

### NewCustomTokenObtainPair

`func NewCustomTokenObtainPair(email string, password string, ) *CustomTokenObtainPair`

NewCustomTokenObtainPair instantiates a new CustomTokenObtainPair object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomTokenObtainPairWithDefaults

`func NewCustomTokenObtainPairWithDefaults() *CustomTokenObtainPair`

NewCustomTokenObtainPairWithDefaults instantiates a new CustomTokenObtainPair object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrganizationId

`func (o *CustomTokenObtainPair) GetOrganizationId() string`

GetOrganizationId returns the OrganizationId field if non-nil, zero value otherwise.

### GetOrganizationIdOk

`func (o *CustomTokenObtainPair) GetOrganizationIdOk() (*string, bool)`

GetOrganizationIdOk returns a tuple with the OrganizationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganizationId

`func (o *CustomTokenObtainPair) SetOrganizationId(v string)`

SetOrganizationId sets OrganizationId field to given value.

### HasOrganizationId

`func (o *CustomTokenObtainPair) HasOrganizationId() bool`

HasOrganizationId returns a boolean if a field has been set.

### GetEmail

`func (o *CustomTokenObtainPair) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *CustomTokenObtainPair) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *CustomTokenObtainPair) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPassword

`func (o *CustomTokenObtainPair) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *CustomTokenObtainPair) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *CustomTokenObtainPair) SetPassword(v string)`

SetPassword sets Password field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


