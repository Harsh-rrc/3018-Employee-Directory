import Joi from 'joi';

/**
 * @openapi
 * components:
 *   schemas:
 *     Employee:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - email
 *         - position
 *         - branchId
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the employee
 *           example: "emp_123abc"
 *         name:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           description: Full name of the employee
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           description: Employee's email address
 *           example: "john.doe@company.com"
 *         phone:
 *           type: string
 *           description: Employee's phone number
 *           example: "+1-555-123-4567"
 *         position:
 *           type: string
 *           minLength: 2
 *           maxLength: 100
 *           description: Job position/title
 *           example: "Software Engineer"
 *         branchId:
 *           type: string
 *           description: ID of the branch where employee works
 *           example: "branch_123abc"
 *         department:
 *           type: string
 *           description: Department name
 *           example: "Engineering"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the employee record was created
 *           example: "2024-01-15T10:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: When the employee record was last updated
 *           example: "2024-01-20T14:45:00Z"
 */

/**
 * Schema for validating new employee creation requests.
 * Ensures all required fields are present and properly formatted.
 */
export const createEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),    // employee name
  email: Joi.string().email().required(),           // valid email required
  phone: Joi.string().optional(),                   // phone number
  position: Joi.string().min(2).max(100).required(),// job title
  branchId: Joi.string().required(),      // branch identifier
  department: Joi.string().optional(),              // department
});

/**
 * Schema for validating employee update requests.
 * All fields are optional to allow partial updates.
 */
export const updateEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(100).optional(),
  email: Joi.string().email().optional(),
  position: Joi.string().min(2).max(100).optional(),
  branchId: Joi.string().optional(),
  department: Joi.string().optional(),
});
