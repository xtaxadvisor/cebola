import type { InvestmentThread } from '../services/api/investmentForum';
export declare function useInvestmentForum(category?: string): {
    threads: InvestmentThread[] | undefined;
    isLoading: boolean;
    createThread: import("@tanstack/react-query").UseMutateFunction<InvestmentThread, Error, Omit<InvestmentThread, "id" | "createdAt" | "updatedAt" | "replies" | "views">, unknown>;
    updateThread: import("@tanstack/react-query").UseMutateFunction<{
        updatedAt: string;
        id: string;
        title: string;
        content: string;
        category: "real-estate" | "maintenance" | "market-analysis" | "property-management";
        author: {
            id: string;
            name: string;
            role: string;
        };
        createdAt: string;
        replies: number;
        views: number;
        tags: string[];
        isPinned: boolean;
    }, Error, {
        id: string;
    } & Partial<InvestmentThread>, unknown>;
    deleteThread: import("@tanstack/react-query").UseMutateFunction<void, Error, string, unknown>;
    isCreating: any;
    isUpdating: any;
    isDeleting: any;
};
