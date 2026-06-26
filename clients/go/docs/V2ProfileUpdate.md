# V2ProfileUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] [default to ""]
**Checks** | [**[]V2ProfileUpdateCheck**](V2ProfileUpdateCheck.md) |  | 

## Methods

### NewV2ProfileUpdate

`func NewV2ProfileUpdate(name string, checks []V2ProfileUpdateCheck, ) *V2ProfileUpdate`

NewV2ProfileUpdate instantiates a new V2ProfileUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ProfileUpdateWithDefaults

`func NewV2ProfileUpdateWithDefaults() *V2ProfileUpdate`

NewV2ProfileUpdateWithDefaults instantiates a new V2ProfileUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V2ProfileUpdate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V2ProfileUpdate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V2ProfileUpdate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *V2ProfileUpdate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *V2ProfileUpdate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *V2ProfileUpdate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *V2ProfileUpdate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetChecks

`func (o *V2ProfileUpdate) GetChecks() []V2ProfileUpdateCheck`

GetChecks returns the Checks field if non-nil, zero value otherwise.

### GetChecksOk

`func (o *V2ProfileUpdate) GetChecksOk() (*[]V2ProfileUpdateCheck, bool)`

GetChecksOk returns a tuple with the Checks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecks

`func (o *V2ProfileUpdate) SetChecks(v []V2ProfileUpdateCheck)`

SetChecks sets Checks field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


