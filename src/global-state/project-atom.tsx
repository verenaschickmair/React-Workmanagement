import { atom } from "recoil";
import { ProjectData } from "../interfaces/project-data";

export const projectState = atom<ProjectData[]>({
  key: "projectState",
  default: [],
});
