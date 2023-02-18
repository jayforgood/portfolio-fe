import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav>네이게이션</Nav>
      <Intro>인트로</Intro>
      <Project>프로젝트</Project>
      <Contact>컨텍트</Contact>
    </div>
  );
}

export default App;
