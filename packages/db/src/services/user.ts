import { eq } from "drizzle-orm";
import { db } from "..";
import { user } from "../schema";

export const findUserByEmail = async (email: string) =>
  await db.query.user.findFirst({ where: eq(user.email, email) });


