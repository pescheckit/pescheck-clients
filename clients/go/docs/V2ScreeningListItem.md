# V2ScreeningListItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [readonly] 
**Status** | Pointer to **string** |  | [optional] 
**Profile** | [**NullableV2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] 
**Checks** | [**[]V2ScreeningCheckListItem**](V2ScreeningCheckListItem.md) |  | [readonly] 
**CandidateWizardUrl** | **NullableString** |  | [readonly] 
**DashboardUrl** | **string** |  | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**UpdatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewV2ScreeningListItem

`func NewV2ScreeningListItem(id string, profile NullableV2ScreeningDetailProfile, candidate V2Candidate, checks []V2ScreeningCheckListItem, candidateWizardUrl NullableString, dashboardUrl string, createdAt time.Time, updatedAt time.Time, ) *V2ScreeningListItem`

NewV2ScreeningListItem instantiates a new V2ScreeningListItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ScreeningListItemWithDefaults

`func NewV2ScreeningListItemWithDefaults() *V2ScreeningListItem`

NewV2ScreeningListItemWithDefaults instantiates a new V2ScreeningListItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *V2ScreeningListItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *V2ScreeningListItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *V2ScreeningListItem) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *V2ScreeningListItem) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *V2ScreeningListItem) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *V2ScreeningListItem) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *V2ScreeningListItem) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetProfile

`func (o *V2ScreeningListItem) GetProfile() V2ScreeningDetailProfile`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *V2ScreeningListItem) GetProfileOk() (*V2ScreeningDetailProfile, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *V2ScreeningListItem) SetProfile(v V2ScreeningDetailProfile)`

SetProfile sets Profile field to given value.


### SetProfileNil

`func (o *V2ScreeningListItem) SetProfileNil(b bool)`

 SetProfileNil sets the value for Profile to be an explicit nil

### UnsetProfile
`func (o *V2ScreeningListItem) UnsetProfile()`

UnsetProfile ensures that no value is present for Profile, not even an explicit nil
### GetCandidate

`func (o *V2ScreeningListItem) GetCandidate() V2Candidate`

GetCandidate returns the Candidate field if non-nil, zero value otherwise.

### GetCandidateOk

`func (o *V2ScreeningListItem) GetCandidateOk() (*V2Candidate, bool)`

GetCandidateOk returns a tuple with the Candidate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidate

`func (o *V2ScreeningListItem) SetCandidate(v V2Candidate)`

SetCandidate sets Candidate field to given value.


### GetChecks

`func (o *V2ScreeningListItem) GetChecks() []V2ScreeningCheckListItem`

GetChecks returns the Checks field if non-nil, zero value otherwise.

### GetChecksOk

`func (o *V2ScreeningListItem) GetChecksOk() (*[]V2ScreeningCheckListItem, bool)`

GetChecksOk returns a tuple with the Checks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecks

`func (o *V2ScreeningListItem) SetChecks(v []V2ScreeningCheckListItem)`

SetChecks sets Checks field to given value.


### GetCandidateWizardUrl

`func (o *V2ScreeningListItem) GetCandidateWizardUrl() string`

GetCandidateWizardUrl returns the CandidateWizardUrl field if non-nil, zero value otherwise.

### GetCandidateWizardUrlOk

`func (o *V2ScreeningListItem) GetCandidateWizardUrlOk() (*string, bool)`

GetCandidateWizardUrlOk returns a tuple with the CandidateWizardUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidateWizardUrl

`func (o *V2ScreeningListItem) SetCandidateWizardUrl(v string)`

SetCandidateWizardUrl sets CandidateWizardUrl field to given value.


### SetCandidateWizardUrlNil

`func (o *V2ScreeningListItem) SetCandidateWizardUrlNil(b bool)`

 SetCandidateWizardUrlNil sets the value for CandidateWizardUrl to be an explicit nil

### UnsetCandidateWizardUrl
`func (o *V2ScreeningListItem) UnsetCandidateWizardUrl()`

UnsetCandidateWizardUrl ensures that no value is present for CandidateWizardUrl, not even an explicit nil
### GetDashboardUrl

`func (o *V2ScreeningListItem) GetDashboardUrl() string`

GetDashboardUrl returns the DashboardUrl field if non-nil, zero value otherwise.

### GetDashboardUrlOk

`func (o *V2ScreeningListItem) GetDashboardUrlOk() (*string, bool)`

GetDashboardUrlOk returns a tuple with the DashboardUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDashboardUrl

`func (o *V2ScreeningListItem) SetDashboardUrl(v string)`

SetDashboardUrl sets DashboardUrl field to given value.


### GetCreatedAt

`func (o *V2ScreeningListItem) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *V2ScreeningListItem) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *V2ScreeningListItem) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *V2ScreeningListItem) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *V2ScreeningListItem) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *V2ScreeningListItem) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


