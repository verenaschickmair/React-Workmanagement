import { TrashIcon } from "@heroicons/react/20/solid";
import { CalendarIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { projectState } from "../../global-state/project-atom";
import { ProjectData } from "../../interfaces/project-data";

type ProjectListItemProps = {
  projectData: ProjectData;
};

export const ProjectListItem = ({ projectData }: ProjectListItemProps) => {
  const [projects, setProjects] = useRecoilState(projectState);

  function deleteProject(projectId: number): void {
    if (window.confirm("Delete project?")) {
      const newArr = projects.filter((p) => p.id !== projectId);
      setProjects(newArr);
    }
  }

  return (
    <div className="flex">
      <Link
        to={`/projects/${projectData.id}`}
        className="block hover:bg-gray-50 flex-grow"
        state={{ project: projectData }}
      >
        <div className="px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="truncate text-sm font-medium text-indigo-600">
              {projectData.title}
            </p>
          </div>
          <div className="mt-2 sm:flex sm:justify-between">
            <div className="sm:flex">
              <p className="flex items-center text-sm text-gray-500">
                <UsersIcon
                  className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                  aria-hidden="true"
                />
                {projectData.teamMembers.length} Members
              </p>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
              <CalendarIcon
                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <p>
                Created on{" "}
                <time dateTime={projectData.dateOfCreation}>
                  {projectData.dateOfCreation}
                </time>
              </p>
            </div>
          </div>
        </div>
      </Link>
      <button className="w-24" onClick={() => deleteProject(projectData.id)}>
        <TrashIcon className="ml-6 h-6 z-50 w-6 flex-shrink-0 text-red-800" />
      </button>
    </div>
  );
};
