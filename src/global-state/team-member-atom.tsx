import { atom } from "recoil";
import { TeamMemberData } from "../interfaces/team-member-data";

export const teamMembersState = atom<TeamMemberData[]>({
  key: "teamMembersState",
  default: [],
});
