# Projektformat

`formatVersion` ist Pflicht. Aktuell: `1`.

| Datei | Schema |
|---|---|
| `project.json` | `src/shared/schemas/project.schema.json` |
| `maps/*.json` | `src/shared/schemas/map.schema.json` |
| `events/*.json` | `src/shared/schemas/event.schema.json` |
| `database/database.json` | `src/shared/schemas/database.schema.json` |

Beispiel: `templates/example-project/`.

Validierung: `validateJson()` in `src/shared/validation/validateJson.ts`.
