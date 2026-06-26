# V2ScreeningCheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckType** | **string** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;id2check&#x60; - id2check * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | 
**Config** | Pointer to **map[string]interface{}** |  | [optional] 
**ProfileCheckId** | Pointer to **string** | Disambiguator. Use when the profile has multiple ProfileChecks of the same check_type. | [optional] 
**Input** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewV2ScreeningCheck

`func NewV2ScreeningCheck(checkType string, ) *V2ScreeningCheck`

NewV2ScreeningCheck instantiates a new V2ScreeningCheck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ScreeningCheckWithDefaults

`func NewV2ScreeningCheckWithDefaults() *V2ScreeningCheck`

NewV2ScreeningCheckWithDefaults instantiates a new V2ScreeningCheck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckType

`func (o *V2ScreeningCheck) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2ScreeningCheck) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2ScreeningCheck) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.


### GetConfig

`func (o *V2ScreeningCheck) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *V2ScreeningCheck) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *V2ScreeningCheck) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *V2ScreeningCheck) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetProfileCheckId

`func (o *V2ScreeningCheck) GetProfileCheckId() string`

GetProfileCheckId returns the ProfileCheckId field if non-nil, zero value otherwise.

### GetProfileCheckIdOk

`func (o *V2ScreeningCheck) GetProfileCheckIdOk() (*string, bool)`

GetProfileCheckIdOk returns a tuple with the ProfileCheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCheckId

`func (o *V2ScreeningCheck) SetProfileCheckId(v string)`

SetProfileCheckId sets ProfileCheckId field to given value.

### HasProfileCheckId

`func (o *V2ScreeningCheck) HasProfileCheckId() bool`

HasProfileCheckId returns a boolean if a field has been set.

### GetInput

`func (o *V2ScreeningCheck) GetInput() interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *V2ScreeningCheck) GetInputOk() (*interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *V2ScreeningCheck) SetInput(v interface{})`

SetInput sets Input field to given value.

### HasInput

`func (o *V2ScreeningCheck) HasInput() bool`

HasInput returns a boolean if a field has been set.

### SetInputNil

`func (o *V2ScreeningCheck) SetInputNil(b bool)`

 SetInputNil sets the value for Input to be an explicit nil

### UnsetInput
`func (o *V2ScreeningCheck) UnsetInput()`

UnsetInput ensures that no value is present for Input, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


