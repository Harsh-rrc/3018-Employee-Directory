// commit: refactor employeeService to use employees array instead of getEmployees

import { Employee, employees } from '../../../data/employees';

// Return the full list of employees
export function listEmployees(): Employee[] {
  return employees;
}

// Find a single employee by their ID
export function findEmployeeById(id: number): Employee | undefined {
  return employees.find((e: Employee) => e.id === id);
}

// Create and add a new employee
export function createEmployee(payload: Omit<Employee, 'id'>): Employee {
  const nextId = employees.length ? Math.max(...employees.map((e: Employee) => e.id)) + 1 : 1;
  const newEmp: Employee = { id: nextId, ...payload };
  employees.push(newEmp);
  return newEmp;
}

// Update an existing employee by ID
export function updateEmployee(id: number, changes: Partial<Omit<Employee, 'id'>>): Employee | null {
  const idx = employees.findIndex((e: Employee) => e.id === id);
  if (idx === -1) return null;
  employees[idx] = { ...employees[idx], ...changes };
  return employees[idx];
}

// Delete an employee by ID
export function deleteEmployee(id: number): boolean {
  const idx = employees.findIndex((e: Employee) => e.id === id);
  if (idx === -1) return false;
  employees.splice(idx, 1);
  return true;
}

// List employees that belong to a specific branch
export function listEmployeesByBranch(branchId: number): Employee[] {
  return employees.filter((e: Employee) => e.branchId === branchId);
}

// List employees that belong to a specific department
export function listEmployeesByDepartment(department: string): Employee[] {
  return employees.filter((e: Employee) => e.department.toLowerCase() === department.toLowerCase());
}