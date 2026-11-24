// Contract test: the C++ client against the mock API (see contract/README.md).
// Host comes from PESCHECK_BASE_URL (read by ApiConfiguration), token from
// PESCHECK_ACCESS_TOKEN. Exits non-zero naming the first call that failed.

#include <cstdlib>
#include <functional>
#include <iostream>
#include <memory>
#include <stdexcept>
#include <string>
#include <vector>

#include <PescheckApi/ApiClient.h>
#include <PescheckApi/ApiConfiguration.h>
#include <PescheckApi/ApiException.h>
#include <PescheckApi/api/AddOnsApi.h>
#include <PescheckApi/api/ChecksApi.h>
#include <PescheckApi/api/DivisionsApi.h>
#include <PescheckApi/api/ProfilesApi.h>
#include <PescheckApi/api/ScreeningsApi.h>
#include <PescheckApi/api/WebhooksApi.h>

using namespace org::openapitools::client::api;
using namespace org::openapitools::client::model;
using boost::none;

namespace {

utility::string_t s(const std::string& v) { return utility::conversions::to_string_t(v); }

const utility::string_t ID = s("3fa85f64-5717-4562-b3fc-2c963f66afa6");
const utility::string_t EMAIL = s("contract@example.invalid");

std::shared_ptr<ApiClient> client(const std::string& token) {
    auto cfg = std::make_shared<ApiConfiguration>();  // base URL from PESCHECK_BASE_URL
    if (!token.empty()) {
        cfg->getDefaultHeaders()[s("Authorization")] = s("Bearer " + token);
    }
    return std::make_shared<ApiClient>(cfg);
}

void require(bool ok) {
    if (!ok) throw std::runtime_error("empty result");
}

int failures = 0;

void call(const char* name, const std::function<void()>& fn) {
    try {
        fn();
        std::cout << "ok   " << name << std::endl;
    } catch (const ApiException& e) {
        ++failures;
        std::cerr << "FAIL " << name << ": HTTP " << e.error_code().value() << ": " << e.what() << std::endl;
    } catch (const std::exception& e) {
        ++failures;
        std::cerr << "FAIL " << name << ": " << e.what() << std::endl;
    }
}

}  // namespace

int main() {
    const char* tokenEnv = std::getenv("PESCHECK_ACCESS_TOKEN");
    auto api = client(tokenEnv ? tokenEnv : "");

    ChecksApi checks(api);
    AddOnsApi addons(api);
    ProfilesApi profiles(api);
    ScreeningsApi screenings(api);
    WebhooksApi webhooks(api);
    DivisionsApi divisions(api);

    call("1 list checks", [&] { checks.v2ChecksList(none).get(); });
    call("2 retrieve check", [&] { require(checks.v2ChecksRetrieve(s("id2check")).get() != nullptr); });
    call("3 list add-ons", [&] { addons.v2OrganisationsAddonsList(none).get(); });
    call("4 retrieve add-on", [&] { require(addons.v2OrganisationsAddonsRetrieve(s("api_access"), none).get() != nullptr); });

    call("5 create profile", [&] {
        auto check = std::make_shared<V2ProfileCheck>();
        check->setCheckType(check->toCheck_typeEnum(s("id2check")));
        auto body = std::make_shared<V2ProfileCreate>();
        body->setName(s("Contract test"));
        body->setChecks({check});
        require(profiles.v2ProfilesCreate(body).get() != nullptr);
    });
    call("6 list profiles", [&] {
        require(profiles.v2ProfilesList(none, none, none, none, none, none, none).get() != nullptr);
    });
    call("7 retrieve profile", [&] { require(profiles.v2ProfilesRetrieve(ID).get() != nullptr); });
    call("8 partially update profile", [&] {
        auto patch = std::make_shared<PatchedV2ProfilePartialUpdate>();
        patch->setDescription(s("updated"));
        require(profiles.v2ProfilesPartialUpdate(ID, patch).get() != nullptr);
    });

    call("9 create screening", [&] {
        auto candidate = std::make_shared<V2Candidate>();
        candidate->setFirstName(s("Contract"));
        candidate->setLastName(s("Test"));
        candidate->setEmail(EMAIL);
        auto body = std::make_shared<V2ScreeningCreate>();
        body->setProfileId(ID);
        body->setCandidate(candidate);
        require(screenings.v2ScreeningsCreate(body).get() != nullptr);
    });
    call("10 list screenings", [&] { require(screenings.v2ScreeningsList(none, none, none, none).get() != nullptr); });
    call("11 retrieve screening", [&] { require(screenings.v2ScreeningsRetrieve(ID).get() != nullptr); });
    call("12 list screening documents", [&] { screenings.v2ScreeningsDocumentsList(ID, none, none).get(); });

    call("13 create webhook", [&] {
        auto body = std::make_shared<Webhook>();
        body->setName(s("Contract test"));
        body->setUrl(s("https://example.invalid/hook"));
        body->setEvents(body->toEventsEnum(std::vector<utility::string_t>{s("screening.status_changed")}));
        require(webhooks.createWebhook2(body, none, none).get() != nullptr);
    });
    call("14 list webhooks", [&] { webhooks.listWebhooks2().get(); });

    call("15 create division", [&] {
        auto body = std::make_shared<DivisionWrite>();
        body->setName(s("Contract test"));
        body->setCity(s("Utrecht"));
        body->setAddress(s("Teststraat 1"));
        body->setPostal(s("1234AB"));
        body->setPhone(s("0301234567"));
        body->setContactName(s("Contract Test"));
        body->setContactEmail(EMAIL);
        body->setInvoiceEmail(EMAIL);
        require(divisions.v2OrganisationsDivisionsCreate(body).get() != nullptr);
    });
    call("16 list divisions", [&] {
        require(divisions.v2OrganisationsDivisionsList(none, none, none).get() != nullptr);
    });

    call("17 list profiles without a token -> 401", [&] {
        try {
            ProfilesApi(client("")).v2ProfilesList(none, none, none, none, none, none, none).get();
        } catch (const ApiException& e) {
            if (e.error_code().value() == 401) return;
            throw std::runtime_error("expected HTTP 401, got " + std::to_string(e.error_code().value()));
        }
        throw std::runtime_error("expected HTTP 401, call succeeded");
    });

    std::cout << (failures ? "CONTRACT FAILED" : "CONTRACT OK") << std::endl;
    // cpprestsdk's static destructors can abort on shutdown; skip them.
    std::cout.flush();
    std::cerr.flush();
    std::_Exit(failures ? 1 : 0);
}
