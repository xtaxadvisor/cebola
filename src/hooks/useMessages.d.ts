export declare function useMessages(): {
    messages: import("../services/api/message").MessageThread[] | undefined;
    isLoading: boolean;
    sendMessage: import("@tanstack/react-query").UseMutateFunction<Message, Error, import("../services/api/message").SendMessageDTO, unknown>;
    markAsRead: import("@tanstack/react-query").UseMutateFunction<void, Error, string, unknown>;
    isSending: any;
};
