import type { ProcessingStep } from '../../../../types/documents';
interface ProcessingStatusProps {
    steps: ProcessingStep[];
    startTime: string;
    currentStep?: string;
}
export declare function ProcessingStatus({ steps, startTime, currentStep }: ProcessingStatusProps): import("react/jsx-runtime").JSX.Element;
export {};
