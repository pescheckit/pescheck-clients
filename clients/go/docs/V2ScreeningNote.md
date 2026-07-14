# V2ScreeningNote

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Note** | **string** |  | 
**CheckType** | **string** |  | 
**CheckId** | **NullableString** |  | 
**CreatedAt** | **time.Time** |  | 

## Methods

### NewV2ScreeningNote

`func NewV2ScreeningNote(note string, checkType string, checkId NullableString, createdAt time.Time, ) *V2ScreeningNote`

NewV2ScreeningNote instantiates a new V2ScreeningNote object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ScreeningNoteWithDefaults

`func NewV2ScreeningNoteWithDefaults() *V2ScreeningNote`

NewV2ScreeningNoteWithDefaults instantiates a new V2ScreeningNote object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNote

`func (o *V2ScreeningNote) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *V2ScreeningNote) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *V2ScreeningNote) SetNote(v string)`

SetNote sets Note field to given value.


### GetCheckType

`func (o *V2ScreeningNote) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2ScreeningNote) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2ScreeningNote) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.


### GetCheckId

`func (o *V2ScreeningNote) GetCheckId() string`

GetCheckId returns the CheckId field if non-nil, zero value otherwise.

### GetCheckIdOk

`func (o *V2ScreeningNote) GetCheckIdOk() (*string, bool)`

GetCheckIdOk returns a tuple with the CheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckId

`func (o *V2ScreeningNote) SetCheckId(v string)`

SetCheckId sets CheckId field to given value.


### SetCheckIdNil

`func (o *V2ScreeningNote) SetCheckIdNil(b bool)`

 SetCheckIdNil sets the value for CheckId to be an explicit nil

### UnsetCheckId
`func (o *V2ScreeningNote) UnsetCheckId()`

UnsetCheckId ensures that no value is present for CheckId, not even an explicit nil
### GetCreatedAt

`func (o *V2ScreeningNote) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *V2ScreeningNote) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *V2ScreeningNote) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


