import { useState } from "react";
import "./Curriculum.css";
import JobExperience from "./JobExperience";
import Education from "./Education";
import Skills from "./Skills";
import Languages from "./Languages";

export default function Curriculum({ onHandleSide }) {
  const [category, setCategory] = useState("none");

  return (
    <div className="curriculumMenu">
      <h1 className="curriculumTitle">Curriculum</h1>
      <h2
        className="mainMenuCurr click"
        onClick={() => onHandleSide("mainMenu")}
      >
        {"Main Menu >"}
      </h2>
      <div className="categories">
        <div className="eachCat">
          <h3
            className="noMarginBot underlined click"
            onClick={() => setCategory("jobExperience")}
          >
            Job Experience
          </h3>
          {category === "jobExperience" ? <h3 className="arrow">{"<"}</h3> : ""}
        </div>
        <div className="eachCat">
          <h3
            className="noMarginBot underlined click"
            onClick={() => setCategory("education")}
          >
            Education
          </h3>
          {category === "education" ? <h3 className="arrow">{"<"}</h3> : ""}
        </div>
        <div className="eachCat">
          <h3
            className="noMarginBot underlined click"
            onClick={() => setCategory("skills")}
          >
            Skills
          </h3>
          {category === "skills" ? <h3 className="arrow">{"<"}</h3> : ""}
        </div>
        <div className="eachCat">
          <h3
            className="noMarginBot underlined click"
            onClick={() => setCategory("languages")}
          >
            Languages
          </h3>
          {category === "languages" ? <h3 className="arrow">{"<"}</h3> : ""}
        </div>
      </div>
      {category !== "none" ? (
        <div className="information">
          {category === "jobExperience" && <JobExperience />}
          {category === "education" && <Education />}
          {category === "skills" && <Skills />}
          {category === "languages" && <Languages />}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
