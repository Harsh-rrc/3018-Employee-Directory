import express from "express";
import employeeRoutes from "./api/v1/routes/employeeRoutes";
import branchRoutes from "./api/v1/routes/branchesRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api", employeeRoutes);
app.use('/api/branches',branchRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
