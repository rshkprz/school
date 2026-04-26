import { db } from ".";
import { user } from "./schema";
import bcrypt from "bcrypt";
import { env } from "@school/env/server";


async function seed() {
  const adminName = env.ADMIN_NAME!;
  const adminEmail = env.ADMIN_EMAIL!;
  const adminPassword = env.ADMIN_PASSWORD!;

  const hashedAdminPassword = await bcrypt.hash(adminPassword, 10);
  try {
    console.log("Seeding admin");
    await db
      .insert(user)
      .values({
        name: adminName,
        email: adminEmail,
        passwordHash: hashedAdminPassword,
        role: "admin",
      })
      .onConflictDoNothing({ target: user.email });
    console.log("Seeded successfully");
  } catch (error) {
    console.error("Error seeding:", error);
    throw error;
  }
}

seed();

//npx tsx --env-file=../../apps/server/.env ./src/seed.ts
