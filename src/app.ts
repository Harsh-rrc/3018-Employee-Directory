import express from "express";
import branchRoutes from "./api/v1/routes/branchesRoutes";
import employeeRoutes from "./api/v1/routes/employeeRoutes";

const app = express();
app.use(express.json());

// Routes
app.use("/api/v1/branches", branchRoutes);
app.use("/api/v1/employees", employeeRoutes);

// Health check
app.get("/health", (_, res) => res.status(200).json({ message: "Server is healthy" }));

export default app;