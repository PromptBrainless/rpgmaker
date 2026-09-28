# ADR-003: APK-Build und Signierung

**Kontext:** Freunde sideloaden die App. Kein Play Store. Der Hauptzweig muss jederzeit eine Debug-APK erzeugen.

**Optionen:**
1. GitHub Actions + Codespace: Vite-Build, `npx cap sync android`, `gradlew assembleDebug`.
2. APK auf dem Gerät bauen.
3. Release-Keystore von Anfang an erzwingen.

**Entscheidung:** Option 1. Debug-Keystore für Sideload. Optionaler eigener Keystore nur als GitHub-Secret `ANDROID_KEYSTORE_BASE64` plus Alias/Passwort-Secrets, nie im Repo. Auf dem Handy wird nicht gebaut.

**Folgen:** `android/` wird nach `cap add android` versioniert, damit CI nicht interaktiv Plattformen anlegt. Einzelspiel-APK ist M6, nicht M0.
