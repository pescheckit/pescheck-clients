# V2ScreeningCreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | **string** |  | 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | 
**Checks** | Pointer to [**[]V2ScreeningCheck**](V2ScreeningCheck.md) |  | [optional] 

## Methods

### NewV2ScreeningCreate

`func NewV2ScreeningCreate(profileId string, candidate V2Candidate, ) *V2ScreeningCreate`

NewV2ScreeningCreate instantiates a new V2ScreeningCreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ScreeningCreateWithDefaults

`func NewV2ScreeningCreateWithDefaults() *V2ScreeningCreate`

NewV2ScreeningCreateWithDefaults instantiates a new V2ScreeningCreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *V2ScreeningCreate) GetProfileId() string`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *V2ScreeningCreate) GetProfileIdOk() (*string, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *V2ScreeningCreate) SetProfileId(v string)`

SetProfileId sets ProfileId field to given value.


### GetCandidate

`func (o *V2ScreeningCreate) GetCandidate() V2Candidate`

GetCandidate returns the Candidate field if non-nil, zero value otherwise.

### GetCandidateOk

`func (o *V2ScreeningCreate) GetCandidateOk() (*V2Candidate, bool)`

GetCandidateOk returns a tuple with the Candidate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidate

`func (o *V2ScreeningCreate) SetCandidate(v V2Candidate)`

SetCandidate sets Candidate field to given value.


### GetChecks

`func (o *V2ScreeningCreate) GetChecks() []V2ScreeningCheck`

GetChecks returns the Checks field if non-nil, zero value otherwise.

### GetChecksOk

`func (o *V2ScreeningCreate) GetChecksOk() (*[]V2ScreeningCheck, bool)`

GetChecksOk returns a tuple with the Checks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecks

`func (o *V2ScreeningCreate) SetChecks(v []V2ScreeningCheck)`

SetChecks sets Checks field to given value.

### HasChecks

`func (o *V2ScreeningCreate) HasChecks() bool`

HasChecks returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


