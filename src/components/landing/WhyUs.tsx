import { ShieldCheck, FileSearch, Coins, UserCheck, MessageCircle, ClipboardCheck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Zkušený tým", desc: "Autorizovaní inženýři a projektanti s dlouholetou praxí v oboru." },
  { icon: FileSearch, title: "Přesná dokumentace", desc: "Detailně zpracované projekty bez skrytých překvapení na stavbě." },
  { icon: Coins, title: "Transparentní ceny", desc: "Férová a předem odsouhlasená kalkulace každé etapy projektu." },
  { icon: UserCheck, title: "Individuální přístup", desc: "Každý projekt vedeme osobně – žádné šablonovité řešení." },
  { icon: MessageCircle, title: "Rychlá komunikace", desc: "Reagujeme rychle a průběžně vás informujeme o vývoji projektu." },
  { icon: ClipboardCheck, title: "Spolehlivé vedení", desc: "Hlídáme termíny, rozpočet i kvalitu – od studie po kolaudaci." },
];

export function WhyUs() {
  return (
    <section className="relative py-28 md:py-36 bg-[var(--charcoal)]">
      <div className="container-x">
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="eyebrow mb-6">
            <span className="h-px w-8 bg-[var(--gold)]" />
            Proč Ateliér Macek
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Šest důvodů, proč vám<br />
            <span className="italic text-[var(--gold)]">svěříme stavbu snů</span> do rukou.
          </h2>
        </div>

        <div className="grid gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group relative bg-[var(--charcoal)] p-8 md:p-10 hover:bg-[var(--graphite)] transition-colors duration-500"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-4xl text-[var(--gold)]/60 shrink-0 w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="mb-4 text-[var(--gold)]">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
