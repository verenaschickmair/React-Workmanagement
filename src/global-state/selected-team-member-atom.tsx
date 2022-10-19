import { atom } from "recoil";
import { TeamMemberData } from "../interfaces/team-member-data";

export const selectedTeamMembersState = atom<TeamMemberData[]>({
    key: 'selectedTeamMembersState',
    default: []
})