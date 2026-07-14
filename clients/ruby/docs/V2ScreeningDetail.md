# Pescheck::V2ScreeningDetail

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [readonly] |
| **status** | **String** |  | [readonly] |
| **profile** | [**V2ScreeningDetailProfile**](V2ScreeningDetailProfile.md) |  |  |
| **candidate** | [**V2Candidate**](V2Candidate.md) |  | [readonly] |
| **checks** | [**Array&lt;V2ScreeningCheckEntry&gt;**](V2ScreeningCheckEntry.md) |  | [readonly] |
| **screening_notes** | [**Array&lt;V2ScreeningNote&gt;**](V2ScreeningNote.md) |  | [readonly] |
| **candidate_wizard_url** | **String** | Public wizard URL for the candidate. Null when no check needs candidate input. | [readonly] |
| **dashboard_url** | **String** | Dashboard URL for this screening. | [readonly] |
| **created_at** | **Time** |  | [readonly] |
| **updated_at** | **Time** |  | [readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ScreeningDetail.new(
  id: null,
  status: null,
  profile: null,
  candidate: null,
  checks: null,
  screening_notes: null,
  candidate_wizard_url: null,
  dashboard_url: null,
  created_at: null,
  updated_at: null
)
```

