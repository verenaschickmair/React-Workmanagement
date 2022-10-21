import TaskItem from "../task/task-item";

type BoardColumnProps = {
  name: string;
};

export const BoardColumn = ({ name }: BoardColumnProps) => {
  return (
    <div>
      <h2 className="text-lg text-center mb-2">{name}</h2>
      <div className="top-6 h-96 space-y-4 bg-gray-100 w-full">
        <ul className="grid grid-cols-1 gap-5">
          <TaskItem />
        </ul>
      </div>
    </div>
  );
};
