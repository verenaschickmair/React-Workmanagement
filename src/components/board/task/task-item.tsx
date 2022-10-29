import {EllipsisVerticalIcon, PlusIcon} from "@heroicons/react/20/solid";
import {Fragment, useState} from "react";
import {useRecoilState} from "recoil";
import {projectState} from "../../../global-state/project-atom";
import {TaskData} from "../../../interfaces/task-data";
import {CustomButton} from "../../button/button";
import {Popup} from "../../popup/popup";
import {AddProjectModal} from "../../project/add-project/add-project-popup";
import {TaskDetail} from "./details/task-detail";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type TaskItemProps = {
  taskData:TaskData
}

export const TaskItem = ({taskData}: TaskItemProps) => {

  const [showTaskDetailView, setShowTaskDetail] = useState(false)

  function onButtonClick(){
    setShowTaskDetail(true)
  }
  function onPopupClose(){
    setShowTaskDetail(false)
  }


  return (
      <Fragment>
        <Popup trigger={showTaskDetailView} onCloseClick={onPopupClose}><TaskDetail taskData={taskData} onSuccess={onPopupClose}/></Popup>
      <div
          className={classNames(
              taskData.bgColor,
              "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
          )}
      >
        {taskData.initials}
      </div>
  <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white hover:bg-gray-200" onClick={onButtonClick}>
    <div className="flex-1 truncate px-4 py-2 text-sm">
      <a
          href={taskData.href}
          className="font-medium text-gray-900 hover:text-gray-600"
      >
        {taskData.title}
      </a>
      <p className="text-gray-500">{taskData.members} Members</p>
    </div>
    <div className="flex-shrink-0 pr-2">
      <button
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="sr-only">Open options</span>
        <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
      </Fragment>
  )
}

function Example() {
  return (
    <div>
      {projects.map((project) => (
        <li key={project.name} className="col-span-1 flex rounded-md shadow-sm">
          <div
            className={classNames(
              project.bgColor,
              "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
            )}
          >
            {project.initials}
          </div>
          <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
            <div className="flex-1 truncate px-4 py-2 text-sm">
              <a
                href={project.href}
                className="font-medium text-gray-900 hover:text-gray-600"
              >
                {project.name}
              </a>
              <p className="text-gray-500">{project.members} Members</p>
            </div>
            <div className="flex-shrink-0 pr-2">
              <button
                type="button"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </li>
      ))}
    </div>
  );
}
