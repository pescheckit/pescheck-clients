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
const tsModels = resolve(root, "clients/typescript/src/models");

let patched = 0;
for (const file of readdirSync(tsModels)) {
  if (!file.endsWith(".ts")) continue;
  const path = join(tsModels, file);
  const before = readFileSync(path, "utf8");
  const after = before.replace(/\(value: object\): value is /g, "(value: any): value is ");
  if (after !== before) {
    writeFileSync(path, after);
    patched++;
  }
}
console.log(`postprocess: typescript instanceOf guards relaxed in ${patched} model file(s)`);
