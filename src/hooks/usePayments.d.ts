export declare function usePayments(clientId?: string): {
    payments: {
        id: string;
        invoiceId: string;
        amount: number;
        date: string;
        method: string;
    }[];
    isLoading: boolean;
    filterStatus: string;
    setFilterStatus: import("react").Dispatch<import("react").SetStateAction<string>>;
    processPayment: import("@tanstack/react-query").UseMutateFunction<unknown, Error, void, unknown>;
    refundPayment: import("@tanstack/react-query").UseMutateFunction<unknown, Error, void, unknown>;
};
