import { EnvelopeIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { RecoilRoot } from "recoil";
import Board from "./components/board/board";
import BoardColumn from "./components/board/board-column/board-column";
import TaskDetail from "./components/board/task/details/task-detail";
import TaskItem from "./components/board/task/task-item";
import { CustomButton } from "./components/button/button";
import { Popup } from "./components/popup/popup";
import { ProjectItem } from "./components/project/project-item";
import { TeamMember } from "./components/project/team/team-member";


function App() {
  return (
    <RecoilRoot> 
    <div>
      <ProjectItem />
      <TaskItem/>
    </div>
    </RecoilRoot>
  );
}

export default App;
