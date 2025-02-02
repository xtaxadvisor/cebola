interface MetricsGridProps {
    metrics: {
        revenue: {
            value: number;
            change: number;
        };
        clients: {
            value: number;
            change: number;
        };
        responseTime: {
            value: number;
            change: number;
        };
        satisfaction: {
            value: number;
            change: number;
        };
    } | null;
    isLoading: boolean;
}
export declare function MetricsGrid({ metrics, isLoading }: MetricsGridProps): import("react/jsx-runtime").JSX.Element | null;
export {};
