# Pescheck::V2ScreeningDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional][readonly] |
| **status** | **String** |  | [optional][readonly] |
| **profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  | [optional] |
| **candidate** | [**V2Candidate**](V2Candidate.md) |  | [optional][readonly] |
| **checks** | [**Array&lt;V2ScreeningCheckEntry&gt;**](V2ScreeningCheckEntry.md) |  | [optional][readonly] |
| **candidate_wizard_url** | **String** | Public wizard URL for the candidate. Null when no check needs candidate input. | [optional][readonly] |
| **dashboard_url** | **String** | Dashboard URL for this screening. | [optional][readonly] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ScreeningDetail.new(
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

