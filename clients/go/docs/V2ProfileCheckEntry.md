# V2ProfileCheckEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [readonly] 
**CheckType** | **string** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [readonly] 
**DisplayName** | **string** |  | [readonly] 
**ConfiguredPrice** | [**V2Money**](V2Money.md) |  | [readonly] 
**Config** | **map[string]interface{}** |  | [readonly] 
**InputFields** | **[]map[string]interface{}** |  | [readonly] 
**IsSystemManaged** | **bool** |  | [readonly] 

## Methods

### NewV2ProfileCheckEntry

`func NewV2ProfileCheckEntry(id string, checkType string, displayName string, configuredPrice V2Money, config map[string]interface{}, inputFields []map[string]interface{}, isSystemManaged bool, ) *V2ProfileCheckEntry`

NewV2ProfileCheckEntry instantiates a new V2ProfileCheckEntry object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ProfileCheckEntryWithDefaults

`func NewV2ProfileCheckEntryWithDefaults() *V2ProfileCheckEntry`

NewV2ProfileCheckEntryWithDefaults instantiates a new V2ProfileCheckEntry object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *V2ProfileCheckEntry) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *V2ProfileCheckEntry) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *V2ProfileCheckEntry) SetId(v string)`

SetId sets Id field to given value.


### GetCheckType

`func (o *V2ProfileCheckEntry) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2ProfileCheckEntry) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2ProfileCheckEntry) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.


### GetDisplayName

`func (o *V2ProfileCheckEntry) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *V2ProfileCheckEntry) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *V2ProfileCheckEntry) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetConfiguredPrice

`func (o *V2ProfileCheckEntry) GetConfiguredPrice() V2Money`

GetConfiguredPrice returns the ConfiguredPrice field if non-nil, zero value otherwise.

### GetConfiguredPriceOk

`func (o *V2ProfileCheckEntry) GetConfiguredPriceOk() (*V2Money, bool)`

GetConfiguredPriceOk returns a tuple with the ConfiguredPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfiguredPrice

`func (o *V2ProfileCheckEntry) SetConfiguredPrice(v V2Money)`

SetConfiguredPrice sets ConfiguredPrice field to given value.


### GetConfig

`func (o *V2ProfileCheckEntry) GetConfig() map[string]interface{}`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *V2ProfileCheckEntry) GetConfigOk() (*map[string]interface{}, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *V2ProfileCheckEntry) SetConfig(v map[string]interface{})`

SetConfig sets Config field to given value.


### GetInputFields

`func (o *V2ProfileCheckEntry) GetInputFields() []map[string]interface{}`

GetInputFields returns the InputFields field if non-nil, zero value otherwise.

### GetInputFieldsOk

`func (o *V2ProfileCheckEntry) GetInputFieldsOk() (*[]map[string]interface{}, bool)`

GetInputFieldsOk returns a tuple with the InputFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputFields

`func (o *V2ProfileCheckEntry) SetInputFields(v []map[string]interface{})`

SetInputFields sets InputFields field to given value.


### GetIsSystemManaged

`func (o *V2ProfileCheckEntry) GetIsSystemManaged() bool`

GetIsSystemManaged returns the IsSystemManaged field if non-nil, zero value otherwise.

### GetIsSystemManagedOk

`func (o *V2ProfileCheckEntry) GetIsSystemManagedOk() (*bool, bool)`

GetIsSystemManagedOk returns a tuple with the IsSystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsSystemManaged

`func (o *V2ProfileCheckEntry) SetIsSystemManaged(v bool)`

SetIsSystemManaged sets IsSystemManaged field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


