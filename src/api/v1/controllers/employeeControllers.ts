import { Request, Response, NextFunction } from "express";
import * as employeeService from "../services/employeeService";
import { CreateEmployeeRequest, Employee } from "../models/employeeModel";
import { ApiResponse } from "../models/apiresponseModel";

// Create a new employee
export async function createEmployee(
  req: Request<{}, {}, CreateEmployeeRequest>,
  res: Response<ApiResponse<Employee>>,
  next: NextFunction
) {
  try {
    const employeeData = req.body;
    const created = employeeService.createEmployee(employeeData);

    const response: ApiResponse<Employee> = {
      success: true,
      data: created,
      message: "Employee created successfully",
    };
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
}

// Get all employees
export async function getAllEmployees(
  _req: Request,
  res: Response<ApiResponse<Employee[]>>,
  next: NextFunction
) {
  try {
    const employees = employeeService.listEmployees();
    const response: ApiResponse<Employee[]> = {
      success: true,
      data: employees,
      message: "Employees retrieved successfully",
    };
    return res.json(response);
  } catch (error) {
    next(error);
  }
}

// Get employee by ID
export async function getEmployeeById(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<Employee>>,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const emp = employeeService.findEmployeeById(id);

    if (!emp) throw new Error("Employee not found");

    const response: ApiResponse<Employee> = {
      success: true,
      data: emp,
      message: "Employee retrieved successfully",
    };
    return res.json(response);
  } catch (error) {
    next(error);
  }
}

// Update employee
export async function updateEmployee(
  req: Request<{ id: string }, {}, Partial<CreateEmployeeRequest>>,
  res: Response<ApiResponse<Employee>>,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const updated = employeeService.updateEmployee(id, req.body);

    if (!updated) throw new Error("Employee not found");

    const response: ApiResponse<Employee> = {
      success: true,
      data: updated,
      message: "Employee updated successfully",
    };
    return res.json(response);
  } catch (error) {
    next(error);
  }
}

// Delete employee
export async function deleteEmployee(
  req: Request<{ id: string }>,
  res: Response<ApiResponse<null>>,
  next: NextFunction
) {
  try {
    const id = Number(req.params.id);
    const ok = employeeService.deleteEmployee(id);

    if (!ok) throw new Error("Employee not found");

    const response: ApiResponse<null> = {
      success: true,
      data: null,
      message: "Employee deleted successfully",
    };
    return res.json(response);
  } catch (error) {
    next(error);
  }
}

// Get employees by branch
export async function getEmployeesByBranch(
  req: Request<{ branchId: string }>,
  res: Response<ApiResponse<Employee[]>>,
  next: NextFunction
) {
  try {
    const branchId = Number(req.params.branchId);
    if (isNaN(branchId)) throw new Error("Invalid branchId param");

    const employees = employeeService.listEmployeesByBranch(branchId);
    const response: ApiResponse<Employee[]> = {
      success: true,
      data: employees,
      message: `Employees for branch ${branchId} retrieved successfully`,
    };
    return res.json(response);
  } catch (error) {
    next(error);
  }
}

// Get employees by department
export async function getEmployeesByDepartment(
  req: Request<{ department: string }>,
  res: Response<ApiResponse<Employee[]>>,
  next: NextFunction
) {
  try {
    const department = (req.params.department || "").trim();
    if (!department) throw new Error("Missing department param");

    const employees = employeeService.listEmployeesByDepartment(department);
    const response: ApiResponse<Employee[]> = {
      success: true,
      data: employees,
      message: `Employees in department ${department} retrieved successfully`,
    };
    return res.json(response);
  } catch (error) {
    next(error);
  }
}