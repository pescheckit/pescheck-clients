# DivisionWrite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] [readonly] 
**Name** | **string** |  | 
**City** | **string** |  | 
**Address** | **string** |  | 
**Postal** | **string** |  | 
**Phone** | **string** |  | 
**ContactName** | **string** |  | 
**ContactEmail** | **string** |  | 
**InvoiceEmail** | **string** |  | 
**UseParentOnEmail** | Pointer to **bool** |  | [optional] 
**UseParentOnBilling** | Pointer to **bool** |  | [optional] 
**UseParentOnReport** | Pointer to **bool** |  | [optional] 

## Methods

### NewDivisionWrite

`func NewDivisionWrite(name string, city string, address string, postal string, phone string, contactName string, contactEmail string, invoiceEmail string, ) *DivisionWrite`

NewDivisionWrite instantiates a new DivisionWrite object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDivisionWriteWithDefaults

`func NewDivisionWriteWithDefaults() *DivisionWrite`

NewDivisionWriteWithDefaults instantiates a new DivisionWrite object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *DivisionWrite) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *DivisionWrite) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *DivisionWrite) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *DivisionWrite) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *DivisionWrite) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DivisionWrite) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DivisionWrite) SetName(v string)`

SetName sets Name field to given value.


### GetCity

`func (o *DivisionWrite) GetCity() string`

GetCity returns the City field if non-nil, zero value otherwise.

### GetCityOk

`func (o *DivisionWrite) GetCityOk() (*string, bool)`

GetCityOk returns a tuple with the City field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCity

`func (o *DivisionWrite) SetCity(v string)`

SetCity sets City field to given value.


### GetAddress

`func (o *DivisionWrite) GetAddress() string`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *DivisionWrite) GetAddressOk() (*string, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *DivisionWrite) SetAddress(v string)`

SetAddress sets Address field to given value.


### GetPostal

`func (o *DivisionWrite) GetPostal() string`

GetPostal returns the Postal field if non-nil, zero value otherwise.

### GetPostalOk

`func (o *DivisionWrite) GetPostalOk() (*string, bool)`

GetPostalOk returns a tuple with the Postal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostal

`func (o *DivisionWrite) SetPostal(v string)`

SetPostal sets Postal field to given value.


### GetPhone

`func (o *DivisionWrite) GetPhone() string`

GetPhone returns the Phone field if non-nil, zero value otherwise.

### GetPhoneOk

`func (o *DivisionWrite) GetPhoneOk() (*string, bool)`

GetPhoneOk returns a tuple with the Phone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhone

`func (o *DivisionWrite) SetPhone(v string)`

SetPhone sets Phone field to given value.


### GetContactName

`func (o *DivisionWrite) GetContactName() string`

GetContactName returns the ContactName field if non-nil, zero value otherwise.

### GetContactNameOk

`func (o *DivisionWrite) GetContactNameOk() (*string, bool)`

GetContactNameOk returns a tuple with the ContactName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactName

`func (o *DivisionWrite) SetContactName(v string)`

SetContactName sets ContactName field to given value.


### GetContactEmail

`func (o *DivisionWrite) GetContactEmail() string`

GetContactEmail returns the ContactEmail field if non-nil, zero value otherwise.

### GetContactEmailOk

`func (o *DivisionWrite) GetContactEmailOk() (*string, bool)`

GetContactEmailOk returns a tuple with the ContactEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactEmail

`func (o *DivisionWrite) SetContactEmail(v string)`

SetContactEmail sets ContactEmail field to given value.


### GetInvoiceEmail

`func (o *DivisionWrite) GetInvoiceEmail() string`

GetInvoiceEmail returns the InvoiceEmail field if non-nil, zero value otherwise.

### GetInvoiceEmailOk

`func (o *DivisionWrite) GetInvoiceEmailOk() (*string, bool)`

GetInvoiceEmailOk returns a tuple with the InvoiceEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvoiceEmail

`func (o *DivisionWrite) SetInvoiceEmail(v string)`

SetInvoiceEmail sets InvoiceEmail field to given value.


### GetUseParentOnEmail

`func (o *DivisionWrite) GetUseParentOnEmail() bool`

GetUseParentOnEmail returns the UseParentOnEmail field if non-nil, zero value otherwise.

### GetUseParentOnEmailOk

`func (o *DivisionWrite) GetUseParentOnEmailOk() (*bool, bool)`

GetUseParentOnEmailOk returns a tuple with the UseParentOnEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseParentOnEmail

`func (o *DivisionWrite) SetUseParentOnEmail(v bool)`

SetUseParentOnEmail sets UseParentOnEmail field to given value.

### HasUseParentOnEmail

`func (o *DivisionWrite) HasUseParentOnEmail() bool`

HasUseParentOnEmail returns a boolean if a field has been set.

### GetUseParentOnBilling

`func (o *DivisionWrite) GetUseParentOnBilling() bool`

GetUseParentOnBilling returns the UseParentOnBilling field if non-nil, zero value otherwise.

### GetUseParentOnBillingOk

`func (o *DivisionWrite) GetUseParentOnBillingOk() (*bool, bool)`

GetUseParentOnBillingOk returns a tuple with the UseParentOnBilling field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseParentOnBilling

`func (o *DivisionWrite) SetUseParentOnBilling(v bool)`

SetUseParentOnBilling sets UseParentOnBilling field to given value.

### HasUseParentOnBilling

`func (o *DivisionWrite) HasUseParentOnBilling() bool`

HasUseParentOnBilling returns a boolean if a field has been set.

### GetUseParentOnReport

`func (o *DivisionWrite) GetUseParentOnReport() bool`

GetUseParentOnReport returns the UseParentOnReport field if non-nil, zero value otherwise.

### GetUseParentOnReportOk

`func (o *DivisionWrite) GetUseParentOnReportOk() (*bool, bool)`

GetUseParentOnReportOk returns a tuple with the UseParentOnReport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUseParentOnReport

`func (o *DivisionWrite) SetUseParentOnReport(v bool)`

SetUseParentOnReport sets UseParentOnReport field to given value.

### HasUseParentOnReport

`func (o *DivisionWrite) HasUseParentOnReport() bool`

HasUseParentOnReport returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


