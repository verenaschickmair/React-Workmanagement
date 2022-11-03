import { ChangeEvent, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { teamMembersState } from "../../../global-state/team-member-atom";
import { getCurrentDate } from "../../../interfaces/project-data";
import { TaskData } from "../../../interfaces/task-data";
import { TeamMemberData } from "../../../interfaces/team-member-data";
import { CustomButton } from "../../custom-ui-elements/button/button";
import { CustomInputField } from "../../custom-ui-elements/input-field/custom-input-field";
import { RadioButton } from "../../custom-ui-elements/radio-button/radio-button";
import { TeamMember } from "../../project/team/team-member";

type AddTaskModalProps = {
  onSuccess: () => void;
  tasks: TaskData[];
};

export const AddTaskModal = ({ onSuccess, tasks }: AddTaskModalProps) => {
  const [taskTitle, setTaskTitle] = useState<string>("");
  const [taskDescription, setTaskDescription] = useState<string>("");
  const [taskBgColor, setTaskBgColor] = useState<string>("");
  const [taskMembers, setTaskMembers] = useState<TeamMemberData[]>();

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(event.target.value);
    setTaskDescription(event.target.value);
    setTaskBgColor(event.target.value);
    setTaskMembers(undefined);
  };

  function isValid(): boolean {
    if (!taskTitle || taskTitle.length < 3) {
      alert("Project name empty or too short");
      return false;
    }
    return true;
  }

  function setInitials(): string {
    return taskTitle.slice(0, 2);
  }

  function onButtonCreateClick() {
    if (isValid()) {
      if (taskMembers) {
        tasks.push({
          id: tasks.length + 1,
          title: taskTitle,
          description: taskDescription,
          dateOfCreation: getCurrentDate("."),
          members: taskMembers,
          bgColor: taskBgColor,
          columnId: 0,
        });
      }
      onSuccess();
    }
  }

  return (
    <Fragment>
      <h1 className="mt-2 text-xl font-medium text-gray-900">
        Create a new task
      </h1>
      <form className="mt-6 text-left" action="#">
        <CustomInputField
          idTag="task-name"
          type="text"
          onChange={onInputChange}
          value={taskTitle}
          placeholder="Enter the task name"
        />

        <div className="sm:col-span-2 mt-8">
          <div className="max-w-lg">
            <p className="text-sm text-gray-500">Task Color</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <RadioButton idTag={"1"} bgColor={"bg-color-green"} />
              </div>
            </div>
          </div>
        </div>
      </form>

      <TeamMember shouldShowAddTeamMembers={false} teamMembers={[]} />

      <CustomButton
        onClick={onButtonCreateClick}
        buttonText="Create Task"
        style={{ marginTop: "20px" }}
      />
    </Fragment>
  );
};
