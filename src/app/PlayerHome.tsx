import { useMemo } from "preact/hooks";
import { createEmptyGameState } from "@runtime/core/GameState";

type Props = {
  onBack: () => void;
};

export function PlayerHome({ onBack }: Props) {
  const state = useMemo(() => createEmptyGameState("demo-map"), []);

  return (
    <section class="panel">
      <button type="button" class="ghost" onClick={onBack}>
        Zurueck
      </button>
      <h2>Player</h2>
      <p>
        Runtime-Stand: Karte <code>{state.mapId}</code>, Tick {state.tick},
        Gold {state.party.gold}.
      </p>
      <p class="hint">PixiJS-Renderer und Kollision folgen in M1.</p>
    </section>
  );
}
