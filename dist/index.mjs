// src/types.ts
var NebulaAIError = class extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = "NebulaAIError";
  }
};
var ValidationError = class extends NebulaAIError {
  constructor(message) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
};
var APIError = class extends NebulaAIError {
  constructor(message, statusCode) {
    super(message, "API_ERROR");
    this.statusCode = statusCode;
    this.name = "APIError";
  }
};

// src/utils.ts
function getRandomElement(array) {
  if (array.length === 0) {
    throw new ValidationError("Cannot get random element from empty array");
  }
  return array[Math.floor(Math.random() * array.length)];
}
function generateId(prefix = "item") {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function validateVibe(vibe) {
  const validVibes = [
    "ai-powered",
    "fintech",
    "saas",
    "web3",
    "ecommerce",
    "social",
    "creative"
  ];
  return validVibes.includes(vibe);
}
function calculateScore(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function normalizeString(str) {
  return str.toLowerCase().trim().replace(/\s+/g, "-");
}
function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function sanitizeInput(input) {
  return input.replace(/[^a-zA-Z0-9\s-_]/g, "").trim();
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
function isValidUrl(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(amount);
}
function formatPercentage(value, decimals = 1) {
  return `${value.toFixed(decimals)}%`;
}
var RateLimiter = class {
  constructor(maxRequests, windowMs) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = [];
  }
  canMakeRequest() {
    const now = Date.now();
    this.requests = this.requests.filter((time) => now - time < this.windowMs);
    if (this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }
    return false;
  }
  getTimeUntilNextRequest() {
    if (this.requests.length < this.maxRequests) return 0;
    const oldestRequest = Math.min(...this.requests);
    return this.windowMs - (Date.now() - oldestRequest);
  }
};

// src/index.ts
var VERSION = "1.0.0";
var PACKAGE_NAME = "@nebulaai/core";
var DEFAULT_CONFIG = {
  maxRetries: 3,
  defaultTimeout: 5e3,
  rateLimit: {
    maxRequests: 100,
    windowMs: 6e4
    // 1 minute
  }
};
export {
  APIError,
  DEFAULT_CONFIG,
  NebulaAIError,
  PACKAGE_NAME,
  RateLimiter,
  VERSION,
  ValidationError,
  calculateScore,
  capitalizeFirst,
  delay,
  formatCurrency,
  formatPercentage,
  generateId,
  getRandomElement,
  isValidEmail,
  isValidUrl,
  normalizeString,
  sanitizeInput,
  validateVibe
};
