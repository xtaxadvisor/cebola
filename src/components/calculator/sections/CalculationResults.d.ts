interface CalculationResultsProps {
    results: {
        refund: number;
        taxesOwed: number;
        effectiveTaxRate: number;
    };
}
export declare function CalculationResults({ results }: CalculationResultsProps): import("react/jsx-runtime").JSX.Element;
export {};
