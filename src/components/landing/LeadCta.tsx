import { ArrowRight, Clock, FileText, MessageSquare } from "lucide-react";

export function LeadCta() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)] via-[var(--charcoal)] to-[var(--ink)]" />
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />
      <div className="relative container-x">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow mb-8 justify-center">
            <span className="h-px w-8 bg-[var(--gold)]" />
            Pojďme se domluvit
            <span className="h-px w-8 bg-[var(--gold)]" />
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05]">
            Máte projekt v hlavě?<br />
            <span className="italic text-[var(--gold)]">Pojďme si o něm promluvit.</span>
          </h2>
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            První konzultace je zdarma a nezávazná. Ozveme se do 24 hodin
            a připravíme individuální kalkulaci přímo pro váš záměr.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-3 bg-[var(--gold)] px-10 py-5 text-sm font-medium uppercase tracking-[0.2em] text-[var(--ink)] hover:bg-[var(--gold-soft)] transition-all"
            >
              Poptat nezávaznou nabídku
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-10">
            {[
              { icon: MessageSquare, t: "Konzultace zdarma", d: "První setkání bez závazku" },
              { icon: Clock, t: "Reakce do 24 h", d: "Ozveme se následující pracovní den" },
              { icon: FileText, t: "Individuální nabídka", d: "Cena šitá vašemu projektu" },
            ].map(({ icon: I, t, d }) => (
              <div key={t} className="flex flex-col items-center">
                <I size={22} className="text-[var(--gold)] mb-4" strokeWidth={1.5} />
                <div className="font-display text-xl">{t}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {d}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
