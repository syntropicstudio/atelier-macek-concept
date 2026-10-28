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

// Build-time render used by scripts/prerender.mjs to put real HTML into dist/index.html.
export function render() {
  return renderToString(
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
    </div>,
  );
}
