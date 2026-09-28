export type ProjectManifest = {
  formatVersion: 1;
  name: string;
  schemaVersion: string;
  startMapId: string;
};

export type DatabaseActor = {
  id: string;
  name: string;
  classId: string;
  maxHp: number;
};

export type DatabaseItem = {
  id: string;
  name: string;
  price: number;
};

export type GameDatabase = {
  formatVersion: 1;
  actors: DatabaseActor[];
  items: DatabaseItem[];
};
