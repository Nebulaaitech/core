// @nebulaai/core - Default configuration

export const DEFAULT_CONFIG = {
  maxRetries: 3,
  defaultTimeout: 5000,
  rateLimit: {
    maxRequests: 100,
    windowMs: 60000, // 1 minute
  },
} as const;