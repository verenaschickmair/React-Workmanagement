import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { ProjectData } from "../../interfaces/project-data";
import { BoardColumn } from "./board-column/board-column";
import { AddTask } from "./task/add-task";
import { RecoilState, useRecoilState, useSetRecoilState } from "recoil";
import { TaskData } from "../../interfaces/task-data";
import { BoardColumnData } from "../../interfaces/board-column-data";

const boardColumns: BoardColumnData[] = [
  {
    id: 0,
    name: "Backlog",
  },
  {
    id: 1,
    name: "Todo",
  },
  {
    id: 2,
    name: "In Progress",
  },
  {
    id: 3,
    name: "Review",
  },
  {
    id: 4,
    name: "Done",
  },
];

function getColumnTasks(tasks: TaskData[], columnId: number): TaskData[] {
  return tasks.filter((task) => task.columnId === columnId);
}
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Board() {
  const location = useLocation();
  const project: ProjectData = location.state.project;

  return (
    <div className="min-h-full w-full">
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
              Board of project {project.title}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="py-6 border-2">
              <div className="mx-auto h-auto min-h-fit max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-5 lg:gap-8 lg:px-8">
                {boardColumns.map((column) => (
                  <BoardColumn
                    name={column.name}
                    key={column.id}
                    tasks={getColumnTasks(project.tasks, column.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <AddTask tasks={project.tasks} />
    </div>
  );
}
