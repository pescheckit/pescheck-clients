# V2ScreeningNoteInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Note** | **string** |  | 
**ProfileCheckId** | Pointer to **NullableString** | Links the note to the Check spawned from this ProfileCheck. Wins over check_type. | [optional] 
**CheckType** | Pointer to **string** | Scope the note to a check type. Ignored when profile_check_id is given.  * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [optional] 

## Methods

### NewV2ScreeningNoteInput

`func NewV2ScreeningNoteInput(note string, ) *V2ScreeningNoteInput`

NewV2ScreeningNoteInput instantiates a new V2ScreeningNoteInput object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ScreeningNoteInputWithDefaults

`func NewV2ScreeningNoteInputWithDefaults() *V2ScreeningNoteInput`

NewV2ScreeningNoteInputWithDefaults instantiates a new V2ScreeningNoteInput object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNote

`func (o *V2ScreeningNoteInput) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *V2ScreeningNoteInput) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *V2ScreeningNoteInput) SetNote(v string)`

SetNote sets Note field to given value.


### GetProfileCheckId

`func (o *V2ScreeningNoteInput) GetProfileCheckId() string`

GetProfileCheckId returns the ProfileCheckId field if non-nil, zero value otherwise.

### GetProfileCheckIdOk

`func (o *V2ScreeningNoteInput) GetProfileCheckIdOk() (*string, bool)`

GetProfileCheckIdOk returns a tuple with the ProfileCheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCheckId

`func (o *V2ScreeningNoteInput) SetProfileCheckId(v string)`

SetProfileCheckId sets ProfileCheckId field to given value.

### HasProfileCheckId

`func (o *V2ScreeningNoteInput) HasProfileCheckId() bool`

HasProfileCheckId returns a boolean if a field has been set.

### SetProfileCheckIdNil

`func (o *V2ScreeningNoteInput) SetProfileCheckIdNil(b bool)`

 SetProfileCheckIdNil sets the value for ProfileCheckId to be an explicit nil

### UnsetProfileCheckId
`func (o *V2ScreeningNoteInput) UnsetProfileCheckId()`

UnsetProfileCheckId ensures that no value is present for ProfileCheckId, not even an explicit nil
### GetCheckType

`func (o *V2ScreeningNoteInput) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2ScreeningNoteInput) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2ScreeningNoteInput) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.

### HasCheckType

`func (o *V2ScreeningNoteInput) HasCheckType() bool`

HasCheckType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


