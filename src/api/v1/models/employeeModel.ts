// src/api/v1/models/employeeModel.ts
export interface Employee {
id?: string; 
firstName: string;
lastName: string;
email: string;
position?: string;
branchId?: string;
department?: string;
createdAt?: string;
}