import {TeamMemberData} from "../../../interfaces/team-member-data";
import {UserCircleIcon} from "@heroicons/react/20/solid";

type AssigneeItemProps = {
    person: TeamMemberData;
};

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

function setColor(id: number){
    switch (id%3) {
        case 0:
            return "text-green-500";
            break;
        case 1:
            return "text-red-500";
            break;
        case 2:
            return "text-blue-500";
            break;
    }
}

export const AssigneeItem = ({person}: AssigneeItemProps) => {
    return (
        <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
                <UserCircleIcon
                    className={classNames(
                        setColor(person.id) ?? "text-green-500",
                        "h-5 w-5 rounded-full"
                    )}
                />
            </div>
            <div className="text-sm font-medium text-gray-900">
                <div>{person.name}</div>
            </div>
        </div>
    );
};