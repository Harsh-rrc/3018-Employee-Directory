import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task API Documentation",
      version: "1.0.0",
      description: "API for managing tasks"
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || "http://localhost:3000/api/v1",
        description: "Development server"
      }
    ]
  },
  apis: ["./src/api/v1/routes/*.ts", "./src/api/v1/validations/*.ts"]
};

export const generateSwaggerSpec = () => {
  return swaggerJsdoc(swaggerOptions);
};