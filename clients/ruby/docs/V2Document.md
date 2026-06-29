# Pescheck::V2Document

## Properties

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_id** | **String** |  | [optional][readonly] |
| **check_type** | **String** | * &#x60;addresscheck&#x60; - addresscheck * &#x60;adversemediacheck&#x60; - adversemediacheck * &#x60;bigcheck&#x60; - bigcheck * &#x60;criminalrecordscheck&#x60; - criminalrecordscheck * &#x60;criminalrecordsuploadcheck&#x60; - criminalrecordsuploadcheck * &#x60;customintegritycheck&#x60; - customintegritycheck * &#x60;cvcheck&#x60; - cvcheck * &#x60;edrcheck&#x60; - edrcheck * &#x60;focumcheck&#x60; - focumcheck * &#x60;id2check&#x60; - id2check * &#x60;idcheck&#x60; - idcheck * &#x60;integritycheck&#x60; - integritycheck * &#x60;openhealthcarecheck&#x60; - openhealthcarecheck * &#x60;permissioncheck&#x60; - permissioncheck * &#x60;pescheckadversemediacheck&#x60; - pescheckadversemediacheck * &#x60;qualificationcheck&#x60; - qualificationcheck * &#x60;righttoworkcheck&#x60; - righttoworkcheck * &#x60;vogcheck&#x60; - vogcheck * &#x60;watchlist2check&#x60; - watchlist2check * &#x60;watchlistcheck&#x60; - watchlistcheck * &#x60;workreferencecheck&#x60; - workreferencecheck * &#x60;worldwidecreditcheck&#x60; - worldwidecreditcheck | [optional][readonly] |
| **filename** | **String** |  | [optional][readonly] |
| **extension** | **String** |  | [optional][readonly] |
| **content** | [**V2DocumentContent**](V2DocumentContent.md) |  | [optional][readonly] |
| **metadata** | **Hash&lt;String, Object&gt;** |  | [optional][readonly] |

## Example

```ruby
require 'pescheck-client'

instance = Pescheck::V2Document.new(
  check_id: null,
  check_type: null,
  filename: null,
  extension: null,
  content: null,
  metadata: null
)
```

