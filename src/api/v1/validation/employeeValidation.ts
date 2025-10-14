import Joi from 'joi';

/**
 * Schema for validating new employee creation requests.
 * Ensures all required fields are present and properly formatted.
 */
export const createEmployeeSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),    // employee name
  email: Joi.string().email().required(),           // valid email required
  phone: Joi.string().optional(),                   // phone number
  position: Joi.string().min(2).max(100).required(),// job title
  branchId: Joi.number().integer().required(),      // branch identifier
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
  branchId: Joi.number().integer().optional(),
  department: Joi.string().optional(),
});