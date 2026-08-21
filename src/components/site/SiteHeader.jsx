import React from "react";
import { Wordmark } from "../core/Wordmark.jsx";
import { Button } from "../core/Button.jsx";

export const NAV = [
  ["/", "Start"],
  ["/ueber-mich", "Über mich"],
  ["/angebot", "Angebot"],
  ["/kontakt", "Kontakt"],
];

export function SiteHeader({ pathname = "/" }) {
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
        <nav className="nav">
          <span
            className="lang"
            style={{
              fontFamily: "var(--font-text)",
              fontSize: "var(--size-caption)",
              color: "var(--text-muted)",
              letterSpacing: "var(--tracking-eyebrow)",
            }}
          >
            DE · FR · IT
          </span>
          {NAV.map(([href, label]) => {
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
              >
                {label}
              </a>
            );
          })}
          <Button size="sm" href="/kontakt">
            Erstgespräch
          </Button>
        </nav>
      </div>
    </header>
  );
}
