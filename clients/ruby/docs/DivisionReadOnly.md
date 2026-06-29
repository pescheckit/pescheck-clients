# Pescheck::DivisionReadOnly

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [optional][readonly] |
| **name** | **String** |  | [optional] |
| **parent** | **String** |  | [optional][readonly] |
| **created_at** | **Time** |  | [optional][readonly] |
| **updated_at** | **Time** |  | [optional][readonly] |
| **city** | **String** |  | [optional] |
| **address** | **String** |  | [optional] |
| **postal** | **String** |  | [optional] |
| **phone** | **String** |  | [optional] |
| **contact_name** | **String** |  | [optional] |
| **contact_email** | **String** |  | [optional] |
| **invoice_email** | **String** |  | [optional] |
| **use_parent_on_email** | **Boolean** |  | [optional] |
| **use_parent_on_billing** | **Boolean** |  | [optional] |
| **use_parent_on_report** | **Boolean** |  | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::DivisionReadOnly.new(
  id: null,
  name: null,
  parent: null,
  created_at: null,
  updated_at: null,
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

