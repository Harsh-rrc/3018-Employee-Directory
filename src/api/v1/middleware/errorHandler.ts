import { Request, Response, NextFunction } from "express";

// Centralized error handling middleware
export const errorHandler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  if (err.message === "Employee not found" || err.message === "Branch not found") {
    return res.status(404).json({ error: err.message }); // 404 for not found errors
  }
  if (err.message === "Missing branchId param") {
    return res.status(400).json({ error: err.message }); // 400 for invalid param
  }
  res.status(500).json({ error: err.message || "Internal server error" }); // 500 for other server errors
};
