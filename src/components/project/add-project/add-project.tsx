import { PlusIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { projectState } from "../../../global-state/project-atom";
import { selectedTeamMembersState } from "../../../global-state/selected-team-member-atom";
import { CustomButton } from "../../button/button";
import { Popup } from "../../popup/popup";
import { AddProjectModal } from "./add-project-popup";
import { EmptyProject } from "./empty-project";

export const AddProject = ()  => {
  const [projects] = useRecoilState(projectState)
  const [showAddProjectView,setShowAddProjectView] = useState(false)
  const [selectedTeamMembers, setSelectedTeamMembers] = useRecoilState(selectedTeamMembersState)
    
  function onButtonClick(){
    setShowAddProjectView(true)
  }
  function onPopupClose(){
    setShowAddProjectView(false)
    setSelectedTeamMembers([])
  }

  return (
    <div className="text-center">
      {projects.length>0 ? null : <EmptyProject/>}
      <div className="mt-6">
      <CustomButton onClick={onButtonClick} buttonText={"New Projects"} icon={ <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />}/>
      <Popup trigger={showAddProjectView} onCloseClick={onPopupClose}><AddProjectModal onSuccess={onPopupClose}/></Popup>
      </div>
    </div>
  );
}
