import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    // BASE_URL is "/" in dev and "/atelier-macek-concept/" in Pages build (set via vite.config.pages.ts)
    basepath: import.meta.env.BASE_URL,
  });

  return router;
};
