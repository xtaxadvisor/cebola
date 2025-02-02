interface IncomeSectionProps {
    values: {
        gross: number;
        w2: number;
        selfEmployment: number;
        investment: number;
    };
    onChange: (values: any) => void;
}
export declare function IncomeSection({ values, onChange }: IncomeSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
