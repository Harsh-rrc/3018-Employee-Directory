import { employees, Employee } from "../../../data/employees";
export const getAllEmployees = (): Employee[] => employees;
export const getEmployeeById = (id: number): Employee | undefined => {
  return employees.find((emp: Employee) => emp.id === id);
};
export const createEmployee = (data: Omit<Employee, "id">): Employee => {
  const newEmployee: Employee = { id: employees.length + 1, ...data };
  employees.push(newEmployee);
  return newEmployee;
};
export const updateEmployee = (id: number, updates: Partial<Employee>): Employee | null => {
  const index = employees.findIndex((emp: Employee) => emp.id === id);
  if (index === -1) return null;
  employees[index] = { ...employees[index], ...updates };
  return employees[index];
};
export const deleteEmployee = (id: number): boolean => {
  const index = employees.findIndex((emp: Employee) => emp.id === id);
  if (index === -1) return false;
  employees.splice(index, 1);
  return true;
};