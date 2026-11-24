#!/usr/bin/env node
/**
 * Post-generation fixups applied after `openapi-generator batch`.
 *
 * TypeScript (typescript-fetch): the generated `instanceOfXxx(value: object)`
 * type guards check both camelCase and snake_case keys with `in`. For models
 * with many properties this makes TS narrow `value` into a 2^n union and emit
 *   TS2590: Expression produces a union type that is too complex to represent.
 * Typing the guard parameter as `any` stops the narrowing without changing
 * runtime behaviour. Idempotent — safe to re-run after every regeneration.
 */
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function patchDir(dir, transform) {
  let count = 0;
  for (const file of readdirSync(dir)) {
    if (!file.endsWith(".ts")) continue;
    const path = join(dir, file);
    const before = readFileSync(path, "utf8");
    const after = transform(before);
    if (after !== before) {
      writeFileSync(path, after);
      count++;
    }
  }
  return count;
}

// Fix 1 (models): the generated `instanceOfXxx(value: object)` type guards check
// both camelCase and snake_case keys with `in`, which makes TS narrow `value`
// into a 2^n union -> TS2590. Typing the guard parameter as `any` stops the
// narrowing without changing runtime behaviour.
const guards = patchDir(resolve(root, "clients/typescript/src/models"), (s) =>
  s.replace(/\(value: object\): value is /g, "(value: any): value is ")
);

// Fix 2 (apis): for `type: oauth2` security, this generator assigns the raw
// token to the Authorization header WITHOUT a "Bearer " prefix, unlike every
// other client (python/js/rust prepend it). Wrap the assignment so the TS client
// also accepts a raw access token and sends `Authorization: Bearer <token>`.
const auth = patchDir(resolve(root, "clients/typescript/src/apis"), (s) =>
  s.replace(
    /(headerParameters\["Authorization"\] = )(await this\.configuration\.accessToken\("oauth2",[^;]*?\));/g,
    "$1`Bearer ${$2}`;"
  )
);

// Fix 3 (ruby): the generated configuration.rb emits `in: ,` (empty value) for
// the cookieAuth entry in auth_settings. Ruby 3 parses the bare `in` as a method
// call -> NameError at runtime. Give it a valid empty-string value.
let ruby = 0;
// The lib subdir is named after the gem (e.g. lib/pescheck-client/), so locate
// configuration.rb dynamically rather than hardcoding the path.
try {
  const libDir = resolve(root, "clients/ruby/lib");
  for (const sub of readdirSync(libDir)) {
    const rubyConfig = join(libDir, sub, "configuration.rb");
    let before;
    try {
      before = readFileSync(rubyConfig, "utf8");
    } catch {
      continue;
    }
    const after = before.replace(/^(\s*)in: ,$/gm, "$1in: '',");
    if (after !== before) {
      writeFileSync(rubyConfig, after);
      ruby = 1;
    }
  }
} catch {
  /* ruby client not generated */
}

// Fix package metadata URLs (generators default to openapi-generator.tech):
// homepage -> pescheck.io, repository/source/docs -> GitHub. Generators with a
// config option (ruby gemHomepage, python packageUrl, csharp packageProjectUrl)
// already point homepage at pescheck.io; here we add the GitHub links for npm,
// rust and ruby where the manifest supports them.
const REPO_URL = "https://github.com/pescheckit/pescheck-clients";
const HOME_URL = "https://pescheck.io";
let manifests = 0;

for (const dir of ["typescript", "javascript"]) {
  const p = resolve(root, `clients/${dir}/package.json`);
  try {
    const pkg = JSON.parse(readFileSync(p, "utf8"));
    pkg.homepage = HOME_URL;
    pkg.repository = { type: "git", url: `git+${REPO_URL}.git` };
    pkg.bugs = { url: `${REPO_URL}/issues` };
    writeFileSync(p, JSON.stringify(pkg, null, 2) + "\n");
    manifests++;
  } catch {
    /* not generated */
  }
}

try {
  const p = resolve(root, "clients/rust/Cargo.toml");
  let c = readFileSync(p, "utf8");
  if (!c.includes("homepage =")) {
    c = c.replace(
      /(\nversion = "[^"]*"\n)/,
      `$1homepage = "${HOME_URL}"\nrepository = "${REPO_URL}"\ndocumentation = "${REPO_URL}"\n`
    );
    writeFileSync(p, c);
    manifests++;
  }
} catch {
  /* not generated */
}

try {
  const p = resolve(root, "clients/ruby/pescheck.gemspec");
  let c = readFileSync(p, "utf8");
  if (!c.includes("source_code_uri")) {
    c = c.replace(
      /(\n\s*s\.homepage\s*=.*\n)/,
      `$1  s.metadata = { "source_code_uri" => "${REPO_URL}", "homepage_uri" => "${HOME_URL}" }\n`
    );
    writeFileSync(p, c);
    manifests++;
  }
} catch {
  /* not generated */
}

// C#: NuGet shows "missing README" unless the package embeds one. The generator
// never sets PackageReadmeFile, so add it + pack the generated client README,
// and brand the generic description. README is at clients/csharp/README.md
// (../../ relative to the csproj).
try {
  const p = resolve(root, "clients/csharp/src/Pescheck.Client/Pescheck.Client.csproj");
  let c = readFileSync(p, "utf8");
  const orig = c;
  if (!c.includes("<PackageReadmeFile>")) {
    c = c.replace(
      /(\n(\s*)<PackageReleaseNotes>)/,
      `\n$2<PackageProjectUrl>${REPO_URL}</PackageProjectUrl>\n$2<PackageReadmeFile>README.md</PackageReadmeFile>$1`
    );
    c = c.replace(
      /(\n\s*<\/PropertyGroup>)/,
      `$1\n\n  <ItemGroup>\n    <None Include="../../README.md" Pack="true" PackagePath="\\" />\n  </ItemGroup>`
    );
  }
  c = c.replace(
    "<Description>A library generated from a OpenAPI doc</Description>",
    "<Description>Official Pescheck API client for .NET, generated from the OpenAPI specification.</Description>"
  );
  if (c !== orig) {
    writeFileSync(p, c);
    manifests++;
  }
} catch {
  /* not generated */
}

// C#: the generator assigns a RANDOM GUID to each project in the .sln every run,
// so the file churns on every regen -> perpetual false "drift". Pin each project's
// GUID (by project name) to a fixed value so the .sln is deterministic.
try {
  const p = resolve(root, "clients/csharp/Pescheck.Client.sln");
  let c = readFileSync(p, "utf8");
  const fixedGuids = {
    "Pescheck.Client": "A1B2C3D4-0001-4000-8000-000000000001",
    "Pescheck.Client.Test": "A1B2C3D4-0002-4000-8000-000000000002",
  };
  const before = c;
  for (const [name, guid] of Object.entries(fixedGuids)) {
    const re = new RegExp(`= "${name.replace(/[.]/g, "\\.")}", "[^"]+", "\\{([0-9A-Fa-f-]{36})\\}"`);
    const m = c.match(re);
    if (m) c = c.split(m[1]).join(guid); // replace the GUID in the Project + config sections
  }
  if (c !== before) writeFileSync(p, c);
} catch {
  /* not generated */
}

// Python: the generator sets pyproject.toml [project].name from packageName
// (pescheck) but setup.py NAME from projectName (pescheck-client). PEP 621 builds
// use pyproject, so force the distribution name there too. Import stays `pescheck`.
try {
  const p = resolve(root, "clients/python/pyproject.toml");
  let c = readFileSync(p, "utf8");
  const fixed = c.replace(/^name = "pescheck"$/m, 'name = "pescheck-client"');
  if (fixed !== c) {
    writeFileSync(p, fixed);
    manifests++;
  }
} catch {
  /* not generated */
}

// Strip em dashes from the GENERATED client docs only (clients/). Those are
// regenerated every run, so enforcing a no-em-dash rule belongs here. Hand-written
// docs (root README, examples/) are intentionally NOT touched - keep them clean
// by hand rather than have the generator silently rewrite them.
let mdFixed = 0;
function stripEmDashesInGeneratedDocs(dir) {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const e of entries) {
    if (e.name === "node_modules" || e.name === ".git" || e.name === "vendor") continue;
    const full = join(dir, e.name);
    if (e.isDirectory()) stripEmDashesInGeneratedDocs(full);
    else if (e.name.endsWith(".md")) {
      const before = readFileSync(full, "utf8");
      const after = before.replace(/—/g, "-");
      if (after !== before) {
        writeFileSync(full, after);
        mdFixed++;
      }
    }
  }
}
stripEmDashesInGeneratedDocs(resolve(root, "clients"));

// Brand each generated client README as the OFFICIAL Pescheck client (idempotent).
const OFFICIAL_BANNER =
  "> **Official Pescheck API client** - part of the " +
  "[pescheck-clients](https://github.com/pescheckit/pescheck-clients) SDKs.\n\n";
let branded = 0;
try {
  for (const lang of readdirSync(resolve(root, "clients"))) {
    const readme = resolve(root, "clients", lang, "README.md");
    let c;
    try {
      c = readFileSync(readme, "utf8");
    } catch {
      continue;
    }
    if (!c.includes("Official Pescheck API client")) {
      writeFileSync(readme, OFFICIAL_BANNER + c);
      branded++;
    }
  }
} catch {
  /* no clients */
}
console.log(`postprocess: branded ${branded} client README(s) as official`);

// Runtime base URL from the environment. Integrators typically build against
// staging first and then switch to production; that should be a deploy-time
// setting, not a code change. Every client's DEFAULT host becomes
// $PESCHECK_BASE_URL (e.g. https://api-staging.pescheck.io), falling back to
// production. A host set explicitly in code still wins.
// Each patch is idempotent and THROWS if its anchor is gone (e.g. a generator
// upgrade changed the template), so the env var can never silently stop working.
const PROD = "https://api.pescheck.io";
function patchFile(rel, pairs) {
  const file = resolve(root, rel);
  let s;
  try {
    s = readFileSync(file, "utf8");
  } catch {
    return 0; // client not generated in this run
  }
  let changed = false;
  for (const [from, to] of pairs) {
    if (s.includes(to)) continue; // already patched
    const found = from instanceof RegExp ? from.test(s) : s.includes(from);
    if (!found) {
      throw new Error(`postprocess: PESCHECK_BASE_URL anchor not found in ${rel}:\n${from}`);
    }
    s = s.replace(from, to);
    changed = true;
  }
  if (changed) writeFileSync(file, s);
  return changed ? 1 : 0;
}

const rubyConfig = (() => {
  try {
    const lib = resolve(root, "clients/ruby/lib");
    const sub = readdirSync(lib, { withFileTypes: true }).find((d) => d.isDirectory());
    return sub ? `clients/ruby/lib/${sub.name}/configuration.rb` : null;
  } catch {
    return null;
  }
})();

let envPatched = 0;
envPatched += patchFile("clients/python/pescheck/configuration.py", [
  ["import copy\n", "import copy\nimport os\n"],
  // Treat the env var exactly like a caller-supplied `host`: with host=None the
  // generator falls back to server_index 0 (hard-coded production), ignoring
  // _base_path, so setting _base_path alone would not work.
  [
    `        self._base_path = "${PROD}" if host is None else host`,
    `        if host is None and os.environ.get("PESCHECK_BASE_URL"):\n` +
      `            host = os.environ["PESCHECK_BASE_URL"].rstrip("/")\n` +
      `        self._base_path = "${PROD}" if host is None else host`,
  ],
]);
envPatched += patchFile("clients/typescript/src/runtime.ts", [
  [
    `export const BASE_PATH = "${PROD}".replace(/\\/+$/, "");`,
    `export const BASE_PATH = ((globalThis as any).process?.env?.PESCHECK_BASE_URL as string | undefined || "${PROD}").replace(/\\/+$/, "");`,
  ],
]);
envPatched += patchFile("clients/javascript/src/ApiClient.js", [
  [
    `constructor(basePath = '${PROD}') {`,
    `constructor(basePath = ((typeof process !== 'undefined' && process.env && process.env.PESCHECK_BASE_URL) || '${PROD}').replace(/\\/+$/, '')) {`,
  ],
]);
envPatched += patchFile("clients/go/configuration.go", [
  [`"net/http"\n\t"strings"`, `"net/http"\n\t"os"\n\t"strings"`],
  [
    `URL: "${PROD}",\n\t\t\t\tDescription: "Production",`,
    `URL: defaultBaseURL(),\n\t\t\t\tDescription: "Default: $PESCHECK_BASE_URL, else Production",`,
  ],
  [
    `// NewConfiguration returns a new Configuration object`,
    `// defaultBaseURL returns $PESCHECK_BASE_URL if set, else production.\n` +
      `func defaultBaseURL() string {\n` +
      `\tif v := os.Getenv("PESCHECK_BASE_URL"); v != "" {\n` +
      `\t\treturn strings.TrimRight(v, "/")\n` +
      `\t}\n` +
      `\treturn "${PROD}"\n` +
      `}\n\n` +
      `// NewConfiguration returns a new Configuration object`,
  ],
]);
envPatched += patchFile("clients/rust/src/apis/configuration.rs", [
  [
    `base_path: "${PROD}".to_owned(),`,
    `base_path: std::env::var("PESCHECK_BASE_URL").ok().filter(|v| !v.is_empty()).map(|v| v.trim_end_matches('/').to_owned()).unwrap_or_else(|| "${PROD}".to_owned()),`,
  ],
]);
if (rubyConfig) {
  envPatched += patchFile(rubyConfig, [
    [
      `      @host = 'api.pescheck.io'\n      @base_path = ''\n`,
      `      @host = 'api.pescheck.io'\n      @base_path = ''\n` +
        `      # Default host: $PESCHECK_BASE_URL if set, else production.\n` +
        `      if (env_url = ENV['PESCHECK_BASE_URL']) && !env_url.empty?\n` +
        `        require 'uri'\n` +
        `        uri = URI.parse(env_url)\n` +
        `        @scheme = uri.scheme\n` +
        `        @host = uri.port == uri.default_port ? uri.host : "#{uri.host}:#{uri.port}"\n` +
        `        @base_path = uri.path.sub(%r{/+\\z}, '')\n` +
        `      end\n`,
    ],
  ]);
}
envPatched += patchFile("clients/php/lib/Configuration.php", [
  [
    `        $this->tempFolderPath = sys_get_temp_dir();\n    }`,
    `        $this->tempFolderPath = sys_get_temp_dir();\n` +
      `        // Default host: $PESCHECK_BASE_URL if set, else production.\n` +
      `        $envHost = getenv('PESCHECK_BASE_URL');\n` +
      `        if ($envHost !== false && $envHost !== '') {\n` +
      `            $this->host = rtrim($envHost, '/');\n` +
      `        }\n    }`,
  ],
]);
envPatched += patchFile("clients/csharp/src/Pescheck.Client/Client/Configuration.cs", [
  [
    `            BasePath = "${PROD}";\n            DefaultHeaders`,
    `            // Default host: $PESCHECK_BASE_URL if set, else production.\n` +
      `            var envBasePath = Environment.GetEnvironmentVariable("PESCHECK_BASE_URL");\n` +
      `            BasePath = string.IsNullOrEmpty(envBasePath) ? "${PROD}" : envBasePath.TrimEnd('/');\n` +
      `            DefaultHeaders`,
  ],
]);
envPatched += patchFile("clients/java/src/main/java/io/pescheck/client/ApiClient.java", [
  [
    `    protected String basePath = "${PROD}";\n`,
    `    protected String basePath = envBasePath() != null ? envBasePath() : "${PROD}";\n\n` +
      `    /** $PESCHECK_BASE_URL without trailing slashes, or null when unset. */\n` +
      `    private static String envBasePath() {\n` +
      `        String env = System.getenv("PESCHECK_BASE_URL");\n` +
      `        return (env != null && !env.isEmpty()) ? env.replaceAll("/+$", "") : null;\n` +
      `    }\n\n`,
  ],
  // The OAuth constructor assigned basePath directly, leaving serverIndex 0 so
  // an explicit basePath was ignored for API calls. Use the setter (it clears
  // serverIndex) so API calls and the token URL below hit the same host.
  [
    `        if (basePath != null) {\n            this.basePath = basePath;\n        }\n\n        String tokenUrl`,
    `        if (basePath != null) {\n            setBasePath(basePath);\n        }\n\n        String tokenUrl`,
  ],
  // serverIndex 0 (hard-coded production) takes precedence over basePath, so
  // only default to it when the env var is not set.
  [
    `    protected Integer serverIndex = 0;\n`,
    `    protected Integer serverIndex = envBasePath() != null ? null : 0;\n`,
  ],
  // OAuth token endpoint must follow the API host, or staging users would
  // fetch tokens from production. The generator bakes in the tokenUrl of
  // whichever schema was fetched (prod, staging, localhost...), so match any.
  [
    /String tokenUrl = "[^"]*\/api\/o\/token\/";/,
    `String tokenUrl = getBasePath() + "/api/o/token/";`,
  ],
]);
envPatched += patchFile("clients/cpp/src/ApiConfiguration.cpp", [
  [
    `#include "PescheckApi/ApiConfiguration.h"\n`,
    `#include "PescheckApi/ApiConfiguration.h"\n\n#include <cstdlib>\n`,
  ],
  [
    `ApiConfiguration::ApiConfiguration()\n{\n}`,
    `ApiConfiguration::ApiConfiguration()\n{\n` +
      `    // Default base URL: $PESCHECK_BASE_URL if set, else production.\n` +
      `    const char* envBaseUrl = std::getenv("PESCHECK_BASE_URL");\n` +
      `    std::string baseUrl = (envBaseUrl && *envBaseUrl) ? envBaseUrl : "${PROD}";\n` +
      `    while (!baseUrl.empty() && baseUrl.back() == '/') baseUrl.pop_back();\n` +
      `    m_BaseUrl = utility::conversions::to_string_t(baseUrl);\n}`,
  ],
]);
console.log(`postprocess: PESCHECK_BASE_URL default host wired into ${envPatched} client(s)`);

// PHP: send query-string booleans as true/false, like the other clients and as
// the spec declares them. The generator defaults to 1/0 (`paginate=1`), which a
// spec-validating server rejects; found by the contract tests (contract/php).
const phpBool = patchFile("clients/php/lib/Configuration.php", [
  [
    "protected $booleanFormatForQueryString = self::BOOLEAN_FORMAT_INT;",
    "protected $booleanFormatForQueryString = self::BOOLEAN_FORMAT_STRING;",
  ],
]);
console.log(`postprocess: PHP query booleans as true/false in ${phpBool} file(s)`);

// Rust: with useSingleRequestParameter every call takes a `<Op>Params` struct.
// Derive Default so callers write `Params { page: Some(2), ..Default::default() }`
// and keep compiling when the API adds an optional parameter (a new field).
let rustParams = 0;
try {
  const apisDir = resolve(root, "clients/rust/src/apis");
  for (const f of readdirSync(apisDir).filter((n) => n.endsWith(".rs"))) {
    const file = resolve(apisDir, f);
    const before = readFileSync(file, "utf8");
    const after = before.replace(/#\[derive\(Clone, Debug\)\]\npub struct (\w+Params) \{/g, (m, name) => {
      rustParams++;
      return `#[derive(Clone, Debug, Default)]\npub struct ${name} {`;
    });
    if (after !== before) writeFileSync(file, after);
    rustParams += (before.match(/#\[derive\(Clone, Debug, Default\)\]\npub struct \w+Params \{/g) || []).length;
  }
  if (rustParams === 0) throw new Error("postprocess: no Rust <Op>Params structs found to derive Default on");
} catch (e) {
  if (e.code !== "ENOENT") throw e;
}
console.log(`postprocess: Rust request params derive Default (${rustParams} struct(s))`);

// A Quickstart in the client's own language, right under the banner of every
// generated client README (what PyPI, npm, NuGet... show): how to get
// credentials on the staging dashboard, get a token, pick the environment and
// make a first call. It sits between markers and is rewritten on every run, so
// editing the text here updates every README.
const QUICKSTART_CODE = {
  python: ["python", `import os
import pescheck

config = pescheck.Configuration() # host from PESCHECK_BASE_URL
config.access_token = os.environ["PESCHECK_ACCESS_TOKEN"]

with pescheck.ApiClient(config) as client:
    checks = pescheck.ChecksApi(client).v2_checks_list()
    print(f"{len(checks)} check types available")`],
  typescript: ["typescript", `// Run as an ES module ("type": "module" in package.json), e.g. npx tsx quickstart.ts
import { ChecksApi, Configuration } from "@pescheckit/pescheck-client";

// Host from PESCHECK_BASE_URL.
const checksApi = new ChecksApi(new Configuration({ accessToken: process.env.PESCHECK_ACCESS_TOKEN }));
const checks = await checksApi.v2ChecksList();
console.log(\`\${checks.length} check types available\`);`],
  javascript: ["javascript", `const Pescheck = require("@pescheckit/pescheck-client-js");

const client = new Pescheck.ApiClient(); // host from PESCHECK_BASE_URL
client.authentications.oauth2.accessToken = process.env.PESCHECK_ACCESS_TOKEN;

new Pescheck.ChecksApi(client).v2ChecksList({}).then((checks) => {
  console.log(\`\${checks.length} check types available\`);
});`],
  java: ["java", `import io.pescheck.client.ApiClient;
import io.pescheck.client.Configuration;
import io.pescheck.client.api.ChecksApi;
import io.pescheck.client.model.V2CheckInfo;
import java.util.List;

public class Quickstart {
  public static void main(String[] args) throws Exception {
    ApiClient client = Configuration.getDefaultApiClient(); // host from PESCHECK_BASE_URL
    client.setAccessToken(System.getenv("PESCHECK_ACCESS_TOKEN"));

    List<V2CheckInfo> checks = new ChecksApi(client).v2ChecksList().execute();
    System.out.println(checks.size() + " check types available");
  }
}`],
  csharp: ["csharp", `using Pescheck.Client.Api;
using Pescheck.Client.Client;

// Host from PESCHECK_BASE_URL.
var token = Environment.GetEnvironmentVariable("PESCHECK_ACCESS_TOKEN")
    ?? throw new InvalidOperationException("Set PESCHECK_ACCESS_TOKEN");
var config = new Configuration { AccessToken = token };
var checks = new ChecksApi(config).V2ChecksList();
Console.WriteLine($"{checks.Count} check types available");`],
  go: ["go", `package main

import (
    "context"
    "fmt"
    "os"

    pescheck "github.com/pescheckit/pescheck-clients/clients/go"
)

func main() {
    client := pescheck.NewAPIClient(pescheck.NewConfiguration()) // host from PESCHECK_BASE_URL
    ctx := context.WithValue(context.Background(), pescheck.ContextAccessToken, os.Getenv("PESCHECK_ACCESS_TOKEN"))

    checks, _, err := client.ChecksAPI.V2ChecksList(ctx).Execute()
    if err != nil {
        panic(err)
    }
    fmt.Printf("%d check types available\\n", len(checks))
}`],
  php: ["php", `<?php
require 'vendor/autoload.php';

use Pescheck\\Client\\Api\\ChecksApi;
use Pescheck\\Client\\Configuration;

$config = (new Configuration())->setAccessToken(getenv('PESCHECK_ACCESS_TOKEN')); // host from PESCHECK_BASE_URL
$checks = (new ChecksApi(null, $config))->v2ChecksList();
echo count($checks) . " check types available\\n";`],
  ruby: ["ruby", `require 'pescheck-client'

config = Pescheck::Configuration.new # host from PESCHECK_BASE_URL
config.access_token = ENV.fetch('PESCHECK_ACCESS_TOKEN')

checks = Pescheck::ChecksApi.new(Pescheck::ApiClient.new(config)).v2_checks_list
puts "#{checks.length} check types available"`],
  rust: ["rust", `use pescheck_client::apis::{checks_api, configuration::Configuration};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let mut config = Configuration::new(); // host from PESCHECK_BASE_URL
    config.oauth_access_token = Some(std::env::var("PESCHECK_ACCESS_TOKEN")?);

    let checks = checks_api::v2_checks_list(&config, Default::default()).await?;
    println!("{} check types available", checks.len());
    Ok(())
}`],
  cpp: ["cpp", `#include <cstdlib>
#include <iostream>
#include <memory>
#include <PescheckApi/ApiClient.h>
#include <PescheckApi/ApiConfiguration.h>
#include <PescheckApi/api/ChecksApi.h>

using namespace org::openapitools::client::api;

int main() {
    const char* token = std::getenv("PESCHECK_ACCESS_TOKEN");
    if (!token) {
        std::cerr << "Set PESCHECK_ACCESS_TOKEN" << std::endl;
        return 1;
    }
    auto config = std::make_shared<ApiConfiguration>(); // host from PESCHECK_BASE_URL
    config->getDefaultHeaders()[utility::conversions::to_string_t("Authorization")] =
        utility::conversions::to_string_t(std::string("Bearer ") + token);

    ChecksApi checksApi(std::make_shared<ApiClient>(config));
    auto checks = checksApi.v2ChecksList(boost::none).get();
    std::cout << checks.size() << " check types available" << std::endl;
}`],
};
const QS_START = "<!-- pescheck-quickstart:start (generated by scripts/postprocess.mjs) -->";
const QS_END = "<!-- pescheck-quickstart:end -->";
function quickstart(lang) {
  const entry = QUICKSTART_CODE[lang];
  if (!entry) return "";
  const [fence, code] = entry;
  return [
    QS_START,
    "",
    "## Quickstart",
    "",
    "**1. Get API credentials.** Create a test account at [dashboard-staging.pescheck.io](https://dashboard-staging.pescheck.io/). In the dashboard, enable the **API & MCP Access** add-on (*Settings → Add-ons*), then create an app under *Development → Add app*. You get a client ID and a client secret.",
    "",
    "**2. Get an access token** from the environment you want to use (staging while you integrate):",
    "",
    "```bash",
    "curl -X POST https://api-staging.pescheck.io/api/o/token/ \\",
    "  -d grant_type=client_credentials \\",
    "  -d client_id=YOUR_CLIENT_ID \\",
    "  -d client_secret=YOUR_CLIENT_SECRET",
    "```",
    "",
    "Copy the `access_token` from the response (it is valid for one hour), and point the client at the same environment:",
    "",
    "```bash",
    "export PESCHECK_BASE_URL=https://api-staging.pescheck.io",
    "export PESCHECK_ACCESS_TOKEN=paste-the-access-token-here",
    "```",
    "",
    "**3. Make your first call:**",
    "",
    "```" + fence,
    code,
    "```",
    "",
    "**4. Go live.** Use your production credentials and request the token from `https://api.pescheck.io/api/o/token/`. Then unset `PESCHECK_BASE_URL`: the client uses production by default. Your code does not change.",
    "",
    "Setting the host in code (as some examples below do) overrides `PESCHECK_BASE_URL`.",
    "",
    QS_END,
    "",
    "",
  ].join("\n");
}
// Earlier versions put these notes as quote blocks under the banner; drop them.
const LEGACY_NOTE_PREFIXES = ["> **Getting API credentials:**", "> **Choosing the environment:**", "> **Quickstart**"];
let quickstarts = 0;
try {
  for (const lang of readdirSync(resolve(root, "clients"))) {
    const readme = resolve(root, "clients", lang, "README.md");
    let c;
    try {
      c = readFileSync(readme, "utf8");
    } catch {
      continue;
    }
    if (!c.startsWith(OFFICIAL_BANNER)) continue;
    let rest = c.slice(OFFICIAL_BANNER.length);
    const end = rest.indexOf(QS_END);
    if (rest.startsWith(QS_START) && end !== -1) {
      rest = rest.slice(end + QS_END.length).replace(/^\n+/, "");
    }
    while (LEGACY_NOTE_PREFIXES.some((p) => rest.startsWith(p))) {
      const lines = rest.split("\n");
      let k = 0;
      while (k < lines.length && lines[k].startsWith(">")) k++;
      while (k < lines.length && lines[k] === "") k++;
      rest = lines.slice(k).join("\n");
    }
    const updated = OFFICIAL_BANNER + quickstart(lang) + rest;
    if (updated !== c) {
      writeFileSync(readme, updated);
      quickstarts++;
    }
  }
} catch {
  /* no clients */
}
console.log(`postprocess: quickstart written in ${quickstarts} client README(s)`);

console.log(
  `postprocess: typescript instanceOf guards relaxed in ${guards} model file(s); ` +
    `Bearer prefix added in ${auth} api file(s); ruby auth_settings fixed in ${ruby} file(s); ` +
    `manifest metadata fixed in ${manifests} file(s)`
);

// Tidy whitespace in every README (root, examples/, and the generated client
// READMEs, which openapi-generator emits with trailing spaces, tabs, padded
// cells and runs of blank lines). Runs on every regen so it never comes back.
//   - trailing spaces/tabs removed
//   - tabs -> 4 spaces (leading) or a single space (inline)
//   - runs of 2+ spaces inside a line -> one space (indentation is kept)
//   - markdown table cells unpadded, separator rows -> `---`
//   - 2+ blank lines -> 1, file ends with exactly one newline
function tidyMarkdown(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n").map((line) => {
    const indent = line.match(/^[ \t]*/)[0].replace(/\t/g, "    ");
    let body = line.slice(line.match(/^[ \t]*/)[0].length).replace(/[ \t]+$/, "");
    body = body.replace(/\t/g, " ").replace(/ {2,}/g, " ");
    if (/^\|.*\|$/.test(body)) {
      const cells = body.slice(1, -1).split("|").map((c) => c.trim());
      const sep = cells.every((c) => /^:?-+:?$/.test(c));
      body = "| " + cells.map((c) => (sep ? c.replace(/-+/, "---") : c)).join(" | ") + " |";
    }
    return body ? indent + body : "";
  });
  return lines.join("\n").replace(/\n{3,}/g, "\n\n").replace(/\n*$/, "\n");
}
let tidied = 0;
const readmes = [resolve(root, "README.md")];
for (const base of ["clients", "examples"]) {
  try {
    for (const d of readdirSync(resolve(root, base), { withFileTypes: true })) {
      if (d.isDirectory()) readmes.push(resolve(root, base, d.name, "README.md"));
    }
  } catch {
    /* dir missing */
  }
}
for (const file of readmes) {
  let c;
  try {
    c = readFileSync(file, "utf8");
  } catch {
    continue;
  }
  const t = tidyMarkdown(c);
  if (t !== c) {
    writeFileSync(file, t);
    tidied++;
  }
}
console.log(`postprocess: tidied whitespace in ${tidied} README(s)`);
