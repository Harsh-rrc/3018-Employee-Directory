// Employee interface defines the structure of an employee record in the system.
export interface Employee {
id: string;
name: string;
email: string;
position: string;
branchId: string;
department?: string;
}