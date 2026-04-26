import { Router } from "express";
import authRoutes from "./auth.route";

const apiRoutes:Router = Router()

apiRoutes.use("/auth",authRoutes)

export default apiRoutes