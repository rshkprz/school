import { loginController, logoutController, meController, refreshController } from "@/controllers/auth.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { Router } from "express";

const authRoutes:Router = Router()
    .post("/login", loginController)
    .post("/refresh", refreshController)
    .post("/logout", logoutController)
    .get("/me", authMiddleware, meController)
    
export default authRoutes