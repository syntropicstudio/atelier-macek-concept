// Separate Vite config for GitHub Pages static SPA build.
// Uses standard Vite + React plugins (no TanStack Start / Nitro / SSR).
// Outputs to dist/ which is uploaded as the GitHub Pages artifact.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  // Must match the GitHub repository name for project pages.
  base: "/atelier-macek-concept/",
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
