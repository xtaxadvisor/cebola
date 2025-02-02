import type { MetricThreshold, PerformanceMetrics } from '../../types/analytics';
export declare function checkThresholdViolation(value: number, threshold: MetricThreshold): 'normal' | 'warning' | 'critical';
export declare function getThresholdColor(status: 'normal' | 'warning' | 'critical'): string;
export declare function calculateMetricStatus(metrics: PerformanceMetrics): Record<string, 'normal' | 'warning' | 'critical'>;
