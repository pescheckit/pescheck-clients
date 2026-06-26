# V2CheckInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckType** | **string** |  | [readonly] 
**DisplayName** | **string** |  | [readonly] 
**Description** | **NullableString** |  | [readonly] 
**HasConfig** | **bool** |  | [readonly] 
**IsSystemManaged** | **bool** | True for checks added automatically (e.g. as a dependency) - clients neither add nor configure these. | [readonly] 
**RequiresChecks** | **[]string** | Other check types this check pulls in automatically when added. | [readonly] 
**SupportedCountriesOfWork** | **[]string** |  | [readonly] 
**SupportedCountriesOfResidence** | **[]string** |  | [readonly] 
**DefaultPrice** | [**NullableV2Money**](V2Money.md) |  | [readonly] 
**ConfigFields** | [**[]V2CheckField**](V2CheckField.md) |  | [readonly] 
**InputFields** | [**[]V2CheckField**](V2CheckField.md) |  | [readonly] 
**CandidateFields** | [**[]V2CheckField**](V2CheckField.md) | Screening-level candidate facts this check needs (name, email, sometimes date of birth, etc.). | [readonly] 

## Methods

### NewV2CheckInfo

`func NewV2CheckInfo(checkType string, displayName string, description NullableString, hasConfig bool, isSystemManaged bool, requiresChecks []string, supportedCountriesOfWork []string, supportedCountriesOfResidence []string, defaultPrice NullableV2Money, configFields []V2CheckField, inputFields []V2CheckField, candidateFields []V2CheckField, ) *V2CheckInfo`

NewV2CheckInfo instantiates a new V2CheckInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2CheckInfoWithDefaults

`func NewV2CheckInfoWithDefaults() *V2CheckInfo`

NewV2CheckInfoWithDefaults instantiates a new V2CheckInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckType

`func (o *V2CheckInfo) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2CheckInfo) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2CheckInfo) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.


### GetDisplayName

`func (o *V2CheckInfo) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *V2CheckInfo) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *V2CheckInfo) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *V2CheckInfo) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *V2CheckInfo) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *V2CheckInfo) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *V2CheckInfo) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *V2CheckInfo) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetHasConfig

`func (o *V2CheckInfo) GetHasConfig() bool`

GetHasConfig returns the HasConfig field if non-nil, zero value otherwise.

### GetHasConfigOk

`func (o *V2CheckInfo) GetHasConfigOk() (*bool, bool)`

GetHasConfigOk returns a tuple with the HasConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasConfig

`func (o *V2CheckInfo) SetHasConfig(v bool)`

SetHasConfig sets HasConfig field to given value.


### GetIsSystemManaged

`func (o *V2CheckInfo) GetIsSystemManaged() bool`

GetIsSystemManaged returns the IsSystemManaged field if non-nil, zero value otherwise.

### GetIsSystemManagedOk

`func (o *V2CheckInfo) GetIsSystemManagedOk() (*bool, bool)`

GetIsSystemManagedOk returns a tuple with the IsSystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSystemManaged

`func (o *V2CheckInfo) SetIsSystemManaged(v bool)`

SetIsSystemManaged sets IsSystemManaged field to given value.


### GetRequiresChecks

`func (o *V2CheckInfo) GetRequiresChecks() []string`

GetRequiresChecks returns the RequiresChecks field if non-nil, zero value otherwise.

### GetRequiresChecksOk

`func (o *V2CheckInfo) GetRequiresChecksOk() (*[]string, bool)`

GetRequiresChecksOk returns a tuple with the RequiresChecks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiresChecks

`func (o *V2CheckInfo) SetRequiresChecks(v []string)`

SetRequiresChecks sets RequiresChecks field to given value.


### GetSupportedCountriesOfWork

`func (o *V2CheckInfo) GetSupportedCountriesOfWork() []string`

GetSupportedCountriesOfWork returns the SupportedCountriesOfWork field if non-nil, zero value otherwise.

### GetSupportedCountriesOfWorkOk

`func (o *V2CheckInfo) GetSupportedCountriesOfWorkOk() (*[]string, bool)`

GetSupportedCountriesOfWorkOk returns a tuple with the SupportedCountriesOfWork field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedCountriesOfWork

`func (o *V2CheckInfo) SetSupportedCountriesOfWork(v []string)`

SetSupportedCountriesOfWork sets SupportedCountriesOfWork field to given value.


### GetSupportedCountriesOfResidence

`func (o *V2CheckInfo) GetSupportedCountriesOfResidence() []string`

GetSupportedCountriesOfResidence returns the SupportedCountriesOfResidence field if non-nil, zero value otherwise.

### GetSupportedCountriesOfResidenceOk

`func (o *V2CheckInfo) GetSupportedCountriesOfResidenceOk() (*[]string, bool)`

GetSupportedCountriesOfResidenceOk returns a tuple with the SupportedCountriesOfResidence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupportedCountriesOfResidence

`func (o *V2CheckInfo) SetSupportedCountriesOfResidence(v []string)`

SetSupportedCountriesOfResidence sets SupportedCountriesOfResidence field to given value.


### GetDefaultPrice

`func (o *V2CheckInfo) GetDefaultPrice() V2Money`

GetDefaultPrice returns the DefaultPrice field if non-nil, zero value otherwise.

### GetDefaultPriceOk

`func (o *V2CheckInfo) GetDefaultPriceOk() (*V2Money, bool)`

GetDefaultPriceOk returns a tuple with the DefaultPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultPrice

`func (o *V2CheckInfo) SetDefaultPrice(v V2Money)`

SetDefaultPrice sets DefaultPrice field to given value.


### SetDefaultPriceNil

`func (o *V2CheckInfo) SetDefaultPriceNil(b bool)`

 SetDefaultPriceNil sets the value for DefaultPrice to be an explicit nil

### UnsetDefaultPrice
`func (o *V2CheckInfo) UnsetDefaultPrice()`

UnsetDefaultPrice ensures that no value is present for DefaultPrice, not even an explicit nil
### GetConfigFields

`func (o *V2CheckInfo) GetConfigFields() []V2CheckField`

GetConfigFields returns the ConfigFields field if non-nil, zero value otherwise.

### GetConfigFieldsOk

`func (o *V2CheckInfo) GetConfigFieldsOk() (*[]V2CheckField, bool)`

GetConfigFieldsOk returns a tuple with the ConfigFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfigFields

`func (o *V2CheckInfo) SetConfigFields(v []V2CheckField)`

SetConfigFields sets ConfigFields field to given value.


### GetInputFields

`func (o *V2CheckInfo) GetInputFields() []V2CheckField`

GetInputFields returns the InputFields field if non-nil, zero value otherwise.

### GetInputFieldsOk

`func (o *V2CheckInfo) GetInputFieldsOk() (*[]V2CheckField, bool)`

GetInputFieldsOk returns a tuple with the InputFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFields

`func (o *V2CheckInfo) SetInputFields(v []V2CheckField)`

SetInputFields sets InputFields field to given value.


### GetCandidateFields

`func (o *V2CheckInfo) GetCandidateFields() []V2CheckField`

GetCandidateFields returns the CandidateFields field if non-nil, zero value otherwise.

### GetCandidateFieldsOk

`func (o *V2CheckInfo) GetCandidateFieldsOk() (*[]V2CheckField, bool)`

GetCandidateFieldsOk returns a tuple with the CandidateFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidateFields

`func (o *V2CheckInfo) SetCandidateFields(v []V2CheckField)`

SetCandidateFields sets CandidateFields field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


