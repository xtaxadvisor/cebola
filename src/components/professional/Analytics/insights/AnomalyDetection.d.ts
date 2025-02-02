interface AnomalyDetectionProps {
    data: Array<{
        date: string;
        value: number;
    }>;
    metric: string;
    threshold?: number;
}
export declare function AnomalyDetection({ data, metric, threshold }: AnomalyDetectionProps): import("react/jsx-runtime").JSX.Element | null;
export {};
