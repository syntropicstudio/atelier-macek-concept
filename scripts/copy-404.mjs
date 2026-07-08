import { access, copyFile, writeFile } from "node:fs/promises";
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

function createRedirect404Html() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Redirecting...</title>
    <meta name="robots" content="noindex" />
    <script>
      (function () {
        var path = window.location.pathname || "/";
        var query = window.location.search || "";
        var hash = window.location.hash || "";
        var target = "./?p=" + encodeURIComponent(path + query + hash);
        window.location.replace(target);
      })();
    </script>
  </head>
  <body>
    Redirecting...
  </body>
</html>
`;
}

async function main() {
  const indexHtml = resolve(outputPublicDir, "index.html");
  const target404 = resolve(outputPublicDir, "404.html");

  if (await exists(indexHtml)) {
    await copyFile(indexHtml, target404);
    console.log(`Created ${target404} from ${indexHtml}.`);
    return;
  }

  await writeFile(target404, createRedirect404Html(), "utf8");
  console.log(`Created ${target404} as redirect fallback (index.html not found).`);
}

main().catch((error) => {
  console.error("Failed to create .output/public/404.html:", error);
  process.exitCode = 1;
});
