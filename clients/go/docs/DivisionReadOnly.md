# DivisionReadOnly

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] [readonly] 
**Name** | Pointer to **NullableString** |  | [optional] 
**Parent** | Pointer to **string** |  | [optional] [readonly] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**UpdatedAt** | Pointer to **time.Time** |  | [optional] [readonly] 
**City** | Pointer to **NullableString** |  | [optional] 
**Address** | Pointer to **NullableString** |  | [optional] 
**Postal** | Pointer to **NullableString** |  | [optional] 
**Phone** | Pointer to **NullableString** |  | [optional] 
**ContactName** | Pointer to **NullableString** |  | [optional] 
**ContactEmail** | Pointer to **NullableString** |  | [optional] 
**InvoiceEmail** | Pointer to **NullableString** |  | [optional] 
**UseParentOnEmail** | Pointer to **bool** |  | [optional] 
**UseParentOnBilling** | Pointer to **bool** |  | [optional] 
**UseParentOnReport** | Pointer to **bool** |  | [optional] 

## Methods

### NewDivisionReadOnly

`func NewDivisionReadOnly() *DivisionReadOnly`

NewDivisionReadOnly instantiates a new DivisionReadOnly object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDivisionReadOnlyWithDefaults

`func NewDivisionReadOnlyWithDefaults() *DivisionReadOnly`

NewDivisionReadOnlyWithDefaults instantiates a new DivisionReadOnly object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DivisionReadOnly) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DivisionReadOnly) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DivisionReadOnly) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DivisionReadOnly) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DivisionReadOnly) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DivisionReadOnly) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DivisionReadOnly) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DivisionReadOnly) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *DivisionReadOnly) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *DivisionReadOnly) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetParent

`func (o *DivisionReadOnly) GetParent() string`

GetParent returns the Parent field if non-nil, zero value otherwise.

### GetParentOk

`func (o *DivisionReadOnly) GetParentOk() (*string, bool)`

GetParentOk returns a tuple with the Parent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetParent

`func (o *DivisionReadOnly) SetParent(v string)`

SetParent sets Parent field to given value.

### HasParent

`func (o *DivisionReadOnly) HasParent() bool`

HasParent returns a boolean if a field has been set.

### GetCreatedAt

`func (o *DivisionReadOnly) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *DivisionReadOnly) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *DivisionReadOnly) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *DivisionReadOnly) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetUpdatedAt

`func (o *DivisionReadOnly) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *DivisionReadOnly) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *DivisionReadOnly) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *DivisionReadOnly) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### GetCity

`func (o *DivisionReadOnly) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *DivisionReadOnly) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *DivisionReadOnly) SetCity(v string)`

SetCity sets City field to given value.

### HasCity

`func (o *DivisionReadOnly) HasCity() bool`

HasCity returns a boolean if a field has been set.

### SetCityNil

`func (o *DivisionReadOnly) SetCityNil(b bool)`

 SetCityNil sets the value for City to be an explicit nil

### UnsetCity
`func (o *DivisionReadOnly) UnsetCity()`

UnsetCity ensures that no value is present for City, not even an explicit nil
### GetAddress

`func (o *DivisionReadOnly) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *DivisionReadOnly) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *DivisionReadOnly) SetAddress(v string)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *DivisionReadOnly) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### SetAddressNil

`func (o *DivisionReadOnly) SetAddressNil(b bool)`

 SetAddressNil sets the value for Address to be an explicit nil

### UnsetAddress
`func (o *DivisionReadOnly) UnsetAddress()`

UnsetAddress ensures that no value is present for Address, not even an explicit nil
### GetPostal

`func (o *DivisionReadOnly) GetPostal() string`

GetPostal returns the Postal field if non-nil, zero value otherwise.

### GetPostalOk

`func (o *DivisionReadOnly) GetPostalOk() (*string, bool)`

GetPostalOk returns a tuple with the Postal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostal

`func (o *DivisionReadOnly) SetPostal(v string)`

SetPostal sets Postal field to given value.

### HasPostal

`func (o *DivisionReadOnly) HasPostal() bool`

HasPostal returns a boolean if a field has been set.

### SetPostalNil

`func (o *DivisionReadOnly) SetPostalNil(b bool)`

 SetPostalNil sets the value for Postal to be an explicit nil

### UnsetPostal
`func (o *DivisionReadOnly) UnsetPostal()`

UnsetPostal ensures that no value is present for Postal, not even an explicit nil
### GetPhone

`func (o *DivisionReadOnly) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *DivisionReadOnly) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *DivisionReadOnly) SetPhone(v string)`

SetPhone sets Phone field to given value.

### HasPhone

`func (o *DivisionReadOnly) HasPhone() bool`

HasPhone returns a boolean if a field has been set.

### SetPhoneNil

`func (o *DivisionReadOnly) SetPhoneNil(b bool)`

 SetPhoneNil sets the value for Phone to be an explicit nil

### UnsetPhone
`func (o *DivisionReadOnly) UnsetPhone()`

UnsetPhone ensures that no value is present for Phone, not even an explicit nil
### GetContactName

`func (o *DivisionReadOnly) GetContactName() string`

GetContactName returns the ContactName field if non-nil, zero value otherwise.

### GetContactNameOk

`func (o *DivisionReadOnly) GetContactNameOk() (*string, bool)`

GetContactNameOk returns a tuple with the ContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactName

`func (o *DivisionReadOnly) SetContactName(v string)`

SetContactName sets ContactName field to given value.

### HasContactName

`func (o *DivisionReadOnly) HasContactName() bool`

HasContactName returns a boolean if a field has been set.

### SetContactNameNil

`func (o *DivisionReadOnly) SetContactNameNil(b bool)`

 SetContactNameNil sets the value for ContactName to be an explicit nil

### UnsetContactName
`func (o *DivisionReadOnly) UnsetContactName()`

UnsetContactName ensures that no value is present for ContactName, not even an explicit nil
### GetContactEmail

`func (o *DivisionReadOnly) GetContactEmail() string`

GetContactEmail returns the ContactEmail field if non-nil, zero value otherwise.

### GetContactEmailOk

`func (o *DivisionReadOnly) GetContactEmailOk() (*string, bool)`

GetContactEmailOk returns a tuple with the ContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactEmail

`func (o *DivisionReadOnly) SetContactEmail(v string)`

SetContactEmail sets ContactEmail field to given value.

### HasContactEmail

`func (o *DivisionReadOnly) HasContactEmail() bool`

HasContactEmail returns a boolean if a field has been set.

### SetContactEmailNil

`func (o *DivisionReadOnly) SetContactEmailNil(b bool)`

 SetContactEmailNil sets the value for ContactEmail to be an explicit nil

### UnsetContactEmail
`func (o *DivisionReadOnly) UnsetContactEmail()`

UnsetContactEmail ensures that no value is present for ContactEmail, not even an explicit nil
### GetInvoiceEmail

`func (o *DivisionReadOnly) GetInvoiceEmail() string`

GetInvoiceEmail returns the InvoiceEmail field if non-nil, zero value otherwise.

### GetInvoiceEmailOk

`func (o *DivisionReadOnly) GetInvoiceEmailOk() (*string, bool)`

GetInvoiceEmailOk returns a tuple with the InvoiceEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceEmail

`func (o *DivisionReadOnly) SetInvoiceEmail(v string)`

SetInvoiceEmail sets InvoiceEmail field to given value.

### HasInvoiceEmail

`func (o *DivisionReadOnly) HasInvoiceEmail() bool`

HasInvoiceEmail returns a boolean if a field has been set.

### SetInvoiceEmailNil

`func (o *DivisionReadOnly) SetInvoiceEmailNil(b bool)`

 SetInvoiceEmailNil sets the value for InvoiceEmail to be an explicit nil

### UnsetInvoiceEmail
`func (o *DivisionReadOnly) UnsetInvoiceEmail()`

UnsetInvoiceEmail ensures that no value is present for InvoiceEmail, not even an explicit nil
### GetUseParentOnEmail

`func (o *DivisionReadOnly) GetUseParentOnEmail() bool`

GetUseParentOnEmail returns the UseParentOnEmail field if non-nil, zero value otherwise.

### GetUseParentOnEmailOk

`func (o *DivisionReadOnly) GetUseParentOnEmailOk() (*bool, bool)`

GetUseParentOnEmailOk returns a tuple with the UseParentOnEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseParentOnEmail

`func (o *DivisionReadOnly) SetUseParentOnEmail(v bool)`

SetUseParentOnEmail sets UseParentOnEmail field to given value.

### HasUseParentOnEmail

`func (o *DivisionReadOnly) HasUseParentOnEmail() bool`

HasUseParentOnEmail returns a boolean if a field has been set.

### GetUseParentOnBilling

`func (o *DivisionReadOnly) GetUseParentOnBilling() bool`

GetUseParentOnBilling returns the UseParentOnBilling field if non-nil, zero value otherwise.

### GetUseParentOnBillingOk

`func (o *DivisionReadOnly) GetUseParentOnBillingOk() (*bool, bool)`

GetUseParentOnBillingOk returns a tuple with the UseParentOnBilling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseParentOnBilling

`func (o *DivisionReadOnly) SetUseParentOnBilling(v bool)`

SetUseParentOnBilling sets UseParentOnBilling field to given value.

### HasUseParentOnBilling

`func (o *DivisionReadOnly) HasUseParentOnBilling() bool`

HasUseParentOnBilling returns a boolean if a field has been set.

### GetUseParentOnReport

`func (o *DivisionReadOnly) GetUseParentOnReport() bool`

GetUseParentOnReport returns the UseParentOnReport field if non-nil, zero value otherwise.

### GetUseParentOnReportOk

`func (o *DivisionReadOnly) GetUseParentOnReportOk() (*bool, bool)`

GetUseParentOnReportOk returns a tuple with the UseParentOnReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseParentOnReport

`func (o *DivisionReadOnly) SetUseParentOnReport(v bool)`

SetUseParentOnReport sets UseParentOnReport field to given value.

### HasUseParentOnReport

`func (o *DivisionReadOnly) HasUseParentOnReport() bool`

HasUseParentOnReport returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


