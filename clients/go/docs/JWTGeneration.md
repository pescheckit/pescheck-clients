# JWTGeneration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | **string** | Email address of the API user | 
**Password** | **string** | Password for the API user | 
**OrganisationId** | Pointer to **string** | Organization ID to generate token for | [optional] 
**DivisionId** | Pointer to **string** | Division ID to generate token for (optional) | [optional] 

## Methods

### NewJWTGeneration

`func NewJWTGeneration(email string, password string, ) *JWTGeneration`

NewJWTGeneration instantiates a new JWTGeneration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJWTGenerationWithDefaults

`func NewJWTGenerationWithDefaults() *JWTGeneration`

NewJWTGenerationWithDefaults instantiates a new JWTGeneration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *JWTGeneration) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *JWTGeneration) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *JWTGeneration) SetEmail(v string)`

SetEmail sets Email field to given value.


### GetPassword

`func (o *JWTGeneration) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *JWTGeneration) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *JWTGeneration) SetPassword(v string)`

SetPassword sets Password field to given value.


### GetOrganisationId

`func (o *JWTGeneration) GetOrganisationId() string`

GetOrganisationId returns the OrganisationId field if non-nil, zero value otherwise.

### GetOrganisationIdOk

`func (o *JWTGeneration) GetOrganisationIdOk() (*string, bool)`

GetOrganisationIdOk returns a tuple with the OrganisationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrganisationId

`func (o *JWTGeneration) SetOrganisationId(v string)`

SetOrganisationId sets OrganisationId field to given value.

### HasOrganisationId

`func (o *JWTGeneration) HasOrganisationId() bool`

HasOrganisationId returns a boolean if a field has been set.

### GetDivisionId

`func (o *JWTGeneration) GetDivisionId() string`

GetDivisionId returns the DivisionId field if non-nil, zero value otherwise.

### GetDivisionIdOk

`func (o *JWTGeneration) GetDivisionIdOk() (*string, bool)`

GetDivisionIdOk returns a tuple with the DivisionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDivisionId

`func (o *JWTGeneration) SetDivisionId(v string)`

SetDivisionId sets DivisionId field to given value.

### HasDivisionId

`func (o *JWTGeneration) HasDivisionId() bool`

HasDivisionId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


