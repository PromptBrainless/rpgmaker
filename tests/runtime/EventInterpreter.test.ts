import { describe, expect, it } from "vitest";
import { createEmptyGameState } from "@runtime/core/GameState";
import { EventInterpreter } from "@runtime/events/EventInterpreter";

describe("EventInterpreter", () => {
  it("setzt Switch und Variable deterministisch", () => {
    const interpreter = new EventInterpreter([
      { type: "setSwitch", id: "intro", value: true },
      { type: "setVariable", id: "goldBonus", value: 5 },
      { type: "message", text: "Willkommen" },
    ]);
    const state = createEmptyGameState("town");
    while (!interpreter.isDone()) interpreter.tick(state);
    expect(state.switches.intro).toBe(true);
    expect(state.variables.goldBonus).toBe(5);
    expect(interpreter.messages()).toEqual(["Willkommen"]);
    expect(state.tick).toBe(3);
  });

  it("laesst sich mitten in wait serialisieren", () => {
    const interpreter = new EventInterpreter([{ type: "wait", frames: 2 }]);
    const state = createEmptyGameState("town");
    interpreter.tick(state);
    const snapshot = interpreter.snapshot();
    const restored = new EventInterpreter([{ type: "wait", frames: 2 }]);
    restored.restore(snapshot);
    restored.tick(state);
    restored.tick(state);
    expect(restored.isDone()).toBe(true);
  });
});
