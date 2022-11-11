import { TeamMemberData } from "./team-member-data";

export interface TaskData {
  id: number;
  title: string;
  description: string;
  dateOfCreation?: string;
  bgColor?: string;
  members: TeamMemberData[];
  columnId: number;
  projectId: number;
}
