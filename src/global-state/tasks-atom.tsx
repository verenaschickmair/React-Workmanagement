import { atom } from "recoil";
import { TaskData } from "../interfaces/task-data";

export const tasksState = atom<TaskData[]>({
  key: "taskState",
  default: [],
});
