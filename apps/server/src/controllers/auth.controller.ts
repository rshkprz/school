import {
  loginService,
  logoutService,
  refreshService,
} from "@/services/auth.service";
import { asyncHandler } from "@/utils/asynchandler";
import { env } from "@school/env/server";
import { loginSchema } from "@school/validators";
import type { Request, Response } from "express";

export const loginController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = loginSchema.parse(req.body);
    const result = await loginService(body);

    res.cookie("refreshToken", result.refreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV == "production" ? true : false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({
      user: result.user,
      accessToken: result.accessToken,
    });
  },
);

export const refreshController = asyncHandler(
  async (req: Request, res: Response) => {
    const token = req.cookies.refreshToken;
    if (!token)
      return res.sendStatus(401).json({ message: "Refresh token missing" });

    const { accessToken, newRefreshToken } = await refreshService(token);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: env.NODE_ENV == "production" ? true : false,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ accessToken });
  },
);

export const logoutController = asyncHandler(
  async (req: Request, res: Response) => {
    const token =
      req.cookies?.refreshToken || req.headers.authorization?.split(" ")[1];
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: env.NODE_ENV === "production" ? true : false,
      sameSite: "lax",
    });
    if (!token) return res.sendStatus(400);

    await logoutService(token);
    return res.status(200).json({ message: "logged out successfully" });
  },
);
