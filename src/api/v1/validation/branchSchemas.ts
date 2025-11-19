import Joi from 'joi';

/**
 * @openapi
 * components:
 *   schemas:
 *     Branch:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - address
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the branch
 *           example: "branch_123abc"
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           description: Name of the branch
 *           example: "Main Branch"
 *         address:
 *           type: string
 *           minLength: 5
 *           description: Physical address of the branch
 *           example: "123 Main Street, City, State 12345"
 *         phone:
 *           type: string
 *           pattern: '^\\+?\\d{1,3}-?\\d{3}-?\\d{3}-?\\d{4}$'
 *           description: Phone number of the branch
 *           example: "+1-555-123-4567"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the branch was created
 *           example: "2024-01-15T10:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: When the branch was last updated
 *           example: "2024-01-20T14:45:00Z"
 */

/**
 * Schema for validating new branch creation requests.
 * Ensures required fields are present and properly formatted.
 */
export const createBranchSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),    // branch name
  address: Joi.string().min(5).required(),             // branch address
  phone: Joi.string().pattern(/^\+?\d{1,3}-?\d{3}-?\d{3}-?\d{4}$/).optional(), // optional phone number
});

/**
 * Schema for validating branch update requests.
 * All fields are optional to allow partial updates.
 */
export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(150).optional(),
  address: Joi.string().min(5).optional(),
  phone: Joi.string().pattern(/^\+?\d{1,3}-?\d{3}-?\d{3}-?\d{4}$/).optional(),
});
