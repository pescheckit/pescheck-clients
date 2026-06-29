# Pescheck::DivisionWrite

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional][readonly] |
| **name** | **String** |  |  |
| **city** | **String** |  |  |
| **address** | **String** |  |  |
| **postal** | **String** |  |  |
| **phone** | **String** |  |  |
| **contact_name** | **String** |  |  |
| **contact_email** | **String** |  |  |
| **invoice_email** | **String** |  |  |
| **use_parent_on_email** | **Boolean** |  | [optional] |
| **use_parent_on_billing** | **Boolean** |  | [optional] |
| **use_parent_on_report** | **Boolean** |  | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::DivisionWrite.new(
  id: null,
  name: null,
  city: null,
  address: null,
  postal: null,
  phone: null,
  contact_name: null,
  contact_email: null,
  invoice_email: null,
  use_parent_on_email: null,
  use_parent_on_billing: null,
  use_parent_on_report: null
)
```

