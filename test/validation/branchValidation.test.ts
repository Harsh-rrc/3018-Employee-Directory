import { createBranchSchema } from '../../src/api/v1/validation/branchValidation';

describe('Branch Validation', () => {
    it('should validate correct branch data', () => {
        const validData = {
            name: 'Downtown Branch',
            address: '123 Main Street, Toronto',
            phone: '+14165551234'
        };

        const { error } = createBranchSchema.validate(validData);
        expect(error).toBeUndefined();
    });

    it('should reject invalid phone number', () => {
        const invalidData = {
            name: 'Downtown Branch',
            address: '123 Main Street, Toronto',
            phone: '12345'
        };

        const { error } = createBranchSchema.validate(invalidData);
        expect(error).toBeDefined();
        expect(error?.details[0].message).toContain('fails to match');
    });
});