// src/api/v1/routes/branchesRoutes.ts
import { Router } from "express";
import * as ctrl from "../controllers/branchControllers";
import * as empCtrl from "../controllers/employeeControllers";
import { validateRequest } from "../middleware/validationMiddleware";
import { createBranchSchema, updateBranchSchema } from "../validation/branchSchemas";

// Router for branch-related endpoints
const router = Router();

// Branch routes
router.get("/", ctrl.getAllBranches);
router.get("/:id", ctrl.getBranchById);
router.get("/:branchId/employees", empCtrl.getEmployeesByBranch);
router.post("/", validateRequest({ body: createBranchSchema }), ctrl.createBranch);
router.put("/:id", validateRequest({ body: updateBranchSchema }), ctrl.updateBranch);
router.delete("/:id", ctrl.deleteBranch);

export default router;