import Nav from "@components/Nav";
import Main from "@pages/Main";
import Intro from "@pages/Intro";
import Project from "@pages/Project";
import Contact from "@pages/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Intro />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      <Route path="/main" element={<Main />} />
    </Routes>
  );
}

export default App;
