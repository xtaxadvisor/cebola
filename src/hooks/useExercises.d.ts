import type { Exercise } from '../types/student';
export declare function useExercises(): {
    exercises: Exercise[];
    isLoading: boolean;
    totalPoints: number;
    startExercise: import("@tanstack/react-query").UseMutateFunction<{
        sessionId: string;
    }, Error, string, unknown>;
};
