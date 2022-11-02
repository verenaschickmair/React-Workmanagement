import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { projectState } from "../../global-state/project-atom";
import { taskState } from "../../global-state/task-atom";
import { TaskData } from "../../interfaces/task-data";
import { AddProject } from "./add-project/add-project";
import { ProjectListItem } from "./project-list-item";

const tasks: TaskData[] = [
  {
    id: 0,
    title: "Graph API",
    initials: "GA",
    bgColor: "bg-purple-600",
    columnId: 0,
    description: "hallo",
    members: [
      { id: 1, name: "Verena" },
      { id: 2, name: "Philip" },
      { id: 3, name: "Simon" },
    ],
  },
  {
    id: 1,
    title: "Component Design",
    initials: "GA",
    bgColor: "bg-green-600",
    columnId: 0,
    description: "hallo",
    members: [{ id: 3, name: "Simon" }],
  },
  {
    id: 2,
    title: "Templates",
    initials: "GA",
    bgColor: "bg-purple-600",
    columnId: 0,
    description: "hallo",
    members: [
      { id: 1, name: "Verena" },
      { id: 3, name: "Simon" },
    ],
  },
  {
    id: 3,
    title: "React Components",
    initials: "GA",
    bgColor: "bg-purple-600",
    columnId: 0,
    description: "hallo",
    members: [{ id: 2, name: "Philip" }],
  },
];

export const ProjectItem = () => {
  const [projects] = useRecoilState(projectState);

  return (
    <Fragment>
      <h1 className="mt-2 text-xl font-medium text-gray-900 text-center">
        Create or select a project
      </h1>
      <AddProject />
      <div
        className="overflow-hidden bg-white shadow sm:rounded-md"
        style={{
          marginTop: "20px",
          paddingTop: "20px",
          paddingBottom: "20px",
          margin: "auto",
          width: "80%",
        }}
      >
        <ul className="divide-y divide-gray-200">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectListItem projectData={project} tasks={tasks} />
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};
