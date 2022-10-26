import { TaskData } from "../../../interfaces/task-data";
import TaskItem from "../task/task-item";

type BoardColumnProps = {
  name: string;
  tasks: TaskData[];
};

export const BoardColumn = ({ name, tasks }: BoardColumnProps) => {
  return (
    <div>
      <h2 className="text-lg text-center mb-2">{name}</h2>
      <div className="top-6 h-96 space-y-4 bg-gray-100 w-full">
        <ul className="grid grid-cols-1 gap-5">
          {tasks.map((task) => (
            <TaskItem task={task} key={task.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};
