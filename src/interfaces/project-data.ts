import { BoardData } from "./board-data";
import { TeamMemberData } from "./team-member-data";

export interface ProjectData {
  id: number;
  title: string;
  dateOfCreation?: string;
  teamMembers: TeamMemberData[];
  board: BoardData;
}

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}
