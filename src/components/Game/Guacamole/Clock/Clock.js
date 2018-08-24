import React from "react";
import { Circle } from "rc-progress";

const Clock = props => {
  const countText =
    props.currentCount >= 10 ? props.currentCount : "0" + props.currentCount;
  return (
    <div className="timerContainer">
      <div className={"countText"}>{countText}</div>
      <Circle
        percent={props.percentTimeLeft}
        strokeWidth="6"
        strokeLinecap="round"
        className={"timeCircle"}
      />
      <div />
    </div>
  );
};

export default Clock;
