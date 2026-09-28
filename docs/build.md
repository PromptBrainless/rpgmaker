# APK bauen

Voraussetzungen laut Capacitor-8-Doku: Node 22+, JDK 21, Android SDK (compile/target 36, minSdk 24).

## A) App-APK lokal oder Codespace

```bash
npm ci
npm test
npm run build
npx cap sync android
cd android && ./gradlew assembleDebug
```

Ergebnis: `android/app/build/outputs/apk/debug/app-debug.apk`.

Falls `android/` noch fehlt (frischer Clone vor dem ersten `cap add`):

```bash
npm ci
npx cap add android
npx cap sync android
```

`npx cap add ios` nicht ausfuehren. iOS ist kein Ziel.

## B) GitHub Actions

- `test.yml`: Lint, Typecheck, Unit-Tests bei Push/PR.
- `build-apk.yml`: `workflow_dispatch` und Tags `v*`. Haengt die Debug-APK an den Workflow bzw. an ein Release.

Signierung: Debug reicht. Fuer Updates ueber eine bestehende Installation Secrets setzen:

- `ANDROID_KEYSTORE_BASE64`
- `ANDROID_KEYSTORE_PASSWORD`
- `ANDROID_KEY_ALIAS`
- `ANDROID_KEY_PASSWORD`

## Einzelspiel-APK

v1: Freunde oeffnen eine Projekt-ZIP im Player der App-APK.
v2 (M6): Workflow laedt eine ZIP und buendelt sie in ein Player-Template.
