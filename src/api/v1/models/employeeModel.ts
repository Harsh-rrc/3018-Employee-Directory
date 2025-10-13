// Employee interface defines the structure of an employee record in the system.
export interface Employee {
id: number;
name: string;
email: string;
phone: string;
position: string;
branchId: number;
department: string;

}

// CreateEmployeeRequest interface defines the structure of the request body when creating a new employee.
export interface CreateEmployeeRequest {
name: string;
email: string;
phone: string;
position: string;
branchId: number;
department: string;
}