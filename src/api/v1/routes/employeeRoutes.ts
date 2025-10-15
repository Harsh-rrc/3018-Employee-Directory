import express from "express";
import * as ctrl from "../controllers/employeeControllers";
import { validateRequest } from "../middleware/validationMiddleware";
import {
  createEmployeeSchema,
  updateEmployeeSchema,
} from "../validation/employeeSchemas";

const router = express.Router();

router.get("/", ctrl.getAllEmployees);
router.get("/:id", ctrl.getEmployeeById);
router.get("/department/:department", ctrl.getEmployeesByDepartment);

//  Use employee schemas, not branch schemas
router.post("/", validateRequest({ body: createEmployeeSchema }), ctrl.createEmployee);
router.put("/:id", validateRequest({ body: updateEmployeeSchema }), ctrl.updateEmployee);
router.delete("/:id", ctrl.deleteEmployee);

export default router;
