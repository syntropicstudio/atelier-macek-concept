import {
  Ruler,
  FileCheck2,
  Building2,
  Calculator,
  Compass,
  HardHat,
  Hammer,
  Home,
  Warehouse,
} from "lucide-react";

const services = [
  {
    icon: Ruler,
    title: "Projektová dokumentace",
    desc: "Kompletní dokumentace ve všech stupních – od studie po prováděcí projekt.",
  },
  {
    icon: FileCheck2,
    title: "Dokumentace pro stavební povolení",
    desc: "Zpracování DSP včetně všech příloh a koordinace s dotčenými orgány.",
  },
  {
    icon: Compass,
    title: "Inženýrská činnost",
    desc: "Vyřízení povolení, stanovisek a komunikace s úřady za vás.",
  },
  {
    icon: Calculator,
    title: "Rozpočty a výkaz výměr",
    desc: "Přesné položkové rozpočty a slepé výkazy pro férové výběrové řízení.",
  },
  {
    icon: HardHat,
    title: "Technické poradenství",
    desc: "Konzultace stavebních řešení, materiálů a energetických konceptů.",
  },
  {
    icon: Building2,
    title: "Technický dozor stavebníka",
    desc: "Nezávislá kontrola kvality prací a dodržování rozpočtu na stavbě.",
  },
  {
    icon: Hammer,
    title: "Rekonstrukce",
    desc: "Citlivé projekty rekonstrukcí rodinných domů i historických objektů.",
  },
  {
    icon: Home,
    title: "Rodinné domy",
    desc: "Individuální návrhy rodinných domů šité na míru vašemu pozemku.",
  },
  {
    icon: Warehouse,
    title: "Komerční stavby",
    desc: "Administrativní, výrobní a obchodní objekty s důrazem na provoz.",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_1.4fr] lg:gap-20 mb-16 md:mb-20">
          <div>
            <span className="eyebrow mb-6">
              <span className="h-px w-8 bg-[var(--gold)]" />
              Naše služby
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Kompletní projekční<br />servis pod jednou střechou.
            </h2>
          </div>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed lg:pt-16">
            Poskytujeme ucelené řešení od prvního nápadu po předání hotové
            stavby. Klademe důraz na promyšlené detaily, technickou správnost
            dokumentace a přehlednou komunikaci ve všech fázích projektu.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-[var(--ink)] p-8 md:p-10 transition-all duration-500 hover:bg-[var(--charcoal)]"
            >
              <div className="mb-8 inline-flex h-12 w-12 items-center justify-center border border-[var(--gold)]/40 text-[var(--gold)] transition-all duration-500 group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[var(--ink)]">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl mb-3 text-foreground">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
