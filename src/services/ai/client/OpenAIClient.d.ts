import OpenAI from 'openai';
export declare class OpenAIClient {
    private static instance;
    private static initializationError;
    private constructor();
    static getInstance(): OpenAI | null;
    static reset(): void;
    static getInitializationError(): Error | null;
}
export declare const openaiClient: OpenAI | null;
