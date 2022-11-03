import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { TaskData } from "../../../interfaces/task-data";
import { CustomButton } from "../../custom-ui-elements/button/button";
import { Popup } from "../../popup/popup";
import { AddTaskModal } from "./add-task-popup";

type AddTaskProps = {
  tasks: TaskData[];
};

export const AddTask = ({ tasks }: AddTaskProps) => {
  const [showAddTaskView, setShowAddTaskView] = useState(false);

  function onButtonClick() {
    setShowAddTaskView(true);
  }
  function onPopupClose() {
    setShowAddTaskView(false);
  }

  return (
    <div className="text-center">
      <div className="mt-6">
        <CustomButton
          onClick={onButtonClick}
          buttonText={"New Tasks"}
          icon={<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />}
        />
        <Popup trigger={showAddTaskView} onCloseClick={onPopupClose}>
          <AddTaskModal tasks={tasks} onSuccess={onPopupClose} />
        </Popup>
      </div>
    </div>
  );
};
