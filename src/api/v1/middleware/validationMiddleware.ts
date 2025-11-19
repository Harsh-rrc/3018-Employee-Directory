// this middleware validates request bodies against a given Joi schema.
import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

interface ValidationSchemas {
  body?: ObjectSchema;
  params?: ObjectSchema;
  query?: ObjectSchema;
}

// Middleware to validate request data against provided Joi schemas
export const validateRequest = (schemas: ValidationSchemas) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: string[] = [];

    if (schemas.body) {
      const { error } = schemas.body.validate(req.body, { abortEarly: false });
      if (error) {
        errors.push(...error.details.map(d => d.message));
      }
    }

    if (schemas.params) {
      const { error } = schemas.params.validate(req.params, { abortEarly: false });
      if (error) {
        errors.push(...error.details.map(d => d.message));
      }
    }

    if (schemas.query) {
      const { error } = schemas.query.validate(req.query, { abortEarly: false });
      if (error) {
        errors.push(...error.details.map(d => d.message));
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        error: "Validation failed",
        details: errors,
      });
    }

    next();
  };
};