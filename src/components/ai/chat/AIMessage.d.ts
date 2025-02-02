import type { AIMessage as AIMessageType } from '../../../types/ai';
interface AIMessageProps {
    message: AIMessageType;
    isLast: boolean;
}
export declare function AIMessage({ message, isLast }: AIMessageProps): import("react/jsx-runtime").JSX.Element;
export {};
