import { env } from "@school/env/server";
import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token =
      req.cookies?.accessToken || req.headers.authorization?.split(" ")[1];
     
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, env.ACCESS_TOKEN_SECRET) as JwtPayload;
    console.log("Decoded token:", decoded);
    req.user = {
      id: decoded.userId,
      role: decoded.role,
    };
    console.log('req.user after assignment:', req.user);

    next();
  } catch (err) {
    console.error('Auth error:', err);
    return res.status(401).json({ message: "Invalid token" });
  }
};
