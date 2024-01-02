import "./App.css";
import Navbar from "./Components/Navbar";
import TechSkills from "./pages/TechSkills";
import Landing from "./pages/landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <TechSkills />
    </div>
  );
}

export default App;
