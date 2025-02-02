interface ReportFiltersProps {
    dateRange: string;
    setDateRange: (range: string) => void;
    reportType: string;
    setReportType: (type: string) => void;
}
export declare function ReportFilters({ dateRange, setDateRange, reportType, setReportType }: ReportFiltersProps): import("react/jsx-runtime").JSX.Element;
export {};
