import { renderToString } from "react-dom/server";
import { Navigation } from "@/components/landing/Navigation";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { WhyUs } from "@/components/landing/WhyUs";
import { Portfolio } from "@/components/landing/Portfolio";
import { About } from "@/components/landing/About";
import { LeadCta } from "@/components/landing/LeadCta";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { CookiesPage } from "@/components/legal/CookiesPage";
import { PrivacyPage } from "@/components/legal/PrivacyPage";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <About />
        <LeadCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// Consumed by scripts/prerender.mjs: one entry per static page written into dist/.
export const pages = [
  { path: "", html: () => renderToString(<Home />) },
  {
    path: "cookies",
    title: "Cookies | Ateliér Macek s.r.o.",
    description:
      "Informace o cookies a úložišti prohlížeče na webu Ateliér Macek s.r.o. a o načítání mapy Google Maps.",
    html: () => renderToString(<CookiesPage />),
  },
  {
    path: "ochrana-osobnich-udaju",
    title: "Ochrana osobních údajů | Ateliér Macek s.r.o.",
    description:
      "Zásady ochrany osobních údajů společnosti Ateliér Macek s.r.o. – správce, účely zpracování, doba uchování a vaše práva.",
    html: () => renderToString(<PrivacyPage />),
  },
];
