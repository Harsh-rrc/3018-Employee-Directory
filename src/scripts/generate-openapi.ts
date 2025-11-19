// src/scripts/generate-openapi.ts
import fs from "fs";
import { generateSwaggerSpec } from "../config/swaggerOptions";

// Generate OpenAPI spec and write to openapi.json
const specs = generateSwaggerSpec();
fs.writeFileSync("./openapi.json", JSON.stringify(specs, null, 2));
console.log("OpenAPI spec generated!");