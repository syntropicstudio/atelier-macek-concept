import { Instagram, Facebook, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import { pageUrl } from "@/lib/url";
import { openCookieNotice } from "@/components/CookieBanner";

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
                  <a href={pageUrl(h)} className="text-foreground/70 hover:text-[var(--gold)] transition-colors">
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
            <address className="not-italic">
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>Otevřená 680/7</li>
                <li>664 34 Kuřim</li>
                <li>IČO 17738377</li>
                <li>
                  <a href="mailto:info@ateliermacek.cz" className="hover:text-[var(--gold)]">
                    info@ateliermacek.cz
                  </a>
                </li>
                <li>
                  <a href="tel:+420777123456" className="hover:text-[var(--gold)]">
                    +420 777 123 456
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Ateliér Macek s.r.o. · Všechna práva vyhrazena.</div>
          <div className="flex gap-6">
            <a href={pageUrl("ochrana-osobnich-udaju")} className="hover:text-foreground">Ochrana osobních údajů</a>
            <a href={pageUrl("cookies")} className="hover:text-foreground">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
