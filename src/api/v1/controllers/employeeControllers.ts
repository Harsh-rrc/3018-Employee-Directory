import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeService";
import { CreateEmployeeRequest, Employee } from "../models/employeeModel";

// Create a new employee
export async function createEmployee(
  req: Request<{}, {}, CreateEmployeeRequest>,
  res: Response<Employee>,
  next: NextFunction
) {
  try {
    const employeeData = req.body;
    const created = employeeService.createEmployee(employeeData);
    return res.status(201).json(created);
  } catch (error) {
    next(error);
  }
}

// Get all employees
export async function getAllEmployees(
  _req: Request,
  res: Response<Employee[]>,
  next: NextFunction
) {
  try {
    const employees = employeeService.listEmployees();
    return res.json(employees);
  } catch (error) {
    next(error);
  }
}

// Get employee by ID
export async function getEmployeeById(
  req: Request<{ id: string }>,
  res: Response<Employee>,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const emp = employeeService.findEmployeeById(id);

    if (!emp) throw new Error("Employee not found");

    return res.json(emp);
  } catch (error) {
    next(error);
  }
}

// Update employee
export async function updateEmployee(
  req: Request<{ id: string }, {}, Partial<CreateEmployeeRequest>>,
  res: Response<Employee>,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const updated = employeeService.updateEmployee(id, req.body);

    if (!updated) throw new Error("Employee not found");

    return res.json(updated);
  } catch (error) {
    next(error);
  }
}

// Delete employee
export async function deleteEmployee(
  req: Request<{ id: string }>,
  res: Response<{ message: string }>,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const ok = employeeService.deleteEmployee(id);

    if (!ok) throw new Error("Employee not found");

    return res.json({ message: "Employee deleted successfully" });
  } catch (error) {
    next(error);
  }
}

// Get employees by branch
export async function getEmployeesByBranch(
  req: Request<{ branchId: string }>,
  res: Response<Employee[]>,
  next: NextFunction
) {
  try {
    const branchId = Number(req.params.branchId);
    if (isNaN(branchId)) throw new Error("Missing branchId param");

    const employees = employeeService.listEmployeesByBranch(branchId);
    return res.json(employees);
  } catch (error) {
    next(error);
  }
}

// Get employees by department
export async function getEmployeesByDepartment(
  req: Request<{ department: string }>,
  res: Response<Employee[]>,
  next: NextFunction
) {
  try {
    const department = (req.params.department || "").trim();
    if (!department) throw new Error("Missing department param");

    const employees = employeeService.listEmployeesByDepartment(department);
    return res.json(employees);
  } catch (error) {
    next(error);
  }
}
