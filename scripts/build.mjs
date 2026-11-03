import { build } from "esbuild";
import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { CSS } from "../src/styles.js";

rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });

const common = { bundle: true, target: "es2019", legalComments: "none", logLevel: "info" };

// Library builds (ESM + CJS). React stays external.
await build({ ...common, entryPoints: { index: "src/index.js" }, outdir: "dist", format: "esm", minify: true });
await build({ ...common, entryPoints: { index: "src/index.js" }, outdir: "dist", format: "cjs", outExtension: { ".js": ".cjs" }, minify: true });
await build({ ...common, entryPoints: { react: "src/react.js" }, outdir: "dist", format: "esm", external: ["react"], minify: true });
await build({ ...common, entryPoints: { react: "src/react.js" }, outdir: "dist", format: "cjs", outExtension: { ".js": ".cjs" }, external: ["react"], minify: true });

// <script src> / CDN bundle -> window.ServerBuddies
await build({
  ...common,
  entryPoints: { "server-buddies.global": "src/global.js" },
  outdir: "dist",
  format: "iife",
  globalName: "ServerBuddies",
  minify: true
});

writeFileSync("dist/style.css", CSS + "\n");

// The docs site loads the CDN bundle from its own folder so it can be deployed as-is (GitHub Pages).
copyFileSync("dist/server-buddies.global.js", "docs/server-buddies.global.js");
console.log("built dist/ and docs/server-buddies.global.js");
