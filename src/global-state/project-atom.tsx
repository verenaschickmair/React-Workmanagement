import { atom } from "recoil";
import { getCurrentDate, ProjectData } from "../interfaces/project-data";

export const projectState = atom<ProjectData[]>({
  key: "projectState",
  default: [],
});
