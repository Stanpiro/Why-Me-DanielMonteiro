import "./Projects.css";

export default function Projects({ onHandleSide }) {
  return (
    <div>
      <div className="hobbiesMenu">
        <h1 className="hobbiesTitle">Projects</h1>

        <h2
          className="mainMenuPro click"
          onClick={() => onHandleSide("mainMenu")}
        >
          {"< Main Menu"}
        </h2>
      </div>
      <div className="hobbiesInfo">
        <Blaster2000HD />
        <hr className="lineCurriculum"></hr>
        <MarketEmpire />
        <hr className="lineCurriculum"></hr>
        <RadioJeneration />
      </div>
    </div>
  );
}

function Blaster2000HD() {
  return (
    <div className="projectWindow topMargingPro">
      <div>
        <iframe
          frameborder="0"
          src="https://itch.io/embed/3382250?border_width=0&amp;bg_color=a566cd&amp;fg_color=eeeeee&amp;link_color=452f6e&amp;border_color=363636"
          width="206"
          height="165"
        >
          <a href="https://stanpiro.itch.io/blaster-2000hd">
            Blaster 2000HD by Stanpiro
          </a>
        </iframe>
      </div>
      <div>
        <h3>Blaster 2000HD</h3>
        <p>
          My first game made with Unity 2D, published in Mar/2025 Used: C# to
          code;
        </p>
        <p>
          Used <a href="www.pixilart.com/draw">www.pixilart.com</a> to drawn
          sprites;
        </p>
        <p>
          MPC beats and Mixcraft 9 with AKAI MPK mini to make sounds and music;
        </p>
        <p>AI to complement some elements where I had difficulty.</p>
      </div>
    </div>
  );
}

function MarketEmpire() {
  return (
    <div className="projectWindow">
      <div>
        <iframe
          frameborder="0"
          src="https://itch.io/embed/2413537?border_width=0&amp;bg_color=a566cd&amp;link_color=452f6e&amp;border_color=000000"
          width="206"
          height="165"
        >
          <a href="https://stanpiro.itch.io/market-empire">
            Market Empire by Stanpiro
          </a>
        </iframe>
      </div>
      <div>
        <h3>Market Empire</h3>
        <p>
          My very first game released and finished, using HTML, CSS and
          JavaScript;
        </p>
        <p>
          Experienced in utilizing core JavaScript, including Advanced DOM
          manipulation and ES6+ features;
        </p>
        <p>Last Updated: April/2025.</p>
      </div>
    </div>
  );
}

function RadioJeneration() {
  return (
    <div className="projectWindow topMargingPro">
      <div>
        <a href="https://www.facebook.com/radiojenerationpt/">
          <img className="jenePic" src="./pics/Jene.png" />
        </a>
      </div>
      <div>
        <h3 className="noMarginCurriculum">Radio Jeneration</h3>
        <h3 className="noMarginCurriculum">Co-Founder / Events Manager</h3>
        <p className="noMarginCurriculum">(2012 - 2018)</p>
        <br></br>
        <p>
          Project contributed to the promotion of Japanese and Korean culture
          together with a Portuguese target audience.
        </p>
        <p>
          We marked 11 presences at the IBERANIME event (MANZ GROUP), from 2014
          to 2018, our team was responsible for the karaoke stage where we
          carried out various activities for the event participants.
        </p>
        <p>We were also present at smaller events in the same field.</p>
        <p className="marginCompensate">
          Creation of a Podcast channel on YouTube and social media.
        </p>
      </div>
    </div>
  );
}
