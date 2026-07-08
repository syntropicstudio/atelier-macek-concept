import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputPublicDir = resolve(process.cwd(), ".output", "public");

function createStatic404Html() {
  return `<!doctype html>
<html lang="cs">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>404 - Stranka nenalezena</title>
    <meta name="robots" content="noindex" />
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 2rem; line-height: 1.4; }
      .box { max-width: 640px; margin: 10vh auto; }
      a { color: #2563eb; text-decoration: none; }
      a:hover { text-decoration: underline; }
    </style>
  </head>
  <body>
    <div class="box">
      <h1>404</h1>
      <p>Stranka nebyla nalezena.</p>
      <p><a href="/atelier-macek-concept/">Prejit na uvodni stranku</a></p>
    </div>
  </body>
</html>
`;
}

async function main() {
  const target404 = resolve(outputPublicDir, "404.html");
  await writeFile(target404, createStatic404Html(), "utf8");
  console.log(`Created static ${target404} (no redirect fallback).`);
}

main().catch((error) => {
  console.error("Failed to create .output/public/404.html:", error);
  process.exitCode = 1;
});
