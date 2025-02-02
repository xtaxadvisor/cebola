import { z } from 'zod';
export declare const AdminSessionSchema: z.ZodObject<{
    id: z.ZodString;
    role: z.ZodLiteral<"admin">;
    permissions: z.ZodArray<z.ZodEnum<[string, ...string[]]>, "many">;
    exp: z.ZodNumber;
    iat: z.ZodNumber;
    lastActive: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: string;
    role: "admin";
    permissions: string[];
    exp: number;
    iat: number;
    lastActive: number;
}, {
    id: string;
    role: "admin";
    permissions: string[];
    exp: number;
    iat: number;
    lastActive: number;
}>;
export type AdminSession = z.infer<typeof AdminSessionSchema>;
export declare class AdminSessionManager {
    private static instance;
    private readonly secretKey;
    private readonly sessionKey;
    private constructor();
    static getInstance(): AdminSessionManager;
    createSession(adminId: string, permissions: string[]): Promise<string>;
    validateSession(): Promise<AdminSession | null>;
    private refreshSession;
    clearSession(): void;
}
export declare const adminSessionManager: AdminSessionManager;
