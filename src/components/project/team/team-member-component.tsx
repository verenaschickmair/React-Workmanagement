import { PlusIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTeamMembersState } from "../../../global-state/selected-team-member-atom";
import { teamMembersState } from "../../../global-state/team-member-atom";
import { TeamMemberData } from "../../../interfaces/team-member-data";
import { CustomButton } from "../../button/button";
import { AddTeamMember } from "./add-team-member";
import { EmptyTeamMembers } from "./empty-team-members";
import { TeamMemberItem } from "./team-member-list-item";

type TeamMemberComponentProps ={
  shouldShowAddTeamMembers?:boolean
  teamMembers: TeamMemberData[]
}
export const TeamMemberComponent = ({shouldShowAddTeamMembers=true,teamMembers}:TeamMemberComponentProps) => {
  return (
    <Fragment>
    <div className="mx-auto max-w-md sm:max-w-3xl">
      <div className="text-center">
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Select or add team members
          </h2>
        
        
      <AddTeamMember/>
      {teamMembers.length>0 ? null : <EmptyTeamMembers/>}
      </div>
      <div className="mt-10">
        <ul role="list" className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {teamMembers.map((person) => (
            <li key={person.id}>
             <TeamMemberItem person={person}/>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </Fragment>
  );
}
