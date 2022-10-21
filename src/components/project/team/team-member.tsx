import { Fragment } from "react";
import { useRecoilState } from "recoil";
import { teamMembersState } from "../../../global-state/team-member-atom";
import { AddTeamMember } from "./add-team-member";
import { EmptyTeamMembers } from "./empty-team-members";
import { TeamMemberItem } from "./team-member-list-item";
export const TeamMember = () => {
  const [teamMembers] = useRecoilState(teamMembersState);
  return (
    <Fragment>
      <div className="mx-auto max-w-md sm:max-w-3xl">
        <div className="text-center">
          <h2 className="mt-2 text-lg font-medium text-gray-900">
            Select or add team members
          </h2>

          <AddTeamMember />
          {teamMembers.length > 0 ? null : <EmptyTeamMembers />}
        </div>
        <div className="mt-10">
          <ul
            role="list"
            className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {teamMembers.map((person) => (
              <li key={person.id}>
                <TeamMemberItem person={person} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
