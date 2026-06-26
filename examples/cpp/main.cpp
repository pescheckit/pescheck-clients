// Minimal end-to-end example for the Pescheck C++ client (cpp-restsdk).
//
// Reads two environment variables:
//   PESCHECK_BASE_URL      e.g. https://api.staging.pescheck.example  (host root, no path)
//   PESCHECK_ACCESS_TOKEN  a bearer token (OAuth2 access token or JWT)
//
// Lists the available check types and prints "E2E OK: <N> check types".

#include <cstdlib>
#include <iostream>
#include <memory>
#include <string>
#include <vector>

#include <PescheckApi/ApiClient.h>
#include <PescheckApi/ApiConfiguration.h>
#include <PescheckApi/ApiException.h>
#include <PescheckApi/api/ChecksApi.h>
#include <PescheckApi/model/V2CheckInfo.h>

using namespace org::openapitools::client::api;
using namespace org::openapitools::client::model;

namespace {

// Read an environment variable, returning an empty string when unset.
std::string env(const char* name) {
    const char* value = std::getenv(name);
    return value ? std::string(value) : std::string();
}

}  // namespace

int main() {
    const std::string baseUrl = env("PESCHECK_BASE_URL");
    const std::string accessToken = env("PESCHECK_ACCESS_TOKEN");

    if (baseUrl.empty() || accessToken.empty()) {
        std::cerr << "Set PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN" << std::endl;
        return 1;
    }

    auto apiConfiguration = std::make_shared<ApiConfiguration>();
    apiConfiguration->setBaseUrl(utility::conversions::to_string_t(baseUrl));

    // The checks endpoint is protected by OAuth2/JWT bearer auth. The generated
    // client expects the credential to be supplied as a default header, which it
    // copies onto every request.
    apiConfiguration->getDefaultHeaders()[utility::conversions::to_string_t("Authorization")] =
        utility::conversions::to_string_t("Bearer " + accessToken);

    auto apiClient = std::make_shared<ApiClient>(apiConfiguration);
    ChecksApi checksApi(apiClient);

    try {
        // checkType is optional; pass an empty optional to list all check types.
        std::vector<std::shared_ptr<V2CheckInfo>> checks =
            checksApi.v2ChecksList(boost::optional<utility::string_t>()).get();

        std::cout << "E2E OK: " << checks.size() << " check types" << std::endl;
        return 0;
    } catch (const ApiException& e) {
        std::cerr << "API error (" << e.error_code().value() << "): " << e.what() << std::endl;
        if (e.getContent()) {
            std::cerr << e.getContent()->rdbuf() << std::endl;
        }
        return 1;
    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }
}
