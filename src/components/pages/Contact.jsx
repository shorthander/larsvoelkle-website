import React from "react";
import { SectionHeading } from "../content/SectionHeading.jsx";
import { Card } from "../core/Card.jsx";
import { Field } from "../forms/Field.jsx";
import { Input } from "../forms/Input.jsx";
import { Textarea } from "../forms/Textarea.jsx";
import { Select } from "../forms/Select.jsx";
import { Radio } from "../forms/Radio.jsx";
import { Button } from "../core/Button.jsx";
import { Dialog } from "../feedback/Dialog.jsx";
import { Callout } from "../feedback/Callout.jsx";
import { Icon } from "../core/Icon.jsx";
import { ImageFrame } from "../content/ImageFrame.jsx";

export function Contact() {
  const [form, setForm] = React.useState({ name: "", mail: "", format: "Neu anfangen", sprache: "Deutsch", ort: "vorOrt", text: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Sag mir bitte deinen Namen.";
    if (!/.+@.+\..+/.test(form.mail)) err.mail = "Bitte prüf die Adresse.";
    setErrors(err);
    if (!Object.keys(err).length) {
      const ort = { vorOrt: "Vor Ort in Wehingen", online: "Online", gehen: "Im Gehen" }[form.ort];
      const subject = encodeURIComponent(`Coaching-Anfrage von ${form.name}`);
      const body = encodeURIComponent([
        `Name: ${form.name}`,
        `E-Mail: ${form.mail}`,
        `Thema: ${form.format}`,
        `Sprache: ${form.sprache}`,
        `Format: ${ort}`,
        "",
        form.text,
      ].join("\n"));
      setSent(true);
      window.location.href = `mailto:post@larsvoelkle.de?subject=${subject}&body=${body}`;
    }
  };
  return (
    <main style={{ position: "relative" }}>
      <section className="sect">
        <div className="wrap split-aside">
          <div>
            <SectionHeading eyebrow="Kontakt" level="h1" title="Schreib mir" lead="Ein paar Zeilen genügen — auf Deutsch, Französisch oder Italienisch. Ich antworte innerhalb von zwei Werktagen." />
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)", marginTop: "var(--space-5)", maxWidth: 540 }}>
              <div className="duo">
                <Field label="Name" required htmlFor="k-name" error={errors.name}>
                  <Input id="k-name" value={form.name} invalid={!!errors.name} onChange={(e) => set("name", e.target.value)} placeholder="Vor- und Nachname" />
                </Field>
                <Field label="E-Mail" required htmlFor="k-mail" error={errors.mail}>
                  <Input id="k-mail" type="email" value={form.mail} invalid={!!errors.mail} onChange={(e) => set("mail", e.target.value)} placeholder="name@beispiel.de" />
                </Field>
              </div>
              <Field label="Thema" htmlFor="k-format">
                <Select id="k-format" value={form.format} onChange={(e) => set("format", e.target.value)} options={["Neu anfangen", "Führung", "Für Männer", "In deiner Sprache", "Weiß ich noch nicht"]} />
              </Field>
              <Field label="Sprache" hint="In welcher Sprache möchtest du arbeiten?" htmlFor="k-sprache">
                <Select id="k-sprache" value={form.sprache} onChange={(e) => set("sprache", e.target.value)} options={["Deutsch", "Français", "Italiano"]} />
              </Field>
              <Field label="Wo möchtest du dich treffen?">
                <div style={{ display: "flex", gap: "var(--space-4)", paddingTop: "var(--space-05)", flexWrap: "wrap" }}>
                  <Radio name="ort" label="Vor Ort in Wehingen" checked={form.ort === "vorOrt"} onChange={() => set("ort", "vorOrt")} />
                  <Radio name="ort" label="Online" checked={form.ort === "online"} onChange={() => set("ort", "online")} />
                  <Radio name="ort" label="Im Gehen" checked={form.ort === "gehen"} onChange={() => set("ort", "gehen")} />
                </div>
              </Field>
              <Field label="Dein Anliegen" hint="Bitte sende per E-Mail keine Gesundheitsdaten oder andere besonders vertrauliche Informationen." htmlFor="k-text">
                <Textarea id="k-text" rows={5} value={form.text} onChange={(e) => set("text", e.target.value)} placeholder="Ein kurzer, allgemeiner Hinweis genügt." />
              </Field>
              <p style={{ fontSize: "var(--size-caption)", color: "var(--text-muted)" }}>
                Mit dem Klick öffnet sich dein E-Mail-Programm. Über diese Website werden keine Formulardaten übertragen. Hinweise findest du in der <a href="/datenschutz">Datenschutzerklärung</a>.
              </p>
              <Button type="submit" size="lg" style={{ alignSelf: "flex-start" }}>E-Mail vorbereiten</Button>
            </form>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Card tone="moss" padding="lg">
              <h3 style={{ fontSize: "var(--size-h4)", fontFamily: "var(--font-display)" }}>Direkt per E-Mail</h3>
              <p style={{ fontSize: "var(--size-small)", color: "var(--text-muted)" }}>Ein paar Zeilen genügen. Bitte beschreibe sensible persönliche oder gesundheitliche Details nicht in einer unverschlüsselten E-Mail.</p>
              <a href="mailto:post@larsvoelkle.de" style={{ display: "flex", gap: "var(--space-1)", alignItems: "center", color: "var(--moss-700)", fontSize: "var(--size-body)" }}>
                <Icon name="mail" size={18} /> post@larsvoelkle.de
              </a>
            </Card>
            <ImageFrame ratio="4 / 3" placeholder="Praxis, Wehingen" caption="Hintere Straße 18, 78564 Wehingen — aus Tuttlingen, Rottweil, Spaichingen und Balingen gut erreichbar." />
            <Callout tone="calm" title="Kosten kein Hindernis">Wenn die Mittel gerade nicht da sind: schreib es einfach dazu. Es gibt reduzierte Plätze und Ratenzahlung. Eine Einzelsitzung kostet zwischen 90 und 150 €.</Callout>
            <Callout tone="calm">Kein Kontaktformular ist vertraulich genug für alles. Was heikel ist, sagst du mir besser am Telefon.</Callout>
          </div>
        </div>
      </section>

      <Dialog open={sent} title="E-Mail vorbereitet" onClose={() => setSent(false)} footer={<Button onClick={() => setSent(false)}>Schließen</Button>}>
        Dein E-Mail-Programm wurde geöffnet. Die Anfrage wird erst versendet, wenn du die Nachricht dort abschickst.
      </Dialog>
    </main>
  );
}
