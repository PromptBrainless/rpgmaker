# ADR-002: Projektformat

**Kontext:** Spiele müssen ohne Store teilbar, validierbar und migrationsfähig sein.

**Optionen:**
1. JSON-Dateien plus JSON-Schema, Projektordner als ZIP.
2. SQLite-Datei pro Projekt.
3. Binärformat (MessagePack) mit eigenem Tooling.

**Entscheidung:** Option 1. Jede Datei trägt `formatVersion`. Schemas liegen in `src/shared/schemas/`. ZIP ist das Tauschformat zwischen Freunden. Speichern atomar (Tempdatei, dann umbenennen).

**Folgen:** Migrationen sind Pflicht bei jeder Formatänderung. Referenzen (Items, Maps, Events) werden gegen die Datenbank geprüft. Plugin-Daten bleiben JSON unter `plugins/`.
