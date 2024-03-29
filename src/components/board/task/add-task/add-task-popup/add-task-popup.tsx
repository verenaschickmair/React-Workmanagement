import { ChangeEvent, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTeamMembersState } from "../../../../../global-state/selected-team-member-atom";
import { tasksState } from "../../../../../global-state/tasks-atom";
import { getCurrentDate } from "../../../../../interfaces/project-data";
import { TeamMemberData } from "../../../../../interfaces/team-member-data";
import { CustomButton } from "../../../../custom-ui-elements/custom-button/custom-button";
import { InputField } from "../../../../custom-ui-elements/input-field/input-field";
import { RadioButton } from "../../../../custom-ui-elements/radio-button/radio-button";
import { TextAreaField } from "../../../../custom-ui-elements/text-area-field/text-area-field";
import { TeamMemberList } from "../../../../project-list/team-member-list/team-member-list";

type AddTaskPopupProps = {
  onSuccess: () => void;
  teamMembers: TeamMemberData[];
  projectId: number;
};

export const AddTaskPopup = ({
  onSuccess,
  teamMembers,
  projectId,
}: AddTaskPopupProps) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskBgColor, setTaskBgColor] = useState<string>("bg-red-500");
  const [taskMembers] = useRecoilState(selectedTeamMembersState);
  const [tasks, setTasks] = useRecoilState(tasksState);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
  };

  const onInputAreaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskDescription(event.target.value);
  };

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskBgColor(event.target.value);
  };

  function isValid(): boolean {
    if (!taskTitle || taskTitle.length < 3) {
      alert("Project name empty or too short");
      return false;
    }
    return true;
  }

  function onButtonCreateClick() {
    if (isValid()) {
      if (taskMembers && taskMembers.length) {
        setTasks(
          tasks.concat({
            ...tasks,
            id: tasks.length + 1,
            title: taskTitle,
            description: taskDescription,
            dateOfCreation: getCurrentDate("."),
            members: taskMembers,
            bgColor: taskBgColor,
            columnId: 0,
            projectId: projectId,
          })
        );
        onSuccess();
      } else {
        alert("Please select at least one team member!");
      }
    }
  }

  return (
    <Fragment>
      <h1 className="mt-2 text-xl font-medium text-gray-900">
        Create a new task
      </h1>
      <form className="mt-6 text-left space-y-6">
        <InputField
          idTag="task-title"
          type="text"
          data-cy="input-task-title"
          onChange={onInputChange}
          value={taskTitle}
          placeholder="Enter the task name"
        />

        <div className="flex">
          <TextAreaField
            idTag="task-description"
            onChange={onInputAreaChange}
            value={taskDescription}
            data-cy="input-task-description"
            placeholder="Enter the task description"
            className="w-1/2"
          />

          <div className="w-1/3 ml-12">
            <h2>Farbe auswählen:</h2>

            <RadioButton
              idTag="task-bgColor1"
              name="bgColor"
              bgColor={"bg-red-500"}
              label="Rot"
              defaultChecked
              onChange={(event) => onRadioChange(event)}
            />
            <RadioButton
              idTag="task-bgColor2"
              name="bgColor"
              bgColor={"bg-green-500"}
              label="Grün"
              onChange={(event) => onRadioChange(event)}
            />
            <RadioButton
              idTag="task-bgColor3"
              name="bgColor"
              bgColor={"bg-blue-500"}
              label="Blau"
              onChange={(event) => onRadioChange(event)}
            />
          </div>
        </div>

        <TeamMemberList
          shouldShowAddTeamMembers={false}
          teamMembers={teamMembers}
        />
      </form>

      <CustomButton
        onClick={onButtonCreateClick}
        buttonText="Create Task"
        style={{ marginTop: "20px" }}
      />
    </Fragment>
  );
};
