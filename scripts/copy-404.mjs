import { copyFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputPublicDir = resolve(process.cwd(), ".output", "public");

async function main() {
  await copyFile(resolve(outputPublicDir, "index.html"), resolve(outputPublicDir, "404.html"));
  console.log("Created .output/public/404.html for GitHub Pages SPA fallback.");
}

main().catch((error) => {
  console.error("Failed to create .output/public/404.html:", error);
  process.exitCode = 1;
});
