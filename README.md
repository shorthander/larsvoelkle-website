# Lars Völkle — Systemisches Coaching

Website für die Coaching-Praxis von Lars Völkle, umgesetzt aus dem gelieferten Design-System (`Lars Völkle Design System.zip`) als statische [Astro](https://astro.build)-Seite mit React-Komponenten.

## Seiten

| Route | Screen |
| --- | --- |
| `/` | Start |
| `/ueber-mich` | Über mich |
| `/angebot` | Angebot |
| `/kontakt` | Kontakt |

## Stack

- **Astro** (statischer Output) für schnelle, SEO-freundliche Seiten — jede Route wird zu vorgerendertem HTML.
- **React** nur dort als Insel (`client:load`) eingebunden, wo Interaktivität gebraucht wird: Header/Footer (Hover-States), Tabs (Angebot), Accordion (FAQ) und das Kontaktformular (Validierung, Bestätigungsdialog).
- Design-Tokens 1:1 aus `tokens/*.css` übernommen (`src/styles/tokens/`), Komponenten 1:1 aus `components/*/*.jsx` (`src/components/`).
- Schriftarten nutzen datenschutzfreundliche System-Font-Stacks; die Icons werden lokal als Inline-SVGs gerendert. Beim Seitenaufruf entstehen dafür keine Anfragen an Drittanbieter.

## Bekannte Platzhalter

- **Bilder**: alle `ImageFrame`-Slots sind Platzhalter (kein Foto-Material geliefert).
- **Preise**: `90–150 €` sind Platzhalter aus dem Prototyp.
- **Logo**: kein Logo geliefert — die Marke ist der gesetzte Name (`Wordmark`).

## Kontakt und Datenschutz

Das Kontaktformular hat bewusst keinen serverseitigen Formulardienst. Nach der lokalen Validierung öffnet es eine vorbereitete E-Mail im E-Mail-Programm der besuchenden Person. Eingaben werden nicht über die Website übertragen oder gespeichert. Impressum und Datenschutzerklärung berücksichtigen das statische GitHub-Pages-Hosting und sind im Footer verlinkt.

## Anrede

Der gelieferte Klick-Prototyp ist durchgängig in **Du-Form** getextet; das ist die bewusst gewählte Ansprache für diese Seite (nicht die Sie-Form aus der allgemeinen Design-System-Doku).

## Entwicklung

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

### Vercel

Repo bei [vercel.com/new](https://vercel.com/new) importieren — Astro wird automatisch erkannt, kein zusätzliches Setup nötig.

### GitHub Pages

`.github/workflows/deploy.yml` deployt bei jedem Push auf `main` automatisch über GitHub Actions.

1. Im Repo unter **Settings → Pages** die Source auf **GitHub Actions** stellen.
2. Bei Nutzung einer eigenen Domain (z. B. `larsvoelkle.de`) eine `CNAME`-Datei in `public/` anlegen und `site` in `astro.config.mjs` entsprechend belassen.
3. Ohne eigene Domain (`username.github.io/repo-name`) zusätzlich `base: '/repo-name'` in `astro.config.mjs` setzen.
