interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
    onClose: () => void;
}
export declare function Toast({ message, type, onClose }: ToastProps): import("react/jsx-runtime").JSX.Element;
export {};
