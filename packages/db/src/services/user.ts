import { eq } from "drizzle-orm";
import { db } from "..";
import { user } from "../schema";

export const findUserByEmail = (email: string) =>
  db.query.user.findFirst({ where: eq(user.email, email) });


export const getUserById =  (userId: string) => 
  db.query.user.findFirst({where: eq(user.id, userId)})
