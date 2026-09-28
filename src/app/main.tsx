import { render } from "preact";
import { AppShell } from "./AppShell";
import { bindAndroidBackButton } from "./capacitor";
import "./styles.css";

bindAndroidBackButton();

const root = document.getElementById("app");
if (!root) {
  throw new Error("App-Root #app fehlt in index.html.");
}

render(<AppShell />, root);
