import "./App.css";
import Navbar from "./Components/Navbar";
import Experiences from "./pages/Experiences";
import GitHubCalander from "./pages/GitHubCalander";
import Projects from "./pages/Projects";
import TechSkills from "./pages/TechSkills";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <TechSkills />
      <Projects/>
      <GitHubCalander/>
      <Experiences/>
    </div>
  );
}

export default App;
