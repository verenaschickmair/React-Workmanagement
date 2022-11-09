import { MinusIcon } from "@heroicons/react/20/solid";
import { PlusIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTeamMembersState } from "../../../global-state/selected-team-member-atom";
import { TeamMemberData } from "../../../interfaces/team-member-data";

type TeamMemberItemProps = {
  person: TeamMemberData;
  isSelected?: boolean;
};
export const TeamMemberItem = ({
  person,
  isSelected = false,
}: TeamMemberItemProps) => {
  const [selectedState, setSelectedState] = useState(isSelected);
  const [selectedTeamMembers, setSelectedTeamMembers] = useRecoilState(
    selectedTeamMembersState
  );
  const onItemClick = (member: TeamMemberData) => {
    setSelectedState(!selectedState);
    if (!selectedState) {
      setSelectedTeamMembers(selectedTeamMembers.concat(member));
    } else {
      setSelectedTeamMembers(
        selectedTeamMembers.filter((person) => person !== member)
      );
    }
  };
  const defaultClasses =
    "group flex w-full items-center justify-between space-x-3 rounded-full border border-gray-300 p-2 text-left shadow-sm hover:bg-gray-50";
  const classes = classNames(defaultClasses, {
    "ring-2 ring-green-500 ring-offset-2": selectedState,
  });
  return (
    <button
      onClick={() => onItemClick(person)}
      type="button"
      className={classes}
    >
      <span className="flex min-w-0 flex-1 items-center space-x-3">
        <span className="block min-w-0 flex-1" style={{ marginLeft: "16px" }}>
          <span className="block truncate text-sm font-medium text-gray-900">
            {person.name}
          </span>
        </span>
      </span>
      <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center">
        {selectedState ? (
          <MinusIcon
            className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ) : (
          <PlusIcon
            className="h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        )}
      </span>
    </button>
  );
};
