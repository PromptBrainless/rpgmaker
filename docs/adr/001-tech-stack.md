# ADR-001: Tech-Stack

**Kontext:** Eine Codebasis soll Editor und Runtime als Android-APK liefern. Codespaces und KI-Agenten sollen denselben Stack nutzen.

**Optionen:**
1. Web (TypeScript + Vite + Preact + PixiJS) in Capacitor-Android-Hülle.
2. Zwei Stacks: Kotlin-Editor/Runtime plus Web-Preview.
3. Native Runtime mit libGDX, Editor separat.

**Entscheidung:** Option 1. Capacitor 8.5.2, Node ≥ 22, TypeScript 5.9.3 (strict), Preact, PixiJS 8, Vite 8. TypeScript 7 existiert bereits, wird aber nicht genutzt, weil `typescript-eslint@8.70.1` nur `<6.1.0` erlaubt.

**Folgen:** Browser-Hot-Reload zuerst, APK über `cap sync` + Gradle. iOS wird nicht angelegt. Falls M1 die 60-FPS-Messung verfehlt, kommt ein eigener ADR für Kotlin + libGDX — nicht schleichend.
