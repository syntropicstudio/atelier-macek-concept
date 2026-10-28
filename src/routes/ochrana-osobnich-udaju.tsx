import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/legal/PrivacyPage";

export const Route = createFileRoute("/ochrana-osobnich-udaju")({
  component: PrivacyPage,
});