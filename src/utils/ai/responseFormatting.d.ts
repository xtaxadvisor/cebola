import type { AIContext } from '../../types/ai';
export declare function formatResponse(response: string, context: AIContext): string;
export declare function extractActionItems(response: string): string[];
export declare function generateFollowUpQuestions(response: string, context: AIContext): string[];
