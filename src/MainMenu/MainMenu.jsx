import { useState, useEffect } from "react";
import "./MainMenu.css";

export default function MainMenu({ onHandleSide }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState([""]);
  const [isDone, setIsDone] = useState(false);

  const lines = [
    "Hello, I'm Daniel Monteiro.",
    "I started my career in front and back office and customer support.",
    "In 2019, I worked as customer support at an IT company, which made me realize my joy in working with computers, and this realization led me to start exploring programming code.",
    "In 2023, I started working at a company as a front-end developer, primarily focusing on React.js.",
    "This experience strengthened my interest in software development and keeps me exploring further.",
    "I continuously look for opportunities to learn new libraries and technologies to further develop my coding skills.",
  ];

  useEffect(() => {
    if (currentLine >= lines.length) return;

    const fullText = lines[currentLine];
    let charIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const newText = [...prev];
        newText[currentLine] = fullText.slice(0, charIndex + 1);
        return newText;
      });

      charIndex++;

      if (charIndex >= fullText.length) {
        clearInterval(interval);
        if (currentLine === lines.length - 1) {
          setIsDone(true);
        } else {
          setTimeout(() => {
            setCurrentLine((prev) => prev + 1);
          }, 800);
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <div className="mainMenu">
      <div className="myDescription">
        <div className="myText">
          <h1 className="title">Why Me?</h1>
          {displayedText.map((line, i) => (
            <h4 key={i}>
              {line}
              {(i === currentLine || (isDone && i === lines.length - 1)) && (
                <span className="blink">▮</span>
              )}
            </h4>
          ))}
        </div>
      </div>

      <h2
        className="curriculum click"
        onClick={() => onHandleSide("curriculum")}
      >
        {"< Curriculum"}
      </h2>

      <h2 className="projects click" onClick={() => onHandleSide("projects")}>
        {"Projects >"}
      </h2>
      <div className="hobbies click" onClick={() => onHandleSide("hobbies")}>
        <h2 className="downArrow">Hobbies</h2>
        <h2 className="downArrow rotate">{"<"}</h2>
      </div>

      <footer className="footer">
        <div>Made in React + Vite</div>
        <div>
          Font Retro Gaming by{" "}
          <a href="https://www.dafont.com/pt/daymarius.d7345?l[]=10&l[]=1&l[]=6">
            Daymarius
          </a>
        </div>
      </footer>
    </div>
  );
}
