import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");

async function main() {
  await copyFile(resolve(distDir, "index.html"), resolve(distDir, "404.html"));
  console.log("Created dist/404.html for GitHub Pages SPA fallback.");
}

main().catch((error) => {
  console.error("Failed to create dist/404.html:", error);
  process.exitCode = 1;
});
