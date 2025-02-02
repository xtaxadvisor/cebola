import type { Thread } from '../../types/discussion';
interface ThreadListProps {
    threads: Thread[];
    isLoading?: boolean;
}
export declare function ThreadList({ threads, isLoading }: ThreadListProps): import("react/jsx-runtime").JSX.Element;
export {};
