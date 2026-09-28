import { Capacitor } from "@capacitor/core";
import { App } from "@capacitor/app";

/**
 * Android-Zurueck-Taste: erst History, sonst App minimieren.
 * M0 kennt noch keine Overlays.
 */
export function bindAndroidBackButton(): void {
  if (!Capacitor.isNativePlatform()) {
    return;
  }

  void App.addListener("backButton", ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back();
      return;
    }
    void App.minimizeApp();
  });
}
