import Joi from 'joi';

/**
 * Schema for validating new branch creation requests.
 * Ensures required fields are present and properly formatted.
 */
export const createBranchSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),    // branch name
  address: Joi.string().min(5).required(),             // branch address
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).optional(), // optional phone number
});

/**
 * Schema for validating branch update requests.
 * All fields are optional to allow partial updates.
 */
export const updateBranchSchema = Joi.object({
  name: Joi.string().min(2).max(150).optional(),
  address: Joi.string().min(5).optional(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).optional(),
});