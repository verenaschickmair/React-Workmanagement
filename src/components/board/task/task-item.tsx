import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { TaskData } from "../../../interfaces/task-data";

const tasks: TaskData[] = [
  {
    id: 1,
    title: "Graph API",
    initials: "GA",
    bgColor: "bg-purple-600",
  },
  {
    id: 2,
    title: "Component Design",
    initials: "GA",
    bgColor: "bg-purple-600",
  },
  {
    id: 3,
    title: "Templates",
    initials: "GA",
    bgColor: "bg-purple-600",
  },
  {
    id: 4,
    title: "React Components",
    initials: "GA",
    bgColor: "bg-purple-600",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="space-y-2 p-2">
      {tasks.map((task: TaskData) => (
        <Link
          to={`${window.location.pathname}/task/${task.id}`}
          className="block hover:bg-gray-50"
          key={task.id}
        >
          <li key={task.id} className="col-span-1 flex rounded-md shadow-sm">
            <div
              className={classNames(
                task.bgColor,
                "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
              )}
            >
              {task.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <p className="font-medium text-gray-9000">{task.title}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </li>
        </Link>
      ))}
    </div>
  );
}
