import React from "react";
import { SectionHeading } from "../content/SectionHeading.jsx";
import { ImageFrame } from "../content/ImageFrame.jsx";
import { Card } from "../core/Card.jsx";
import { Tag } from "../core/Tag.jsx";
import { Quote } from "../content/Quote.jsx";
import { Icon } from "../core/Icon.jsx";
import { Button } from "../core/Button.jsx";

export function About() {
  return (
    <main>
      <section className="sect">
        <div className="wrap split-aside">
          <div>
            <SectionHeading
              eyebrow="Über mich"
              level="h1"
              title="Lars Völkle"
              lead="Systemischer Coach in Wehingen bei Tuttlingen. 50 Jahre, verheiratet, Vater von drei Kindern. Coaching auf Deutsch, Französisch und Italienisch."
            />
            <p style={{ marginTop: "var(--space-5)" }}>
              Als systemischer Coach begleite ich Menschen dabei, wieder Klarheit, Stabilität und neue Perspektiven zu finden. Meine Erfahrungen aus der Gastronomie und der Metallindustrie sowie mein eigener Weg nach einem Herzinfarkt prägen meine Arbeit.
            </p>
            <p>
              Ich unterstütze Menschen nach Burnout oder gesundheitlichen Einschnitten dabei, zurück in ihre Kraft zu kommen, Schicksalsschläge zu verarbeiten und neue Lebenswege zu gestalten. Ein weiterer Schwerpunkt liegt in der Begleitung von Führungskräften: klare Entscheidungen treffen, Überlastung reduzieren und nachhaltig wirksam führen. Zusätzlich biete ich Coaching speziell für Männer an — mit Raum dafür, zu einer gesunden Männlichkeit zu finden: Verantwortung tragen, Gefühle zulassen, stark sein ohne Panzer.
            </p>
            <p>
              Französisch und Italienisch spreche ich auf Muttersprachniveau. Deshalb begleite ich Menschen, die in Deutschland leben, deren Gefühlssprache aber eine andere ist — im Coaching muss niemand seine eigene Geschichte erst übersetzen. Was in der ersten Sprache gesagt wird, kommt näher an das heran, worum es geht.
            </p>
            <p>In meiner Arbeit gibt es keine Ratschläge von außen. Es gibt Fragen, Stille, gelegentlich ein Bild — und die Erfahrung, dass du mehr weißt, als du denkst.</p>
            <div style={{ display: "flex", gap: "var(--space-1)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
              {["Systemisches Coaching", "Nach Burnout", "Führung", "Coaching für Männer", "Deutsch", "Français", "Italiano", "Online-Coaching"].map((t) => (
                <Tag key={t} tone="bark">{t}</Tag>
              ))}
            </div>
          </div>
          <ImageFrame className="split-media" ratio="3 / 4" placeholder="Porträt Lars Völkle" />
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)" }} className="sect">
        <div className="wrap">
          <SectionHeading eyebrow="Werdegang" title="Woher ich komme" />
          <div className="duo" style={{ marginTop: "var(--space-5)" }}>
            {[
              ["1976", "Geboren. Heute verheiratet und Vater von drei Kindern."],
              ["1993–1998", "Gastronomie — Ausbildung und Arbeit in der Hotellerie."],
              ["1998–2020", "Metallbranche: Einrichter an den Maschinen, ab 2009 stellvertretender Gruppenleiter in der Produktion."],
              ["2009–2017", "Eigene Antipasti-Herstellung, Verkauf auf dem Wochenmarkt — parallel zur Arbeit in der Produktion."],
              ["seit 2020", "Führungskraft in der Metallbranche."],
              ["heute", "Systemischer Coach für Einzelne und Führungskräfte."],
            ].map(([y, t]) => (
              <Card key={y} padding="md">
                <div className="eyebrow">{y}</div>
                <div style={{ marginTop: "var(--space-1)", fontSize: "var(--size-small)", color: "var(--text-body)" }}>{t}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="wrap narrow" style={{ textAlign: "left" }}>
          <Quote attribution="Haltung">Ich glaube nicht, dass Menschen kaputt sind. Ich glaube, dass Muster manchmal länger halten als nötig.</Quote>
          <div className="actions" style={{ marginTop: "var(--space-6)", alignItems: "center" }}>
            <Button href="/kontakt">Erstgespräch anfragen</Button>
            <Button variant="quiet" href="/angebot">
              Angebot ansehen <Icon name="arrow-right" size={18} />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
