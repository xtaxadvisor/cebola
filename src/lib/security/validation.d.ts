import { z } from 'zod';
export declare const inputSchemas: {
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    url: z.ZodOptional<z.ZodString>;
};
export declare function sanitizeInput(input: string): string;
export declare function sanitizeObject<T extends Record<string, unknown>>(obj: T): T;
export declare function escapeSQLString(value: string): string;
export declare function validateFileUpload(file: File): {
    isValid: boolean;
    error?: string;
};
