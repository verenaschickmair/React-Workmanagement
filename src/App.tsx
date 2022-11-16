import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Board from "./components/board/board";
import { ProjectList } from "./components/project-list/project-list";

function App() {
  return (
    <RecoilRoot>
      <div className="app grid h-screen place-items-center">
        <Routes>
          <Route path="/" element={<ProjectList />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:id" element={<Board />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
