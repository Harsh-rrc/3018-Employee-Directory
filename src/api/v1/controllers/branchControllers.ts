import { Request, Response } from 'express';
import employeeService from '../services/employee.service';

export const createEmployee = (req: Request, res: Response) => {
  const { name, position, department, email, phone, branchId } = req.body;
  if (!name || !position || !department || !email || !phone || !branchId) {
    return res.status(400).json({ message: 'Missing required fields' });
  }
  const newEmp = employeeService.create({ name, position, department, email, phone, branchId });
  return res.status(201).json(newEmp);
};

export const getAllEmployees = (_req: Request, res: Response) => {
  return res.status(200).json(employeeService.getAll());
};

export const getEmployeeById = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid id' });
  const emp = employeeService.getById(id);
  if (!emp) return res.status(404).json({ message: 'Employee not found' });
  return res.status(200).json(emp);
};

export const updateEmployee = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const changes = req.body;
  if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid id' });
  const updated = employeeService.update(id, changes);
  if (!updated) return res.status(404).json({ message: 'Employee not found' });
  return res.status(200).json(updated);
};

export const deleteEmployee = (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) return res.status(400).json({ message: 'Invalid id' });
  const success = employeeService.delete(id);
  if (!success) return res.status(404).json({ message: 'Employee not found' });
  return res.status(200).json({ message: 'Deleted' });
};

export const getEmployeesByBranch = (req: Request, res: Response) => {
  const branchId = Number(req.params.branchId);
  if (Number.isNaN(branchId)) return res.status(400).json({ message: 'Invalid branchId' });
  const list = employeeService.getByBranch(branchId);
  return res.status(200).json(list);
};

export const getEmployeesByDepartment = (req: Request, res: Response) => {
  const dept = req.params.department;
  if (!dept) return res.status(400).json({ message: 'Missing department' });
  const list = employeeService.getByDepartment(dept);
  return res.status(200).json(list);
};