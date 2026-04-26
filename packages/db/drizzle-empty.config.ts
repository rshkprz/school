import dotenv from "dotenv";
import { defineConfig } from "drizzle-kit";

dotenv.config({
  path: "../../apps/server/.env",
});

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema/empty-schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL || "",
  },
});