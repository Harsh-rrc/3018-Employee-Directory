import request from 'supertest';
import app from '../src/app';
import { branches } from '../src/data/branches';
import { employees } from '../src/data/employees';
 
const initialBranches = [...branches];
const initialEmployees = [...employees];
 
describe('Employee Endpoints', () => {
  beforeEach(() => {
    // Reset data before each test
    branches.splice(0, branches.length, ...initialBranches);
    employees.splice(0, employees.length, ...initialEmployees);
  });
 
  describe('GET /api/v1/employees', () => {
    it('should return all employees', async () => {
      const response = await request(app).get('/api/v1/employees');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
 
  describe('GET /api/v1/employees/:id', () => {
    it('should return an employee by id', async () => {
      const response = await request(app).get('/api/v1/employees/1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('name');
    });
 
    it('should return 404 for non-existent employee', async () => {
      const response = await request(app).get('/api/v1/employees/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Employee not found');
    });
  });
 
  describe('POST /api/v1/employees', () => {
    it('should create a new employee', async () => {
      const newEmployee = {
        name: 'Test Employee',
        position: 'Tester',
        department: 'QA',
        email: 'test@example.com',
        phone: '123-456-7890',
        branchId: 1
      };
      const response = await request(app).post('/api/v1/employees').send(newEmployee);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newEmployee.name);
    });
 
    it('should return 400 for missing required fields', async () => {
      const response = await request(app).post('/api/v1/employees').send({ name: 'Test' });
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error', 'Missing required fields: name, phone');
    });
  });
 
  describe('PUT /api/v1/employees/:id', () => {
    it('should update an employee', async () => {
      const updates = { name: 'Updated Employee' };
      const response = await request(app).put('/api/v1/employees/1').send(updates);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Updated Employee');
    });
 
    it('should return 404 for non-existent employee', async () => {
      const response = await request(app).put('/api/v1/employees/999').send({ name: 'Test' });
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Employee not found');
    });
  });
 
  describe('DELETE /api/v1/employees/:id', () => {
    it('should delete an employee', async () => {
      const response = await request(app).delete('/api/v1/employees/1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Employee deleted');
    });
 
    it('should return 404 for non-existent employee', async () => {
      const response = await request(app).delete('/api/v1/employees/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('error', 'Employee not found');
    });
  });
 
    describe('GET /api/v1/employees/department/:department', () => {
      it('should return employees by department', async () => {
        const response = await request(app).get('/api/v1/employees/department/Management');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        response.body.forEach((emp: any) => {
          expect(emp.department.toLowerCase()).toBe('management');
        });
      });
 
      it('should return 404 for empty department', async () => {
        const response = await request(app).get('/api/v1/employees/department/');
        expect(response.status).toBe(404);
      });
    });
});