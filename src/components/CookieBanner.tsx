import { useEffect, useState } from "react";
import { pageUrl } from "@/lib/url";

const STORAGE_KEY = "am_cookie_notice";
const OPEN_EVENT = "am:open-cookie-notice";

export function openCookieNotice() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // storage unavailable – the notice is still shown
  }
  window.dispatchEvent(new Event(OPEN_EVENT));
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
    const open = () => setVisible(true);
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  if (!visible) return null;

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // ignore – the notice will simply be shown again
    }
    setVisible(false);
  };

  return (
    <div
      role="region"
      aria-label="Informace o cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-white/10 bg-[var(--ink)]/95 backdrop-blur-xl"
    >
      <div className="container-x flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <p className="max-w-3xl text-sm text-foreground/80">
          Tento web používá pouze nezbytné úložiště prohlížeče (uložení této volby). Analytické
          ani marketingové cookies nepoužíváme. Mapa třetí strany (Google) se načte až po vašem
          kliknutí. Podrobnosti najdete v{" "}
          <a href={pageUrl("cookies")} className="underline hover:text-[var(--gold)]">
            zásadách cookies
          </a>{" "}
          a{" "}
          <a href={pageUrl("ochrana-osobnich-udaju")} className="underline hover:text-[var(--gold)]">
            ochraně osobních údajů
          </a>
          .
        </p>
        <button
          type="button"
          onClick={accept}
          className="shrink-0 bg-[var(--gold)] px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--ink)] hover:bg-[var(--gold-soft)] transition-all"
        >
          Rozumím
        </button>
      </div>
    </div>
  );
}