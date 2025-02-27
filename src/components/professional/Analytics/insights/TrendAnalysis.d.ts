interface TrendData {
    metric: string;
    current: number;
    previous: number;
    target: number;
}
interface TrendAnalysisProps {
    data: TrendData[];
}
export declare function TrendAnalysis({ data }: TrendAnalysisProps): import("react/jsx-runtime").JSX.Element;
export {};
