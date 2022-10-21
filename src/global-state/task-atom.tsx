import { atom } from "recoil";
import { TaskData } from "../interfaces/task-data";

export const taskState = atom<TaskData[]>({
  key: "taskState",
  default: [],
});
