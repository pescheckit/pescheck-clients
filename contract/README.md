# Contract tests

Every client runs the same set of calls against a mock API generated from the committed `spec/openapi.v2.yaml` (Prism, started by `scripts/with-mock.sh`). The mock rejects requests that do not match the spec and answers with schema-valid responses, including extra fields the client does not know about. A test passes when the client sends valid requests and can parse every response.

No network, no credentials, no staging: the result is the same locally and in CI.

```bash
make contract            # all languages whose toolchain is installed
make contract-python     # one language
```

## Calls every language makes

Read the host from `PESCHECK_BASE_URL` and the token from `PESCHECK_ACCESS_TOKEN` (both set by `scripts/with-mock.sh`). Do not set the host in code.

| # | Call | Input |
| --- | --- | --- |
| 1 | List checks | |
| 2 | Retrieve check | `check_type = "id2check"` |
| 3 | List add-ons | |
| 4 | Retrieve add-on | `addon = "api_access"` |
| 5 | Create profile | `name = "Contract test"`, `checks = [{check_type: "id2check"}]` |
| 6 | List profiles | |
| 7 | Retrieve profile | `id = ID` |
| 8 | Partially update profile | `id = ID`, `description = "updated"` |
| 9 | Create screening | `profile_id = ID`, candidate `first_name = "Contract"`, `last_name = "Test"`, `email = "contract@example.invalid"` |
| 10 | List screenings | |
| 11 | Retrieve screening | `id = ID` |
| 12 | List screening documents | `id = ID` |
| 13 | Create webhook | `name = "Contract test"`, `url = "https://example.invalid/hook"`, `events = ["screening.status_changed"]` |
| 14 | List webhooks | |
| 15 | Create division | `name = "Contract test"`, `city = "Utrecht"`, `address = "Teststraat 1"`, `postal = "1234AB"`, `phone = "0301234567"`, `contact_name = "Contract Test"`, `contact_email = "contract@example.invalid"`, `invoice_email = "contract@example.invalid"` |
| 16 | List divisions | |
| 17 | List profiles **without a token** | must fail with HTTP status 401 |

`ID` is `3fa85f64-5717-4562-b3fc-2c963f66afa6`. The mock does not keep state, so use this fixed id rather than ids from earlier responses.

Each call must succeed and return the client's typed result. Only call 17 expects an error.
