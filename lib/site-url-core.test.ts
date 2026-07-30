import assert from "node:assert/strict";
import test from "node:test";
import { resolveSiteUrl } from "./site-url-core.ts";

test("uses localhost only outside production", () => {
  assert.equal(
    resolveSiteUrl({ nodeEnv: "development", siteUrl: undefined }),
    "http://localhost:3000",
  );
});

test("requires an explicit URL in production", () => {
  assert.throws(
    () => resolveSiteUrl({ nodeEnv: "production", siteUrl: undefined }),
    /SITE_URL is required/,
  );
});

test("requires HTTPS in production", () => {
  assert.throws(
    () => resolveSiteUrl({ nodeEnv: "production", siteUrl: "http://newtalentt.example" }),
    /must use HTTPS/,
  );
});

test("rejects paths, queries and hashes", () => {
  for (const siteUrl of [
    "https://newtalentt.example/es",
    "https://newtalentt.example?preview=true",
    "https://newtalentt.example#contact",
  ]) {
    assert.throws(
      () => resolveSiteUrl({ nodeEnv: "production", siteUrl }),
      /must contain only the origin/,
    );
  }
});

test("normalizes a valid production origin", () => {
  assert.equal(
    resolveSiteUrl({ nodeEnv: "production", siteUrl: "  https://newtalentt.example  " }),
    "https://newtalentt.example",
  );
});
