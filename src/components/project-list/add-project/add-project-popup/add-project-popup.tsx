import { ChangeEvent, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { projectState } from "../../../../global-state/project-atom";
import { selectedTeamMembersState } from "../../../../global-state/selected-team-member-atom";
import { teamMembersState } from "../../../../global-state/team-member-atom";
import { BoardColumnData } from "../../../../interfaces/board-column-data";
import { getCurrentDate } from "../../../../interfaces/project-data";
import { CustomButton } from "../../../custom-ui-elements/custom-button/custom-button";
import { InputField } from "../../../custom-ui-elements/input-field/input-field";
import { TeamMemberList } from "../../team-member-list/team-member-list";


type AddProjectPopupProps = {
  onSuccess: () => void;
};

const boardColumns: BoardColumnData[] = [
  {
    id: 0,
    name: "Backlog",
    tasks: [],
  },
  {
    id: 1,
    name: "Todo",
    tasks: [],
  },
  {
    id: 2,
    name: "In Progress",
    tasks: [],
  },
  {
    id: 3,
    name: "Review",
    tasks: [],
  },
  {
    id: 4,
    name: "Done",
    tasks: [],
  },
];

export const AddProjectPopup = ({ onSuccess }: AddProjectPopupProps) => {
  const [projectName, setProjectName] = useState<string>("");
  const [projects, setProjects] = useRecoilState(projectState);
  const [teamMembers] = useRecoilState(teamMembersState);
  const [selectedTeamMembers, setSelectedTeamMembers] = useRecoilState(
    selectedTeamMembersState
  );
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setProjectName(event.target.value);
  };

  function isValid(): boolean {
    if (!projectName || projectName.length < 3) {
      alert("Project name empty or too short");
      return false;
    }
    if (selectedTeamMembers.length == 0) {
      alert("At least one team-member-list member needs to be selected");
      return false;
    }
    return true;
  }

  function onButtonCreateClick() {
    if (isValid()) {
      setProjects(
        projects.concat({
          id: projects.length + 1,
          title: projectName,
          dateOfCreation: getCurrentDate("."),
          teamMembers: selectedTeamMembers,
          board: { id: 1, columns: boardColumns },
        })
      );
      onSuccess();
    }
  }

  return (
    <Fragment>
      <h1 className="mt-2 text-xl font-medium text-gray-900">
        Create a new project
      </h1>
      <form className="mt-6 sm:flex sm:items-center" action="#">
        <InputField
          idTag="project-name"
          type="text"
          onChange={onInputChange}
          value={projectName}
          data-cy="project-input-name"
          placeholder="Enter the project name"
        />
      </form>
      <TeamMemberList shouldShowAddTeamMembers={true} teamMembers={teamMembers} />
      <CustomButton
        onClick={onButtonCreateClick}
        buttonText="Create Project"
        style={{ marginTop: "20px" }}
        data-cy="create-project-button"
      />
    </Fragment>
  );
};
