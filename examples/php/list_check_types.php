<?php
/**
 * Minimal end-to-end example for the generated Pescheck PHP client.
 *
 * Lists the supported check types via GET /api/v2/checks/ and prints a
 * machine-checkable line for CI.
 *
 * Required environment variables:
 *   PESCHECK_BASE_URL      Base URL of the API, e.g. https://api.pescheck.io
 *   PESCHECK_ACCESS_TOKEN  OAuth2 access token
 */

require_once __DIR__ . '/vendor/autoload.php';

use Pescheck\Client\Api\ChecksApi;
use Pescheck\Client\Configuration;

$baseUrl = getenv('PESCHECK_BASE_URL');
$token = getenv('PESCHECK_ACCESS_TOKEN');

if ($baseUrl === false || $baseUrl === '') {
    fwrite(STDERR, "PESCHECK_BASE_URL is not set\n");
    exit(1);
}
if ($token === false || $token === '') {
    fwrite(STDERR, "PESCHECK_ACCESS_TOKEN is not set\n");
    exit(1);
}

$config = Configuration::getDefaultConfiguration()
    ->setHost($baseUrl)
    ->setAccessToken($token);

$apiInstance = new ChecksApi(
    new GuzzleHttp\Client(),
    $config
);

try {
    $result = $apiInstance->v2ChecksList();
    printf("E2E OK: %d check types\n", count($result));
    exit(0);
} catch (\Throwable $e) {
    fwrite(STDERR, 'Error calling v2ChecksList: ' . $e->getMessage() . "\n");
    exit(1);
}
