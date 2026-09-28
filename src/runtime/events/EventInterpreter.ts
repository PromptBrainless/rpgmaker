import type { GameState } from "../core/GameState";

export type EventCommand =
  | { type: "wait"; frames: number }
  | { type: "setSwitch"; id: string; value: boolean }
  | { type: "setVariable"; id: string; value: number }
  | { type: "message"; text: string };

export type InterpreterSnapshot = {
  commandIndex: number;
  waitFrames: number;
  log: string[];
};

/**
 * Deterministischer, pausierbarer Interpreter.
 * Speichern mitten im Event heisst: Snapshot + GameState serialisieren.
 */
export class EventInterpreter {
  private commandIndex = 0;
  private waitFrames = 0;
  private readonly log: string[] = [];

  constructor(private readonly commands: readonly EventCommand[]) {}

  tick(state: GameState): GameState {
    if (this.isDone()) {
      return state;
    }
    if (this.waitFrames > 0) {
      this.waitFrames -= 1;
      state.tick += 1;
      return state;
    }
    const command = this.commands[this.commandIndex];
    this.commandIndex += 1;
    state.tick += 1;
    switch (command.type) {
      case "wait":
        this.waitFrames = Math.max(0, command.frames);
        break;
      case "setSwitch":
        state.switches[command.id] = command.value;
        break;
      case "setVariable":
        state.variables[command.id] = command.value;
        break;
      case "message":
        this.log.push(command.text);
        break;
    }
    return state;
  }

  isDone(): boolean {
    return this.commandIndex >= this.commands.length && this.waitFrames === 0;
  }

  snapshot(): InterpreterSnapshot {
    return {
      commandIndex: this.commandIndex,
      waitFrames: this.waitFrames,
      log: [...this.log],
    };
  }

  restore(snapshot: InterpreterSnapshot): void {
    this.commandIndex = snapshot.commandIndex;
    this.waitFrames = snapshot.waitFrames;
    this.log.splice(0, this.log.length, ...snapshot.log);
  }

  messages(): readonly string[] {
    return this.log;
  }
}
