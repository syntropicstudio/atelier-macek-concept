import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const links = [
  { href: "#domu", label: "Domů" },
  { href: "#sluzby", label: "Služby" },
  { href: "#reference", label: "Reference" },
  { href: "#o-nas", label: "O nás" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--ink)]/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#domu" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-[var(--gold)]/60 text-[var(--gold)] font-display text-lg">
            A
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg text-foreground">Ateliér Macek</span>
            <span className="text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              s.r.o.
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="gold-line text-sm text-foreground/80 hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden md:inline-flex items-center gap-2 border border-[var(--gold)] px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-all duration-300"
        >
          Poptat konzultaci
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground shrink-0"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--ink)] border-t border-white/5">
          <div className="container-x flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90 py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center border border-[var(--gold)] px-5 py-3 text-xs uppercase tracking-[0.2em] text-[var(--gold)]"
            >
              Poptat konzultaci
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
