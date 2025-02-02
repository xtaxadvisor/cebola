export declare function useRealtime(): {
    presence: any;
    isConnected: boolean;
    sendMessage: (message: string, data?: any) => Promise<void>;
    updatePresence: (data: any) => Promise<void>;
};
