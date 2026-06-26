# PaginatedV2ProfileListItemList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **int32** |  | 
**Next** | **NullableString** |  | 
**Previous** | **NullableString** |  | 
**Results** | [**[]V2ProfileListItem**](V2ProfileListItem.md) |  | 

## Methods

### NewPaginatedV2ProfileListItemList

`func NewPaginatedV2ProfileListItemList(count int32, next NullableString, previous NullableString, results []V2ProfileListItem, ) *PaginatedV2ProfileListItemList`

NewPaginatedV2ProfileListItemList instantiates a new PaginatedV2ProfileListItemList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedV2ProfileListItemListWithDefaults

`func NewPaginatedV2ProfileListItemListWithDefaults() *PaginatedV2ProfileListItemList`

NewPaginatedV2ProfileListItemListWithDefaults instantiates a new PaginatedV2ProfileListItemList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedV2ProfileListItemList) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedV2ProfileListItemList) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedV2ProfileListItemList) SetCount(v int32)`

SetCount sets Count field to given value.


### GetNext

`func (o *PaginatedV2ProfileListItemList) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *PaginatedV2ProfileListItemList) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *PaginatedV2ProfileListItemList) SetNext(v string)`

SetNext sets Next field to given value.


### SetNextNil

`func (o *PaginatedV2ProfileListItemList) SetNextNil(b bool)`

 SetNextNil sets the value for Next to be an explicit nil

### UnsetNext
`func (o *PaginatedV2ProfileListItemList) UnsetNext()`

UnsetNext ensures that no value is present for Next, not even an explicit nil
### GetPrevious

`func (o *PaginatedV2ProfileListItemList) GetPrevious() string`

GetPrevious returns the Previous field if non-nil, zero value otherwise.

### GetPreviousOk

`func (o *PaginatedV2ProfileListItemList) GetPreviousOk() (*string, bool)`

GetPreviousOk returns a tuple with the Previous field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevious

`func (o *PaginatedV2ProfileListItemList) SetPrevious(v string)`

SetPrevious sets Previous field to given value.


### SetPreviousNil

`func (o *PaginatedV2ProfileListItemList) SetPreviousNil(b bool)`

 SetPreviousNil sets the value for Previous to be an explicit nil

### UnsetPrevious
`func (o *PaginatedV2ProfileListItemList) UnsetPrevious()`

UnsetPrevious ensures that no value is present for Previous, not even an explicit nil
### GetResults

`func (o *PaginatedV2ProfileListItemList) GetResults() []V2ProfileListItem`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedV2ProfileListItemList) GetResultsOk() (*[]V2ProfileListItem, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedV2ProfileListItemList) SetResults(v []V2ProfileListItem)`

SetResults sets Results field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


