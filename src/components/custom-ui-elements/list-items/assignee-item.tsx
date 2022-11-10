import {TeamMemberData} from "../../../interfaces/team-member-data";

type AssigneeItemProps = {
    person: TeamMemberData;
};

export const AssigneeItem = ({person}: AssigneeItemProps) => {
    return (
        <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
                <img
                    className="h-5 w-5 rounded-full"
                    src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                    alt=""
                />
            </div>
            <div className="text-sm font-medium text-gray-900">
                <div>{person.name}</div>
            </div>
        </div>
    );
};