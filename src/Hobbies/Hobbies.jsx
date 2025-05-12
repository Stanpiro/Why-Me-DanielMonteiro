import { InstagramEmbed } from "react-social-media-embed";
import "./Hobbies.css";
import { useRef, useState, useEffect } from "react";

export default function Hobbies({ onHandleSide }) {
  const [seeingPics, setSeeingPics] = useState(false);

  return (
    <div className="hobbiesMenu">
      <h1 className="hobbiesTitle">Hobbies</h1>
      <div
        className="mainMenuHobb click"
        onClick={() => onHandleSide("mainMenu")}
      >
        <h2 className="rotateHobb">{">"}</h2>
        <h2>Main Menu</h2>
      </div>
      {!seeingPics ? (
        <div className="hobbiesView">
          <div className="hobbieSquare">
            <div className="photo">
              <h2>Photography</h2>
              <p
                className="underlined click"
                onClick={() => setSeeingPics(!seeingPics)}
              >
                (see more)
              </p>
            </div>
            <InstagramEmbed
              url="https://www.instagram.com/stanalogs/"
              width={328}
              height={366}
            />
          </div>
          <div className="hobbieSquare">
            <BoardGames />
          </div>
          <div className="hobbieSquare">
            <MakingMusic />
          </div>
        </div>
      ) : (
        <div className="picsView">
          <MorePictures onSetSeeingPics={setSeeingPics} />
        </div>
      )}
    </div>
  );
}

function MorePictures({ onSetSeeingPics }) {
  return (
    <>
      <h3 className="click" onClick={() => onSetSeeingPics(false)}>
        {"< Back"}
      </h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "7px" }}>
        <InstagramEmbed
          url="https://www.instagram.com/p/C5vU-ePoZDJ/"
          width={328}
          height={382.5}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/ChRzDjnsc-B/"
          width={328}
          height={327}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CWlDEomMpTg/"
          width={328}
          height={308}
        />
        <InstagramEmbed
          url="https://www.instagram.com/p/CHNkg37HFFS/"
          width={328}
          height={345}
        />
      </div>
    </>
  );
}

function BoardGames() {
  return (
    <>
      <h2>Board Games</h2>
      <p className="marginCompensate">
        I enjoy playing board games during weekends with friends and am
        currently developing a turn-based RPG in the vein of Dungeons & Dragons.
      </p>
      <img className="boardPic" src="./pics/board.jpg" />
    </>
  );
}

function MakingMusic() {
  return (
    <>
      <h2>Making Music</h2>
      <p className="marginCompensate">
        I like playing and creating music as a way to relax and unwind.
      </p>
      <div>
        <p className="songMargin">Completed song:</p>
        <MusicPlayer setSrc={"./music/lofitest.mp3"} />
        <br></br>
        <p className="songMargin">Loops:</p>
        <MusicPlayer setSrc={"./music/goodone.mp3"} />
        <MusicPlayer setSrc={"./music/newBeat.mp3"} />
        <br></br>
        <p className="songMargin">Used in my game:</p>
        <MusicPlayer setSrc={"./music/Menu.mp3"} />
        <MusicPlayer setSrc={"./music/2000HD.mp3"} />
      </div>
    </>
  );
}

function MusicPlayer({ setSrc }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const value = e.target.value;
    audioRef.current.currentTime = value;
    setCurrentTime(value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
      setCurrentTime(audio.currentTime);
    });

    return () => {
      audio.removeEventListener("loadedmetadata", () => {});
      audio.removeEventListener("timeupdate", () => {});
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={setSrc} />
      <div className="customControls">
        <div onClick={togglePlay}>
          {isPlaying ? (
            <span className="stopButton">◼</span>
          ) : (
            <span className="playButton">▶</span>
          )}
        </div>
        <div className="barBorder">
          <input
            type="range"
            className="progress-bar"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleProgressChange}
          />
        </div>
        <div className="time">
          <p>{formatTime(currentTime)} </p> <p>/</p>{" "}
          <p>{formatTime(duration)}</p>
        </div>
      </div>
    </div>
  );
}
