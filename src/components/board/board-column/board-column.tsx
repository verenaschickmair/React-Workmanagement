import { useRecoilState } from "recoil";
import { tasksState } from "../../../global-state/tasks-atom";
import { TaskData } from "../../../interfaces/task-data";
import { Task } from "../task/task";

type BoardColumnProps = {
  name: string;
  columnId: number;
  projectId: number;
};

function renderColumnTasks(
  tasks: TaskData[],
  columnId: number,
  projectId: number
): TaskData[] {
  return tasks.filter(
    (task) => task.columnId === columnId && task.projectId === projectId
  );
}

export const BoardColumn = ({
  name,
  columnId,
  projectId,
}: BoardColumnProps) => {
  const [tasks] = useRecoilState(tasksState);

  return (
    <div>
      <h2 className="text-lg text-center mb-2">{name}</h2>
      <div
        className="dropBox top-6 h-96 bg-gray-100 w-full"
        id={"drop" + columnId.toString()}
      >
        <ul className="grid grid-cols-1">
          {renderColumnTasks(tasks, columnId, projectId).map((task) => (
            <Task taskData={task} key={task.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
