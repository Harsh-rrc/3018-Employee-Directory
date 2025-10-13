// this middleware validates request bodies against a given Joi schema.
import { Request, Response, NextFunction } from "express";
import { Schema } from "joi";

/**
 * 
 * @param schema 
 * @returns 
 */
export const validate = (schema: Schema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body, { abortEarly: false });   // abortEarly: false to get all errors
    if (error) {
      return res.status(400).json({
        message: "Validation error",
        details: error.details.map((d) => d.message),
      });
    }
    next();
  };
};