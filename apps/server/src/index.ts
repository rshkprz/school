import { env } from "@school/env/server";
import cors from "cors";
import express from "express";
import apiRoutes from "./routes";
import { errorHandler } from "./error/error-handler";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: env.CORS_ORIGIN,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/api", apiRoutes)

app.use(errorHandler)

app.listen(8000, () => {
  console.log("Server is running on http://localhost:8000");
});
