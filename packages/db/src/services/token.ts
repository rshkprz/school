import { eq } from "drizzle-orm";
import { db } from "..";
import { refreshTokens } from "../schema";

export const insertHashedRefreshToken = async (
  refreshToken: string,
  userId: string,
  jti: string,
) => {
  await db.insert(refreshTokens).values({
    jti: jti,
    userId: userId,
    tokenHash: refreshToken,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });
};

export const getRefreshTokenByJti = async (jti:string) => {
  return await db.query.refreshTokens.findFirst({
    where: eq(refreshTokens.jti, jti)
  })
}

export const revokeRefreshToken = async (jti: string) => {
  return await db.delete(refreshTokens)
    .where(eq(refreshTokens.jti, jti));
};
