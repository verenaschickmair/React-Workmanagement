import { PlusIcon } from "@heroicons/react/24/outline";
import { ChangeEvent, Fragment, useState } from "react";
import { useRecoilState } from "recoil";
import { teamMembersState } from "../../../global-state/team-member-atom";
import { CustomButton } from "../../custom-ui-elements/button/button";
import { CustomInputField } from "../../custom-ui-elements/input-field/custom-input-field";

export const AddTeamMember = () => {
  const [teamMembers, setTeamMembers] = useRecoilState(teamMembersState);
  const [inputValue, setInputValue] = useState<string>("");

  function onButtonClick() {
    if (!inputValue) {
      alert("Name cannot be empty");
    } else {
      setTeamMembers(
        teamMembers.concat({
          name: inputValue,
          id: teamMembers.length + 1,
        })
      );
      setInputValue("");
    }
  }
  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <Fragment>
      <form className="mt-6 sm:flex sm:items-center" action="#">
        <CustomInputField
          idTag="name"
          type="text"
          onChange={onInputChange}
          value={inputValue}
          placeholder="Enter the member's name"
        />

        <div className="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <CustomButton
            onClick={onButtonClick}
            buttonText={"Add member"}
            icon={
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            }
          />
        </div>
      </form>
    </Fragment>
  );
};
