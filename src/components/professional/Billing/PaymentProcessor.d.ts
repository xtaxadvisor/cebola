interface PaymentProcessorProps {
    amount: number;
    onSuccess: (transactionId: string) => void;
    onCancel: () => void;
}
export declare function PaymentProcessor({ amount, onSuccess, onCancel }: PaymentProcessorProps): import("react/jsx-runtime").JSX.Element;
export {};
