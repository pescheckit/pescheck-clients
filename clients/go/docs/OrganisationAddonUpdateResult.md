# OrganisationAddonUpdateResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Addon** | **string** | Add-on identifier, used in the URL.  * &#x60;branded_journey&#x60; - Branded Journey * &#x60;sso&#x60; - Single Sign-On (SSO) * &#x60;api_access&#x60; - API Access * &#x60;connected_ats&#x60; - Connected ATS - Click &amp; Go | 
**Name** | **string** |  | 
**Description** | **string** |  | 
**Enabled** | **bool** | Switched on (and billed) for this organisation. | 
**Active** | **bool** | Usable right now. A division also needs the add-on on its parent organisation. | 
**BlockedByParent** | **bool** | Only the missing add-on on the parent organisation stands in the way. | 
**MonthlyPrice** | [**NullableAddonPrice**](AddonPrice.md) | What this organisation pays per month; the division price for a division. Null when unpriced. | 
**PriceIsIndicative** | **bool** | The price is a starting price (\&quot;from\&quot;). | 
**DisabledDivisions** | [**[]DisabledDivision**](DisabledDivision.md) | Divisions that were switched off too, because the add-on was switched off on their parent. | 

## Methods

### NewOrganisationAddonUpdateResult

`func NewOrganisationAddonUpdateResult(addon string, name string, description string, enabled bool, active bool, blockedByParent bool, monthlyPrice NullableAddonPrice, priceIsIndicative bool, disabledDivisions []DisabledDivision, ) *OrganisationAddonUpdateResult`

NewOrganisationAddonUpdateResult instantiates a new OrganisationAddonUpdateResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrganisationAddonUpdateResultWithDefaults

`func NewOrganisationAddonUpdateResultWithDefaults() *OrganisationAddonUpdateResult`

NewOrganisationAddonUpdateResultWithDefaults instantiates a new OrganisationAddonUpdateResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddon

`func (o *OrganisationAddonUpdateResult) GetAddon() string`

GetAddon returns the Addon field if non-nil, zero value otherwise.

### GetAddonOk

`func (o *OrganisationAddonUpdateResult) GetAddonOk() (*string, bool)`

GetAddonOk returns a tuple with the Addon field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddon

`func (o *OrganisationAddonUpdateResult) SetAddon(v string)`

SetAddon sets Addon field to given value.


### GetName

`func (o *OrganisationAddonUpdateResult) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *OrganisationAddonUpdateResult) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *OrganisationAddonUpdateResult) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *OrganisationAddonUpdateResult) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *OrganisationAddonUpdateResult) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *OrganisationAddonUpdateResult) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetEnabled

`func (o *OrganisationAddonUpdateResult) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *OrganisationAddonUpdateResult) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *OrganisationAddonUpdateResult) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetActive

`func (o *OrganisationAddonUpdateResult) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *OrganisationAddonUpdateResult) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *OrganisationAddonUpdateResult) SetActive(v bool)`

SetActive sets Active field to given value.


### GetBlockedByParent

`func (o *OrganisationAddonUpdateResult) GetBlockedByParent() bool`

GetBlockedByParent returns the BlockedByParent field if non-nil, zero value otherwise.

### GetBlockedByParentOk

`func (o *OrganisationAddonUpdateResult) GetBlockedByParentOk() (*bool, bool)`

GetBlockedByParentOk returns a tuple with the BlockedByParent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockedByParent

`func (o *OrganisationAddonUpdateResult) SetBlockedByParent(v bool)`

SetBlockedByParent sets BlockedByParent field to given value.


### GetMonthlyPrice

`func (o *OrganisationAddonUpdateResult) GetMonthlyPrice() AddonPrice`

GetMonthlyPrice returns the MonthlyPrice field if non-nil, zero value otherwise.

### GetMonthlyPriceOk

`func (o *OrganisationAddonUpdateResult) GetMonthlyPriceOk() (*AddonPrice, bool)`

GetMonthlyPriceOk returns a tuple with the MonthlyPrice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMonthlyPrice

`func (o *OrganisationAddonUpdateResult) SetMonthlyPrice(v AddonPrice)`

SetMonthlyPrice sets MonthlyPrice field to given value.


### SetMonthlyPriceNil

`func (o *OrganisationAddonUpdateResult) SetMonthlyPriceNil(b bool)`

 SetMonthlyPriceNil sets the value for MonthlyPrice to be an explicit nil

### UnsetMonthlyPrice
`func (o *OrganisationAddonUpdateResult) UnsetMonthlyPrice()`

UnsetMonthlyPrice ensures that no value is present for MonthlyPrice, not even an explicit nil
### GetPriceIsIndicative

`func (o *OrganisationAddonUpdateResult) GetPriceIsIndicative() bool`

GetPriceIsIndicative returns the PriceIsIndicative field if non-nil, zero value otherwise.

### GetPriceIsIndicativeOk

`func (o *OrganisationAddonUpdateResult) GetPriceIsIndicativeOk() (*bool, bool)`

GetPriceIsIndicativeOk returns a tuple with the PriceIsIndicative field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceIsIndicative

`func (o *OrganisationAddonUpdateResult) SetPriceIsIndicative(v bool)`

SetPriceIsIndicative sets PriceIsIndicative field to given value.


### GetDisabledDivisions

`func (o *OrganisationAddonUpdateResult) GetDisabledDivisions() []DisabledDivision`

GetDisabledDivisions returns the DisabledDivisions field if non-nil, zero value otherwise.

### GetDisabledDivisionsOk

`func (o *OrganisationAddonUpdateResult) GetDisabledDivisionsOk() (*[]DisabledDivision, bool)`

GetDisabledDivisionsOk returns a tuple with the DisabledDivisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabledDivisions

`func (o *OrganisationAddonUpdateResult) SetDisabledDivisions(v []DisabledDivision)`

SetDisabledDivisions sets DisabledDivisions field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


