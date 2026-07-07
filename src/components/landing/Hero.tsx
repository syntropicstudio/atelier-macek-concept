import hero from "@/assets/hero.jpg";
import { ArrowRight, Calculator } from "lucide-react";

export function Hero() {
  return (
    <section id="domu" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Moderní architektura navržená Ateliérem Macek"
          className="h-full w-full object-cover slow-zoom"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--ink)]/85 via-[var(--ink)]/60 to-[var(--ink)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ink)]/80 to-transparent" />
      </div>

      <div className="relative container-x flex min-h-screen flex-col justify-end pb-20 pt-40">
        <div className="max-w-3xl fade-up">
          <span className="eyebrow mb-8">
            <span className="h-px w-8 bg-[var(--gold)]" />
            Projekční a inženýrská kancelář · Kuřim
          </span>
          <h1 className="font-display leading-[1.02] text-foreground">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              Ateliér Macek
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Od první skici<br />
              až po <span className="italic text-[var(--gold)]">stavební povolení</span>.
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-foreground/70 leading-relaxed">
            Precizní projektová dokumentace, inženýrská činnost a technické
            poradenství pro rodinné domy, bytové stavby i komerční projekty.
            Provedeme vás každou etapou stavby s klidem a jistotou.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-[var(--ink)] hover:bg-[var(--gold-soft)] transition-all duration-300"
            >
              Nezávazná konzultace
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#kontakt"
              className="group inline-flex items-center justify-center gap-3 border border-white/20 px-8 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
            >
              <Calculator size={16} />
              Kalkulace projektu
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 fade-up">
          {[
            ["15+", "let zkušeností"],
            ["300+", "dokončených projektů"],
            ["98%", "spokojených klientů"],
            ["120+", "stavebních povolení"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl text-[var(--gold)]">{n}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
