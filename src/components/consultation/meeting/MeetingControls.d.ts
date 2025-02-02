interface MeetingControlsProps {
    onShare: () => void;
    onInvite: () => void;
    onChat: () => void;
    isChatOpen: boolean;
}
export declare function MeetingControls({ onShare, onInvite, onChat, isChatOpen }: MeetingControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
