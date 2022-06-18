import React from "react";

const ButtonComonent = ({ status, start, stop, reset, resume }) => {
  return (
    <div className="button-holder">
      {status === "Not started" ? (
        <button className="btn btn-gre" onClick={start}>
          Start
        </button>
      ) : status === "Stopped" ? (
        <button className="btn btn-gre" onClick={resume}>
          Resume
        </button>
      ) : (
        <button className="btn btn-red" onClick={stop}>
          Stop
        </button>
      )}
      <button className="btn btn-yel" onClick={reset}>
        Reset
      </button>
    </div>
  );
};
export default ButtonComonent;
