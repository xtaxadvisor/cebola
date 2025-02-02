interface MessageInputProps {
    onSendMessage: (content: string, attachments?: File[]) => void;
    isLoading?: boolean;
}
export declare function MessageInput({ onSendMessage, isLoading }: MessageInputProps): import("react/jsx-runtime").JSX.Element;
export {};
