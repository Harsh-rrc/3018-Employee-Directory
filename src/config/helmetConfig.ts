import helmet from "helmet";

export const getHelmetConfig = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  // Development: relaxed settings for easier testing
  if (isDevelopment) {
    return helmet({
      contentSecurityPolicy: false,
      hsts: false,
      crossOriginResourcePolicy: { policy: "cross-origin" }
    });
  }

  // Production: stronger security
  return helmet({
    contentSecurityPolicy: false,

    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true
    },

    hidePoweredBy: true,
    noSniff: true,

    frameguard: { action: "deny" },

    referrerPolicy: { policy: "no-referrer" },

    crossOriginResourcePolicy: { policy: "same-site" }
  });
};