import { ChangeEvent, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { projectState } from "../../../global-state/project-atom";
import { selectedTeamMembersState } from "../../../global-state/selected-team-member-atom";
import { teamMembersState } from "../../../global-state/team-member-atom";
import { getCurrentDate } from "../../../interfaces/project-data";
import { CustomButton } from "../../custom-ui-elements/button/button";
import { CustomInputField } from "../../custom-ui-elements/input-field/custom-input-field";
import { TeamMember } from "../team/team-member";

type AddProjectModalProps = {
  onSuccess: () => void;
};

export const AddProjectModal = ({ onSuccess }: AddProjectModalProps) => {
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
      alert("At least one team member needs to be selected");
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
        <CustomInputField
          idTag="project-name"
          type="text"
          onChange={onInputChange}
          value={projectName}
          placeholder="Enter the project name"
        />
      </form>
      <TeamMember shouldShowAddTeamMembers={true} teamMembers={teamMembers} />
      <CustomButton
        onClick={onButtonCreateClick}
        buttonText="Create Project"
        style={{ marginTop: "20px" }}
      />
    </Fragment>
  );
};
