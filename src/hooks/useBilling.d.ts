import type { Invoice, CreateInvoiceDTO, UpdateInvoiceDTO } from '../services/api/billing';
export declare function useBilling(): {
    invoices: Invoice[];
    stats: import("../services/api/billing").InvoiceStats | undefined;
    isLoading: boolean;
    filterStatus: string;
    setFilterStatus: import("react").Dispatch<import("react").SetStateAction<string>>;
    searchTerm: string;
    setSearchTerm: import("react").Dispatch<import("react").SetStateAction<string>>;
    createInvoice: import("@tanstack/react-query").UseMutateFunction<Invoice, Error, CreateInvoiceDTO, unknown>;
    updateInvoice: import("@tanstack/react-query").UseMutateFunction<Invoice, Error, UpdateInvoiceDTO, unknown>;
    deleteInvoice: import("@tanstack/react-query").UseMutateFunction<void, Error, string, unknown>;
    markAsPaid: import("@tanstack/react-query").UseMutateFunction<Invoice, Error, string, unknown>;
    sendInvoice: import("@tanstack/react-query").UseMutateFunction<void, Error, string, unknown>;
    downloadInvoice: (id: string, format?: "pdf" | "csv") => Promise<void>;
};
