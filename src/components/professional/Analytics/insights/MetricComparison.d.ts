interface ComparisonMetric {
    label: string;
    current: number;
    previous: number;
    target: number;
    unit: string;
}
interface MetricComparisonProps {
    metrics: ComparisonMetric[];
}
export declare function MetricComparison({ metrics }: MetricComparisonProps): import("react/jsx-runtime").JSX.Element;
export {};
