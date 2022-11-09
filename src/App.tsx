import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Board from "./components/board/board";
import { ProjectItem } from "./components/project/project-item";

function App() {
  return (
    <RecoilRoot>
      <div className="app grid h-screen place-items-center">
        <Routes>
          <Route path="/" element={<ProjectItem />} />
          <Route path="/projects/:id" element={<Board />} />
        </Routes>
      </div>
    </RecoilRoot>
  );
}

export default App;
