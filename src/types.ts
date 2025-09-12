// @nebulaai/core - Shared types and interfaces

export interface BaseResult {
  id: string;
  name: string;
  tagline: string;
  domain: string;
  domainStatus: 'available' | 'premium' | 'taken';
  vibe: string;
}

export interface LogoSuggestion {
  style: string;
  colors: string[];
  iconSuggestion: string;
  description: string;
}

export interface IndustryInsight {
  id: string;
  industry: string;
  trendScore: number;
  marketCap: string;
  growthRate: string;
  competitorCount: number;
  aiRecommendation: string;
}

export interface CompetitiveAnalysis {
  similarNames: string[];
  differentiationScore: number;
  marketPositioning: string;
}

export interface SocialMediaHandle {
  platform: string;
  handle: string;
  available: boolean;
}

export interface GenerationOptions {
  length?: 'short' | 'medium' | 'long';
  style?: 'tech' | 'friendly' | 'professional' | 'creative' | 'premium';
  market?: 'b2b' | 'b2c' | 'enterprise' | 'consumer';
  memorability?: 'high' | 'medium' | 'low';
  internationalFriendly?: boolean;
}

export interface AIScores {
  aiScore: number;
  memorabilityScore: number;
  brandingPotential: number;
  internationalAppeal: number;
}

export interface AnalysisResult {
  memorability: number;
  pronunciation: number;
  brandability: number;
  suggestions: string[];
}

export type IndustryType =
  | 'ai-powered'
  | 'fintech'
  | 'saas'
  | 'web3'
  | 'ecommerce'
  | 'social'
  | 'creative';

export type VibeType = IndustryType;

// Utility types
export type AsyncResult<T> = Promise<T>;
export type GeneratorFunction<T> = (
  vibe: string,
  count?: number,
  options?: GenerationOptions
) => T[];
export type AnalyzerFunction<T> = (input: string) => AsyncResult<T>;

export class ValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
