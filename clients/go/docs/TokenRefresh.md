# TokenRefresh

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | **string** |  | [readonly] 
**Refresh** | **string** |  | 

## Methods

### NewTokenRefresh

`func NewTokenRefresh(access string, refresh string, ) *TokenRefresh`

NewTokenRefresh instantiates a new TokenRefresh object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTokenRefreshWithDefaults

`func NewTokenRefreshWithDefaults() *TokenRefresh`

NewTokenRefreshWithDefaults instantiates a new TokenRefresh object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccess

`func (o *TokenRefresh) GetAccess() string`

GetAccess returns the Access field if non-nil, zero value otherwise.

### GetAccessOk

`func (o *TokenRefresh) GetAccessOk() (*string, bool)`

GetAccessOk returns a tuple with the Access field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccess

`func (o *TokenRefresh) SetAccess(v string)`

SetAccess sets Access field to given value.


### GetRefresh

`func (o *TokenRefresh) GetRefresh() string`

GetRefresh returns the Refresh field if non-nil, zero value otherwise.

### GetRefreshOk

`func (o *TokenRefresh) GetRefreshOk() (*string, bool)`

GetRefreshOk returns a tuple with the Refresh field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefresh

`func (o *TokenRefresh) SetRefresh(v string)`

SetRefresh sets Refresh field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


