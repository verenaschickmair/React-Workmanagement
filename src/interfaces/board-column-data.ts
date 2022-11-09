import { TaskData } from "./task-data";

export interface BoardColumnData {
  id: number;
  name: string;
  tasks: TaskData[];
}
