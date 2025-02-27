interface ChartTooltipProps {
    active?: boolean;
    payload?: Array<{
        value: number;
        dataKey: string;
    }>;
    label?: string;
    valuePrefix?: string;
    valueSuffix?: string;
}
export declare function ChartTooltip({ active, payload, label, valuePrefix, valueSuffix }: ChartTooltipProps): import("react/jsx-runtime").JSX.Element | null;
export {};
