import about from "@/assets/about.jpg";
import { Award, ShieldCheck, Scale } from "lucide-react";

export function About() {
  return (
    <section id="o-nas" className="relative py-28 md:py-36 bg-[var(--charcoal)]">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          <div className="relative">
            <img
              src={about}
              alt="Architektonická dokumentace v ateliéru"
              loading="lazy"
              width={1400}
              height={1600}
              className="w-full h-[520px] md:h-[640px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-[var(--gold)] text-[var(--ink)] p-8 max-w-[240px]">
              <div className="font-display text-5xl leading-none">2022</div>
              <div className="mt-3 text-[11px] uppercase tracking-[0.22em]">
                Založení společnosti · zkušenosti týmu 15+ let
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow mb-6">
              <span className="h-px w-8 bg-[var(--gold)]" />
              O ateliéru
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Projektujeme stavby,<br />
              které mají <span className="italic text-[var(--gold)]">smysl</span>.
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
              Ateliér Macek s.r.o. je projekční a inženýrská kancelář se sídlem
              v Kuřimi u Brna. Spojujeme řemeslnou preciznost tradiční
              projekce s moderními technologiemi a jasnou komunikací. Věříme,
              že dobrá architektura vzniká z respektu ke klientovi, místu
              i zákonům statiky.
            </p>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              Tým autorizovaných inženýrů se stará o kompletní dokumentaci,
              stavebně-technický dozor a vyřízení povolení tak, abyste vy sami
              řešili minimum starostí.
            </p>

            <dl className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/5">
              {[
                { icon: Award, k: "Autorizace ČKAIT", v: "obor pozemní stavby" },
                { icon: ShieldCheck, k: "Kvalita a bezpečnost", v: "ISO standardy" },
                { icon: Scale, k: "Etický kodex", v: "člen odborných komor" },
              ].map(({ icon: I, k, v }) => (
                <div key={k} className="bg-[var(--charcoal)] p-6">
                  <I size={20} className="text-[var(--gold)] mb-3" strokeWidth={1.5} />
                  <dt className="font-display text-lg text-foreground">{k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
