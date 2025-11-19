import Joi from 'joi';

/**
 * @openapi
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - description
 *         - createdAt
 *         - updatedAt
 *       properties:
 *         id:
 *           type: string
 *           description: Unique identifier for the item
 *           example: "item_123abc"
 *         name:
 *           type: string
 *           description: Name of the item
 *           example: "Premium Widget"
 *         description:
 *           type: string
 *           description: Description of the item
 *           example: "A high-quality widget for all your needs"
 *         price:
 *           type: number
 *           description: Price of the item
 *           example: 29.99
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: When the item was created
 *           example: "2024-01-15T10:30:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: When the item was last updated
 *           example: "2024-01-20T14:45:00Z"
 */

/**
 * Schema for validating new item creation requests.
 * Ensures required fields are present and properly formatted.
 */
export const createItemSchema = Joi.object({
  name: Joi.string().required(),        // item name
  description: Joi.string().required(), // item description
  price: Joi.number().optional(),       // optional price
});

/**
 * Schema for validating item update requests.
 * All fields are optional to allow partial updates.
 */
export const updateItemSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().optional(),
});
