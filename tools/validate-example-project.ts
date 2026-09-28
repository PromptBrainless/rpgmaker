import { readFileSync } from "node:fs";
import { validateJson } from "../src/shared/validation/validateJson.ts";

const files = [
  ["project", "templates/example-project/project.json"],
  ["map", "templates/example-project/maps/town.json"],
  ["database", "templates/example-project/database/database.json"],
  ["event", "templates/example-project/events/town-sign.json"],
] as const;

for (const [schema, path] of files) {
  const data = JSON.parse(readFileSync(path, "utf8")) as unknown;
  const result = validateJson(schema, data);
  if (!result.ok) {
    throw new Error(`${path}: ${result.errors.join("; ")}`);
  }
  console.log(`ok ${path}`);
}
