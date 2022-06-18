import React from "react";

const Display = (props) => {
  const { time } = props;
  const { h, m, s, ms } = time;
  const msDisplay = ms < 10 ? `0${ms}` : ms;
  const sDisplay = s < 10 ? `0${s}` : s;
  const mDisplay = m < 10 ? `0${m}` : m;
  const hDisplay = h < 10 ? `0${h}` : h;
  return (
    <div className="display">
      <div className="display-time">
        <span className="display-time-h">{hDisplay}</span>&nbsp;:&nbsp;
        <span className="display-time-m">{mDisplay}</span>&nbsp;:&nbsp;
        <span className="display-time-s">{sDisplay}</span>&nbsp;:&nbsp;
        <span className="display-time-ms">{msDisplay}</span>
      </div>
    </div>
  );
};

export default Display;
