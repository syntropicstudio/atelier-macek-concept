import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

type Cat = "vse" | "domy" | "byty" | "komerc" | "rekonstrukce" | "inzenyring";

const filters: { id: Cat; label: string }[] = [
  { id: "vse", label: "Vše" },
  { id: "domy", label: "Rodinné domy" },
  { id: "byty", label: "Bytové domy" },
  { id: "komerc", label: "Komerční" },
  { id: "rekonstrukce", label: "Rekonstrukce" },
  { id: "inzenyring", label: "Inženýring" },
];

const projects = [
  {
    img: p1,
    title: "Rodinný dům Řeznovice",
    location: "Ivančice",
    desc: "Kompaktní dům s dřevěným obkladem a otevřeným obytným prostorem.",
    services: "DSP · DPS · Inženýring",
    cat: "domy" as Cat,
    span: "md:row-span-2",
  },
  {
    img: p2,
    title: "Bytový dům Otevřená",
    location: "Kuřim",
    desc: "Šestipodlažní rezidenční projekt s vnitřním atriem.",
    services: "DUR · DSP · Rozpočet",
    cat: "byty" as Cat,
    span: "",
  },
  {
    img: p3,
    title: "Administrativní centrum Vega",
    location: "Brno-Slatina",
    desc: "Kancelářský objekt třídy A s prosklenou fasádou.",
    services: "DSP · TDS · Rozpočet",
    cat: "komerc" as Cat,
    span: "",
  },
  {
    img: p4,
    title: "Rekonstrukce stodoly",
    location: "Tišnov",
    desc: "Přeměna historické stodoly na moderní bydlení s ateliérem.",
    services: "Studie · DSP · DPS",
    cat: "rekonstrukce" as Cat,
    span: "md:row-span-2",
  },
  {
    img: p5,
    title: "Průmyslová hala Modřice",
    location: "Modřice",
    desc: "Inženýrská činnost a technický dozor pro logistickou halu.",
    services: "Inženýring · TDS",
    cat: "inzenyring" as Cat,
    span: "",
  },
  {
    img: p6,
    title: "Vila u lesa",
    location: "Bílovice nad Svitavou",
    desc: "Dvoupodlažní vila s bazénem a wellness zónou.",
    services: "Studie · DSP · DPS",
    cat: "domy" as Cat,
    span: "",
  },
];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("vse");
  const visible = active === "vse" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="reference" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end mb-14">
          <div>
            <span className="eyebrow mb-6">
              <span className="h-px w-8 bg-[var(--gold)]" />
              Vybrané reference
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Projekty, které<br />
              <span className="italic text-[var(--gold)]">mluví za nás</span>.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.18em] border transition-all duration-300 ${
                  active === f.id
                    ? "border-[var(--gold)] text-[var(--gold)]"
                    : "border-white/10 text-muted-foreground hover:border-white/30 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:auto-rows-[280px]">
          {visible.map((p) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden bg-[var(--charcoal)] ${p.span}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-[var(--ink)]/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[var(--gold)]">
                  <MapPin size={12} /> {p.location}
                </div>
                <h3 className="font-display text-2xl md:text-3xl mt-2 text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-foreground/70 max-w-md opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {p.desc}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {p.services}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-[var(--gold)] transition-transform duration-500 group-hover:rotate-45"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
