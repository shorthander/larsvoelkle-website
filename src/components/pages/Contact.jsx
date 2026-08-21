import React from "react";
import { SectionHeading } from "../content/SectionHeading.jsx";
import { Card } from "../core/Card.jsx";
import { Field } from "../forms/Field.jsx";
import { Input } from "../forms/Input.jsx";
import { Textarea } from "../forms/Textarea.jsx";
import { Select } from "../forms/Select.jsx";
import { Checkbox } from "../forms/Checkbox.jsx";
import { Radio } from "../forms/Radio.jsx";
import { Button } from "../core/Button.jsx";
import { Dialog } from "../feedback/Dialog.jsx";
import { Callout } from "../feedback/Callout.jsx";
import { Icon } from "../core/Icon.jsx";
import { ImageFrame } from "../content/ImageFrame.jsx";

export function Contact() {
  const [form, setForm] = React.useState({ name: "", mail: "", format: "Neu anfangen", sprache: "Deutsch", ort: "vorOrt", text: "", ok: false });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => {
    e.preventDefault();
    const err = {};
    if (!form.name.trim()) err.name = "Sag mir bitte deinen Namen.";
    if (!/.+@.+\..+/.test(form.mail)) err.mail = "Bitte prüf die Adresse.";
    if (!form.ok) err.ok = "Bitte bestätige den Hinweis.";
    setErrors(err);
    if (!Object.keys(err).length) setSent(true);
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
              <Field label="Dein Anliegen" hint="So viel oder so wenig, wie du magst." htmlFor="k-text">
                <Textarea id="k-text" rows={5} value={form.text} onChange={(e) => set("text", e.target.value)} placeholder="Worum geht es?" />
              </Field>
              <Field error={errors.ok}>
                <Checkbox label="Ich habe die Datenschutzerklärung gelesen und bin mit der Verarbeitung meiner Angaben einverstanden." checked={form.ok} onChange={(e) => set("ok", e.target.checked)} />
              </Field>
              <Button type="submit" size="lg" style={{ alignSelf: "flex-start" }}>Anfrage senden</Button>
            </form>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
            <Card tone="moss" padding="lg">
              <h3 style={{ fontSize: "var(--size-h4)", fontFamily: "var(--font-display)" }}>Lieber telefonieren?</h3>
              <p style={{ fontSize: "var(--size-small)", color: "var(--text-muted)" }}>Ruf einfach an — wenn ich nicht rangehe, melde ich mich zurück.</p>
              <div style={{ display: "flex", gap: "var(--space-1)", alignItems: "center", color: "var(--moss-700)", fontSize: "var(--size-body)" }}>
                <Icon name="phone" size={18} /> 07426 000 000
              </div>
            </Card>
            <ImageFrame ratio="4 / 3" placeholder="Praxis, Wehingen" caption="Hintere Straße 18, 78564 Wehingen — aus Tuttlingen, Rottweil, Spaichingen und Balingen gut erreichbar." />
            <Callout tone="calm" title="Kosten kein Hindernis">Wenn die Mittel gerade nicht da sind: schreib es einfach dazu. Es gibt reduzierte Plätze und Ratenzahlung. Eine Einzelsitzung kostet zwischen 90 und 150 €.</Callout>
            <Callout tone="calm">Kein Kontaktformular ist vertraulich genug für alles. Was heikel ist, sagst du mir besser am Telefon.</Callout>
          </div>
        </div>
      </section>

      <Dialog open={sent} title="Anfrage gesendet" onClose={() => setSent(false)} footer={<Button onClick={() => setSent(false)}>Schließen</Button>}>
        Danke, {form.name || "und bis bald"}. Ich melde mich innerhalb von zwei Werktagen bei dir — meist schneller.
      </Dialog>
    </main>
  );
}
