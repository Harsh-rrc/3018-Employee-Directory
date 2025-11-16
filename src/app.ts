import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import setupSwagger from "./config/swagger";
import { getHelmetConfig } from "./config/helmetConfig";
import { getCorsOptions } from "./config/corsConfig";

// Load env vars first
dotenv.config();

const app = express();
// Security middleware
app.use(getHelmetConfig());
app.use(cors(getCorsOptions()));

// Your existing routes
app.use("/api/v1/items", require("./routes/itemRoutes"));

setupSwagger(app);
export default app;