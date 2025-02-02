import type { TeamMember } from '../types/team';
export declare function useTeamMembers(): {
    teamMembers: TeamMember[] | undefined;
    isLoading: boolean;
    addTeamMember: import("@tanstack/react-query").UseMutateFunction<TeamMember, Error, import("../services/api/team").CreateTeamMemberDTO, unknown>;
    updateTeamMember: import("@tanstack/react-query").UseMutateFunction<TeamMember, Error, import("../services/api/team").UpdateTeamMemberDTO, unknown>;
    deleteTeamMember: import("@tanstack/react-query").UseMutateFunction<void, Error, string, unknown>;
};
