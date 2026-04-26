import { env } from "@school/env/server";
import jwt from "jsonwebtoken";

export function signAccessToken(userId: string) {
  return jwt.sign({ userId }, env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "15m",
  });
}

export function signRefreshToken(userId: string, jti: string) {
  return jwt.sign({ userId, jti }, env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });
}
