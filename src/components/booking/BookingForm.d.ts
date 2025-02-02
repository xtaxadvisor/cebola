interface BookingFormProps {
    serviceType: string;
    onSubmit: (data: any) => void;
    onCancel: () => void;
}
export declare function BookingForm({ serviceType, onSubmit, onCancel }: BookingFormProps): import("react/jsx-runtime").JSX.Element;
export {};
