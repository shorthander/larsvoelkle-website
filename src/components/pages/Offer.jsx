import React from "react";
import { SectionHeading } from "../content/SectionHeading.jsx";
import { Card } from "../core/Card.jsx";
import { Tabs } from "../navigation/Tabs.jsx";
import { Button } from "../core/Button.jsx";
import { Tag } from "../core/Tag.jsx";
import { Icon } from "../core/Icon.jsx";
import { Callout } from "../feedback/Callout.jsx";

const ANGEBOTE = {
  "Neu anfangen": {
    lead: "Nach Burnout, Krankheit oder einem Schicksalsschlag zurück in deine Kraft.",
    preis: "90–150 € / 45 Min.",
    punkte: ["Erstgespräch kostenfrei, 30 Minuten", "Individuell bis zu 12 Stunden; mindestens 4 Stunden empfohlen", "Vor Ort in Wehingen oder online", "Auf Deutsch, Französisch oder Italienisch"],
  },
  Führung: {
    lead: "Klare Entscheidungen, weniger Überlastung, nachhaltig wirksam führen.",
    preis: "90–150 € / 45 Min.",
    punkte: ["Sparring für deine Rolle", "Entscheidungen sortieren", "Auch als Reihe im Unternehmen", "Online für Standorte weltweit"],
  },
  "Für Männer": {
    lead: "Zu einer gesunden Männlichkeit finden — Verantwortung tragen, Gefühle zulassen, stark sein ohne Panzer.",
    preis: "90–150 € / 45 Min.",
    punkte: ["Vertraulicher Rahmen unter Männern", "Rollen als Partner, Vater, Führungskraft klären", "Wut, Scham und Druck einen Platz geben", "Reduzierte Plätze verfügbar"],
  },
  "In deiner Sprache": {
    lead: "Coaching auf Französisch oder Italienisch — für Menschen, die in Deutschland leben, aber anders fühlen.",
    preis: "90–150 € / 45 Min.",
    punkte: ["Français et italiano au niveau langue maternelle", "Kein Übersetzen, kein Erklären der eigenen Kultur", "Vor Ort oder online weltweit", "Auch für Paare und Familien in zwei Kulturen"],
  },
};

export function Offer() {
  const [tab, setTab] = React.useState("Neu anfangen");
  const a = ANGEBOTE[tab];
  return (
    <main>
      <section className="sect">
        <div className="wrap">
          <SectionHeading
            eyebrow="Angebot"
            level="h1"
            title="Coaching-Angebot: vier Schwerpunkte, eine Haltung"
            lead="Der Anlass unterscheidet sich, die Arbeit nicht: zuhören, fragen, Bewegung möglich machen. Vor Ort in Wehingen bei Tuttlingen oder online — auf Deutsch, Französisch und Italienisch."
          />
          <Tabs style={{ marginTop: "var(--space-6)" }} items={Object.keys(ANGEBOTE)} value={tab} onChange={setTab} />
          <div className="split-aside" style={{ marginTop: "var(--space-6)" }}>
            <div>
              <h2>{tab}</h2>
              <p className="lead" style={{ marginBottom: "var(--space-4)" }}>{a.lead}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "var(--space-15)" }}>
                {a.punkte.map((p) => (
                  <li key={p} style={{ display: "flex", gap: "var(--space-15)", alignItems: "center", fontSize: "var(--size-small)" }}>
                    <span style={{ color: "var(--moss-600)" }}><Icon name="check" size={18} /></span>{p}
                  </li>
                ))}
              </ul>
              <Callout tone="info" style={{ marginTop: "var(--space-4)" }}>Termine derzeit abends und am Wochenende, nach Absprache — online auch weltweit.</Callout>
            </div>
            <Card padding="lg" elevated>
              <Tag tone="ember">{tab}</Tag>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h2)", color: "var(--text-heading)", margin: "var(--space-3) 0 var(--space-1)" }}>{a.preis}</div>
              <p style={{ fontSize: "var(--size-small)", color: "var(--text-muted)" }}>Der Satz richtet sich nach Anlass, Umfang und deinen Möglichkeiten. Das Erstgespräch ist kostenfrei.</p>
              <p style={{ fontSize: "var(--size-small)", color: "var(--text-muted)" }}>Eine Absage ist bis 24 Stunden vor dem vereinbarten Termin kostenfrei. Bei späterer Absage oder Nichterscheinen behalte ich mir vor, den Termin in Rechnung zu stellen.</p>
              <Button fullWidth style={{ marginTop: "var(--space-3)" }} href="/kontakt">Termin anfragen</Button>
            </Card>
          </div>
          <a href="/kontakt" style={{ textDecoration: "none", display: "block", marginTop: "var(--space-6)", maxWidth: "var(--container-narrow)" }}>
            <Callout tone="calm" title="Wenn das Geld gerade nicht da ist" style={{ cursor: "pointer" }}>
              Jeder Mensch sollte Zugang zu Begleitung haben. Deshalb gibt es reduzierte Plätze, Ratenzahlung und Sitzungen, die von anderen Klientinnen und Klienten mitfinanziert werden. Schreib mir einfach, was möglich ist — ohne Nachweis, ohne unangenehme Fragen.
              <span style={{ display: "block", marginTop: "var(--space-15)", color: "var(--moss-700)", fontWeight: "var(--weight-medium)" }}>Zum Kontaktformular →</span>
            </Callout>
          </a>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)" }} className="sect">
        <div className="wrap">
          <SectionHeading eyebrow="Formate" title="Vor Ort, online oder im Gehen" />
          <div className="cols3" style={{ marginTop: "var(--space-5)" }}>
            {[
              ["map-pin", "Vor Ort", "Wehingen, Hintere Straße 18 — kurze Wege aus Tuttlingen, Rottweil, Spaichingen und Balingen."],
              ["video", "Online", "Per Video weltweit, mit derselben Ruhe wie vor Ort. Auch auf Französisch und Italienisch."],
              ["footprints", "Im Gehen", "Gespräche draußen auf dem Heuberg, wenn Sitzen zu eng wird."],
            ].map(([i, t, d]) => (
              <Card key={t} tone="paper" padding="lg">
                <span style={{ color: "var(--bark-500)" }}><Icon name={i} size={24} /></span>
                <h3 style={{ marginTop: "var(--space-2)", fontSize: "var(--size-h4)", fontFamily: "var(--font-display)" }}>{t}</h3>
                <p style={{ margin: 0, fontSize: "var(--size-small)", color: "var(--text-muted)" }}>{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
