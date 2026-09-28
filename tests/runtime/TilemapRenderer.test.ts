import { describe, expect, it } from "vitest";
import { TilemapRenderer } from "@runtime/render/TilemapRenderer";

describe("TilemapRenderer", () => {
  it("erkennt Kollisionstiles", () => {
    const renderer = new TilemapRenderer({
      tileSize: 32,
      width: 2,
      height: 1,
      layers: [{ name: "collision", width: 2, height: 1, tiles: [0, 1] }],
    });
    expect(renderer.isBlocked({ x: 0, y: 0 })).toBe(false);
    expect(renderer.isBlocked({ x: 1, y: 0 })).toBe(true);
    expect(renderer.isBlocked({ x: 9, y: 9 })).toBe(false);
  });
});
