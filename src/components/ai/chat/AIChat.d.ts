import type { AIMessage } from '../../../types/ai';
interface AIChatProps {
    messages: AIMessage[];
    onSendMessage: (message: string) => void;
    isLoading: boolean;
    error?: Error;
}
export declare function AIChat({ messages, onSendMessage, isLoading, error }: AIChatProps): import("react/jsx-runtime").JSX.Element;
export {};
