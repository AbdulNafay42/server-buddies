// Smoke test: built bundles must import in plain Node (no DOM) and the React wrapper must SSR.
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

const esm = await import("../dist/index.js");
const require = createRequire(import.meta.url);
const cjs = require("../dist/index.cjs");
const reactEsm = await import("../dist/react.js");
const reactCjs = require("../dist/react.cjs");

for (const lib of [esm, cjs]) {
  assert.equal(typeof lib.createBuddy, "function");
  assert.equal(lib.characters.length, 10);
  // Without a DOM, createBuddy is a safe no-op
  const b = lib.createBuddy({ character: "robot" });
  b.say("hi");
  b.destroy();
  for (const c of lib.characters) {
    const svg = lib.renderPreview(c.id, { color: "#ff00aa", accessory: "crown" });
    assert.ok(svg.startsWith("<svg") && svg.includes("--sb-main:#ff00aa"), `${c.id} preview`);
    for (const state of ["happy", "curious", "down"]) assert.ok(lib.renderPreview(c.id, { state }).includes("<g"), `${c.id}/${state}`);
    for (const acc of lib.ACCESSORIES) assert.ok(lib.renderPreview(c.id, { accessory: acc }).includes("</svg>"), `${c.id}/${acc}`);
  }
}

assert.equal(renderToString(createElement(reactEsm.ServerBuddy, { character: "cat" })), "");
assert.ok(renderToString(createElement(reactCjs.ServerBuddy, { inline: true })).includes("<div"));
console.log("smoke OK: ESM, CJS, no-DOM import, React SSR (ESM + CJS)");
