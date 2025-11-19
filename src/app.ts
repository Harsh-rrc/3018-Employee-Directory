import express from "express";
import dotenv from "dotenv";

// Load env vars first
dotenv.config();

import cors from "cors";
import setupSwagger from "./config/swagger";
import { getHelmetConfig } from "./config/helmetConfig";
import { getCorsOptions } from "./config/corsConfig";
import itemRoutes from "./api/v1/routes/itemRoutes";
import branchesRoutes from "./api/v1/routes/branchesRoutes";
import employeeRoutes from "./api/v1/routes/employeeRoutes";

const app = express();

// Middleware
app.use(express.json());
app.use(getHelmetConfig());
app.use(cors(getCorsOptions()));

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is healthy" });
});

// Your existing routes
app.use("/api/v1/items", itemRoutes);
app.use("/api/v1/branches", branchesRoutes);
app.use("/api/v1/employees", employeeRoutes);

setupSwagger(app);
export default app;
