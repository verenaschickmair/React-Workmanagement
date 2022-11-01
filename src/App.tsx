import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Board from "./components/board/board";
import { TaskDetail } from "./components/board/task/details/task-detail";
import { ProjectItem } from "./components/project/project-item";

function App() {
  return (
    <RecoilRoot>
      <div className="app">
        <Routes>
          <Route path="/" element={<ProjectItem />} />
          <Route path="/projects/:id" element={<Board />} />
          <Route path="projects/:id/task/:id" element={<TaskDetail />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
