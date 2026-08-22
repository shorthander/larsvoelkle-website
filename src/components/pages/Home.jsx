import React from "react";
import { Button } from "../core/Button.jsx";
import { Card } from "../core/Card.jsx";
import { Tag } from "../core/Tag.jsx";
import { Icon } from "../core/Icon.jsx";
import { Callout } from "../feedback/Callout.jsx";
import { SectionHeading } from "../content/SectionHeading.jsx";
import { Quote } from "../content/Quote.jsx";
import { Accordion } from "../navigation/Accordion.jsx";
import { ImageFrame } from "../content/ImageFrame.jsx";

const THEMEN = [
  { icon: "sunrise", title: "Zurück in die Kraft", body: "Nach Burnout oder einem gesundheitlichen Einschnitt wieder Boden unter die Füße bekommen." },
  { icon: "compass", title: "Klar führen", body: "Entscheidungen treffen, Überlastung reduzieren, wirksam bleiben — ohne dich zu verlieren." },
  { icon: "mountain", title: "Coaching für Männer", body: "Zu einer gesunden Männlichkeit finden: Verantwortung tragen, Gefühle zulassen, stark sein ohne Panzer." },
];

const SPRACHEN = [
  { code: "Deutsch", label: "Systemisches Coaching auf Deutsch — vor Ort in Wehingen oder online." },
  { code: "Français", label: "Coaching systémique en français, au niveau langue maternelle — sur place ou online." },
  { code: "Italiano", label: "Coaching sistemico in italiano, a livello madrelingua — in studio oppure online." },
];

const ORTE = ["Wehingen", "Spaichingen", "Tuttlingen", "Balingen", "Rottweil", "Trossingen", "Meßstetten", "online weltweit"];

export function Home() {
  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg,var(--moss-900) 0%,var(--bark-800) 100%)" }}>
        <div className="wrap hero">
          <div className="reveal">
            <span className="eyebrow" style={{ color: "var(--moss-200)" }}>Systemischer Coach · Wehingen</span>
            <h1 style={{ color: "var(--paper)", fontSize: "var(--size-display-1)", fontWeight: "var(--weight-light)", margin: "var(--space-3) 0 var(--space-4)", maxWidth: "18ch", lineHeight: "var(--leading-display)" }}>
              Klarheit, Stabilität und neue Perspektiven
            </h1>
            <p style={{ fontSize: "var(--size-lead)", lineHeight: "var(--leading-lead)", color: "var(--text-inverse-muted)", maxWidth: "34ch" }}>
              Ich begleite dich, wenn dein Weg gerade unübersichtlich ist. In Ruhe, vertraulich, in deinem Tempo.
            </p>
            <div className="actions" style={{ marginTop: "var(--space-5)" }}>
              <Button variant="onDark" size="lg" href="/kontakt">Erstgespräch anfragen</Button>
              <Button variant="quiet" size="lg" style={{ color: "var(--paper)" }} href="/ueber-mich">Über meine Arbeit</Button>
            </div>
          </div>
          <ImageFrame className="split-media" ratio="4 / 5" radius="var(--radius-xl)" placeholder="Waldweg, tief stehende Sonne" style={{ opacity: 0.96 }} />
        </div>
        <div className="wrap seo-strip">
          <h2 style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--size-small)", fontWeight: "var(--weight-regular)", letterSpacing: "0.02em", color: "var(--moss-200)" }}>
            Systemisches Coaching in Wehingen, Tuttlingen, Spaichingen, Balingen und Rottweil — und online weltweit.
          </h2>
          <p style={{ margin: 0, fontSize: "var(--size-small)", color: "var(--text-inverse-muted)" }}>Deutsch · Français · Italiano, auf Muttersprachniveau</p>
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <SectionHeading eyebrow="Themen" title="Womit Menschen zu mir kommen" lead="Meist ist es kein Problem, sondern eine Frage, die zu groß ist, um sie allein zu halten." />
          <div className="cols3" style={{ marginTop: "var(--space-6)" }}>
            {THEMEN.map((t) => (
              <Card key={t.title} padding="lg" interactive>
                <span style={{ color: "var(--moss-600)" }}><Icon name={t.icon} size={26} /></span>
                <h3 style={{ marginTop: "var(--space-3)" }}>{t.title}</h3>
                <p style={{ margin: 0, fontSize: "var(--size-small)", color: "var(--text-muted)" }}>{t.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)" }} className="sect">
        <div className="wrap">
          <SectionHeading
            eyebrow="Sprachen · Langues · Lingue"
            title="Coaching in der Sprache, in der du fühlst"
            lead="Wer in Deutschland lebt, aber zu Hause anders denkt und fühlt, muss sich im Coaching nicht auch noch übersetzen. Ich spreche Französisch und Italienisch auf Muttersprachniveau."
          />
          <div className="cols3" style={{ marginTop: "var(--space-6)" }}>
            {SPRACHEN.map((s) => (
              <Card key={s.code} tone="paper" padding="lg">
                <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h3)", color: "var(--text-heading)" }}>{s.code}</div>
                <p style={{ margin: "var(--space-2) 0 0", fontSize: "var(--size-small)", color: "var(--text-muted)" }}>{s.label}</p>
              </Card>
            ))}
          </div>
          <p style={{ marginTop: "var(--space-4)", fontSize: "var(--size-small)", color: "var(--text-muted)", maxWidth: "70ch" }}>
            Gefühle, Scham, Trauer und Wut haben eine Sprache — meist die erste. Deshalb arbeite ich mit französisch- und italienischsprachigen Menschen in ihrer Sprache: mit Fachkräften, die für die Arbeit hergezogen sind, mit Familien in zwei Kulturen und mit allen, die hier leben, ohne hier angekommen zu sein.
          </p>
        </div>
      </section>

      <section className="sect">
        <div className="wrap split">
          <ImageFrame className="split-media" ratio="1 / 1" placeholder="Praxisraum, zwei Sessel" />
          <div>
            <SectionHeading eyebrow="Arbeitsweise" title="Fragen, die Bewegung möglich machen" lead="Systemisch heißt: wir schauen auf Zusammenhänge, nicht auf Schuld." />
            <ol style={{ listStyle: "none", padding: 0, margin: "var(--space-5) 0 0", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
              {[
                ["Erstgespräch", "30 Minuten, kostenfrei, unverbindlich — telefonisch oder per Video."],
                ["Auftrag klären", "Woran merkst du, dass es sich gelohnt hat?"],
                ["Arbeiten", "Individuell bis zu 12 Stunden. Ich empfehle mindestens 4 Stunden — vor Ort oder online."],
                ["Abschließen", "Wir schauen, was bleibt, und lassen los."],
              ].map(([t, d], i) => (
                <li key={t} style={{ display: "flex", gap: "var(--space-3)", borderTop: "1px solid var(--rule-hairline)", paddingTop: "var(--space-3)" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h4)", color: "var(--moss-500)", minWidth: 28 }}>{"0" + (i + 1)}</span>
                  <span>
                    <strong style={{ fontWeight: "var(--weight-medium)", color: "var(--text-heading)" }}>{t}</strong>
                    <span style={{ display: "block", fontSize: "var(--size-small)", color: "var(--text-muted)" }}>{d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)" }} className="sect">
        <div className="wrap split-start">
          <div>
            <SectionHeading eyebrow="Region" title="Wo wir uns treffen" lead="Die Praxis liegt in Wehingen, mitten auf dem Heuberg — zwanzig Minuten von Tuttlingen, Rottweil und Balingen." />
            <div style={{ display: "flex", gap: "var(--space-1)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
              {ORTE.map((o) => <Tag key={o} tone="bark">{o}</Tag>)}
            </div>
            <p style={{ marginTop: "var(--space-4)", fontSize: "var(--size-small)", color: "var(--text-muted)" }}>
              Wer weiter weg wohnt oder Schicht arbeitet, kommt online dazu: per Video, weltweit, mit derselben Ruhe wie im Raum. Termine gibt es abends und am Wochenende.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Preise" title="Was ein Termin kostet" />
            <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              {[
                ["Erstgespräch, 30 Min.", "kostenfrei"],
                ["Einzelsitzung, 45 Min.", "90–150 €"],
                ["Coaching auf Französisch oder Italienisch", "zum gleichen Preis"],
              ].map(([l, p]) => (
                <li key={l} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-3)", borderTop: "1px solid var(--rule-hairline)", paddingTop: "var(--space-2)", fontSize: "var(--size-small)" }}>
                  <span style={{ color: "var(--text-body)" }}>{l}</span>
                  <span style={{ color: "var(--text-heading)", fontWeight: "var(--weight-medium)", whiteSpace: "nowrap" }}>{p}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "var(--space-3)", fontSize: "var(--size-small)", color: "var(--text-muted)" }}>
              Eine Einzelsitzung à 45 Minuten kostet zwischen 90 und 150 € — je nach Anlass, Umfang und deinen Möglichkeiten. Den Satz legen wir im Erstgespräch gemeinsam fest.
            </p>
            <a href="/kontakt" style={{ textDecoration: "none", display: "block", marginTop: "var(--space-4)" }}>
              <Callout tone="calm" title="Coaching soll nicht am Geld scheitern" style={{ cursor: "pointer" }}>
                Wenn du die Mittel gerade nicht hast, sag es mir. Es gibt reduzierte Plätze, Ratenzahlung und in Einzelfällen Sitzungen, die andere mitfinanzieren. Zugang zu Begleitung sollte niemand vom Kontostand abhängen müssen.
                <span style={{ display: "block", marginTop: "var(--space-15)", color: "var(--moss-700)", fontWeight: "var(--weight-medium)" }}>Zum Kontaktformular →</span>
              </Callout>
            </a>
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="wrap cols2">
          <Quote attribution="M., 41" role="Führungskraft">Ich bin mit einem Knoten gekommen und mit einer Richtung gegangen.</Quote>
          <Quote attribution="S., 47" role="nach Burnout">Zum ersten Mal hat mir jemand zugehört, ohne mich zu bewerten.</Quote>
        </div>
      </section>

      <section style={{ background: "var(--surface-sunken)" }} className="sect">
        <div className="wrap narrow">
          <SectionHeading eyebrow="Wichtige Hinweise" title="Ein klarer und geschützter Rahmen" />
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-5)" }}>
            <Callout tone="info" title="Beratung, keine Psychotherapie">
              Systemische Beratung ist keine Psychotherapie und ersetzt keine medizinische, psychotherapeutische oder psychiatrische Untersuchung oder Behandlung.
            </Callout>
            <Callout tone="calm" title="Für Erwachsene">
              Mein Beratungsangebot richtet sich ausschließlich an volljährige Personen ab 18 Jahren.
            </Callout>
            <Callout tone="calm" title="Vertraulichkeit">
              Vertrauen ist die Grundlage meiner Arbeit. Alles, was du mir anvertraust, behandle ich streng vertraulich. Ausnahmen gelten nur, wenn du mich ausdrücklich davon entbindest oder eine gesetzliche Verpflichtung besteht.
            </Callout>
          </div>
        </div>
      </section>

      <section className="sect faq-section">
        <div className="wrap narrow">
          <SectionHeading eyebrow="Häufige Fragen" title="Bevor du anrufst" />
          <Accordion
            style={{ marginTop: "var(--space-5)" }}
            items={[
              { question: "Wie lange dauert eine Sitzung?", answer: "45 Minuten. Für das Erstgespräch nehmen wir uns 30 Minuten, ohne Kosten." },
              { question: "Was kostet ein Termin?", answer: "Eine Einzelsitzung à 45 Minuten kostet zwischen 90 und 150 € — je nach Anlass und deinen Möglichkeiten. Das Erstgespräch ist kostenfrei." },
              { question: "Und wenn ich das gerade nicht bezahlen kann?", answer: "Dann finden wir einen Weg: reduzierter Satz, Ratenzahlung oder ein Platz, der von anderen mitfinanziert wird. Sprich mich einfach an — die Frage ist mir nicht unangenehm, und dir sollte sie es auch nicht sein." },
              { question: "In welchen Sprachen arbeitest du?", answer: "Deutsch, Französisch und Italienisch — alle drei auf Muttersprachniveau. Wenn deine Gefühlssprache nicht Deutsch ist, arbeiten wir in deiner Sprache." },
              { question: "Gibt es Termine online?", answer: "Ja. Online-Coaching per Video ist gleichwertig zum Termin vor Ort und funktioniert weltweit — praktisch bei Schichtarbeit, langer Anfahrt oder wenn du im Ausland bist." },
              { question: "Woher kommen die Menschen, die zu dir kommen?", answer: "Aus Wehingen und dem Heuberg, aus Tuttlingen, Spaichingen, Balingen und Rottweil — und online aus aller Welt." },
              { question: "Was heißt systemisch?", answer: "Ich schaue mit dir auf die Beziehungen, in denen du stehst — Familie, Team, Arbeit. Nicht die Person ist das Problem, sondern das Muster, das sich zwischen den Beteiligten hält." },
              { question: "Wie viele Stunden sind sinnvoll?", answer: "Der Umfang ist individuell und kann bis zu 12 Stunden betragen. Ich empfehle mindestens 4 Stunden, damit Veränderung nicht nur angestoßen, sondern auch gefestigt werden kann." },
              { question: "Was gilt bei einer Terminabsage?", answer: "Bis 24 Stunden vor dem vereinbarten Termin kannst du kostenfrei absagen. Bei einer späteren Absage oder wenn du nicht erscheinst, behalte ich mir vor, den Termin in Rechnung zu stellen." },
              { question: "Ist das eine Therapie?", answer: "Nein. Systemische Beratung ist keine Psychotherapie und ersetzt keine medizinische, psychotherapeutische oder psychiatrische Behandlung. Mein Angebot richtet sich ausschließlich an Erwachsene ab 18 Jahren." },
            ]}
          />
          <a href="/kontakt" style={{ textDecoration: "none", display: "block", marginTop: "var(--space-5)" }}>
            <Callout tone="calm" title="Vertraulich" style={{ cursor: "pointer" }}>
              Alles, was du erzählst, behandle ich streng vertraulich — innerhalb der gesetzlichen Grenzen.
              <span style={{ display: "block", marginTop: "var(--space-15)", color: "var(--moss-700)", fontWeight: "var(--weight-medium)" }}>Zum Kontaktformular →</span>
            </Callout>
          </a>
        </div>
      </section>

      <section style={{ background: "var(--surface-inverse)" }} className="sect">
        <div className="wrap cta">
          <SectionHeading
            tone="light"
            eyebrow="Nächster Schritt"
            title="Wir beginnen mit einem Gespräch"
            lead="Dreißig Minuten, in denen du erzählst und ich zuhöre — auf Deutsch, Französisch oder Italienisch, vor Ort oder online. Danach entscheidest du in Ruhe."
          />
          <Button variant="onDark" size="lg" href="/kontakt">Termin anfragen</Button>
        </div>
      </section>
    </main>
  );
}
