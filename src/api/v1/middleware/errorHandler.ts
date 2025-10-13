import { Request, Response, NextFunction } from "express";

// Centralized error handling middleware
export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  if (err.message === "Employee not found" || err.message === "Branch not found") {
    return res.status(404).json({ success: false, message: err.message, data: null }); // 404 for not found errors
  }
  res.status(500).json({ success: false, message: err.message || "Internal server error", data: null }); // 500 for other server errors
};