# PaginatedDivisionReadOnlyList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **int32** |  | 
**Next** | **NullableString** |  | 
**Previous** | **NullableString** |  | 
**Results** | [**[]DivisionReadOnly**](DivisionReadOnly.md) |  | 

## Methods

### NewPaginatedDivisionReadOnlyList

`func NewPaginatedDivisionReadOnlyList(count int32, next NullableString, previous NullableString, results []DivisionReadOnly, ) *PaginatedDivisionReadOnlyList`

NewPaginatedDivisionReadOnlyList instantiates a new PaginatedDivisionReadOnlyList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaginatedDivisionReadOnlyListWithDefaults

`func NewPaginatedDivisionReadOnlyListWithDefaults() *PaginatedDivisionReadOnlyList`

NewPaginatedDivisionReadOnlyListWithDefaults instantiates a new PaginatedDivisionReadOnlyList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCount

`func (o *PaginatedDivisionReadOnlyList) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *PaginatedDivisionReadOnlyList) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *PaginatedDivisionReadOnlyList) SetCount(v int32)`

SetCount sets Count field to given value.


### GetNext

`func (o *PaginatedDivisionReadOnlyList) GetNext() string`

GetNext returns the Next field if non-nil, zero value otherwise.

### GetNextOk

`func (o *PaginatedDivisionReadOnlyList) GetNextOk() (*string, bool)`

GetNextOk returns a tuple with the Next field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNext

`func (o *PaginatedDivisionReadOnlyList) SetNext(v string)`

SetNext sets Next field to given value.


### SetNextNil

`func (o *PaginatedDivisionReadOnlyList) SetNextNil(b bool)`

 SetNextNil sets the value for Next to be an explicit nil

### UnsetNext
`func (o *PaginatedDivisionReadOnlyList) UnsetNext()`

UnsetNext ensures that no value is present for Next, not even an explicit nil
### GetPrevious

`func (o *PaginatedDivisionReadOnlyList) GetPrevious() string`

GetPrevious returns the Previous field if non-nil, zero value otherwise.

### GetPreviousOk

`func (o *PaginatedDivisionReadOnlyList) GetPreviousOk() (*string, bool)`

GetPreviousOk returns a tuple with the Previous field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrevious

`func (o *PaginatedDivisionReadOnlyList) SetPrevious(v string)`

SetPrevious sets Previous field to given value.


### SetPreviousNil

`func (o *PaginatedDivisionReadOnlyList) SetPreviousNil(b bool)`

 SetPreviousNil sets the value for Previous to be an explicit nil

### UnsetPrevious
`func (o *PaginatedDivisionReadOnlyList) UnsetPrevious()`

UnsetPrevious ensures that no value is present for Previous, not even an explicit nil
### GetResults

`func (o *PaginatedDivisionReadOnlyList) GetResults() []DivisionReadOnly`

GetResults returns the Results field if non-nil, zero value otherwise.

### GetResultsOk

`func (o *PaginatedDivisionReadOnlyList) GetResultsOk() (*[]DivisionReadOnly, bool)`

GetResultsOk returns a tuple with the Results field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResults

`func (o *PaginatedDivisionReadOnlyList) SetResults(v []DivisionReadOnly)`

SetResults sets Results field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


