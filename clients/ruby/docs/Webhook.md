# Pescheck::Webhook

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **name** | **String** | Descriptive name for this webhook |  |
| **url** | **String** | HTTPS URL where webhook events will be sent |  |
| **events** | **Array&lt;String&gt;** | List of events to subscribe to. Valid events: screening.status_changed, screening.archived, check.status_changed, package.created, package.updated, profile.created, profile.updated, division.created, division.updated, mail.sent, mail.delivered, mail.bounced, mail.opened, note.created, watchlist.result |  |
| **active** | **Boolean** | Whether the webhook is active | [optional][default to true] |
| **division_id** | **String** | Division ID to create webhook for (optional) | [optional] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::Webhook.new(
  name: null,
  url: null,
  events: null,
  active: null,
  division_id: null
)
```

