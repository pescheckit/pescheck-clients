# Pescheck::V2ProfileCheckEntry

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  | [readonly] |
| **check_type** | **String** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [readonly] |
| **display_name** | **String** |  | [readonly] |
| **configured_price** | [**V2Money**](V2Money.md) |  | [readonly] |
| **config** | **Hash&lt;String, Object&gt;** |  | [readonly] |
| **input_fields** | **Array&lt;Object&gt;** |  | [readonly] |
| **is_system_managed** | **Boolean** |  | [readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2ProfileCheckEntry.new(
  id: null,
  check_type: null,
  display_name: null,
  configured_price: null,
  config: null,
  input_fields: null,
  is_system_managed: null
)
```

