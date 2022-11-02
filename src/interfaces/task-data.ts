import { TeamMemberData } from "./team-member-data";

export interface TaskData {
  id: number;
  title: string;
  description: string;
  dateOfCreation?: string;
  initials: string;
  members: TeamMemberData[];
  bgColor: string;
  columnId: number;
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
