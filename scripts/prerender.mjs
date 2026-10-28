import { readFile, writeFile, rm } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const ssrDir = resolve(root, "dist-ssr");
const indexPath = resolve(root, "dist", "index.html");

async function main() {
  const { render } = await import(pathToFileURL(join(ssrDir, "prerender.js")).href);
  const html = await readFile(indexPath, "utf8");
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error("Root marker not found in dist/index.html");
  await writeFile(indexPath, html.replace(marker, `<div id="root">${render()}</div>`));
  await rm(ssrDir, { recursive: true, force: true });
  console.log("Prerendered dist/index.html.");
}

main().catch((error) => {
  console.error("Prerender failed:", error);
  process.exitCode = 1;
});
