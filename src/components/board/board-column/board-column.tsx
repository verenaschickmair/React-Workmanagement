import { useRecoilState } from "recoil";
import { tasksState } from "../../../global-state/tasks-atom";
import { TaskData } from "../../../interfaces/task-data";
import { TaskItem } from "../task/task-item";

type BoardColumnProps = {
  name: string;
  id: number;
};

function renderColumnTasks(tasks: TaskData[], columnId: number): TaskData[] {
  return tasks.filter((task) => task.columnId === columnId);
}

export const BoardColumn = ({ name, id }: BoardColumnProps) => {
  const [tasks] = useRecoilState(tasksState);

  return (
    <div>
      <h2 className="text-lg text-center mb-2">{name}</h2>
      <div className="top-6 h-96 space-y-4 bg-gray-100 w-full">
        <ul className="grid grid-cols-1">
          {renderColumnTasks(tasks, id).map((task) => (
            <TaskItem taskData={task} key={task.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
