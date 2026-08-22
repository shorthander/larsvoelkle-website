import React from "react";
import { Wordmark } from "../core/Wordmark.jsx";
import { Icon } from "../core/Icon.jsx";
import { NAV } from "./SiteHeader.jsx";

export function SiteFooter({ locale = "de" }) {
  const isItalian = locale === "it";
  const nav = isItalian
    ? [["/it/", "Inizio"], ["/it/#argomenti", "Argomenti"], ["/it/#metodo", "Metodo"], ["/kontakt", "Contatti"]]
    : NAV;
  return (
    <footer
      style={{
        background: "var(--surface-inverse)",
        color: "var(--text-inverse-muted)",
        paddingTop: "var(--space-10)",
        paddingBottom: "var(--space-6)",
      }}
    >
      <div className="wrap foot">
        <div>
          <Wordmark size="md" tone="light" />
          <p
            style={{
              marginTop: "var(--space-3)",
              fontSize: "var(--size-small)",
              color: "var(--text-inverse-muted)",
              maxWidth: "36ch",
            }}
          >
            {isItalian ? "Coaching sistemico per persone in fase di cambiamento e per dirigenti. A Wehingen e online — in tedesco, francese e italiano." : "Systemisches Coaching für Menschen im Umbruch und für Führungskräfte. In Wehingen und online — auf Deutsch, Französisch und Italienisch."}
          </p>
          <p
            style={{
              marginTop: "var(--space-2)",
              fontSize: "var(--size-caption)",
              color: "var(--moss-200)",
              maxWidth: "40ch",
            }}
          >
            Tuttlingen · Rottweil · Wehingen · Balingen · Spaichingen · {isItalian ? "online in tutto il mondo" : "online weltweit"}
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-1)" }}>
          <div
            style={{
              fontFamily: "var(--font-text)",
              fontSize: "var(--size-eyebrow)",
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--moss-300)",
              marginBottom: "var(--space-1)",
            }}
          >
            {isItalian ? "Pagine" : "Seiten"}
          </div>
          {nav.map(([href, label]) => (
            <a key={href} href={href} style={{ color: "var(--paper)", fontSize: "var(--size-small)", textDecoration: "none" }}>
              {label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-15)", fontSize: "var(--size-small)" }}>
          <div
            style={{
              fontFamily: "var(--font-text)",
              fontSize: "var(--size-eyebrow)",
              letterSpacing: "var(--tracking-eyebrow)",
              textTransform: "uppercase",
              color: "var(--moss-300)",
            }}
          >
            {isItalian ? "Contatti" : "Kontakt"}
          </div>
          <a href="mailto:post@larsvoelkle.de" style={{ display: "flex", gap: "var(--space-1)", alignItems: "center", color: "var(--paper)" }}>
            <Icon name="mail" size={16} /> post@larsvoelkle.de
          </a>
          <span style={{ display: "flex", gap: "var(--space-1)", alignItems: "center" }}>
            <Icon name="map-pin" size={16} /> Hintere Straße 18, 78564 Wehingen
          </span>
        </div>
      </div>
      <div
        className="wrap"
        style={{
          marginTop: "var(--space-8)",
          paddingTop: "var(--space-3)",
          borderTop: "1px solid var(--border-inverse)",
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--space-3)",
          flexWrap: "wrap",
          fontSize: "var(--size-caption)",
        }}
      >
        <span>© 2026 Lars Völkle</span>
        <span style={{ display: "flex", gap: "var(--space-3)" }}>
          <a href="/impressum" style={{ color: "var(--moss-200)" }}>
            {isItalian ? "Note legali" : "Impressum"}
          </a>
          <a href="/datenschutz" style={{ color: "var(--moss-200)" }}>
            {isItalian ? "Informativa sulla privacy" : "Datenschutz"}
          </a>
        </span>
      </div>
    </footer>
  );
}
