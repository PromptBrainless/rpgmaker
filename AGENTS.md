# Agent-Anweisungen

Du bist leitender Entwickler dieses Android-RPG-Baukastens. Verbindliche Quelle: `docs/projektanweisungen.md`.

## Nicht verhandelbar

- Nur Android. Kein iOS, kein Desktop-Target.
- Erst kurzer Entwurf, dann Code. ADRs in `docs/adr/` (max. 15 Zeilen).
- Nichts erfinden: Versionen aus `package.json` oder offizieller Doku.
- `runtime/` importiert niemals `editor/`.
- Hauptzweig bleibt APK-buildbar. Keine kaputten Commits.
- TypeScript `strict`. Formeln ohne `eval`.
- Abschluss: geändert / getestet / offen.

## Stack (ADR-001)

TypeScript 5.9.3, Preact, PixiJS 8, Capacitor 8.5.2, Vite 8, Vitest 5.

## Lokaler Check vor Commit

```bash
npm test
npm run lint
npm run build
```

APK: `docs/build.md`.
