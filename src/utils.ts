// @nebulaai/core - Utility function

import type { IndustryType } from './types';
import { ValidationError } from './errors';

export function getRandomElement<T>(array: T[]): T {
  if (array.length === 0) {
    throw new ValidationError('Cannot get random element from empty array');
  }
  return array[Math.floor(Math.random() * array.length)];
}

export function generateId(prefix: string = 'item'): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export function validateVibe(vibe: string): vibe is IndustryType {
  const validVibes: IndustryType[] = [
    'ai-powered', 'fintech', 'saas', 'web3', 
    'ecommerce', 'social', 'creative'
  ];
  return validVibes.includes(vibe as IndustryType);
}

export function calculateScore(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function normalizeString(str: string): string {
  return str.toLowerCase().trim().replace(/\s+/g, '-');
}

export function capitalizeFirst(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function sanitizeInput(input: string): string {
  return input.replace(/[^a-zA-Z0-9\s-_]/g, '').trim();
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

export function formatPercentage(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

export class RateLimiter {
  private requests: number[] = [];
  
  constructor(
    private maxRequests: number,
    private windowMs: number
  ) {}
  
  canMakeRequest(): boolean {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.windowMs);
    
    if (this.requests.length < this.maxRequests) {
      this.requests.push(now);
      return true;
    }
    
    return false;
  }
  
  getTimeUntilNextRequest(): number {
    if (this.requests.length < this.maxRequests) return 0;
    
    const oldestRequest = Math.min(...this.requests);
    return this.windowMs - (Date.now() - oldestRequest);
  }
}
