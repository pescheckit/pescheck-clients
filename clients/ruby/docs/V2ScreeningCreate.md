# Pescheck::V2ScreeningCreate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **profile_id** | **String** |  |  |
| **candidate** | [**V2Candidate**](V2Candidate.md) |  |  |
| **checks** | [**Array&lt;V2ScreeningCheck&gt;**](V2ScreeningCheck.md) |  | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ScreeningCreate.new(
  profile_id: null,
  candidate: null,
  checks: null
)
```

