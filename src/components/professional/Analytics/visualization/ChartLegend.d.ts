interface LegendItem {
    color: string;
    label: string;
    value?: number | string;
}
interface ChartLegendProps {
    items: LegendItem[];
    position?: 'top' | 'bottom' | 'left' | 'right';
}
export declare function ChartLegend({ items, position }: ChartLegendProps): import("react/jsx-runtime").JSX.Element;
export {};
