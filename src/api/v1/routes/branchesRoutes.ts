import request from 'supertest';
import app from '../../../app';

describe('Branch Routes', () => {
  describe('GET /api/v1/branches', () => {
    it('should return all branches with status 200', async () => {
      const response = await request(app).get('/api/v1/branches');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /api/v1/branches/:id', () => {
    it('should return branch when valid ID is provided', async () => {
      const response = await request(app).get('/api/v1/branches/1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
    });

    it('should return 400 for invalid branch ID', async () => {
      const response = await request(app).get('/api/v1/branches/invalid');
      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  describe('POST /api/v1/branches', () => {
    it('should create new branch with valid data', async () => {
      const newBranch = {
        name: 'Test Branch',
        address: '123 Test St',
        phone: '123-456-7890'
      };

      const response = await request(app)
        .post('/api/v1/branches')
        .send(newBranch);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newBranch.name);
    });

    it('should return 400 when required fields are missing', async () => {
      const invalidBranch = {
        name: 'Test Branch'
        // Missing address and phone
      };

      const response = await request(app)
        .post('/api/v1/branches')
        .send(invalidBranch);

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });

  // Add tests for update and delete endpoints...
});