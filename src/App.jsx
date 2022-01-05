import "./app.scss"
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Resume from "./components/resume/Resume";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import { useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Resume/>
        <Portfolio/>
      </div>
    </div>
  );
}

export default App;
