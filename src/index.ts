// @nebulaai/core - Main entry
import { version } from '../package.json';

export * from './types';
export * from './utils';
export * from './errors';
export * from './config';

export const VERSION = version;
export const PACKAGE_NAME = '@nebulaai/core';