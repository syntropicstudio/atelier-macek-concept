import { LegalLayout } from "./LegalLayout";
import { pageUrl } from "@/lib/url";

export function PrivacyPage() {
  return (
    <LegalLayout title="Ochrana osobních údajů" updated="28. 10. 2026">
      <p>
        Tyto zásady vysvětlují, jak společnost Ateliér Macek s.r.o. zpracovává osobní údaje
        návštěvníků webu a zájemců o naše služby v souladu s nařízením (EU) 2016/679 (GDPR).
      </p>

      <h2>1. Správce údajů</h2>
      <p>
        Ateliér Macek s.r.o., IČO 17738377, DIČ CZ17738377, se sídlem Otevřená 680/7, 664 34
        Kuřim. Kontakt: <a href="mailto:info@ateliermacek.cz">info@ateliermacek.cz</a>,{" "}
        <a href="tel:+420777123456">+420 777 123 456</a>.
      </p>

      <h2>2. Jaké údaje a proč zpracováváme</h2>
      <ul>
        <li>
          <strong>Poptávka / kontaktní formulář a e-mail:</strong> jméno a příjmení, e-mail,
          telefon, typ a popis projektu. Formulář na webu údaje neodesílá na server: po kliknutí otevře ve vašem e-mailovém programu předvyplněnou zprávu, která se odešle až vaším potvrzením. Účel: vyřízení poptávky a komunikace s vámi. Právní
          základ: jednání o uzavření smlouvy (čl. 6 odst. 1 písm. b) GDPR) a oprávněný zájem
          správce (písm. f).
        </li>
        <li>
          <strong>Plnění smlouvy a zákonné povinnosti</strong> (fakturace, účetnictví): právní
          základ čl. 6 odst. 1 písm. b) a c) GDPR.
        </li>
        <li>
          <strong>Technické údaje při návštěvě webu</strong> (např. IP adresa v logu hostingu
          GitHub Pages): zajištění provozu a bezpečnosti webu, oprávněný zájem.
        </li>
      </ul>

      <h2>3. Doba uchování</h2>
      <p>
        Údaje z poptávky uchováváme po dobu jednání a následně nejdéle 3 roky, nedojde-li k
        uzavření smlouvy. Údaje ze smluvních vztahů uchováváme po dobu stanovenou právními
        předpisy (zejména daňovými a účetními).
      </p>

      <h2>4. Příjemci údajů</h2>
      <p>
        Údaje mohou zpracovávat poskytovatelé IT služeb (hosting webu – GitHub, Inc., e-mailový
        provider), účetní a právní poradci a orgány veřejné moci, pokud to vyžaduje zákon. Údaje
        nepředáváme třetím stranám pro marketingové účely.
      </p>

      <h2>5. Vaše práva</h2>
      <p>
        Máte právo na přístup k údajům, opravu, výmaz, omezení zpracování, přenositelnost údajů
        a právo vznést námitku proti zpracování. Souhlas, pokud byl udělen, můžete kdykoli
        odvolat. Žádost zašlete na <a href="mailto:info@ateliermacek.cz">info@ateliermacek.cz</a>.
        Máte také právo podat stížnost u Úřadu pro ochranu osobních údajů (
        <a href="https://www.uoou.cz" target="_blank" rel="noopener noreferrer">
          www.uoou.cz
        </a>
        ).
      </p>

      <h2>6. Cookies a služby třetích stran</h2>
      <p>
        Informace o cookies a o mapě Google Maps najdete na stránce{" "}
        <a href={pageUrl("cookies")}>Cookies</a>.
      </p>
    </LegalLayout>
  );
}
