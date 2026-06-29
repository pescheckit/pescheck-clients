# Pescheck::V2ScreeningListItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [readonly] |
| **status** | **String** |  | [optional] |
| **profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  |  |
| **candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] |
| **checks** | [**Array&lt;V2ScreeningCheckListItem&gt;**](V2ScreeningCheckListItem.md) |  | [readonly] |
| **candidate_wizard_url** | **String** |  | [readonly] |
| **dashboard_url** | **String** |  | [readonly] |
| **created_at** | **Time** |  | [readonly] |
| **updated_at** | **Time** |  | [readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ScreeningListItem.new(
  id: null,
  status: null,
  profile: null,
  candidate: null,
  checks: null,
  candidate_wizard_url: null,
  dashboard_url: null,
  created_at: null,
  updated_at: null
)
```

