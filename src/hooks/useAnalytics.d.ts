export declare function useAnalytics(timeRange: string): {
    metrics: import("../services/api/analytics").AnalyticsMetrics | undefined;
    revenueData: {
        date: string;
        value: number;
    }[] | undefined;
    clientGrowth: {
        date: string;
        value: number;
    }[] | undefined;
    performanceMetrics: any;
    isLoading: boolean;
    exportAnalytics: (format: "pdf" | "csv" | "excel") => Promise<void>;
};
