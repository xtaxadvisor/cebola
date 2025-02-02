import type { ScheduleConsultationDTO, UpdateConsultationDTO } from '../services/api/consultation';
export declare function useConsultation(consultationId?: string): {
    consultation: import("../services/api/consultation").Consultation | null;
    isLoading: boolean;
    scheduleConsultation: import("@tanstack/react-query").UseMutateFunction<import("../services/api/consultation").Consultation, Error, ScheduleConsultationDTO, unknown>;
    updateConsultation: import("@tanstack/react-query").UseMutateFunction<import("../services/api/consultation").Consultation, Error, UpdateConsultationDTO, unknown>;
    isScheduling: any;
    isUpdating: any;
    hasAccess: any;
};
