export type SwitchMap = Record<string, boolean>;
export type VariableMap = Record<string, number>;

export type PartyState = {
  gold: number;
  itemCounts: Record<string, number>;
};

export type GameState = {
  formatVersion: 1;
  mapId: string;
  tick: number;
  switches: SwitchMap;
  variables: VariableMap;
  selfSwitches: Record<string, boolean>;
  party: PartyState;
};

export function createEmptyGameState(mapId: string): GameState {
  return {
    formatVersion: 1,
    mapId,
    tick: 0,
    switches: {},
    variables: {},
    selfSwitches: {},
    party: { gold: 0, itemCounts: {} },
  };
}

export function cloneGameState(state: GameState): GameState {
  return structuredClone(state);
}
