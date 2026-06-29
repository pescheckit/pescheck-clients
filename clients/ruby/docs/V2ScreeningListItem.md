# Pescheck::V2ScreeningListItem

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional][readonly] |
| **status** | **String** |  | [optional] |
| **profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | [optional] |
| **candidate** | [**V2Candidate**](V2Candidate.md) |  | [optional][readonly] |
| **checks** | [**Array&lt;V2ScreeningCheckListItem&gt;**](V2ScreeningCheckListItem.md) |  | [optional][readonly] |
| **candidate_wizard_url** | **String** |  | [optional][readonly] |
| **dashboard_url** | **String** |  | [optional][readonly] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |

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

