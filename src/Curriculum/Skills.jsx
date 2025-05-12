import { useEffect, useState } from "react";

const ITskills = [
  {
    skill: "HTML",
    level: "advanced",
  },
  {
    skill: "CSS",
    level: "advanced",
  },
  {
    skill: "JavaScript",
    level: "advanced",
  },
  {
    skill: "C#",
    level: "intermediate",
  },
  {
    skill: "Front-Developer",
    level: "intermediate",
  },
  {
    skill: "React.JS",
    level: "advanced",
  },
  {
    skill: "Redux.js",
    level: "intermediate",
  },
  {
    skill: "Liquid",
    level: "beginner",
  },
  {
    skill: "Unity",
    level: "intermediate",
  },
  {
    skill: "Git",
    level: "intermediate",
  },
  {
    skill: "Visual Studio Code",
    level: "advanced",
  },
  {
    skill: "API REST",
    level: "intermediate",
  },
  {
    skill: "JSX",
    level: "advanced",
  },
];

const otherSkills = [
  {
    skill: "Windows",
    level: "expert",
  },
  {
    skill: "Office",
    level: "advanced",
  },
  {
    skill: "Software",
    level: "expert",
  },
  {
    skill: "Hardware",
    level: "expert",
  },
  {
    skill: "Adobe Photoshop",
    level: "intermediate",
  },
  {
    skill: "Adobe Premier",
    level: "intermediate",
  },
  {
    skill: "Photography",
    level: "advanced",
  },
  {
    skill: "Driving License B-B1",
    level: "incolor",
  },
];

export default function Skills() {
  const [ITSearched, setITSearched] = useState(ITskills);
  const [OtherSearched, setOtherSearched] = useState(otherSkills);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = search.toLowerCase();

    const filteredSkills = ITskills.filter((skill) =>
      Object.values(skill).some(
        (value) =>
          (typeof value === "string" || typeof value === "number") &&
          String(value).toLowerCase().includes(query)
      )
    );

    const filteredOtherSkills = otherSkills.filter((skill) =>
      Object.values(skill).some(
        (value) =>
          (typeof value === "string" || typeof value === "number") &&
          String(value).toLowerCase().includes(query)
      )
    );

    setITSearched(filteredSkills);
    setOtherSearched(filteredOtherSkills);
  }, [search]);

  return (
    <>
      <div className="skillView">
        <div className="skillTab leftInfo">
          <div>
            <div className="searchTab">
              <h2 className="skillAllList">Search:</h2>
              <span className="clearSearch click" onClick={() => setSearch("")}>
                (Clear)
              </span>
            </div>
            <input
              className="searchBar"
              type="text"
              placeholder="Looking for?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div>
            <h2 className="skillAllList">Description:</h2>
            <p
              className="descripText beginner click"
              onClick={() => setSearch("Beginner")}
            >
              ■&nbsp; <span className="underlined">Beginner</span>
            </p>
            <p
              className="descripText intermediate click"
              onClick={() => setSearch("Intermediate")}
            >
              ■&nbsp; <span className="underlined">Intermediate</span>
            </p>
            <p
              className="descripText advanced click"
              onClick={() => setSearch("Advanced")}
            >
              ■&nbsp; <span className="underlined">Advanced</span>
            </p>
            <p
              className="descripText expert click"
              onClick={() => setSearch("Expert")}
            >
              ■&nbsp; <span className="underlined">Expert</span>
            </p>
          </div>
        </div>
        <div className="skillTab rightInfo">
          <h2 className="skillAllList">Programmer Skills:</h2>
          <div className="skillAllList">
            {ITSearched.map((skill, n) => (
              <SkillBox
                skill={skill.skill}
                setColor={skill.level}
                key={skill.skill + n}
              />
            ))}
          </div>
          <h2 className="skillAllList">Other Skills:</h2>
          <div className="skillAllList marginCompensate">
            {OtherSearched.map((skill, n) => (
              <SkillBox
                skill={skill.skill}
                setColor={skill.level}
                key={skill.skill + n}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function SkillBox({ skill, setColor }) {
  return <p className={`userSkillText ${setColor}`}>{skill}</p>;
}
