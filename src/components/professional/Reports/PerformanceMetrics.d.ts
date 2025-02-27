interface Metric {
    label: string;
    value: string | number;
    change: number;
    trend: 'up' | 'down';
}
interface PerformanceMetricsProps {
    metrics: Metric[];
}
export declare function PerformanceMetrics({ metrics }: PerformanceMetricsProps): import("react/jsx-runtime").JSX.Element;
export {};
