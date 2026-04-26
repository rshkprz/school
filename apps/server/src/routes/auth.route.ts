import { loginController, logoutController, refreshController } from "@/controllers/auth.controller";
import { Router } from "express";

const authRoutes:Router = Router()
    .post("/login", loginController)
    .get("/refresh", refreshController)
    .post("/logout", logoutController)
    
export default authRoutes