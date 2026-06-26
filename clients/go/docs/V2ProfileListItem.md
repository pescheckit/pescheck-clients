# V2ProfileListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [readonly] 
**Name** | **string** |  | 
**Description** | **NullableString** |  | 
**IsCustom** | Pointer to **bool** |  | [optional] 
**CheckTypes** | **[]string** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**UpdatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewV2ProfileListItem

`func NewV2ProfileListItem(id string, name string, description NullableString, checkTypes []string, createdAt time.Time, updatedAt time.Time, ) *V2ProfileListItem`

NewV2ProfileListItem instantiates a new V2ProfileListItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ProfileListItemWithDefaults

`func NewV2ProfileListItemWithDefaults() *V2ProfileListItem`

NewV2ProfileListItemWithDefaults instantiates a new V2ProfileListItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *V2ProfileListItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *V2ProfileListItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *V2ProfileListItem) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *V2ProfileListItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *V2ProfileListItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *V2ProfileListItem) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *V2ProfileListItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *V2ProfileListItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *V2ProfileListItem) SetDescription(v string)`

SetDescription sets Description field to given value.


### SetDescriptionNil

`func (o *V2ProfileListItem) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *V2ProfileListItem) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetIsCustom

`func (o *V2ProfileListItem) GetIsCustom() bool`

GetIsCustom returns the IsCustom field if non-nil, zero value otherwise.

### GetIsCustomOk

`func (o *V2ProfileListItem) GetIsCustomOk() (*bool, bool)`

GetIsCustomOk returns a tuple with the IsCustom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsCustom

`func (o *V2ProfileListItem) SetIsCustom(v bool)`

SetIsCustom sets IsCustom field to given value.

### HasIsCustom

`func (o *V2ProfileListItem) HasIsCustom() bool`

HasIsCustom returns a boolean if a field has been set.

### GetCheckTypes

`func (o *V2ProfileListItem) GetCheckTypes() []string`

GetCheckTypes returns the CheckTypes field if non-nil, zero value otherwise.

### GetCheckTypesOk

`func (o *V2ProfileListItem) GetCheckTypesOk() (*[]string, bool)`

GetCheckTypesOk returns a tuple with the CheckTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckTypes

`func (o *V2ProfileListItem) SetCheckTypes(v []string)`

SetCheckTypes sets CheckTypes field to given value.


### GetCreatedAt

`func (o *V2ProfileListItem) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *V2ProfileListItem) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *V2ProfileListItem) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *V2ProfileListItem) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *V2ProfileListItem) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *V2ProfileListItem) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


