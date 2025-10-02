import request from 'supertest';
import app from '../src/app';
import { branches } from '../src/data/branches';
import { employees } from '../src/data/employees';
 
const initialBranches = [...branches];
const initialEmployees = [...employees];
 
describe('Branch Endpoints', () => {
  beforeEach(() => {
    // Reset data before each test
    branches.splice(0, branches.length, ...initialBranches);
    employees.splice(0, employees.length, ...initialEmployees);
  });
 
  describe('GET /api/v1/branches', () => {
    it('should return all branches', async () => {
      const response = await request(app).get('/api/v1/branches');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });
 
  describe('GET /api/v1/branches/:id', () => {
    it('should return a branch by id', async () => {
      const response = await request(app).get('/api/v1/branches/1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
      expect(response.body).toHaveProperty('name');
    });
 
    it('should return 404 for non-existent branch', async () => {
      const response = await request(app).get('/api/v1/branches/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Branch not found');
    });
 
    it('should return 400 for invalid id', async () => {
      const response = await request(app).get('/api/v1/branches/abc');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Invalid id');
    });
  });
 
  describe('POST /api/v1/branches', () => {
    it('should create a new branch', async () => {
      const newBranch = { name: 'Test Branch', address: '123 Test St', phone: '123-456-7890' };
      const response = await request(app).post('/api/v1/branches').send(newBranch);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newBranch.name);
    });
 
    it('should return 400 for missing required fields', async () => {
      const response = await request(app).post('/api/v1/branches').send({ name: 'Test' });
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Missing required fields: name, address, phone');
    });
  });
 
  describe('PUT /api/v1/branches/:id', () => {
    it('should update a branch', async () => {
      const updates = { name: 'Updated Branch' };
      const response = await request(app).put('/api/v1/branches/1').send(updates);
      expect(response.status).toBe(200);
      expect(response.body.name).toBe('Updated Branch');
    });
 
    it('should return 404 for non-existent branch', async () => {
      const response = await request(app).put('/api/v1/branches/999').send({ name: 'Test' });
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Branch not found');
    });
 
    it('should return 400 for invalid id', async () => {
      const response = await request(app).put('/api/v1/branches/abc').send({ name: 'Test' });
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Invalid id');
    });
  });
 
  describe('DELETE /api/v1/branches/:id', () => {
    it('should delete a branch', async () => {
      const response = await request(app).delete('/api/v1/branches/1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('message', 'Deleted');
    });
 
    it('should return 404 for non-existent branch', async () => {
      const response = await request(app).delete('/api/v1/branches/999');
      expect(response.status).toBe(404);
      expect(response.body).toHaveProperty('message', 'Branch not found');
    });
 
    it('should return 400 for invalid id', async () => {
      const response = await request(app).delete('/api/v1/branches/abc');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('message', 'Invalid id');
    });
  });
 
  describe('GET /api/v1/branches/:branchId/employees', () => {
    it('should return employees for a branch', async () => {
      const response = await request(app).get('/api/v1/branches/1/employees');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      response.body.forEach((emp: any) => {
        expect(emp.branchId).toBe(1);
      });
    });
 
    it('should return 400 for invalid branchId', async () => {
      const response = await request(app).get('/api/v1/branches/abc/employees');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error', 'Missing branchId param');
    });
  });
});