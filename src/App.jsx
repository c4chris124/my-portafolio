import React from "react";
import { useSelector } from "react-redux";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Intro from "./components/Intro/Intro";
import ProjectList from "./components/ProjectList/ProjectList";
import Toggle from "./components/Toggle/Toggle";

const App = () => {
  const darkMode = useSelector((state) => state.theme.darkMode)

  return (
    <div style={{backgroundColor: darkMode ? "#121212" : "#FFFFFF", color: darkMode && "white"}}>
      <Toggle/>
      <Intro/>
      <About/>
      <ProjectList/>
      <Contact/>
    </div>
  );
};

export default App;
