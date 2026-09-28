import { describe, expect, it } from "vitest";
import { validateJson } from "@shared/validation/validateJson";

describe("validateJson", () => {
  it("akzeptiert eine minimale gueltige Karte", () => {
    const result = validateJson("map", {
      formatVersion: 1,
      id: "town",
      name: "Stadt",
      tileSize: 32,
      width: 1,
      height: 1,
      layers: [{ name: "ground", width: 1, height: 1, tiles: [1] }],
    });
    expect(result.ok).toBe(true);
  });

  it("lehnt fehlende Pflichtfelder ab", () => {
    const result = validateJson("project", { name: "Demo" });
    expect(result.ok).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});
