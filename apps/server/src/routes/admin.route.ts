import { addAcademicSession } from "@/controllers/settings.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { requireRole } from "@/middlewares/role.middleware";
import { Router } from "express";


const adminRoutes:Router = Router()
    .post("/academic-session", authMiddleware, requireRole("admin"), addAcademicSession)
    

export default adminRoutes