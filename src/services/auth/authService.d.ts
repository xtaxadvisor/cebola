export declare class AuthService {
    private static readonly MAX_RETRIES;
    private static retryCount;
    static signIn(email: string, password: string): Promise<{
        user: import("@supabase/supabase-js").AuthUser;
        session: import("@supabase/supabase-js").AuthSession;
        weakPassword?: import("@supabase/supabase-js").WeakPassword;
    } | {
        user: {
            id: string;
            email: string;
            role: string;
            name: string;
        };
    } | null>;
    private static handleAuthError;
    static validateSession(): Promise<boolean>;
}
