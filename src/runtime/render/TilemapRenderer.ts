export type TileCoord = { x: number; y: number };

export type TileLayerName =
  | "ground"
  | "terrain"
  | "objects"
  | "overlay"
  | "collision"
  | "regions"
  | "events";

export type TileLayer = {
  name: TileLayerName;
  width: number;
  height: number;
  tiles: number[];
};

export type Tilemap = {
  tileSize: number;
  width: number;
  height: number;
  layers: TileLayer[];
};

/**
 * Reine Daten-API fuer den spaeteren PixiJS-Renderer.
 * Kein Pixi-Import hier, damit Tests ohne WebGL laufen.
 */
export class TilemapRenderer {
  constructor(private readonly map: Tilemap) {}

  tileAt(layerName: TileLayerName, coord: TileCoord): number {
    const layer = this.map.layers.find((entry) => entry.name === layerName);
    if (!layer) return 0;
    if (coord.x < 0 || coord.y < 0 || coord.x >= layer.width || coord.y >= layer.height) {
      return 0;
    }
    return layer.tiles[coord.y * layer.width + coord.x] ?? 0;
  }

  isBlocked(coord: TileCoord): boolean {
    return this.tileAt("collision", coord) !== 0;
  }
}
