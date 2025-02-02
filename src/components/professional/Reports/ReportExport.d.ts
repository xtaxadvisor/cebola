interface ReportExportProps {
    onExport: (format: 'pdf' | 'csv' | 'email') => void;
}
export declare function ReportExport({ onExport }: ReportExportProps): import("react/jsx-runtime").JSX.Element;
export {};
