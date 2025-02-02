import type { AuthError, User } from '@supabase/supabase-js';
export declare const supabaseAuth: {
    signUp(email: string, password: string, userData: {
        name: string;
        role: string;
    }): Promise<{
        user: User | null;
        session: import("@supabase/supabase-js").AuthSession | null;
    }>;
    signIn(email: string, password: string): Promise<{
        user: User;
        session: import("@supabase/supabase-js").AuthSession;
        weakPassword?: import("@supabase/supabase-js").WeakPassword;
    }>;
    signOut(): Promise<void>;
    getCurrentUser(): Promise<import("@supabase/postgrest-js").UnstableGetResult<import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] : any, (import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["users"]["Row"], "users", (import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["users"] extends infer T ? T extends (import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] extends import("@supabase/postgrest-js/dist/cjs/types").GenericSchema ? import("../../lib/supabase/types").Database["public" extends keyof Database ? "public" : string & keyof Database] : any)["Tables"]["users"] ? T extends {
        Relationships: infer R;
    } ? R : unknown : never : never, "*"> | null>;
    resetPassword(email: string): Promise<void>;
    updatePassword(newPassword: string): Promise<void>;
    onAuthStateChange(callback: (user: User | null, error?: AuthError) => void): {
        data: {
            subscription: import("@supabase/supabase-js").Subscription;
        };
    };
};
