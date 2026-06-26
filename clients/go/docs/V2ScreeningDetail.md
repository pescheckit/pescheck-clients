# V2ScreeningDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | [readonly] 
**Status** | **string** |  | [readonly] 
**Profile** | [**NullableV2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | 
**Candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] 
**Checks** | [**[]V2ScreeningCheckEntry**](V2ScreeningCheckEntry.md) |  | [readonly] 
**CandidateWizardUrl** | **NullableString** | Public wizard URL for the candidate. Null when no check needs candidate input. | [readonly] 
**DashboardUrl** | **string** | Dashboard URL for this screening. | [readonly] 
**CreatedAt** | **time.Time** |  | [readonly] 
**UpdatedAt** | **time.Time** |  | [readonly] 

## Methods

### NewV2ScreeningDetail

`func NewV2ScreeningDetail(id string, status string, profile NullableV2ScreeningDetailProfile, candidate V2Candidate, checks []V2ScreeningCheckEntry, candidateWizardUrl NullableString, dashboardUrl string, createdAt time.Time, updatedAt time.Time, ) *V2ScreeningDetail`

NewV2ScreeningDetail instantiates a new V2ScreeningDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewV2ScreeningDetailWithDefaults

`func NewV2ScreeningDetailWithDefaults() *V2ScreeningDetail`

NewV2ScreeningDetailWithDefaults instantiates a new V2ScreeningDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *V2ScreeningDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *V2ScreeningDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *V2ScreeningDetail) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *V2ScreeningDetail) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *V2ScreeningDetail) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *V2ScreeningDetail) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetProfile

`func (o *V2ScreeningDetail) GetProfile() V2ScreeningDetailProfile`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *V2ScreeningDetail) GetProfileOk() (*V2ScreeningDetailProfile, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *V2ScreeningDetail) SetProfile(v V2ScreeningDetailProfile)`

SetProfile sets Profile field to given value.


### SetProfileNil

`func (o *V2ScreeningDetail) SetProfileNil(b bool)`

 SetProfileNil sets the value for Profile to be an explicit nil

### UnsetProfile
`func (o *V2ScreeningDetail) UnsetProfile()`

UnsetProfile ensures that no value is present for Profile, not even an explicit nil
### GetCandidate

`func (o *V2ScreeningDetail) GetCandidate() V2Candidate`

GetCandidate returns the Candidate field if non-nil, zero value otherwise.

### GetCandidateOk

`func (o *V2ScreeningDetail) GetCandidateOk() (*V2Candidate, bool)`

GetCandidateOk returns a tuple with the Candidate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidate

`func (o *V2ScreeningDetail) SetCandidate(v V2Candidate)`

SetCandidate sets Candidate field to given value.


### GetChecks

`func (o *V2ScreeningDetail) GetChecks() []V2ScreeningCheckEntry`

GetChecks returns the Checks field if non-nil, zero value otherwise.

### GetChecksOk

`func (o *V2ScreeningDetail) GetChecksOk() (*[]V2ScreeningCheckEntry, bool)`

GetChecksOk returns a tuple with the Checks field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecks

`func (o *V2ScreeningDetail) SetChecks(v []V2ScreeningCheckEntry)`

SetChecks sets Checks field to given value.


### GetCandidateWizardUrl

`func (o *V2ScreeningDetail) GetCandidateWizardUrl() string`

GetCandidateWizardUrl returns the CandidateWizardUrl field if non-nil, zero value otherwise.

### GetCandidateWizardUrlOk

`func (o *V2ScreeningDetail) GetCandidateWizardUrlOk() (*string, bool)`

GetCandidateWizardUrlOk returns a tuple with the CandidateWizardUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCandidateWizardUrl

`func (o *V2ScreeningDetail) SetCandidateWizardUrl(v string)`

SetCandidateWizardUrl sets CandidateWizardUrl field to given value.


### SetCandidateWizardUrlNil

`func (o *V2ScreeningDetail) SetCandidateWizardUrlNil(b bool)`

 SetCandidateWizardUrlNil sets the value for CandidateWizardUrl to be an explicit nil

### UnsetCandidateWizardUrl
`func (o *V2ScreeningDetail) UnsetCandidateWizardUrl()`

UnsetCandidateWizardUrl ensures that no value is present for CandidateWizardUrl, not even an explicit nil
### GetDashboardUrl

`func (o *V2ScreeningDetail) GetDashboardUrl() string`

GetDashboardUrl returns the DashboardUrl field if non-nil, zero value otherwise.

### GetDashboardUrlOk

`func (o *V2ScreeningDetail) GetDashboardUrlOk() (*string, bool)`

GetDashboardUrlOk returns a tuple with the DashboardUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDashboardUrl

`func (o *V2ScreeningDetail) SetDashboardUrl(v string)`

SetDashboardUrl sets DashboardUrl field to given value.


### GetCreatedAt

`func (o *V2ScreeningDetail) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *V2ScreeningDetail) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *V2ScreeningDetail) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.


### GetUpdatedAt

`func (o *V2ScreeningDetail) GetUpdatedAt() time.Time`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *V2ScreeningDetail) GetUpdatedAtOk() (*time.Time, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *V2ScreeningDetail) SetUpdatedAt(v time.Time)`

SetUpdatedAt sets UpdatedAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


