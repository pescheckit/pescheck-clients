// End-to-end CRUD integration test for the Pescheck C++ client (cpp-restsdk).
//
// Registered with CTest as `crud_integration`. cpp-restsdk generates no test
// framework, so this is a standalone executable with hard assertions: any
// mismatch throws and the process exits non-zero so CTest reports a failure.
//
// Exercises the full v2 surface against the real API and self-cleans where
// possible (NO MOCKS):
//
//   checks      list -> retrieve one
//   profiles    create -> retrieve -> patch -> put (full replace) -> list -> (best-effort delete)
//   screenings  create (needs a profile + candidate) -> retrieve -> appears in list -> list documents
//   webhooks    create -> list -> delete
//   divisions   list -> reuse-or-create by name -> retrieve -> patch -> put (full replace)
//   negative    bogus-token checks list -> 401; retrieve random profile id -> 404
//
// Env:
//   PESCHECK_BASE_URL      host root, no path (default https://api-staging.pescheck.io)
//   PESCHECK_ACCESS_TOKEN  OAuth2 client-credentials access token; if empty the
//                          test prints "SKIP: no token" and passes (return 0)
//   PESCHECK_TEST_EMAIL    candidate email (default "noreply@pescheck.nl")

#include <chrono>
#include <cstdlib>
#include <iostream>
#include <memory>
#include <random>
#include <sstream>
#include <stdexcept>
#include <string>
#include <thread>
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
#include <PescheckApi/model/V2ProfileCheckEntry.h>
#include <PescheckApi/model/PatchedV2ProfilePartialUpdate.h>
#include <PescheckApi/model/V2ProfileUpdate.h>
#include <PescheckApi/model/V2ProfileUpdateCheck.h>
#include <PescheckApi/model/PaginatedV2ProfileListItemList.h>
#include <PescheckApi/model/V2ProfileListItem.h>
#include <PescheckApi/model/V2ScreeningCreate.h>
#include <PescheckApi/model/V2Candidate.h>
#include <PescheckApi/model/V2ScreeningDetail.h>
#include <PescheckApi/model/PaginatedV2ScreeningListItemList.h>
#include <PescheckApi/model/V2ScreeningListItem.h>
#include <PescheckApi/model/Webhook.h>
#include <PescheckApi/model/WebhookResponse.h>
#include <PescheckApi/AnyType.h>
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

// A well-formed (8-4-4-4-12) random UUID string for the not-found negative
// test: a syntactically valid id that should not resolve to any profile.
std::string randomUuid() {
    std::random_device rd;
    std::uniform_int_distribution<int> dist(0, 15);
    const char* hex = "0123456789abcdef";
    std::string u;
    for (int i = 0; i < 36; ++i) {
        if (i == 8 || i == 13 || i == 18 || i == 23) {
            u += '-';
        } else {
            u += hex[dist(rd)];
        }
    }
    return u;
}

// Convert a UTF-8 std::string to the SDK's string type (utility::string_t).
utility::string_t s(const std::string& v) {
    return utility::conversions::to_string_t(v);
}

// Hard assertion: throw on failure so main()'s catch reports a CTest failure
// and runs cleanup. Used in place of the old print-only steps.
void check(bool condition, const std::string& what) {
    if (!condition) {
        throw std::runtime_error("assertion failed: " + what);
    }
    std::cout << "  - OK: " << what << std::endl;
}

// Staging intermittently returns HTTP 5xx on read/list calls. Retry a call a few
// times with a short backoff; cpp-restsdk surfaces the status via
// ApiException::error_code().value(). Only server errors (>= 500) are retried —
// 4xx (and any other exception) propagate so the negative 401/404 checks stay
// meaningful. The callable must perform the .get() so the request resolves (and
// any ApiException is thrown) inside the retry loop.
template <typename Fn>
auto withRetry(Fn&& fn, int attempts = 3) -> decltype(fn()) {
    for (int attempt = 1; ; ++attempt) {
        try {
            return fn();
        } catch (const ApiException& e) {
            if (attempt >= attempts || e.error_code().value() < 500) {
                throw;
            }
            std::this_thread::sleep_for(std::chrono::seconds(1));
        }
    }
}

}  // namespace

int main() {
    const std::string baseUrl = env("PESCHECK_BASE_URL", "https://api-staging.pescheck.io");
    const std::string accessToken = env("PESCHECK_ACCESS_TOKEN");
    const std::string testEmail = env("PESCHECK_TEST_EMAIL", "noreply@pescheck.nl");

    // A passing skip when no credentials are available (e.g. PRs from forks).
    if (accessToken.empty()) {
        std::cout << "SKIP: no token" << std::endl;
        return 0;
    }

    const std::string suffix = randomSuffix();
    const std::string divisionName = "E2E CI division cpp";

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
        auto checkList = withRetry([&] {
            return checksApi.v2ChecksList(boost::optional<utility::string_t>()).get();
        });
        check(!checkList.empty(), "checks list is non-empty");
        utility::string_t checkType = checkList.at(0)->getCheckType();
        check(!checkType.empty(), "first check has a non-empty check_type");
        auto retrievedCheck = withRetry([&] { return checksApi.v2ChecksRetrieve(checkType).get(); });
        check(retrievedCheck->getCheckType() == checkType,
              "retrieved check matches requested check_type");

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
        check(!profileId.empty(), "created profile has a non-empty id");

        auto retrievedProfile = withRetry([&] { return profilesApi.v2ProfilesRetrieve(profileId).get(); });
        check(retrievedProfile->getId() == profileId,
              "retrieved profile id matches created id");
        check(retrievedProfile->getName() == s("E2E test profile " + suffix),
              "retrieved profile name matches created name");
        check(!retrievedProfile->getChecks().empty(),
              "retrieved profile carries its checks");

        // PATCH: partial update of a single field.
        auto patch = std::make_shared<PatchedV2ProfilePartialUpdate>();
        patch->setDescription(s("updated by e2e"));
        auto patched = profilesApi.v2ProfilesPartialUpdate(
            profileId,
            boost::optional<std::shared_ptr<PatchedV2ProfilePartialUpdate>>(patch)).get();
        check(patched->getDescription() == s("updated by e2e"),
              "patched profile description was updated");

        // PUT: full replace. Use a fresh unique name to avoid the duplicate-name
        // 500, and confirm the rename took effect. The API updates a check in
        // place only when its profile_check_id is supplied (otherwise it rejects
        // the duplicate check_type), so carry it over from the current profile.
        const std::string putName = "E2E test profile " + suffix + " (put)";
        auto updateCheck = std::make_shared<V2ProfileUpdateCheck>();
        updateCheck->setCheckType(updateCheck->toCheck_typeEnum(checkType));
        updateCheck->setProfileCheckId(retrievedProfile->getChecks().at(0)->getId());

        auto profileUpdate = std::make_shared<V2ProfileUpdate>();
        profileUpdate->setName(s(putName));
        profileUpdate->setDescription(s("replaced by e2e put"));
        profileUpdate->setChecks({updateCheck});

        auto putUpdated = profilesApi.v2ProfilesUpdate(profileId, profileUpdate).get();
        check(putUpdated->getName() == s(putName),
              "PUT profile name was replaced");
        check(putUpdated->getDescription() == s("replaced by e2e put"),
              "PUT profile description was replaced");

        // Re-fetch to confirm the PUT was persisted, not just echoed.
        auto refetchedProfile = withRetry([&] { return profilesApi.v2ProfilesRetrieve(profileId).get(); });
        check(refetchedProfile->getName() == s(putName),
              "re-fetched profile reflects the PUT rename");

        // The created profile must appear in the profiles list (disable
        // pagination so a fresh profile isn't hidden on a later page).
        auto profileList = withRetry([&] {
            return profilesApi.v2ProfilesList(
                boost::optional<utility::string_t>(),
                boost::optional<bool>(),
                boost::optional<utility::string_t>(),
                boost::optional<int32_t>(),
                boost::optional<int32_t>(),
                boost::optional<bool>(),
                boost::optional<utility::string_t>()).get();
        });
        bool profileFound = false;
        for (const auto& p : profileList->getResults()) {
            if (p->getId() == profileId) { profileFound = true; break; }
        }
        check(profileFound, "created profile appears in the profiles list");

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
        check(!screeningId.empty(), "created screening has a non-empty id");
        check(!screening->getStatus().empty(), "created screening has a status");
        // The candidate email should echo exactly what we submitted.
        check(screening->getCandidate()->getEmail() == s(testEmail),
              "created screening candidate email matches submitted email");

        auto retrievedScreening = withRetry([&] { return screeningsApi.v2ScreeningsRetrieve(screeningId).get(); });
        check(retrievedScreening->getId() == screeningId,
              "retrieved screening id matches created id");
        check(retrievedScreening->getCandidate()->getEmail() == s(testEmail),
              "retrieved screening candidate email matches submitted email");

        // The created screening must appear in the screenings list (disable
        // pagination so a fresh screening isn't hidden on a later page).
        auto screeningList = withRetry([&] {
            return screeningsApi.v2ScreeningsList(
                boost::optional<int32_t>(),
                boost::optional<int32_t>(),
                boost::optional<bool>()).get();
        });
        check(!screeningList->getResults().empty(),
              "screening list is non-empty");
        bool screeningFound = false;
        for (const auto& sc : screeningList->getResults()) {
            if (sc->getId() == screeningId) { screeningFound = true; break; }
        }
        check(screeningFound, "created screening appears in the screening list");

        // Documents list should return without error (may legitimately be empty).
        withRetry([&] {
            return screeningsApi.v2ScreeningsDocumentsList(
                screeningId,
                boost::optional<utility::string_t>(),
                boost::optional<utility::string_t>()).get();
        });
        check(true, "screening documents listed");

        // --- webhook: create -> list -> delete ---
        const std::string webhookUrl = "https://example.com/e2e-hook-" + suffix;
        auto webhook = std::make_shared<Webhook>();
        webhook->setName(s("E2E webhook " + suffix));
        // Unique URL too: the API rejects duplicate webhook URLs.
        webhook->setUrl(s(webhookUrl));
        // setEvents takes a vector of the generated EventsEnum; map via the converter.
        webhook->setEvents(webhook->toEventsEnum(
            std::vector<utility::string_t>{s("screening.status_changed")}));

        auto hook = webhooksApi.createWebhook2(
            webhook,
            boost::optional<utility::string_t>(),
            boost::optional<utility::string_t>()).get();
        utility::string_t webhookId = hook->getId();
        check(!webhookId.empty(), "created webhook has a non-empty id");
        // The created webhook should echo back the url and events we sent.
        check(hook->getUrl() == s(webhookUrl), "created webhook echoes the url we sent");
        check(hook->eventsIsSet() && hook->getEvents() != nullptr,
              "created webhook echoes events");
        check(hook->getEvents()->toJson().serialize().find(s("screening.status_changed"))
                  != utility::string_t::npos,
              "created webhook events include screening.status_changed");

        auto hooks = webhooksApi.listWebhooks2().get();
        bool found = false;
        for (const auto& h : hooks) {
            if (h->getId() == webhookId) { found = true; break; }
        }
        check(found, "created webhook appears in the webhook list");

        webhooksApi.deleteWebhook2(webhookId).get();
        check(true, "webhook deleted");

        // --- division: list -> reuse-or-create -> patch ---
        auto listed = withRetry([&] {
            return divisionsApi.v2OrganisationsDivisionsList(
                boost::optional<int32_t>(),
                boost::optional<int32_t>(),
                boost::optional<bool>()).get();
        });

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
        check(!divisionId.empty(), "division id is non-empty (" + action + ")");

        // GET a single division by id and confirm identity.
        auto retrievedDiv = withRetry([&] { return divisionsApi.v2OrganisationsDivisionsRetrieve(divisionId).get(); });
        check(retrievedDiv->getId() == divisionId,
              "retrieved division id matches");
        check(retrievedDiv->getName() == s(divisionName),
              "retrieved division name matches");

        // PATCH: partial update of a single field.
        auto divPatch = std::make_shared<PatchedDivisionWrite>();
        divPatch->setCity(s("Rotterdam"));
        auto patchedDiv = divisionsApi.v2OrganisationsDivisionsPartialUpdate(
            divisionId,
            boost::optional<std::shared_ptr<PatchedDivisionWrite>>(divPatch)).get();
        check(patchedDiv->getCity() == s("Rotterdam"),
              "patched division city was updated");

        // PUT: full replace of all required fields; confirm each round-trips.
        // Keep the same name to avoid the duplicate-name rejection.
        auto divPut = std::make_shared<DivisionWrite>();
        divPut->setName(s(divisionName));
        divPut->setCity(s("Utrecht"));
        divPut->setAddress(s("Putstraat 2"));
        divPut->setPostal(s("3511AB"));
        divPut->setPhone(s("+31300000000"));
        divPut->setContactName(s("E2E PUT"));
        divPut->setContactEmail(s("e2e-put@example.com"));
        divPut->setInvoiceEmail(s("e2e-put@example.com"));
        auto putDiv = divisionsApi.v2OrganisationsDivisionsUpdate(divisionId, divPut).get();
        check(putDiv->getName() == s(divisionName), "PUT division name round-trips");
        check(putDiv->getCity() == s("Utrecht"), "PUT division city was replaced");
        check(putDiv->getAddress() == s("Putstraat 2"), "PUT division address round-trips");
        check(putDiv->getContactName() == s("E2E PUT"), "PUT division contact_name round-trips");

        // --- negative checks (real calls) ---
        // Unauthorized: a client carrying a bogus bearer token must be rejected
        // with HTTP 401. A missing exception (no throw) is itself a failure.
        {
            auto badConfig = std::make_shared<ApiConfiguration>();
            badConfig->setBaseUrl(s(baseUrl));
            badConfig->getDefaultHeaders()[s("Authorization")] = s("Bearer not-a-real-token");
            auto badClient = std::make_shared<ApiClient>(badConfig);
            ChecksApi badChecksApi(badClient);
            try {
                badChecksApi.v2ChecksList(boost::optional<utility::string_t>()).get();
                check(false, "unauthorized checks list should have thrown");
            } catch (const ApiException& e) {
                check(e.error_code().value() == 401,
                      "unauthorized checks list returns HTTP 401");
            }
        }

        // Not found: a well-formed but non-existent profile id must yield 404.
        {
            try {
                profilesApi.v2ProfilesRetrieve(s(randomUuid())).get();
                check(false, "retrieving a random profile id should have thrown");
            } catch (const ApiException& e) {
                check(e.error_code().value() == 404,
                      "retrieving a random profile id returns HTTP 404");
            }
        }

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

    // cpprestsdk's background thread-pool / static objects can corrupt the heap
    // on shutdown ("malloc_consolidate(): unaligned fastbin chunk detected" ->
    // SIGABRT) AFTER the test has fully passed. Every assertion has run and the
    // profile is cleaned up, so terminate immediately with _Exit, skipping the
    // static destructors that crash. Without this the process aborts (non-zero)
    // even though the test succeeded.
    std::cout.flush();
    std::cerr.flush();
    std::_Exit(0);
}
