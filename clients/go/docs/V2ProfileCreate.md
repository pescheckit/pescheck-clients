# V2ProfileCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** |  | 
**Description** | Pointer to **string** |  | [optional] [default to ""]
**Checks** | [**[]V2ProfileCheck**](V2ProfileCheck.md) |  | 

## Methods

### NewV2ProfileCreate

`func NewV2ProfileCreate(name string, checks []V2ProfileCheck, ) *V2ProfileCreate`

NewV2ProfileCreate instantiates a new V2ProfileCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ProfileCreateWithDefaults

`func NewV2ProfileCreateWithDefaults() *V2ProfileCreate`

NewV2ProfileCreateWithDefaults instantiates a new V2ProfileCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V2ProfileCreate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V2ProfileCreate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V2ProfileCreate) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *V2ProfileCreate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *V2ProfileCreate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *V2ProfileCreate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *V2ProfileCreate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetChecks

`func (o *V2ProfileCreate) GetChecks() []V2ProfileCheck`

GetChecks returns the Checks field if non-nil, zero value otherwise.

### GetChecksOk

`func (o *V2ProfileCreate) GetChecksOk() (*[]V2ProfileCheck, bool)`

GetChecksOk returns a tuple with the Checks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecks

`func (o *V2ProfileCreate) SetChecks(v []V2ProfileCheck)`

SetChecks sets Checks field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


