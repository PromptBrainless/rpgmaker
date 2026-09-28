import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "de.promptbrainless.rpgmaker",
  appName: "RPG Maker",
  webDir: "dist",
  android: {
    allowMixedContent: false,
  },
};

export default config;
