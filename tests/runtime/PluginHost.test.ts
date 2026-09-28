import { describe, expect, it } from "vitest";
import { PluginHost } from "@runtime/plugin-host/PluginHost";

describe("PluginHost", () => {
  it("faengt Plugin-Fehler ab und macht weiter", () => {
    const host = new PluginHost();
    host.register({
      manifest: { name: "boom", version: "1.0.0", apiVersion: 1, parameters: {} },
      hooks: { onSceneStart: () => { throw new Error("kaputt"); } },
    });
    host.register({
      manifest: { name: "ok", version: "1.0.0", apiVersion: 1, parameters: {} },
      hooks: { onSceneStart: () => "started" },
    });
    const results = host.emit("onSceneStart");
    expect(results).toEqual(["started"]);
    expect(host.getErrors()[0]?.plugin).toBe("boom");
  });
});
