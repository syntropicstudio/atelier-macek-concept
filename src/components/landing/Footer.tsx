import { Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative bg-[var(--ink)] border-t border-white/5 pt-20 pb-10">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Ateliér Macek" className="h-[84px] w-auto" />
            </div>
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              Projekční a inženýrská kancelář zaměřená na precizní projektovou
              dokumentaci, stavební povolení a technické poradenství pro
              privátní i komerční klienty.
            </p>
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-10 w-10 place-items-center border border-white/10 text-muted-foreground hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"
                >
                  <I size={16} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">
              Navigace
            </div>
            <ul className="space-y-3 text-sm">
              {[
                ["#domu", "Domů"],
                ["#sluzby", "Služby"],
                ["#reference", "Reference"],
                ["#o-nas", "O nás"],
                ["#kontakt", "Kontakt"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="text-foreground/70 hover:text-[var(--gold)] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-[var(--gold)] mb-5">
              Kontakt
            </div>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>Otevřená 680/7</li>
              <li>664 34 Kuřim</li>
              <li>IČO 17738377</li>
              <li>info@ateliermacek.cz</li>
              <li>+420 777 123 456</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Ateliér Macek s.r.o. · Všechna práva vyhrazena.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Ochrana osobních údajů</a>
            <a href="#" className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
