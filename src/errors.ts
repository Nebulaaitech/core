// @nebulaai/core - Error classes

export class CoreError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'CoreError';
  }
}

export class ValidationError extends CoreError {
  constructor(message: string) {
    super(message, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
  }
}

export class APIError extends CoreError {
  constructor(message: string, public statusCode?: number) {
    super(message, 'API_ERROR');
    this.name = 'APIError';
  }
}