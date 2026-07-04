import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Building, Send, Check } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="kontakt" className="relative py-28 md:py-36">
      <div className="container-x">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <span className="eyebrow mb-6">
              <span className="h-px w-8 bg-[var(--gold)]" />
              Kontakt
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              Řekněte nám o svém<br />projektu.
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">
              Vyplňte poptávkový formulář nebo nás kontaktujte přímo. Rádi se
              s vámi potkáme v našem ateliéru v Kuřimi.
            </p>

            <dl className="mt-12 grid gap-6">
              {[
                { icon: MapPin, k: "Sídlo", v: "Otevřená 680/7, 664 34 Kuřim" },
                { icon: Phone, k: "Telefon", v: "+420 777 123 456" },
                { icon: Mail, k: "E-mail", v: "info@ateliermacek.cz" },
                { icon: Clock, k: "Otevírací doba", v: "Po–Pá 8:00 – 17:00 · dle domluvy" },
                { icon: Building, k: "IČO / DIČ", v: "17738377 · CZ17738377" },
              ].map(({ icon: I, k, v }) => (
                <div key={k} className="flex items-start gap-5">
                  <div className="grid h-11 w-11 place-items-center border border-[var(--gold)]/40 text-[var(--gold)] shrink-0">
                    <I size={16} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="mt-1 text-foreground">{v}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-12 aspect-[16/10] w-full overflow-hidden border border-white/10">
              <iframe
                title="Mapa – Ateliér Macek Kuřim"
                src="https://www.google.com/maps?q=Otev%C5%99en%C3%A1%20680%2F7%2C%20Ku%C5%99im&output=embed"
                className="h-full w-full grayscale contrast-125"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative bg-[var(--charcoal)] p-8 md:p-12 border border-white/5"
          >
            <h3 className="font-display text-3xl mb-2">Nezávazná poptávka</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Odpovíme vám do 24 hodin.
            </p>

            <div className="grid gap-6">
              {[
                { id: "name", label: "Jméno a příjmení", type: "text" },
                { id: "email", label: "E-mail", type: "email" },
                { id: "phone", label: "Telefon", type: "tel" },
              ].map((f) => (
                <div key={f.id} className="relative">
                  <label
                    htmlFor={f.id}
                    className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    required
                    className="w-full bg-transparent border-b border-white/15 py-3 text-foreground outline-none focus:border-[var(--gold)] transition-colors"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="type"
                  className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2"
                >
                  Typ projektu
                </label>
                <select
                  id="type"
                  className="w-full bg-transparent border-b border-white/15 py-3 text-foreground outline-none focus:border-[var(--gold)]"
                >
                  <option className="bg-[var(--charcoal)]">Rodinný dům</option>
                  <option className="bg-[var(--charcoal)]">Bytový dům</option>
                  <option className="bg-[var(--charcoal)]">Komerční stavba</option>
                  <option className="bg-[var(--charcoal)]">Rekonstrukce</option>
                  <option className="bg-[var(--charcoal)]">Inženýring / povolení</option>
                  <option className="bg-[var(--charcoal)]">Jiné</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="msg"
                  className="block text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2"
                >
                  Popis projektu
                </label>
                <textarea
                  id="msg"
                  rows={4}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-foreground outline-none focus:border-[var(--gold)] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="mt-4 group inline-flex items-center justify-center gap-3 bg-[var(--gold)] px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-[var(--ink)] hover:bg-[var(--gold-soft)] transition-all disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <Check size={16} /> Odesláno – ozveme se
                  </>
                ) : (
                  <>
                    Odeslat poptávku
                    <Send size={14} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
              <p className="text-[11px] text-muted-foreground">
                Odesláním souhlasíte se zpracováním osobních údajů pro účely
                vyřízení poptávky.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
