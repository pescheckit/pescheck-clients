# V2DocumentContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** |  | 
**Data** | Pointer to **string** | Base64-encoded file contents (type &#x3D;&#x3D; base64). | [optional] 

## Methods

### NewV2DocumentContent

`func NewV2DocumentContent(type_ string, ) *V2DocumentContent`

NewV2DocumentContent instantiates a new V2DocumentContent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2DocumentContentWithDefaults

`func NewV2DocumentContentWithDefaults() *V2DocumentContent`

NewV2DocumentContentWithDefaults instantiates a new V2DocumentContent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *V2DocumentContent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *V2DocumentContent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *V2DocumentContent) SetType(v string)`

SetType sets Type field to given value.


### GetData

`func (o *V2DocumentContent) GetData() string`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *V2DocumentContent) GetDataOk() (*string, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *V2DocumentContent) SetData(v string)`

SetData sets Data field to given value.

### HasData

`func (o *V2DocumentContent) HasData() bool`

HasData returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


