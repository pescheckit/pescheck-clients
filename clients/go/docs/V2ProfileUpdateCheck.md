# V2ProfileUpdateCheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckType** | **string** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | 
**Config** | Pointer to **map[string]interface{}** |  | [optional] 
**ProfileCheckId** | Pointer to **string** |  | [optional] 

## Methods

### NewV2ProfileUpdateCheck

`func NewV2ProfileUpdateCheck(checkType string, ) *V2ProfileUpdateCheck`

NewV2ProfileUpdateCheck instantiates a new V2ProfileUpdateCheck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ProfileUpdateCheckWithDefaults

`func NewV2ProfileUpdateCheckWithDefaults() *V2ProfileUpdateCheck`

NewV2ProfileUpdateCheckWithDefaults instantiates a new V2ProfileUpdateCheck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckType

`func (o *V2ProfileUpdateCheck) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2ProfileUpdateCheck) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2ProfileUpdateCheck) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.


### GetConfig

`func (o *V2ProfileUpdateCheck) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *V2ProfileUpdateCheck) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *V2ProfileUpdateCheck) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.

### HasConfig

`func (o *V2ProfileUpdateCheck) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### GetProfileCheckId

`func (o *V2ProfileUpdateCheck) GetProfileCheckId() string`

GetProfileCheckId returns the ProfileCheckId field if non-nil, zero value otherwise.

### GetProfileCheckIdOk

`func (o *V2ProfileUpdateCheck) GetProfileCheckIdOk() (*string, bool)`

GetProfileCheckIdOk returns a tuple with the ProfileCheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileCheckId

`func (o *V2ProfileUpdateCheck) SetProfileCheckId(v string)`

SetProfileCheckId sets ProfileCheckId field to given value.

### HasProfileCheckId

`func (o *V2ProfileUpdateCheck) HasProfileCheckId() bool`

HasProfileCheckId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


