export declare const aiService: {
    getResponse(message: string, context?: string): Promise<string>;
    getCompletion(prompt: string, options?: {
        maxTokens?: number;
        temperature?: number;
        context?: string;
    }): Promise<string>;
};
