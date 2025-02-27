import type { User } from '../../../types';
interface AdminHeaderProps {
    user: User | null;
    onLogout: () => void;
}
export declare function AdminHeader({ user, onLogout }: AdminHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
