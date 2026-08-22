import React from "react";
import { Button } from "../core/Button.jsx";
import { Card } from "../core/Card.jsx";
import { Tag } from "../core/Tag.jsx";
import { Icon } from "../core/Icon.jsx";
import { Callout } from "../feedback/Callout.jsx";
import { SectionHeading } from "../content/SectionHeading.jsx";
import { Accordion } from "../navigation/Accordion.jsx";
import { ImageFrame } from "../content/ImageFrame.jsx";

const TOPICS = [
  ["sunrise", "Ritrovare la forza", "Ritrovare l’equilibrio dopo un esaurimento o un grave problema di salute."],
  ["compass", "Dirigere con chiarezza", "Prendere decisioni, ridurre il sovraccarico di lavoro, rimanere efficaci — senza perdere se stessi."],
  ["mountain", "Coaching per uomini", "Alla scoperta di una mascolinità sana: assumersi le proprie responsabilità, lasciar spazio alle emozioni, essere forti senza indossare una corazza."],
];

const PLACES = ["Wehingen", "Spaichingen", "Tuttlingen", "Balingen", "Rottweil", "Trossingen", "Meßstetten", "online in tutto il mondo"];

const FAQS = [
  ["Quanto dura una seduta?", "45 minuti. Per il primo colloquio dedichiamo 30 minuti, senza alcun costo."],
  ["Quanto costa un appuntamento?", "Una seduta individuale di 45 minuti costa tra i 90 e i 150 € — a seconda del motivo e delle tue possibilità. Il primo colloquio è gratuito."],
  ["E se al momento non potessi permettermelo?", "Allora troveremo una soluzione: una tariffa ridotta, il pagamento a rate o un posto cofinanziato da altri. Parlamene pure — la domanda non mi mette a disagio, e non dovrebbe metterti a disagio nemmeno te."],
  ["In quali lingue lavori?", "Tedesco, francese e italiano — tutte e tre a livello madrelingua. Se la tua lingua delle emozioni non è il tedesco, lavoreremo nella tua lingua."],
  ["Gli appuntamenti sono disponibili online?", "Sì. Il coaching online tramite video è equivalente all’appuntamento in sede e funziona in tutto il mondo — una soluzione pratica in caso di lavoro a turni, lunghi spostamenti o se ti trovi all’estero."],
  ["Da dove vengono le persone che vengono da te?", "Da Wehingen e dall’Heuberg, da Tuttlingen, Spaichingen, Balingen e Rottweil — e online da tutto il mondo."],
  ["Cosa significa “sistemico”?", "Analizzo insieme a te le relazioni in cui sei coinvolto: famiglia, gruppo di lavoro, lavoro. Il problema non è la persona, ma lo schema che si instaura tra le persone coinvolte."],
  ["È una terapia?", "No. Il coaching si concentra su questioni e ruoli concreti. Se ritengo che sia più opportuno ricorrere a una terapia, lo dico apertamente e indirizzo il cliente a un altro professionista."],
];

export function HomeIt() {
  return <main>
    <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg,var(--moss-900) 0%,var(--bark-800) 100%)" }}>
      <div className="wrap hero">
        <div className="reveal">
          <span className="eyebrow" style={{ color: "var(--moss-200)" }}>Coach sistemico · Wehingen</span>
          <h1 style={{ color: "var(--paper)", fontSize: "var(--size-display-1)", fontWeight: "var(--weight-light)", margin: "var(--space-3) 0 var(--space-4)", maxWidth: "18ch", lineHeight: "var(--leading-display)" }}>Chiarezza, stabilità e nuove prospettive</h1>
          <p style={{ fontSize: "var(--size-lead)", lineHeight: "var(--leading-lead)", color: "var(--text-inverse-muted)", maxWidth: "34ch" }}>Ti accompagno quando il tuo percorso ti sembra confuso. Con calma, in tutta riservatezza, al tuo ritmo.</p>
          <div className="actions" style={{ marginTop: "var(--space-5)" }}>
            <Button variant="onDark" size="lg" href="/kontakt">Richiedi un primo colloquio</Button>
            <Button variant="quiet" size="lg" style={{ color: "var(--paper)" }} href="/ueber-mich">Sul mio lavoro</Button>
          </div>
        </div>
        <ImageFrame className="split-media" ratio="4 / 5" radius="var(--radius-xl)" placeholder="Sentiero nel bosco, sole basso" style={{ opacity: 0.96 }} />
      </div>
      <div className="wrap seo-strip">
        <h2 style={{ margin: 0, fontFamily: "var(--font-text)", fontSize: "var(--size-small)", fontWeight: "var(--weight-regular)", letterSpacing: "0.02em", color: "var(--moss-200)" }}>Coaching sistemico a Wehingen, Tuttlingen, Spaichingen, Balingen e Rottweil — e online in tutto il mondo.</h2>
        <p style={{ margin: 0, fontSize: "var(--size-small)", color: "var(--text-inverse-muted)" }}>Tedesco · Francese · Italiano, a livello madrelingua</p>
      </div>
    </section>

    <section className="sect" id="argomenti"><div className="wrap">
      <SectionHeading eyebrow="Argomenti" title="I motivi per cui le persone si rivolgono a me" lead="Il più delle volte non si tratta di un problema, ma di una domanda troppo grande per tenerla dentro." />
      <div className="cols3" style={{ marginTop: "var(--space-6)" }}>{TOPICS.map(([icon, title, body]) => <Card key={title} padding="lg" interactive><span style={{ color: "var(--moss-600)" }}><Icon name={icon} size={26} /></span><h3 style={{ marginTop: "var(--space-3)" }}>{title}</h3><p style={{ margin: 0, fontSize: "var(--size-small)", color: "var(--text-muted)" }}>{body}</p></Card>)}</div>
    </div></section>

    <section style={{ background: "var(--surface-sunken)" }} className="sect"><div className="wrap">
      <SectionHeading eyebrow="Lingue" title="Coaching nella lingua in cui ti senti a tuo agio" lead="Chi vive in Germania, ma a casa pensa e si sente in modo diverso, non deve ricorrere alla traduzione anche durante il coaching. Parlo francese e italiano a livello madrelingua." />
      <p style={{ marginTop: "var(--space-5)", fontSize: "var(--size-body)", color: "var(--text-muted)", maxWidth: "70ch" }}>I sentimenti, la vergogna, il dolore e la rabbia hanno un linguaggio — spesso il primo. Per questo lavoro con persone di lingua francese e italiana nella loro lingua: con professionisti che si sono trasferiti qui per lavoro, con famiglie che vivono tra due culture e con tutti coloro che vivono qui senza essersi mai sentiti davvero a casa.</p>
    </div></section>

    <section className="sect" id="metodo"><div className="wrap split">
      <ImageFrame className="split-media" ratio="1 / 1" placeholder="Studio, due poltrone" />
      <div><SectionHeading eyebrow="Metodo di lavoro" title="Domande che rendono possibile il cambiamento" lead="“Sistemico” significa: guardiamo alle interrelazioni, non alle colpe." />
        <ol style={{ listStyle: "none", padding: 0, margin: "var(--space-5) 0 0", display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>{[["Primo colloquio", "30 minuti, gratuito, senza impegno — per telefono o in videoconferenza."], ["Chiarire l’obiettivo", "Come capirai che ne è valsa la pena?"], ["Lavoro", "Da Tre a dieci sedute da 45 minuti ciascuna, in presenza o online."], ["Conclusione", "Valutiamo cosa rimane e lasciamo andare."]].map(([title, body], i) => <li key={title} style={{ display: "flex", gap: "var(--space-3)", borderTop: "1px solid var(--rule-hairline)", paddingTop: "var(--space-3)" }}><span style={{ fontFamily: "var(--font-display)", fontSize: "var(--size-h4)", color: "var(--moss-500)", minWidth: 28 }}>{`0${i + 1}`}</span><span><strong style={{ fontWeight: "var(--weight-medium)", color: "var(--text-heading)" }}>{title}</strong><span style={{ display: "block", fontSize: "var(--size-small)", color: "var(--text-muted)" }}>{body}</span></span></li>)}</ol>
      </div>
    </div></section>

    <section style={{ background: "var(--surface-sunken)" }} className="sect"><div className="wrap split-start">
      <div><SectionHeading eyebrow="Regione" title="Dove ci incontriamo" lead="Lo studio si trova a Wehingen, nel cuore dell’Heuberg — a venti minuti da Tuttlingen, Rottweil e Balingen." /><div style={{ display: "flex", gap: "var(--space-1)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>{PLACES.map((place) => <Tag key={place} tone="bark">{place}</Tag>)}</div><p style={{ marginTop: "var(--space-4)", fontSize: "var(--size-small)", color: "var(--text-muted)" }}>Chi abita più lontano o lavora a turni può partecipare online: tramite video, in tutto il mondo, con la stessa tranquillità che si prova in studio. Gli appuntamenti sono disponibili la sera e nei fine settimana.</p></div>
      <div><SectionHeading eyebrow="Prezzi" title="Quanto costa un appuntamento" /><ul style={{ listStyle: "none", padding: 0, margin: "var(--space-4) 0 0", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>{[["Primo colloquio, 30 min.", "gratuito"], ["Sessione individuale, 45 min.", "90–150 €"], ["Coaching in francese o italiano", "allo stesso prezzo"]].map(([label, price]) => <li key={label} style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-3)", borderTop: "1px solid var(--rule-hairline)", paddingTop: "var(--space-2)", fontSize: "var(--size-small)" }}><span>{label}</span><span style={{ color: "var(--text-heading)", fontWeight: "var(--weight-medium)", whiteSpace: "nowrap" }}>{price}</span></li>)}</ul><p style={{ marginTop: "var(--space-3)", fontSize: "var(--size-small)", color: "var(--text-muted)" }}>Una seduta individuale di 45 minuti costa tra i 90 e i 150 € — a seconda dell’occasione, della durata e delle tue possibilità. Fisseremo insieme la tariffa durante il primo colloquio.</p><a href="/kontakt" style={{ textDecoration: "none", display: "block", marginTop: "var(--space-4)" }}><Callout tone="calm" title="Il coaching non deve fallire per motivi economici" style={{ cursor: "pointer" }}>Se al momento non disponi dei mezzi necessari, fammelo sapere. Sono disponibili posti a prezzo ridotto, la possibilità di pagare a rate e, in casi specifici, sedute cofinanziate da altri. L’accesso al coaching non dovrebbe dipendere dal saldo del conto corrente.<span style={{ display: "block", marginTop: "var(--space-15)", color: "var(--moss-700)", fontWeight: "var(--weight-medium)" }}>Vai al modulo di contatto →</span></Callout></a></div>
    </div></section>

    <section className="sect faq-section"><div className="wrap narrow"><SectionHeading eyebrow="Domande frequenti" title="Prima di chiamarmi" /><Accordion style={{ marginTop: "var(--space-5)" }} items={FAQS.map(([question, answer]) => ({ question, answer }))} /><a href="/kontakt" style={{ textDecoration: "none", display: "block", marginTop: "var(--space-5)" }}><Callout tone="calm" title="Riservatezza" style={{ cursor: "pointer" }}>Tutto ciò che mi racconti rimane all’interno della stanza. Sono soggetta al segreto professionale.<span style={{ display: "block", marginTop: "var(--space-15)", color: "var(--moss-700)", fontWeight: "var(--weight-medium)" }}>Vai al modulo di contatto →</span></Callout></a></div></section>

    <section style={{ background: "var(--surface-inverse)" }} className="sect"><div className="wrap cta"><SectionHeading tone="light" eyebrow="Prossimo passo" title="Iniziamo con un colloquio" lead="Trenta minuti in cui tu parli e io ascolto — in tedesco, francese o italiano, di persona o online. Dopodiché potrai decidere con calma." /><Button variant="onDark" size="lg" href="/kontakt">Richiedi un appuntamento</Button></div></section>
  </main>;
}
