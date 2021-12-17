
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
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
          <Route path="/Iam" element={<Iam />}></Route>
          <Route path="/Project" element={<Project />}></Route>
          <Route path="/Skill" element={<Skill />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
