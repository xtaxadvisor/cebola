interface UseAIOptions {
    context?: string;
}
export declare function useAI({ context }?: UseAIOptions): {
    messages: AIMessage[];
    sendMessage: (content: string) => Promise<any>;
    isLoading: boolean;
};
export {};
