# OrganisationAddonUpdate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **bool** | Switch the add-on on (billed monthly from today) or off (billing stops at the end of the month). | 

## Methods

### NewOrganisationAddonUpdate

`func NewOrganisationAddonUpdate(enabled bool, ) *OrganisationAddonUpdate`

NewOrganisationAddonUpdate instantiates a new OrganisationAddonUpdate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganisationAddonUpdateWithDefaults

`func NewOrganisationAddonUpdateWithDefaults() *OrganisationAddonUpdate`

NewOrganisationAddonUpdateWithDefaults instantiates a new OrganisationAddonUpdate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *OrganisationAddonUpdate) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *OrganisationAddonUpdate) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *OrganisationAddonUpdate) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


