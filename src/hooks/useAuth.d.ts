export declare function useAuth(): {
    user: any;
    loading: boolean;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, userData: {
        name: string;
        role: string;
    }) => Promise<void>;
    logout: () => Promise<void>;
};
