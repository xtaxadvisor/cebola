export declare function useReports(): {
    dateRange: string;
    setDateRange: import("react").Dispatch<import("react").SetStateAction<string>>;
    reportType: string;
    setReportType: import("react").Dispatch<import("react").SetStateAction<string>>;
    metrics: any;
    revenueData: {
        date: string;
        value: number;
    }[] | undefined;
    clientGrowth: {
        date: string;
        value: number;
    }[] | undefined;
    isLoading: boolean;
    exportReport: (format: "pdf" | "csv" | "email") => Promise<void>;
};
