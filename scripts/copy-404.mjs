import { access, copyFile, readdir } from "node:fs/promises";
import { constants } from "node:fs";
import { resolve } from "node:path";

const outputPublicDir = resolve(process.cwd(), ".output", "public");

async function exists(filePath) {
  try {
    await access(filePath, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function findHtmlSource() {
  const preferred = resolve(outputPublicDir, "index.html");
  if (await exists(preferred)) return preferred;

  const files = await readdir(outputPublicDir);
  const firstHtml = files.find((fileName) => fileName.toLowerCase().endsWith(".html"));

  if (!firstHtml) {
    throw new Error(`No HTML entry file found in ${outputPublicDir}. Cannot create 404.html fallback.`);
  }

  return resolve(outputPublicDir, firstHtml);
}

async function main() {
  const sourceHtml = await findHtmlSource();
  const target404 = resolve(outputPublicDir, "404.html");

  await copyFile(sourceHtml, target404);
  console.log(`Created ${target404} from ${sourceHtml} for GitHub Pages SPA fallback.`);
}

main().catch((error) => {
  console.error("Failed to create .output/public/404.html:", error);
  process.exitCode = 1;
});
