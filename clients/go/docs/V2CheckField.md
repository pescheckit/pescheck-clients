# V2CheckField

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** |  | [optional] [readonly] 
**Type** | Pointer to **string** | \&quot;string\&quot; | \&quot;integer\&quot; | \&quot;number\&quot; | \&quot;boolean\&quot; | \&quot;array\&quot; | \&quot;object\&quot; | [optional] [readonly] 
**Required** | Pointer to **bool** | Whether the request body must include this field. | [optional] [readonly] 
**Choices** | Pointer to **[]string** | Allowed values, or null if the field isn&#39;t constrained to a set. | [optional] [readonly] 
**HelpText** | Pointer to **NullableString** |  | [optional] [readonly] 

## Methods

### NewV2CheckField

`func NewV2CheckField() *V2CheckField`

NewV2CheckField instantiates a new V2CheckField object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2CheckFieldWithDefaults

`func NewV2CheckFieldWithDefaults() *V2CheckField`

NewV2CheckFieldWithDefaults instantiates a new V2CheckField object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *V2CheckField) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V2CheckField) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V2CheckField) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *V2CheckField) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *V2CheckField) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *V2CheckField) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *V2CheckField) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *V2CheckField) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRequired

`func (o *V2CheckField) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *V2CheckField) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *V2CheckField) SetRequired(v bool)`

SetRequired sets Required field to given value.

### HasRequired

`func (o *V2CheckField) HasRequired() bool`

HasRequired returns a boolean if a field has been set.

### GetChoices

`func (o *V2CheckField) GetChoices() []string`

GetChoices returns the Choices field if non-nil, zero value otherwise.

### GetChoicesOk

`func (o *V2CheckField) GetChoicesOk() (*[]string, bool)`

GetChoicesOk returns a tuple with the Choices field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChoices

`func (o *V2CheckField) SetChoices(v []string)`

SetChoices sets Choices field to given value.

### HasChoices

`func (o *V2CheckField) HasChoices() bool`

HasChoices returns a boolean if a field has been set.

### SetChoicesNil

`func (o *V2CheckField) SetChoicesNil(b bool)`

 SetChoicesNil sets the value for Choices to be an explicit nil

### UnsetChoices
`func (o *V2CheckField) UnsetChoices()`

UnsetChoices ensures that no value is present for Choices, not even an explicit nil
### GetHelpText

`func (o *V2CheckField) GetHelpText() string`

GetHelpText returns the HelpText field if non-nil, zero value otherwise.

### GetHelpTextOk

`func (o *V2CheckField) GetHelpTextOk() (*string, bool)`

GetHelpTextOk returns a tuple with the HelpText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHelpText

`func (o *V2CheckField) SetHelpText(v string)`

SetHelpText sets HelpText field to given value.

### HasHelpText

`func (o *V2CheckField) HasHelpText() bool`

HasHelpText returns a boolean if a field has been set.

### SetHelpTextNil

`func (o *V2CheckField) SetHelpTextNil(b bool)`

 SetHelpTextNil sets the value for HelpText to be an explicit nil

### UnsetHelpText
`func (o *V2CheckField) UnsetHelpText()`

UnsetHelpText ensures that no value is present for HelpText, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


