// End-to-end CRUD lifecycle test for the Pescheck C++ client (cpp-restsdk).
//
// Exercises the full v2 surface against the API and self-cleans where possible:
//
//   checks      list -> retrieve one
//   profiles    create -> retrieve -> patch -> (best-effort delete)
//   screenings  create (needs a profile + candidate) -> retrieve -> list documents
//   webhooks    create -> list -> delete
//   divisions   list -> reuse-or-create by name -> patch
//
// Prints a line per step and "E2E CRUD OK" on success; exits non-zero on error.
//
// Env:
//   PESCHECK_BASE_URL      e.g. https://api.staging.pescheck.example (host root, no path)
//   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token
//   PESCHECK_TEST_EMAIL    candidate email (default "noreply@pescheck.nl")

#include <cstdlib>
#include <iostream>
#include <memory>
#include <random>
#include <sstream>
#include <string>
#include <vector>

#include <PescheckApi/ApiClient.h>
#include <PescheckApi/ApiConfiguration.h>
#include <PescheckApi/ApiException.h>
#include <PescheckApi/api/ChecksApi.h>
#include <PescheckApi/api/ProfilesApi.h>
#include <PescheckApi/api/ScreeningsApi.h>
#include <PescheckApi/api/WebhooksApi.h>
#include <PescheckApi/api/DivisionsApi.h>
#include <PescheckApi/model/V2CheckInfo.h>
#include <PescheckApi/model/V2ProfileCreate.h>
#include <PescheckApi/model/V2ProfileCheck.h>
#include <PescheckApi/model/V2ProfileDetail.h>
#include <PescheckApi/model/PatchedV2ProfilePartialUpdate.h>
#include <PescheckApi/model/V2ScreeningCreate.h>
#include <PescheckApi/model/V2Candidate.h>
#include <PescheckApi/model/V2ScreeningDetail.h>
#include <PescheckApi/model/Webhook.h>
#include <PescheckApi/model/WebhookResponse.h>
#include <PescheckApi/model/DivisionWrite.h>
#include <PescheckApi/model/PatchedDivisionWrite.h>
#include <PescheckApi/model/DivisionReadOnly.h>
#include <PescheckApi/model/PaginatedDivisionReadOnlyList.h>

using namespace org::openapitools::client::api;
using namespace org::openapitools::client::model;

namespace {

// Read an environment variable, returning a fallback when unset.
std::string env(const char* name, const std::string& fallback = "") {
    const char* value = std::getenv(name);
    return value ? std::string(value) : fallback;
}

// Random 8-hex suffix so profile/webhook names are unique per run: the API
// soft-deletes and 500s on a duplicate name. No extra dependencies.
std::string randomSuffix() {
    std::random_device rd;
    std::ostringstream os;
    os << std::hex << (static_cast<uint32_t>(rd()) & 0xffffffffu);
    std::string s = os.str();
    while (s.size() < 8) s = "0" + s;
    return s.substr(0, 8);
}

// Convert a UTF-8 std::string to the SDK's string type (utility::string_t).
utility::string_t s(const std::string& v) {
    return utility::conversions::to_string_t(v);
}

void step(const std::string& msg) {
    std::cout << "  - " << msg << std::endl;
}

}  // namespace

int main() {
    const std::string baseUrl = env("PESCHECK_BASE_URL");
    const std::string accessToken = env("PESCHECK_ACCESS_TOKEN");
    const std::string testEmail = env("PESCHECK_TEST_EMAIL", "noreply@pescheck.nl");

    if (baseUrl.empty() || accessToken.empty()) {
        std::cerr << "PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set" << std::endl;
        return 2;
    }

    const std::string suffix = randomSuffix();
    const std::string divisionName = "E2E CI division";

    auto apiConfiguration = std::make_shared<ApiConfiguration>();
    apiConfiguration->setBaseUrl(s(baseUrl));
    // OAuth2/JWT bearer auth, supplied as a default header copied onto every request.
    apiConfiguration->getDefaultHeaders()[s("Authorization")] = s("Bearer " + accessToken);

    auto apiClient = std::make_shared<ApiClient>(apiConfiguration);
    ChecksApi checksApi(apiClient);
    ProfilesApi profilesApi(apiClient);
    ScreeningsApi screeningsApi(apiClient);
    WebhooksApi webhooksApi(apiClient);
    DivisionsApi divisionsApi(apiClient);

    utility::string_t profileId;
    bool profileCreated = false;

    try {
        // --- checks: list -> retrieve one ---
        auto checkList = checksApi.v2ChecksList(boost::optional<utility::string_t>()).get();
        utility::string_t checkType = checkList.at(0)->getCheckType();
        checksApi.v2ChecksRetrieve(checkType).get();
        step("checks: " + std::to_string(checkList.size()) + " types, retrieved '" +
             utility::conversions::to_utf8string(checkType) + "'");

        // --- profile: create -> retrieve -> patch ---
        auto profileCheck = std::make_shared<V2ProfileCheck>();
        // setCheckType takes the generated Check_typeEnum; map the string via the
        // model's own converter so we stay in sync with the supported set.
        profileCheck->setCheckType(profileCheck->toCheck_typeEnum(checkType));

        auto profileCreate = std::make_shared<V2ProfileCreate>();
        profileCreate->setName(s("E2E test profile " + suffix));
        profileCreate->setDescription(s("created by e2e"));
        profileCreate->setChecks({profileCheck});

        auto created = profilesApi.v2ProfilesCreate(profileCreate).get();
        profileId = created->getId();
        profileCreated = true;
        profilesApi.v2ProfilesRetrieve(profileId).get();

        auto patch = std::make_shared<PatchedV2ProfilePartialUpdate>();
        patch->setDescription(s("updated by e2e"));
        profilesApi.v2ProfilesPartialUpdate(
            profileId,
            boost::optional<std::shared_ptr<PatchedV2ProfilePartialUpdate>>(patch)).get();
        step("profile: created+retrieved+patched (" +
             utility::conversions::to_utf8string(profileId) + ")");

        // --- screening: create -> retrieve -> documents ---
        auto candidate = std::make_shared<V2Candidate>();
        candidate->setFirstName(s("E2E"));
        candidate->setLastName(s("Tester"));
        candidate->setEmail(s(testEmail));

        auto screeningCreate = std::make_shared<V2ScreeningCreate>();
        screeningCreate->setProfileId(profileId);
        screeningCreate->setCandidate(candidate);

        auto screening = screeningsApi.v2ScreeningsCreate(screeningCreate).get();
        utility::string_t screeningId = screening->getId();
        screeningsApi.v2ScreeningsRetrieve(screeningId).get();
        screeningsApi.v2ScreeningsDocumentsList(
            screeningId,
            boost::optional<utility::string_t>(),
            boost::optional<utility::string_t>()).get();
        step("screening: created+retrieved (" +
             utility::conversions::to_utf8string(screeningId) + ", status=" +
             utility::conversions::to_utf8string(screening->getStatus()) + ")");

        // --- webhook: create -> list -> delete ---
        auto webhook = std::make_shared<Webhook>();
        webhook->setName(s("E2E webhook " + suffix));
        webhook->setUrl(s("https://example.com/e2e-hook-" + suffix));
        // setEvents takes a vector of the generated EventsEnum; map via the converter.
        webhook->setEvents(webhook->toEventsEnum(
            std::vector<utility::string_t>{s("screening.status_changed")}));

        auto hook = webhooksApi.createWebhook2(
            webhook,
            boost::optional<utility::string_t>(),
            boost::optional<utility::string_t>()).get();
        utility::string_t webhookId = hook->getId();
        webhooksApi.listWebhooks2().get();
        webhooksApi.deleteWebhook2(webhookId).get();
        step("webhook: created+listed+deleted (" +
             utility::conversions::to_utf8string(webhookId) + ")");

        // --- division: list -> reuse-or-create -> patch ---
        auto listed = divisionsApi.v2OrganisationsDivisionsList(
            boost::optional<int32_t>(),
            boost::optional<int32_t>(),
            boost::optional<bool>()).get();

        utility::string_t divisionId;
        std::string action;
        for (const auto& d : listed->getResults()) {
            if (d->getName() == s(divisionName)) {
                divisionId = d->getId();
                break;
            }
        }
        if (divisionId.empty()) {
            auto div = std::make_shared<DivisionWrite>();
            div->setName(s(divisionName));
            div->setCity(s("Amsterdam"));
            div->setAddress(s("Teststraat 1"));
            div->setPostal(s("1011AA"));
            div->setPhone(s("+31200000000"));
            div->setContactName(s("E2E"));
            div->setContactEmail(s("e2e@example.com"));
            div->setInvoiceEmail(s("e2e@example.com"));
            auto createdDiv = divisionsApi.v2OrganisationsDivisionsCreate(div).get();
            divisionId = createdDiv->getId();
            action = "created";
        } else {
            action = "reused";
        }

        auto divPatch = std::make_shared<PatchedDivisionWrite>();
        divPatch->setCity(s("Rotterdam"));
        divisionsApi.v2OrganisationsDivisionsPartialUpdate(
            divisionId,
            boost::optional<std::shared_ptr<PatchedDivisionWrite>>(divPatch)).get();
        step("division: " + action + "+patched (" +
             utility::conversions::to_utf8string(divisionId) + ")");

        std::cout << "E2E CRUD OK" << std::endl;
    } catch (const ApiException& e) {
        std::cerr << "E2E CRUD FAILED: API error (" << e.error_code().value() << "): "
                  << e.what() << std::endl;
        if (e.getContent()) {
            std::cerr << e.getContent()->rdbuf() << std::endl;
        }
        // best-effort cleanup of the profile we created
        if (profileCreated) {
            try { profilesApi.v2ProfilesDestroy(profileId).get(); } catch (...) {}
        }
        return 1;
    } catch (const std::exception& e) {
        std::cerr << "E2E CRUD FAILED: " << e.what() << std::endl;
        if (profileCreated) {
            try { profilesApi.v2ProfilesDestroy(profileId).get(); } catch (...) {}
        }
        return 1;
    }

    // best-effort cleanup of the profile we created
    if (profileCreated) {
        try { profilesApi.v2ProfilesDestroy(profileId).get(); } catch (...) {}
    }
    return 0;
}
