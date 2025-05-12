import { useState, useEffect } from "react";
import MainMenu from "./MainMenu/MainMenu";
import Hobbies from "./Hobbies/Hobbies";
import Curriculum from "./Curriculum/Curriculum";
import Projects from "./Projects/Projects";

import "./App.css";

function App() {
  const [sideChoosen, setSideChoosen] = useState("mainMenu");

  function handleSide(e) {
    setSideChoosen(e);
  }

  return (
    <div>
      {sideChoosen === "mainMenu" && <MainMenu onHandleSide={handleSide} />}
      {sideChoosen === "hobbies" && <Hobbies onHandleSide={handleSide} />}
      {sideChoosen === "curriculum" && <Curriculum onHandleSide={handleSide} />}
      {sideChoosen === "projects" && <Projects onHandleSide={handleSide} />}
    </div>
  );
}

export default App;
