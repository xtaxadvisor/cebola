export declare class AdminAuthService {
    private static instance;
    private readonly secretKey;
    private readonly API_URL;
    private constructor();
    static getInstance(): AdminAuthService;
    login(credentials: {
        username: string;
        password: string;
        totpCode?: string;
    }): Promise<boolean>;
    private getAuthToken;
}
export declare const adminAuthService: AdminAuthService;
