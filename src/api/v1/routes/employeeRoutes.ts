import { Router } from 'express';
import * as ctrl from '../controllers/employeeControllers';
import { validate } from '../middleware/validationMiddleware';
import { createEmployeeSchema, updateEmployeeSchema } from '../validation/employeeValidation';

const router = Router();

router.post('/', validate(createEmployeeSchema), ctrl.createEmployee);
router.get('/', ctrl.getAllEmployees);
router.get('/:department', ctrl.getEmployeesByDepartment);
router.get('/:id', ctrl.getEmployeeById);
router.put('/:id', validate(updateEmployeeSchema), ctrl.updateEmployee);
router.delete('/:id', ctrl.deleteEmployee);
 
export default router;