# V2Document

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckId** | **NullableString** |  | [readonly] 
**CheckType** | **string** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemedia2check&#x60; - adversemedia2check * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [readonly] 
**Filename** | **string** |  | [readonly] 
**Extension** | **string** |  | [readonly] 
**Content** | [**V2DocumentContent**](V2DocumentContent.md) |  | [readonly] 
**Metadata** | **map[string]interface{}** |  | [readonly] 

## Methods

### NewV2Document

`func NewV2Document(checkId NullableString, checkType string, filename string, extension string, content V2DocumentContent, metadata map[string]interface{}, ) *V2Document`

NewV2Document instantiates a new V2Document object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2DocumentWithDefaults

`func NewV2DocumentWithDefaults() *V2Document`

NewV2DocumentWithDefaults instantiates a new V2Document object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckId

`func (o *V2Document) GetCheckId() string`

GetCheckId returns the CheckId field if non-nil, zero value otherwise.

### GetCheckIdOk

`func (o *V2Document) GetCheckIdOk() (*string, bool)`

GetCheckIdOk returns a tuple with the CheckId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckId

`func (o *V2Document) SetCheckId(v string)`

SetCheckId sets CheckId field to given value.


### SetCheckIdNil

`func (o *V2Document) SetCheckIdNil(b bool)`

 SetCheckIdNil sets the value for CheckId to be an explicit nil

### UnsetCheckId
`func (o *V2Document) UnsetCheckId()`

UnsetCheckId ensures that no value is present for CheckId, not even an explicit nil
### GetCheckType

`func (o *V2Document) GetCheckType() string`

GetCheckType returns the CheckType field if non-nil, zero value otherwise.

### GetCheckTypeOk

`func (o *V2Document) GetCheckTypeOk() (*string, bool)`

GetCheckTypeOk returns a tuple with the CheckType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckType

`func (o *V2Document) SetCheckType(v string)`

SetCheckType sets CheckType field to given value.


### GetFilename

`func (o *V2Document) GetFilename() string`

GetFilename returns the Filename field if non-nil, zero value otherwise.

### GetFilenameOk

`func (o *V2Document) GetFilenameOk() (*string, bool)`

GetFilenameOk returns a tuple with the Filename field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilename

`func (o *V2Document) SetFilename(v string)`

SetFilename sets Filename field to given value.


### GetExtension

`func (o *V2Document) GetExtension() string`

GetExtension returns the Extension field if non-nil, zero value otherwise.

### GetExtensionOk

`func (o *V2Document) GetExtensionOk() (*string, bool)`

GetExtensionOk returns a tuple with the Extension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtension

`func (o *V2Document) SetExtension(v string)`

SetExtension sets Extension field to given value.


### GetContent

`func (o *V2Document) GetContent() V2DocumentContent`

GetContent returns the Content field if non-nil, zero value otherwise.

### GetContentOk

`func (o *V2Document) GetContentOk() (*V2DocumentContent, bool)`

GetContentOk returns a tuple with the Content field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContent

`func (o *V2Document) SetContent(v V2DocumentContent)`

SetContent sets Content field to given value.


### GetMetadata

`func (o *V2Document) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *V2Document) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *V2Document) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


