import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { TaskData } from "../../../interfaces/task-data";
import { Popup } from "../../popup/popup";
import { DragAndDrop } from "../drag-and-drop";
import { TaskDetail } from "./details/task-detail";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type TaskItemProps = {
  taskData: TaskData;
};

export const TaskItem = ({ taskData }: TaskItemProps) => {
  const [showTaskDetailView, setShowTaskDetail] = useState(false);

  function onButtonClick() {
    setShowTaskDetail(true);
  }
  function onPopupClose() {
    setShowTaskDetail(false);
  }

  return (
    <Fragment>
      <Popup trigger={showTaskDetailView} onCloseClick={onPopupClose}>
        <TaskDetail taskData={taskData} onSuccess={onPopupClose} />
      </Popup>
      <div
        className="dragItem flex flex-1 h-16 cursor-pointer items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white hover:bg-gray-200"
        draggable="true"
        onClick={onButtonClick}
        id={"drag" + taskData.id.toString()}
      >
        <div
          className={classNames(
            taskData.bgColor ?? "bg-red-500",
            "flex-shrink-0 flex uppercase items-center justify-center w-16 h-full text-white text-sm font-medium rounded"
          )}
        >
          {taskData.title.slice(0, 2)}
        </div>
        <div className="flex-1 truncate px-4 py-2 text-sm">
          {taskData.title}
          <p className="text-gray-500">{taskData.members.length} Members</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500"
          >
            <EllipsisVerticalIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <DragAndDrop />
    </Fragment>
  );
};
