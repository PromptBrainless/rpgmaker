#!/usr/bin/env bash
# Installiert nur die von Capacitor 8 benoetigten SDK-Pakete.
# Versionen: compile/target 36 laut Capacitor-8-Update-Guide.
set -euo pipefail

SDK_ROOT="${ANDROID_SDK_ROOT:-/usr/local/android-sdk}"
mkdir -p "$SDK_ROOT"

if ! command -v sdkmanager >/dev/null 2>&1; then
  echo "sdkmanager fehlt in dieser Umgebung."
  echo "In GitHub Actions uebernimmt android-actions/setup-android die Installation."
  echo "Lokal: Android Studio SDK Manager, Pakete platform-tools, platforms;android-36, build-tools;36.0.0"
  exit 0
fi

yes | sdkmanager --sdk_root="$SDK_ROOT" \
  "platform-tools" \
  "platforms;android-36" \
  "build-tools;36.0.0"
