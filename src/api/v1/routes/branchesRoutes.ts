import { Router } from 'express';
import * as ctrl from '../controllers/branchControllers';
import * as empCtrl from '../controllers/employeeControllers';
 
const router = Router();
 
router.post('/', ctrl.createBranch);
router.get('/', ctrl.getAllBranches);
router.get('/:id', ctrl.getBranchById);
router.put('/:id', ctrl.updateBranch);
router.delete('/:id', ctrl.deleteBranch);
 
// logical: employees in a branch
router.get('/:branchId/employees', empCtrl.getEmployeesByBranch);
 
export default router;