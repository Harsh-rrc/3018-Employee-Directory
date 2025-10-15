import { createEmployeeSchema } from '../../src/api/v1/validation/employeeSchemas';

describe('Employee Validation', () => {
    it('should validate correct employee data', () => {
        const validData = {
            name: 'John Doe',
            position: 'Developer',
            email: 'john@example.com',
            branchId: '1'
        };

        const { error } = createEmployeeSchema.validate(validData);
        expect(error).toBeUndefined();
    });

    it('should reject invalid email', () => {
        const invalidData = {
            name: 'John Doe',
            position: 'Developer',
            email: 'invalid-email',
            branchId: 'branch-123'
        };

        const { error } = createEmployeeSchema.validate(invalidData);
        expect(error).toBeDefined();
        expect(error?.details[0].message).toContain('valid email');
    });
});