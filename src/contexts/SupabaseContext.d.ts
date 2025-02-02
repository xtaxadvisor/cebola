import React from 'react';
import type { User } from '../types';
interface SupabaseContextType {
    user: User | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, userData: {
        name: string;
        role: string;
    }) => Promise<void>;
    signOut: () => Promise<void>;
}
export declare function SupabaseProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useSupabase(): SupabaseContextType;
export {};
