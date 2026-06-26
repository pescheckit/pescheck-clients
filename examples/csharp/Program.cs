using System.Collections.Generic;
using Pescheck.Client.Api;
using Pescheck.Client.Client;
using Pescheck.Client.Model;

// Minimal end-to-end example for the Pescheck C# client.
// Lists the available check types and prints a one-line result for CI.

string? basePath = Environment.GetEnvironmentVariable("PESCHECK_BASE_URL");
string? accessToken = Environment.GetEnvironmentVariable("PESCHECK_ACCESS_TOKEN");

if (string.IsNullOrWhiteSpace(basePath) || string.IsNullOrWhiteSpace(accessToken))
{
    Console.Error.WriteLine("E2E FAILED: PESCHECK_BASE_URL and PESCHECK_ACCESS_TOKEN must be set");
    return 1;
}

try
{
    var config = new Configuration
    {
        BasePath = basePath,
        AccessToken = accessToken,
    };

    var apiInstance = new ChecksApi(config);
    List<V2CheckInfo> checks = apiInstance.V2ChecksList();

    Console.WriteLine($"E2E OK: {checks.Count} check types");
    return 0;
}
catch (Exception e)
{
    Console.Error.WriteLine($"E2E FAILED: {e.Message}");
    return 1;
}
