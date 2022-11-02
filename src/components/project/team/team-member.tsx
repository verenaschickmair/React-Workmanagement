import { PlusIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTeamMembersState } from "../../../global-state/selected-team-member-atom";
import { teamMembersState } from "../../../global-state/team-member-atom";
import { TeamMemberData } from "../../../interfaces/team-member-data";
import { CustomButton } from "../../button/button";
import { AddTeamMember } from "./add-team-member";
import { EmptyTeamMembers } from "./empty-team-members";
import { TeamMemberComponent } from "./team-member-component";
import { TeamMemberItem } from "./team-member-list-item";

export const TeamMember = () => {
  const [teamMembers] = useRecoilState(teamMembersState)   
  return (
    <Fragment>
    <TeamMemberComponent shouldShowAddTeamMembers={true} teamMembers={teamMembers} />
    </Fragment>
  );
}
