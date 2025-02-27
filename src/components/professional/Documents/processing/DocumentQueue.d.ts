import type { QueuedDocument } from '../../../../types/documents';
interface DocumentQueueProps {
    documents: QueuedDocument[];
    onProcessDocument: (id: string) => void;
}
export declare function DocumentQueue({ documents, onProcessDocument }: DocumentQueueProps): import("react/jsx-runtime").JSX.Element;
export {};
