export declare function useAIMonitoring(): {
    metrics: {
        totalRequests: number;
        averageResponseTime: number;
        errorRate: number;
    };
    history: AIMessage[];
    isDebugEnabled: boolean;
    toggleDebug: () => void;
    clearHistory: () => void;
};
