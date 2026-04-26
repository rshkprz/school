import type { NextFunction, Request,Response } from "express";
import { AppError } from "./app-error";
import { ZodError } from "zod";

export const errorHandler = (err: any, req: Request,res: Response, next:NextFunction) => {
  console.log("ERROR: ", err);

  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({
      message: "Validation failed",
      errors: err.flatten().fieldErrors,
    });
  }

  return res.status(500).json({
    message: "Something went wrong",
  });
};
