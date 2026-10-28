import type { ReactNode } from "react";
import { Navigation } from "@/components/landing/Navigation";
import { Footer } from "@/components/landing/Footer";

export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="container-x pt-40 pb-24">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl leading-tight">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Poslední aktualizace: {updated}</p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-foreground/80 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:text-foreground [&_h2]:pt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_a]:underline [&_a:hover]:text-[var(--gold)] [&_th]:text-left [&_th]:pr-6 [&_td]:pr-6 [&_td]:py-2 [&_table]:w-full [&_table]:text-sm">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
