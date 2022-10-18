import React from "react";
import Board from "./components/board/board";
import BoardColumn from "./components/board/board-column/board-column";
import TaskDetail from "./components/board/task/details/task-detail";
import Button from "./components/button/button";
import ProjectItem from "./components/project/project-item";
import TeamMember from "./components/project/team/team-member";

function App() {
  return (
    <div>
      <ProjectItem />
      <TeamMember />
      <Button />
      <Board />
      <TaskDetail />
    </div>
  );
}

export default App;
