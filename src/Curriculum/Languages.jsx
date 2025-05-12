export default function Languages() {
  return (
    <div className="languageView">
      <div className="languageInfo">
        <div>■</div>
        <div>
          <h2>Portuguese</h2>
          <h3 className="expert" style={{ backgroundColor: "transparent" }}>
            Native
          </h3>
        </div>
      </div>
      <hr className="lineCurriculum"></hr>
      <div className="languageInfo">
        <div>■</div>
        <div>
          <h2>English</h2>
          <h3>
            Speaking level:{" "}
            <span
              className="advanced"
              style={{ backgroundColor: "transparent" }}
            >
              B2
            </span>
          </h3>
          <h3>
            Writing level:{" "}
            <span
              className="advanced"
              style={{ backgroundColor: "transparent" }}
            >
              B2
            </span>
          </h3>
          <p className="marginCompensate">
            Complemented with the level 10 course of Wall Street English
          </p>
        </div>
      </div>
      <hr className="lineCurriculum"></hr>
      <div className="languageInfo marginCompensate">
        <div>■</div>
        <div>
          <h2>Japanese</h2>
          <h3>
            Speaking level:{" "}
            <span
              className="beginner"
              style={{ backgroundColor: "transparent" }}
            >
              A1
            </span>
          </h3>
          <h3>
            Writing level:{" "}
            <span
              className="beginner"
              style={{ backgroundColor: "transparent" }}
            >
              A1
            </span>
          </h3>
          <p>Complemented with the level 4 course of Yosei Toda</p>
        </div>
      </div>
    </div>
  );
}
