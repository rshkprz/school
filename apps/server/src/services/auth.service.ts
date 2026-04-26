import { findUserByEmail } from "@school/db/services/user";
import type { LoginSchemaType } from "@school/validators";
import bcrypt from "bcrypt";
import { signAccessToken, signRefreshToken } from "@/utils/jwt";
import { hashToken } from "@/utils/hash";
import { randomUUID } from "crypto";
import jwt from "jsonwebtoken";
import { env } from "@school/env/server";
import {
  getRefreshTokenByJti,
  insertHashedRefreshToken,
  revokeRefreshToken,
} from "@school/db/services/token";
import { AppError } from "@/error/app-error";

export const loginService = async (body: LoginSchemaType) => {
  const { email, password } = body;

  const user = await findUserByEmail(email);
  if (!user) {
    throw new AppError("Invalid credentials", 401);
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    throw new AppError("Invalid credentials", 401);
  }
  const jti = randomUUID();
  const accessToken = signAccessToken(user.id);
  const refreshToken = signRefreshToken(user.id, jti);

  const refreshTokenHash = await hashToken(refreshToken);
  await insertHashedRefreshToken(refreshTokenHash, user.id, jti);

  return {
    user: {
      id: user.id,
      email: user.email,
    },
    accessToken,
    refreshToken,
  };
};

export const refreshService = async (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      env.REFRESH_TOKEN_SECRET,
    ) as jwt.JwtPayload;

    const storedToken = await getRefreshTokenByJti(decoded.jti!);
    if (!storedToken) throw new AppError("Invalid refresh token", 401);

    await revokeRefreshToken(decoded.jti!);

    const newJti = randomUUID();
    const accessToken = signAccessToken(decoded.userId);
    const newRefreshToken = signRefreshToken(decoded.userId, newJti);

    const newRefreshTokenHash = await hashToken(newRefreshToken);
    await insertHashedRefreshToken(newRefreshTokenHash, newJti, decoded.userId);

    return { accessToken, newRefreshToken };
  } catch (error) {
    throw new AppError("Could not refresh session");
  }
};

export const logoutService = async (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      env.REFRESH_TOKEN_SECRET!,
    ) as jwt.JwtPayload;
    const jti = decoded.jti;
    if (!jti) return;

    await revokeRefreshToken(jti);
  } catch (err) {
    console.error("Logout error or token already invalid", err);
  }
};
