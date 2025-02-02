interface AIMessageInputProps {
    onSend: (message: string) => void;
    isDisabled?: boolean;
    placeholder?: string;
}
export declare function AIMessageInput({ onSend, isDisabled, placeholder }: AIMessageInputProps): import("react/jsx-runtime").JSX.Element;
export {};
