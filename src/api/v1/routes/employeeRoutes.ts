import { Router } from 'express';
import * as ctrl from '../controllers/employeeControllers';
 
const router = Router();
 
router.post('/', ctrl.createEmployee);
router.get('/', ctrl.getAllEmployees);
router.get('/:department', ctrl.getEmployeesByDepartment);
router.get('/:id', ctrl.getEmployeeById);
router.put('/:id', ctrl.updateEmployee);
router.delete('/:id', ctrl.deleteEmployee);
 
export default router;