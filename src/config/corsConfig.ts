import cors from "cors";

export const getCorsOptions = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  if (isDevelopment) {
    return {
      origin: true,
      credentials: true
    };
  }

  return {
    origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  };
};

export default cors(getCorsOptions());