declare class SupabaseConnectionManager {
    private static instance;
    private isConnected;
    private retryCount;
    private readonly MAX_RETRIES;
    private readonly RETRY_DELAY;
    private constructor();
    static getInstance(): SupabaseConnectionManager;
    private setupConnectionMonitoring;
    checkConnection(): Promise<boolean>;
    getConnectionStatus(): boolean;
    resetRetryCount(): void;
}
export declare const supabaseConnectionManager: SupabaseConnectionManager;
export {};
