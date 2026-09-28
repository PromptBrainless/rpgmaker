# RPG Maker (Android)

2D-RPG-Baukasten mit Editor und Player in **einer** Android-App. Kein Store, Weitergabe per Sideload-APK.

Repository: https://github.com/PromptBrainless/rpgmaker

## Schnellstart (Browser)

Voraussetzung: Node 22+.

```bash
npm ci
npm test
npm run dev
```

## APK

Voraussetzung: JDK 21 und Android SDK (API 36). Anleitung: [docs/build.md](docs/build.md).

```bash
npm ci
npx cap add android   # nur beim allerersten Mal, danach ist android/ im Repo
npm run apk:debug
```

Die Debug-APK liegt unter `android/app/build/outputs/apk/debug/app-debug.apk`.

## Für andere Umgebungen / Agenten

- Systemprompt: [docs/projektanweisungen.md](docs/projektanweisungen.md)
- Kurzform: [AGENTS.md](AGENTS.md)
- Entscheidungen: [docs/adr/](docs/adr/)
- Codespace: `.devcontainer/`

## Stand

M0: Repo, ADRs, Devcontainer, CI, leere App-Hülle, Kernklassen mit Tests. Die erste installierbare APK entsteht, sobald `android/` per `cap add android` erzeugt und der Workflow einmal durchgelaufen ist.
