import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { taskState } from "../../../global-state/task-atom";
import { CustomButton } from "../../custom-ui-elements/button/button";
import { Popup } from "../../popup/popup";
import { AddTaskModal } from "./add-task-popup";

export const AddTask = () => {
  const [tasks] = useRecoilState(taskState);
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
          <AddTaskModal onSuccess={onPopupClose} />
        </Popup>
      </div>
    </div>
  );
};
