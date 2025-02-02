interface DeductionsSectionProps {
    values: {
        type: 'standard' | 'itemized';
        childTaxCredit: number;
        studentLoanInterest: number;
        mortgageInterest: number;
    };
    onChange: (values: any) => void;
}
export declare function DeductionsSection({ values, onChange }: DeductionsSectionProps): import("react/jsx-runtime").JSX.Element;
export {};
