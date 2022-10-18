import React from "react";
import Button from "./components/button/button";
import ProjectItem from "./components/project/project-item";
import TeamMember from "./components/project/team/team-member";

function App() {
  return (
    <div>
      <ProjectItem />
      <TeamMember />
      <Button />
    </div>
  );
}

export default App;
