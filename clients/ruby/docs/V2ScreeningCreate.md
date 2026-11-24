# Pescheck::V2ScreeningCreate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **profile_id** | **String** |  |  |
| **candidate** | [**V2Candidate**](V2Candidate.md) |  |  |
| **checks** | [**Array&lt;V2ScreeningCheck&gt;**](V2ScreeningCheck.md) |  | [optional] |
| **screening_notes** | [**Array&lt;V2ScreeningNoteInput&gt;**](V2ScreeningNoteInput.md) |  | [optional] |
| **division_id** | **String** | Create the screening for this department instead of the token&#39;s own organisation. Omit for the usual case. Same field as on webhook and OAuth application creation. | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ScreeningCreate.new(
  profile_id: null,
  candidate: null,
  checks: null,
  screening_notes: null,
  division_id: null
)
```

