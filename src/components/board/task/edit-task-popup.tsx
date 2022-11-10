import { ChangeEvent, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { selectedTeamMembersState } from "../../../global-state/selected-team-member-atom";
import { tasksState } from "../../../global-state/tasks-atom";
import { getCurrentDate } from "../../../interfaces/project-data";
import { TeamMemberData } from "../../../interfaces/team-member-data";
import { CustomButton } from "../../custom-ui-elements/button/button";
import { CustomInputField } from "../../custom-ui-elements/input-field/custom-input-field";
import { RadioButton } from "../../custom-ui-elements/radio-button/radio-button";
import { CustomTextAreaField } from "../../custom-ui-elements/text-area-field/custom-text-area-field";
import { TeamMember } from "../../project/team/team-member";
import {TaskData} from "../../../interfaces/task-data";

type EditTaskModalProps = {
  onSuccess: () => void;
  taskData: TaskData;
};

export const EditTaskModal = ({ onSuccess, taskData }: EditTaskModalProps) => {
  const [taskTitle, setTaskTitle] = useState<string>(taskData.title);
  const [taskDescription, setTaskDescription] = useState<string>(taskData.description);
  const [taskBgColor, setTaskBgColor] = useState<string>(taskData.bgColor ? taskData.bgColor : "bg-red-500");
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
      alert("Task name empty or too short");
      return false;
    }
    return true;
  }

  function onButtonSaveClick() {
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
        Edit task
      </h1>
      <form className="mt-6 text-left space-y-6" action="#">
        <CustomInputField
          idTag="task-title"
          type="text"
          onChange={onInputChange}
          value={taskTitle}
          placeholder="Enter the task name"
        />

        <div className="flex">
          <CustomTextAreaField
            idTag="task-description"
            onChange={onInputAreaChange}
            value={taskDescription}
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
              defaultChecked={taskData.bgColor === "bg-red-500"}
              onChange={(event) => onRadioChange(event)}
            />
            <RadioButton
              idTag="task-bgColor2"
              name="bgColor"
              bgColor={"bg-green-500"}
              label="Grün"
              defaultChecked={taskData.bgColor === "bg-green-500"}
              onChange={(event) => onRadioChange(event)}
            />
            <RadioButton
              idTag="task-bgColor3"
              name="bgColor"
              bgColor={"bg-blue-500"}
              label="Blau"
              defaultChecked={taskData.bgColor === "bg-blue-500"}
              onChange={(event) => onRadioChange(event)}
            />
          </div>
        </div>

        <TeamMember
          shouldShowAddTeamMembers={false}
          teamMembers={taskData.members}
        />
      </form>

      <CustomButton
        onClick={onButtonSaveClick}
        buttonText="Save Changes"
        style={{ marginTop: "20px" }}
      />
    </Fragment>
  );
};