import type { ChatMessage } from '../services/api/chat';
export declare function useChat(consultationId: string): {
    messages: ChatMessage[];
    isLoading: boolean;
    sendMessage: (content: string) => Promise<void>;
    retryMessage: (messageId: string) => void;
    isSending: boolean;
};
