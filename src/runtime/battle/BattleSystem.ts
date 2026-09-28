export type BattleParty = {
  id: string;
  hp: number;
  maxHp: number;
};

/**
 * Kampfsystem haengt hinter diesem Interface.
 * M3 liefert die rundenbasierte Implementierung. ATB kommt als zweites Modul.
 */
export interface BattleSystem {
  readonly id: "turn-based" | "atb";
  start(allies: BattleParty[], enemies: BattleParty[]): void;
  isFinished(): boolean;
}
