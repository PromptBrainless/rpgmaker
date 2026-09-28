import Ajv from "ajv/dist/2020.js";
import type { ErrorObject } from "ajv";
import mapSchema from "../schemas/map.schema.json";
import eventSchema from "../schemas/event.schema.json";
import databaseSchema from "../schemas/database.schema.json";
import projectSchema from "../schemas/project.schema.json";

const ajv = new Ajv({ allErrors: true, strict: true });

const validators = {
  map: ajv.compile(mapSchema),
  event: ajv.compile(eventSchema),
  database: ajv.compile(databaseSchema),
  project: ajv.compile(projectSchema),
};

export type SchemaName = keyof typeof validators;

export type ValidationResult = {
  ok: boolean;
  errors: string[];
};

function formatErrors(errors: ErrorObject[] | null | undefined): string[] {
  if (!errors) return [];
  return errors.map((error) => `${error.instancePath || "/"} ${error.message ?? "ungueltig"}`);
}

export function validateJson(schema: SchemaName, data: unknown): ValidationResult {
  const validate = validators[schema];
  const ok = validate(data);
  return { ok: Boolean(ok), errors: formatErrors(validate.errors) };
}
