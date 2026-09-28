# Plugin-API (Entwurf, API-Version 1)

Ein Plugin ist ein JavaScript-Modul plus Manifest:

```json
{
  "name": "demo",
  "version": "1.0.0",
  "apiVersion": 1,
  "parameters": {}
}
```

Hooks statt Kern-Ueberschreiben:

- `onSceneStart`
- `onBattleTurn`
- `onDamageCalc`

Der Host faengt Exceptions und schreibt sie ins Fehlerlog. Editor-Konfigurationsmenues aus dem Parameter-Schema kommen in M4.
