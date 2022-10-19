import { EnvelopeIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Board from "./components/board/board";
import BoardColumn from "./components/board/board-column/board-column";
import TaskDetail from "./components/board/task/details/task-detail";
import { CustomButton } from "./components/button/button";
import { Popup } from "./components/popup/popup";
import { AddProject } from "./components/project/add-project/add-project";
import { ProjectItem } from "./components/project/project-item";
import { TeamMember } from "./components/project/team/team-member";

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <Routes>
          <Route path="/" element={<ProjectItem />} />
          <Route path="/board" element={<Board />} />
          <Route path="/task-detail" element={<TaskDetail />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
