import { createFileRoute } from "@tanstack/react-router";
import { CookiesPage } from "@/components/legal/CookiesPage";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
});