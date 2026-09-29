# Feldwerk — nächster Arbeitsstand

Standbasis: `327c174`

## Was jetzt weitergezogen wird

Nicht alles gleichzeitig. Der nächste Schritt verbindet die vorhandene Werkstatt mit einer klareren HUD-Struktur und macht die bestehende Spielwelt im Alltag besser benutzbar.

### HUD — nächster kleiner Ausbau

**Phase 3: Sidebar / Topbar / Workspace**

- Die Karte bleibt der Mittelpunkt.
- Die Kopfzeile bleibt ruhig und dunkel.
- Links entsteht eine schlanke Navigation für den aktiven Modus, ohne die vorhandenen Modi wegzuwerfen.
- Unten bzw. kontextuell bleiben die bestehenden Werkzeuggruppen erreichbar.
- Keine dekorativen Platzhalter: Jeder sichtbare Knopf führt zu einem vorhandenen Zustand oder schaltet einen klaren vorhandenen Zustand um.
- Der Inspector bleibt zunächst klein und erscheint nur dort, wo bereits sinnvolle Zell-/Objektinformationen vorhanden sind.

**Phase 4: Play / Build / Draw / World**

- `Spielen` bleibt der Spielmodus.
- `Zeichnen` bleibt der Editor.
- `World` wird zunächst als echte Ortsauswahl aus der vorhandenen Orte-Leiste herausgezogen, nicht als leere neue Seite.
- `Build` wird nicht als Fake-Modus angelegt. Erst wenn ein realer Bau-Workflow vorhanden ist, bekommt er eine eigene Oberfläche.
- Die drei bestehenden Orte `Anger`, `Teich` und `Stube` bleiben die Referenzkarten.

## Spielwelt — nächster kleiner Ausbau

### Ortswechsel

Die vorhandenen Orte sollen sich wie zusammengehörige Spielorte anfühlen, nicht wie drei unabhängige Testkarten.

- Ein Ortswechsel baut die gewählte Karte reproduzierbar über `buildPlace` auf.
- Die Startzelle `{x: 4, y: 8}` bleibt für alle drei Orte frei.
- Ein Wechsel darf den gespeicherten Weltzustand kontrolliert ersetzen, wie bereits in `docs/spielwelt.md` beschrieben.
- Der aktive Ort muss im HUD sichtbar sein, damit beim Wechsel eindeutig ist, wo man gerade ist.

### Anger

- Anger bleibt der offene Dorfplatz.
- Weg und Gasse bleiben frei.
- Die vorhandenen Bewohner behalten ihre Sprüche.
- Tiere bleiben durchquerbar.
- Die bereits geprüften Asset-Zuordnungen werden nicht nach Dateinamen neu interpretiert.

### Teich

- Wasser bleibt blockierend.
- Steg und durchquerbare Tiere bleiben offen.
- Transparente Wellenränder behalten die dunkle Unterlegung für blockierenden Boden.
- Der Angler bleibt der klare Gesprächspunkt des Ortes.

### Stube

- Der südliche Ausgang bleibt offen.
- Innenrand und Einrichtung bleiben fest.
- Die vorhandenen Möbel-Assets werden weiter aus `docs/assets.md` übernommen.
- Die Person im Raum bleibt als Gesprächspunkt erhalten.

## Kollision

Die bereits gesetzte Regel bleibt unverändert:

- kein Wegschieben der Figur;
- kurzer `player.bump`-Farbblitz;
- rote Markierung der blockierten Zielzelle im Spiel;
- violetter Schleier im Zeichnen;
- Kollision-Debug zeigt denselben visuellen Zustand über den blockierten Zellen.

## Speicher

Weiter bei `world: 3` und `feldwerk-town-v2`.

Ein Ortswechsel darf den bestehenden Slot gezielt überschreiben. Alte Kartenstände mit den Namen der drei Orte werden weiterhin nicht blind zurückgeladen.

## Dokumentationsregel für die nächsten Schritte

Nach jedem sinnvollen Umsetzungsschritt wird die Doku direkt mitgezogen:

1. `docs/stand.md` — sichtbaren Ist-Stand aktualisieren.
2. `docs/spielwelt.md` — neue Ortslogik oder Interaktionen festhalten.
3. `docs/hud-ui/phasenplan.md` — Phase nur dann weiterstellen, wenn der Zustand wirklich gebaut ist.
4. `docs/assets.md` — nur ändern, wenn eine neue Asset-Zuordnung tatsächlich geprüft wurde.

## Nicht anfassen

- `buildTown()` nicht nebenbei umbauen.
- `logic.test.ts` nicht nebenbei umbauen.
- Kein Re-Scaffold.
- Keine Fake-Buttons.
- Keine komplette Neuarchitektur für die fehlenden Phasen.

## Nächster konkreter Umsetzungspunkt

**Echte Modus-/Ortsnavigation im bestehenden Workspace**, danach direkt die Dokumentation nachziehen und erst dann den nächsten HUD-Schritt angehen.
