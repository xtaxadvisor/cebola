import type { TeamMember } from '../../types/team';
interface TeamMemberCardProps extends TeamMember {
    className?: string;
}
export declare function TeamMemberCard({ name, role, description, image, email, linkedin, website, className }: TeamMemberCardProps): import("react/jsx-runtime").JSX.Element;
export {};
