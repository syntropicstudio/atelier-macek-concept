import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const ssrDir = resolve(root, "dist-ssr");
const distDir = resolve(root, "dist");
const marker = '<div id="root"></div>';

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

function withMeta(html, page) {
  if (!page.path) return html;
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const url = `${canonical}${page.path}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*"/, `$1${escapeAttr(page.description)}"`)
    .replace(/(<link rel="canonical" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<link rel="alternate" hreflang="cs" href=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:url" content=")[^"]*"/, `$1${url}"`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${escapeAttr(page.title)}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${escapeAttr(page.title)}"`);
}

async function main() {
  const { pages } = await import(pathToFileURL(join(ssrDir, "prerender.js")).href);
  const template = await readFile(join(distDir, "index.html"), "utf8");
  if (!template.includes(marker)) throw new Error("Root marker not found in dist/index.html");

  for (const page of pages) {
    const out = withMeta(template, page).replace(marker, `<div id="root">${page.html()}</div>`);
    const dir = join(distDir, page.path);
    await mkdir(dir, { recursive: true });
    await writeFile(join(dir, "index.html"), out);
    console.log(`Prerendered /${page.path}`);
  }
  await rm(ssrDir, { recursive: true, force: true });
}

main().catch((error) => {
  console.error("Prerender failed:", error);
  process.exitCode = 1;
});
