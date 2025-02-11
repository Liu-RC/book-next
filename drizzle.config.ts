import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// 指定配置文件
config({ path: ".env.local" });

export default defineConfig({
  out: "./drizzle",
  schema: "./database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
