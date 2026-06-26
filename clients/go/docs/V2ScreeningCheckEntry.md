# V2ScreeningCheckEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [readonly] 
**ProfileCheckId** | **NullableString** |  | [readonly] 
**CheckType** | **string** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [readonly] 
**DisplayName** | **string** |  | [readonly] 
**Status** | **string** |  | [readonly] 
**Config** | **map[string]interface{}** |  | [readonly] 
**Input** | **map[string]interface{}** |  | [readonly] 
**Output** | **map[string]interface{}** |  | [readonly] 
**CandidateWizardUrl** | **NullableString** | Deep link to this check&#39;s candidate wizard step. Null when the check has no dedicated candidate step. | [readonly] 

## Methods

### NewV2ScreeningCheckEntry

`func NewV2ScreeningCheckEntry(id string, profileCheckId NullableString, checkType string, displayName string, status string, config map[string]interface{}, input map[string]interface{}, output map[string]interface{}, candidateWizardUrl NullableString, ) *V2ScreeningCheckEntry`

NewV2ScreeningCheckEntry instantiates a new V2ScreeningCheckEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ScreeningCheckEntryWithDefaults

`func NewV2ScreeningCheckEntryWithDefaults() *V2ScreeningCheckEntry`

NewV2ScreeningCheckEntryWithDefaults instantiates a new V2ScreeningCheckEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *V2ScreeningCheckEntry) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *V2ScreeningCheckEntry) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *V2ScreeningCheckEntry) SetId(v string)`

SetId sets Id field to given value.


### GetProfileCheckId

`func (o *V2ScreeningCheckEntry) GetProfileCheckId() string`

GetProfileCheckId returns the ProfileCheckId field if non-nil, zero value otherwise.

### GetProfileCheckIdOk

`func (o *V2ScreeningCheckEntry) GetProfileCheckIdOk() (*string, bool)`

GetProfileCheckIdOk returns a tuple with the ProfileCheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCheckId

`func (o *V2ScreeningCheckEntry) SetProfileCheckId(v string)`

SetProfileCheckId sets ProfileCheckId field to given value.


### SetProfileCheckIdNil

`func (o *V2ScreeningCheckEntry) SetProfileCheckIdNil(b bool)`

 SetProfileCheckIdNil sets the value for ProfileCheckId to be an explicit nil

### UnsetProfileCheckId
`func (o *V2ScreeningCheckEntry) UnsetProfileCheckId()`

UnsetProfileCheckId ensures that no value is present for ProfileCheckId, not even an explicit nil
### GetCheckType

`func (o *V2ScreeningCheckEntry) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2ScreeningCheckEntry) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2ScreeningCheckEntry) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.


### GetDisplayName

`func (o *V2ScreeningCheckEntry) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *V2ScreeningCheckEntry) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *V2ScreeningCheckEntry) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetStatus

`func (o *V2ScreeningCheckEntry) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *V2ScreeningCheckEntry) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *V2ScreeningCheckEntry) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetConfig

`func (o *V2ScreeningCheckEntry) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *V2ScreeningCheckEntry) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *V2ScreeningCheckEntry) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.


### GetInput

`func (o *V2ScreeningCheckEntry) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *V2ScreeningCheckEntry) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *V2ScreeningCheckEntry) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.


### GetOutput

`func (o *V2ScreeningCheckEntry) GetOutput() map[string]interface{}`

GetOutput returns the Output field if non-nil, zero value otherwise.

### GetOutputOk

`func (o *V2ScreeningCheckEntry) GetOutputOk() (*map[string]interface{}, bool)`

GetOutputOk returns a tuple with the Output field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOutput

`func (o *V2ScreeningCheckEntry) SetOutput(v map[string]interface{})`

SetOutput sets Output field to given value.


### GetCandidateWizardUrl

`func (o *V2ScreeningCheckEntry) GetCandidateWizardUrl() string`

GetCandidateWizardUrl returns the CandidateWizardUrl field if non-nil, zero value otherwise.

### GetCandidateWizardUrlOk

`func (o *V2ScreeningCheckEntry) GetCandidateWizardUrlOk() (*string, bool)`

GetCandidateWizardUrlOk returns a tuple with the CandidateWizardUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidateWizardUrl

`func (o *V2ScreeningCheckEntry) SetCandidateWizardUrl(v string)`

SetCandidateWizardUrl sets CandidateWizardUrl field to given value.


### SetCandidateWizardUrlNil

`func (o *V2ScreeningCheckEntry) SetCandidateWizardUrlNil(b bool)`

 SetCandidateWizardUrlNil sets the value for CandidateWizardUrl to be an explicit nil

### UnsetCandidateWizardUrl
`func (o *V2ScreeningCheckEntry) UnsetCandidateWizardUrl()`

UnsetCandidateWizardUrl ensures that no value is present for CandidateWizardUrl, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


