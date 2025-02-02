export declare function useClient(clientId: string): {
    client: any;
    isLoading: boolean;
    updateClient: import("@tanstack/react-query").UseMutateFunction<unknown, Error, void, unknown>;
    deleteClient: import("@tanstack/react-query").UseMutateFunction<unknown, Error, void, unknown>;
};
