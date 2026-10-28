import { LegalLayout } from "./LegalLayout";
import { pageUrl } from "@/lib/url";

export function CookiesPage() {
  return (
    <LegalLayout title="Cookies" updated="28. 10. 2026">
      <p>
        Cookies jsou malé soubory ukládané ve vašem prohlížeči. Tento web sám nepoužívá žádné
        analytické ani marketingové cookies a nenačítá externí fonty – písma jsou součástí webu.
      </p>

      <h2>Co ukládáme</h2>
      <table>
        <thead>
          <tr>
            <th>Název</th>
            <th>Poskytovatel</th>
            <th>Účel</th>
            <th>Doba</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>am_cookie_notice (localStorage)</td>
            <td>Ateliér Macek s.r.o.</td>
            <td>Zapamatování, že jste vzali na vědomí informaci o cookies (nezbytné)</td>
            <td>Dokud jej nesmažete</td>
          </tr>
        </tbody>
      </table>

      <h2>Mapa Google Maps</h2>
      <p>
        Mapa v sekci Kontakt se načte až po kliknutí na tlačítko „Zobrazit mapu“. Poté se vaše
        IP adresa předá společnosti Google LLC a Google může ukládat vlastní cookies. Pokud
        mapu nezobrazíte, k žádnému přenosu nedojde. Zásady společnosti Google najdete na{" "}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          policies.google.com/privacy
        </a>
        .
      </p>

      <h2>Jak cookies smazat nebo zakázat</h2>
      <p>
        Cookies a data webu můžete kdykoli smazat v nastavení svého prohlížeče. Informaci o
        cookies si můžete znovu zobrazit pomocí odkazu „Nastavení cookies“ v patičce webu.
      </p>

      <h2>Kontakt</h2>
      <p>
        Dotazy zasílejte na <a href="mailto:info@ateliermacek.cz">info@ateliermacek.cz</a>. Více
        o zpracování údajů v{" "}
        <a href={pageUrl("ochrana-osobnich-udaju")}>ochraně osobních údajů</a>.
      </p>
    </LegalLayout>
  );
}
