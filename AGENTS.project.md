# Feldwerk – Projektanweisungen

Ergänzt `AGENTS.md`, nicht ersetzend. Bei Konflikt gilt diese Datei.

## 1. Was Feldwerk ist
Eine mobile Web-Galerie für Pixelart-Assets im Stil **Warmholz-Oliv**
(Cottage-Pixel). Jede Grafik ist ein einzelnes 64×64-PNG mit Download per
Tipp. Die Assets speisen den 2D-RPG-Baukasten (Android) und den
Graph-Editor Fadenwerk. Feldwerk ist *nicht* der Editor und nicht die Engine.

## 2. Sprache
Chat, UI, Kommentare, Kategorienamen: Deutsch, Du-Form.
Code-Bezeichner: Englisch. Keine Floskeln, kein Marketing-Ton.

## 3. Qualität vor Menge
Lieber 20 gute Grafiken als 60 beliebige. Eine Grafik gilt erst als fertig, wenn:
- sie bei 64 px ohne Lupe erkennbar ist (Silhouette zuerst, Detail danach),
- sie sich von den anderen 19 der Kategorie sichtbar unterscheidet
  (Form, nicht nur Farbton),
- sie höchstens Umriss + 3 Töne + 1 Akzent nutzt,
- Bodenkacheln **nahtlos kacheln** (Rand links = rechts, oben = unten),
- sie ohne Hintergrund auskommt (Sprites isoliert, ≥ 4 px Luft).

Vor dem Einbau: Kategorie kurz als Gitter rendern, prüfen, dann erst freigeben.
Schwache Grafiken werden ersetzt, nicht dazugestellt.

## 4. Raster und Technik
- Kachel 64 px, Galerie-Raster 20 × 14. Native 64-px-Zeichnung,
  nie hochskaliert. Anzeige mit `image-rendering: pixelated`.
- Zeichnen per Canvas-Code (deterministisch, seeded RNG), pro Kategorie ein
  eigenes Modul. Gleiche ID → immer gleiches Bild. Keine generierten
  Fotos, keine Weichzeichner, keine Verläufe.
- PNG-Name: `kategorie_01.png` (zweistellig, klein, ohne Umlaute).
- Kategorien: Boden, Bauteile, Wasser, Möbel, Figuren, Gebäude, Bäume,
  Props, Oberfläche. Überschrift zeigt „20 von N“. Neue Kategorie nur auf Auftrag.
- Voll? Dieselbe Kategorie als „Teil 2“ im gleichen Stil, nicht umstylen.

## 5. Stil Warmholz-Oliv
- Palette: Nussbaum, Honig-Eiche, Creme, Olivgrün, gedämpftes Terrakotta,
  Lampengold. Höchstens **zwei Holztöne**.
- Wasser nur stumpfes Teich-Petrol. Kein Neon, Magenta, reines Cyan,
  kein Mint als Fläche.
- Kante 1 px hart. Kein realistisches Rendering.
- Tabu: Waffen, Rüstungen, Fallen, lesbarer Markentext, App-Chrome.
- Die bestehende Galerie v2 wird schrittweise auf diese Palette
  umgestellt, Kategorie für Kategorie, nie alles auf einmal.

## 6. Bedienung
- Mobil zuerst (390 × 844): kein Horizontalscroll, Touch-Ziele ≥ 48 px.
- Tippen lädt PNG. Lupe für Detailansicht. Umschalter „Nur leeres Gitter“.
- Hell/Dunkel über `prefers-color-scheme`.
- Zustand nur in `localStorage`/zustand. Auth und Datenbank bleiben aus.

## 7. Arbeitsweise
1. Auftrag in einem Satz wiederholen, Annahmen nennen, dann bauen.
2. Nichts erfinden: keine neuen Kategorien, Zahlen, Figuren, Stile.
3. Bogen zerschneiden (Skill `bogen-schnitt`, Kachel 64 px): erst prüfen und
   Plan zeigen, **schneiden und speichern erst nach meinem „Start“**.
4. Änderungen klein halten: eine Kategorie pro Runde.
5. Selbst im Browser prüfen (Desktop und Mobil), Vorschau ansehen, dann melden:
   was geändert, was geprüft, was offen.
