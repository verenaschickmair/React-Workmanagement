import { BackspaceIcon } from "@heroicons/react/20/solid";
import { useLocation, useNavigate } from "react-router-dom";
import { ProjectData } from "../../interfaces/project-data";
import { CustomButton } from "../custom-ui-elements/button/button";
import { BoardColumn } from "./board-column/board-column";
import { AddTask } from "./task/add-task";

export default function Board() {
  const location = useLocation();
  const navigate = useNavigate();
  const project: ProjectData = location.state.project;

  return (
    <div className="min-h-full w-full">
      <div className="py-10">
        <header>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight tracking-tight mb-6 text-center text-gray-900">
              Board of project {project.title}
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="py-6 border-2">
              <div className="mx-auto h-auto min-h-fit max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-5 lg:gap-8 lg:px-8">
                {project.board.columns.map((column) => (
                  <BoardColumn
                    name={column.name}
                    columnId={column.id}
                    projectId={project.id}
                    key={column.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="flex space-x-3 justify-center">
        <div className="mt-6">
          <CustomButton
            onClick={() => navigate(-1)}
            buttonText={"Back to all projects"}
            icon={
              <BackspaceIcon
                className="-ml-1 mr-2 h-5 w-5"
                aria-hidden="true"
              />
            }
          />
        </div>
        <div>
          <AddTask teamMembers={project.teamMembers} projectId={project.id} />
        </div>
      </div>
    </div>
  );
}
