import { useState } from "react";
import Display from "./components/Display";
import ButtonComonent from "./components/ButtonComonent";
import "./App.css";

function App() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState("Not started");

  const start = () => {
    setStatus("Running");
    setInterv(
      setInterval(() => {
        setTime((prevTime) => {
          if (prevTime.m === 60) {
            prevTime.h++;
            prevTime.m = 0;
          }
          if (prevTime.s === 60) {
            prevTime.m++;
            prevTime.s = 0;
          }
          if (prevTime.ms === 100) {
            prevTime.s++;
            prevTime.ms = 0;
          }
          prevTime.ms = prevTime.ms + 1;
          return {
            ms: prevTime.ms,
            s: prevTime.s,
            m: prevTime.m,
            h: prevTime.h,
          };
        });
      }, 20)
    );
  };

  const stop = () => {
    clearInterval(interv);
    setStatus("Stopped");
  };

  const reset = () => {
    clearInterval(interv);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
    setStatus("Not started");
  };

  const resume = () => {
    start();
  };
  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <Display time={time} />
          <ButtonComonent
            status={status}
            start={start}
            stop={stop}
            reset={reset}
            resume={resume}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
