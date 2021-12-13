
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Iam from "./routes/Iam";
import Project from "./routes/Project";
import Skill from "./routes/Skill";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
          <Route path="/iam" element={<Iam />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
