import {TeamMemberData} from "./team-member-data";

export interface TaskData{
    id: number
    title: string
    //dateOfCreation?: string
    //teamMembers: TeamMemberData[]
    initials: string,
    href: string,
    members: number,
    bgColor: string,
}
