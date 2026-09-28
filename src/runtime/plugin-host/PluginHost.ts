export type PluginManifest = {
  name: string;
  version: string;
  apiVersion: 1;
  parameters: Record<string, unknown>;
};

export type PluginHookName = "onSceneStart" | "onBattleTurn" | "onDamageCalc";

export type PluginModule = {
  manifest: PluginManifest;
  hooks?: Partial<Record<PluginHookName, (...args: unknown[]) => unknown>>;
};

export type PluginError = {
  plugin: string;
  hook: PluginHookName;
  message: string;
};

/**
 * Hostet JS-Plugins ueber Hooks statt Monkey-Patch.
 * Ein defektes Plugin wird isoliert.
 */
export class PluginHost {
  private readonly plugins: PluginModule[] = [];
  private readonly errors: PluginError[] = [];

  register(plugin: PluginModule): void {
    this.plugins.push(plugin);
  }

  emit(hook: PluginHookName, ...args: unknown[]): unknown[] {
    const results: unknown[] = [];
    for (const plugin of this.plugins) {
      const handler = plugin.hooks?.[hook];
      if (!handler) continue;
      try {
        results.push(handler(...args));
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        this.errors.push({ plugin: plugin.manifest.name, hook, message });
      }
    }
    return results;
  }

  getErrors(): readonly PluginError[] {
    return this.errors;
  }
}
