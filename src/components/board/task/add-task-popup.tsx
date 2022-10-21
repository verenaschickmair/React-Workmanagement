import { ChangeEvent, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { taskState } from "../../../global-state/task-atom";
import { CustomButton } from "../../custom-ui-elements/button/button";
import { CustomInputField } from "../../custom-ui-elements/input-field/custom-input-field";
import { RadioButton } from "../../custom-ui-elements/radio-button/radio-button";

type AddTaskModalProps = {
  onSuccess: () => void;
};

export const AddTaskModal = ({ onSuccess }: AddTaskModalProps) => {
  const [taskName, setTaskName] = useState<string>("");
  const [taskColor, setTaskColor] = useState<string>("");
  const [taskInitials, setTaskInitials] = useState<string>("");
  const [tasks, setTasks] = useRecoilState(taskState);

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskName(event.target.value);
    setTaskInitials(setInitials());
    setTaskColor(event.target.value);
  };


  function isValid(): boolean {
    if (!taskName || taskName.length < 3) {
      alert("Project name empty or too short");
      return false;
    }
    return true;
  }

  function setInitials(): string {
    return taskName.slice(0, 2);
  }

  function onButtonCreateClick() {
    if (isValid()) {
      setTasks(
        tasks.concat({
          id: tasks.length + 1,
          title: taskName,
          initials: taskInitials,
          bgColor: taskColor,
        })
      );
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
          value={taskName}
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

      <CustomButton
        onClick={onButtonCreateClick}
        buttonText="Create Task"
        style={{ marginTop: "20px" }}
      />
    </Fragment>
  );
};
