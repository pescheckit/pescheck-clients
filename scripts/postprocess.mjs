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

console.log(
  `postprocess: typescript instanceOf guards relaxed in ${guards} model file(s); ` +
    `Bearer prefix added in ${auth} api file(s)`
);
