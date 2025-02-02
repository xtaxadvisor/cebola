export declare function useVideoStream(consultationId: string): {
    videoRef: import("react").RefObject<HTMLVideoElement>;
    isMuted: boolean;
    isVideoEnabled: boolean;
    isLoading: boolean;
    toggleMute: () => void;
    toggleVideo: () => void;
};
