const { useState, useEffect } = React;

const drumPads = [
  {
    key: "Q",
    sound: "Heater 1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
  },
  {
    key: "W",
    sound: "Heater 2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
  },
  {
    key: "E",
    sound: "Heater 3",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
  },
  {
    key: "A",
    sound: "Heater 4",
    url:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
  },
  {
    key: "S",
    sound: "Clap",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
  },
  {
    key: "D",
    sound: "Open-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
  },
  {
    key: "Z",
    sound: "Kick-n'-Hat",
    url:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
  },
  {
    key: "X",
    sound: "Kick",
    url:
      "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
  },
  {
    key: "C",
    sound: "Closed-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
  }
];

function App() {
  const [displayText, setDisplayText] = useState("");

  const handleKeydownPress = (event) => {
    const drumPad = drumPads.find((pad) => pad.key === event.key.toUpperCase());
    if (drumPad) {
      playDrumSound(drumPad.key, drumPad.sound);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydownPress);
    return () => {
      window.removeEventListener("keydown", handleKeydownPress);
    };
  }, []);

  const playDrumSound = (key, sound) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    setDisplayText(sound);
  };

  return (
    <div id="drum-machine" className="outer-container">
      <h2>Tiny Drum Kit Machine</h2>
      <div id="display" className="display">
        {displayText}
      </div>
      <div className="pad-container">
        {drumPads.map((pad) => (
          <div
            key={pad.key}
            className="drum-pad"
            id={`drum-pad-${pad.key}`}
            onClick={() => playDrumSound(pad.key, pad.sound)}
          >
            {pad.key}
            <audio
              className="clip"
              id={pad.key}
              src={pad.url}
              data-testid={pad.key}
            ></audio>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
