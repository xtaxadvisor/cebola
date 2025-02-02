export declare function useSettings(): {
    settings: import("../services/api/settings").Settings | undefined;
    isLoading: boolean;
    updateSettings: import("@tanstack/react-query").UseMutateFunction<import("../services/api/settings").Settings, Error, import("../services/api/settings").UpdateSettingsDTO, unknown>;
};
