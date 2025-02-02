export declare function useScreenShare(): {
    isSharing: boolean;
    startScreenShare: () => Promise<void>;
    stopScreenShare: () => void;
};
