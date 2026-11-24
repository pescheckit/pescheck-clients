# Pescheck::PatchedOrganisationAddonUpdate

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **enabled** | **Boolean** | Switch the add-on on (billed monthly from today) or off (billing stops at the end of the month). | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::PatchedOrganisationAddonUpdate.new(
  enabled: null
)
```

