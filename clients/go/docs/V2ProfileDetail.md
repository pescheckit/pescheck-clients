# V2ProfileDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] [readonly] 
**Name** | **string** |  | 
**Description** | **NullableString** |  | 
**IsCustom** | Pointer to **bool** |  | [optional] 
**Checks** | Pointer to [**[]V2ProfileCheckEntry**](V2ProfileCheckEntry.md) |  | [optional] [readonly] 
**TotalPrice** | Pointer to [**V2Money**](V2Money.md) |  | [optional] [readonly] 
**SupportedCountriesOfWork** | Pointer to **[]string** |  | [optional] [readonly] 
**SupportedCountriesOfResidence** | Pointer to **[]string** |  | [optional] [readonly] 
**CandidateFields** | Pointer to **[]map[string]interface{}** |  | [optional] [readonly] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewV2ProfileDetail

`func NewV2ProfileDetail(name string, description NullableString, ) *V2ProfileDetail`

NewV2ProfileDetail instantiates a new V2ProfileDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ProfileDetailWithDefaults

`func NewV2ProfileDetailWithDefaults() *V2ProfileDetail`

NewV2ProfileDetailWithDefaults instantiates a new V2ProfileDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *V2ProfileDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *V2ProfileDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *V2ProfileDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *V2ProfileDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *V2ProfileDetail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V2ProfileDetail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V2ProfileDetail) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *V2ProfileDetail) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *V2ProfileDetail) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *V2ProfileDetail) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *V2ProfileDetail) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *V2ProfileDetail) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetIsCustom

`func (o *V2ProfileDetail) GetIsCustom() bool`

GetIsCustom returns the IsCustom field if non-nil, zero value otherwise.

### GetIsCustomOk

`func (o *V2ProfileDetail) GetIsCustomOk() (*bool, bool)`

GetIsCustomOk returns a tuple with the IsCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCustom

`func (o *V2ProfileDetail) SetIsCustom(v bool)`

SetIsCustom sets IsCustom field to given value.

### HasIsCustom

`func (o *V2ProfileDetail) HasIsCustom() bool`

HasIsCustom returns a boolean if a field has been set.

### GetChecks

`func (o *V2ProfileDetail) GetChecks() []V2ProfileCheckEntry`

GetChecks returns the Checks field if non-nil, zero value otherwise.

### GetChecksOk

`func (o *V2ProfileDetail) GetChecksOk() (*[]V2ProfileCheckEntry, bool)`

GetChecksOk returns a tuple with the Checks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecks

`func (o *V2ProfileDetail) SetChecks(v []V2ProfileCheckEntry)`

SetChecks sets Checks field to given value.

### HasChecks

`func (o *V2ProfileDetail) HasChecks() bool`

HasChecks returns a boolean if a field has been set.

### GetTotalPrice

`func (o *V2ProfileDetail) GetTotalPrice() V2Money`

GetTotalPrice returns the TotalPrice field if non-nil, zero value otherwise.

### GetTotalPriceOk

`func (o *V2ProfileDetail) GetTotalPriceOk() (*V2Money, bool)`

GetTotalPriceOk returns a tuple with the TotalPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalPrice

`func (o *V2ProfileDetail) SetTotalPrice(v V2Money)`

SetTotalPrice sets TotalPrice field to given value.

### HasTotalPrice

`func (o *V2ProfileDetail) HasTotalPrice() bool`

HasTotalPrice returns a boolean if a field has been set.

### GetSupportedCountriesOfWork

`func (o *V2ProfileDetail) GetSupportedCountriesOfWork() []string`

GetSupportedCountriesOfWork returns the SupportedCountriesOfWork field if non-nil, zero value otherwise.

### GetSupportedCountriesOfWorkOk

`func (o *V2ProfileDetail) GetSupportedCountriesOfWorkOk() (*[]string, bool)`

GetSupportedCountriesOfWorkOk returns a tuple with the SupportedCountriesOfWork field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedCountriesOfWork

`func (o *V2ProfileDetail) SetSupportedCountriesOfWork(v []string)`

SetSupportedCountriesOfWork sets SupportedCountriesOfWork field to given value.

### HasSupportedCountriesOfWork

`func (o *V2ProfileDetail) HasSupportedCountriesOfWork() bool`

HasSupportedCountriesOfWork returns a boolean if a field has been set.

### GetSupportedCountriesOfResidence

`func (o *V2ProfileDetail) GetSupportedCountriesOfResidence() []string`

GetSupportedCountriesOfResidence returns the SupportedCountriesOfResidence field if non-nil, zero value otherwise.

### GetSupportedCountriesOfResidenceOk

`func (o *V2ProfileDetail) GetSupportedCountriesOfResidenceOk() (*[]string, bool)`

GetSupportedCountriesOfResidenceOk returns a tuple with the SupportedCountriesOfResidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedCountriesOfResidence

`func (o *V2ProfileDetail) SetSupportedCountriesOfResidence(v []string)`

SetSupportedCountriesOfResidence sets SupportedCountriesOfResidence field to given value.

### HasSupportedCountriesOfResidence

`func (o *V2ProfileDetail) HasSupportedCountriesOfResidence() bool`

HasSupportedCountriesOfResidence returns a boolean if a field has been set.

### GetCandidateFields

`func (o *V2ProfileDetail) GetCandidateFields() []map[string]interface{}`

GetCandidateFields returns the CandidateFields field if non-nil, zero value otherwise.

### GetCandidateFieldsOk

`func (o *V2ProfileDetail) GetCandidateFieldsOk() (*[]map[string]interface{}, bool)`

GetCandidateFieldsOk returns a tuple with the CandidateFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidateFields

`func (o *V2ProfileDetail) SetCandidateFields(v []map[string]interface{})`

SetCandidateFields sets CandidateFields field to given value.

### HasCandidateFields

`func (o *V2ProfileDetail) HasCandidateFields() bool`

HasCandidateFields returns a boolean if a field has been set.

### GetCreatedAt

`func (o *V2ProfileDetail) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *V2ProfileDetail) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *V2ProfileDetail) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *V2ProfileDetail) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *V2ProfileDetail) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *V2ProfileDetail) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *V2ProfileDetail) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *V2ProfileDetail) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


