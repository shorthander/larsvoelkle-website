import React from "react";
import { Wordmark } from "../core/Wordmark.jsx";
import { Button } from "../core/Button.jsx";
import { Icon } from "../core/Icon.jsx";

export const NAV = [
  ["/", "Start"],
  ["/ueber-mich", "Über mich"],
  ["/angebot", "Angebot"],
  ["/kontakt", "Kontakt"],
];

const LANGUAGES = [
  { code: "DE", href: "/", label: "Deutsch" },
  { code: "IT", href: "/it/", label: "Italiano" },
];

export function SiteHeader({ pathname = "/", locale = "de" }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const isItalian = locale === "it";
  const nav = isItalian
    ? [["/it/", "Inizio"], ["/it/#argomenti", "Argomenti"], ["/it/#metodo", "Metodo"], ["/kontakt", "Contatti"]]
    : NAV;
  const contactLabel = isItalian ? "Primo colloquio" : "Erstgespräch";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 20,
        background: "color-mix(in oklab,var(--paper) 88%,transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--rule-hairline)",
      }}
    >
      <div className="wrap hdr">
        <a href="/" style={{ textDecoration: "none" }}>
          <Wordmark size="md" />
        </a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? (isItalian ? "Chiudi navigazione" : "Navigation schließen") : (isItalian ? "Apri navigazione" : "Navigation öffnen")} aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen((open) => !open)}>
          <Icon name={menuOpen ? "close" : "menu"} size={22} />
        </button>
        <nav id="site-navigation" className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <div className="language-switcher" aria-label={isItalian ? "Seleziona la lingua" : "Sprache auswählen"}>
            {LANGUAGES.map((language) => (
              <a key={language.code} href={language.href} aria-current={locale === language.code.toLowerCase() ? "page" : undefined} onClick={() => setMenuOpen(false)}>
                {language.code}
              </a>
            ))}
          </div>
          {nav.map(([href, label]) => {
            const active = pathname === href;
            return (
              <a
                key={href}
                href={href}
                style={{
                  fontFamily: "var(--font-text)",
                  fontSize: "var(--size-small)",
                  textDecoration: "none",
                  color: active ? "var(--text-heading)" : "var(--text-muted)",
                  borderBottom: `1px solid ${active ? "var(--moss-600)" : "transparent"}`,
                  paddingBottom: 2,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            );
          })}
          <Button size="sm" href="/kontakt" onClick={() => setMenuOpen(false)}>
            {contactLabel}
          </Button>
        </nav>
      </div>
    </header>
  );
}
