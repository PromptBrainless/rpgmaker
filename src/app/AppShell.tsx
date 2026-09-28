import { useState } from "preact/hooks";
import { EditorHome } from "@editor/EditorHome";
import { PlayerHome } from "./PlayerHome";

export type AppMode = "hub" | "editor" | "player";

/**
 * Duenne Huelle: wechselt nur zwischen Editor und Player.
 * Die Runtime darf den Editor nicht importieren — deshalb lebt die Navigation hier.
 */
export function AppShell() {
  const [mode, setMode] = useState<AppMode>("hub");

  return (
    <main class="shell">
      <header class="topbar">
        <p class="eyebrow">RPG Maker · M0</p>
        <h1>Editor + Player</h1>
      </header>

      {mode === "hub" && (
        <section class="hub">
          <p>
            Leere App-Huelle. Naechster Schritt ist M1: Karte zeichnen und Figur
            laufen lassen.
          </p>
          <div class="actions">
            <button type="button" onClick={() => setMode("editor")}>
              Editor
            </button>
            <button type="button" class="secondary" onClick={() => setMode("player")}>
              Spielen
            </button>
          </div>
        </section>
      )}

      {mode === "editor" && <EditorHome onBack={() => setMode("hub")} />}
      {mode === "player" && <PlayerHome onBack={() => setMode("hub")} />}
    </main>
  );
}
