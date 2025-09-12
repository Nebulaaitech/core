interface BaseResult {
    id: string;
    name: string;
    tagline: string;
    domain: string;
    domainStatus: 'available' | 'premium' | 'taken';
    vibe: string;
}
interface LogoSuggestion {
    style: string;
    colors: string[];
    iconSuggestion: string;
    description: string;
}
interface IndustryInsight {
    id: string;
    industry: string;
    trendScore: number;
    marketCap: string;
    growthRate: string;
    competitorCount: number;
    aiRecommendation: string;
}
interface CompetitiveAnalysis {
    similarNames: string[];
    differentiationScore: number;
    marketPositioning: string;
}
interface SocialMediaHandle {
    platform: string;
    handle: string;
    available: boolean;
}
interface GenerationOptions {
    length?: 'short' | 'medium' | 'long';
    style?: 'tech' | 'friendly' | 'professional' | 'creative' | 'premium';
    market?: 'b2b' | 'b2c' | 'enterprise' | 'consumer';
    memorability?: 'high' | 'medium' | 'low';
    internationalFriendly?: boolean;
}
interface AIScores {
    aiScore: number;
    memorabilityScore: number;
    brandingPotential: number;
    internationalAppeal: number;
}
interface AnalysisResult {
    memorability: number;
    pronunciation: number;
    brandability: number;
    suggestions: string[];
}
type IndustryType = 'ai-powered' | 'fintech' | 'saas' | 'web3' | 'ecommerce' | 'social' | 'creative';
type VibeType = IndustryType;
type AsyncResult<T> = Promise<T>;
type GeneratorFunction<T> = (vibe: string, count?: number, options?: GenerationOptions) => T[];
type AnalyzerFunction<T> = (input: string) => AsyncResult<T>;
declare class NebulaAIError extends Error {
    code?: string | undefined;
    constructor(message: string, code?: string | undefined);
}
declare class ValidationError extends NebulaAIError {
    constructor(message: string);
}
declare class APIError extends NebulaAIError {
    statusCode?: number | undefined;
    constructor(message: string, statusCode?: number | undefined);
}

declare function getRandomElement<T>(array: T[]): T;
declare function generateId(prefix?: string): string;
declare function validateVibe(vibe: string): vibe is IndustryType;
declare function calculateScore(min: number, max: number): number;
declare function normalizeString(str: string): string;
declare function capitalizeFirst(str: string): string;
declare function delay(ms: number): Promise<void>;
declare function sanitizeInput(input: string): string;
declare function isValidEmail(email: string): boolean;
declare function isValidUrl(url: string): boolean;
declare function formatCurrency(amount: number, currency?: string): string;
declare function formatPercentage(value: number, decimals?: number): string;
declare class RateLimiter {
    private maxRequests;
    private windowMs;
    private requests;
    constructor(maxRequests: number, windowMs: number);
    canMakeRequest(): boolean;
    getTimeUntilNextRequest(): number;
}

declare const VERSION = "1.0.0";
declare const PACKAGE_NAME = "@nebulaai/core";
declare const DEFAULT_CONFIG: {
    readonly maxRetries: 3;
    readonly defaultTimeout: 5000;
    readonly rateLimit: {
        readonly maxRequests: 100;
        readonly windowMs: 60000;
    };
};

export { type AIScores, APIError, type AnalysisResult, type AnalyzerFunction, type AsyncResult, type BaseResult, type CompetitiveAnalysis, DEFAULT_CONFIG, type GenerationOptions, type GeneratorFunction, type IndustryInsight, type IndustryType, type LogoSuggestion, NebulaAIError, PACKAGE_NAME, RateLimiter, type SocialMediaHandle, VERSION, ValidationError, type VibeType, calculateScore, capitalizeFirst, delay, formatCurrency, formatPercentage, generateId, getRandomElement, isValidEmail, isValidUrl, normalizeString, sanitizeInput, validateVibe };
