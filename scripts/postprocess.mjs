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

console.log(
  `postprocess: typescript instanceOf guards relaxed in ${guards} model file(s); ` +
    `Bearer prefix added in ${auth} api file(s); ruby auth_settings fixed in ${ruby} file(s); ` +
    `manifest metadata fixed in ${manifests} file(s)`
);
