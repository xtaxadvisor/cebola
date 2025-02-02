import type { MetricComparison } from '../../types/analytics';
export declare function calculateYearOverYear(current: number, previous: number): MetricComparison;
export declare function calculatePerformanceScore(metrics: Record<string, number>, weights: Record<string, number>): number;
export declare function rankMetrics(metrics: Array<{
    name: string;
    value: number;
}>, order?: 'asc' | 'desc'): Array<{
    name: string;
    value: number;
    rank: number;
}>;
