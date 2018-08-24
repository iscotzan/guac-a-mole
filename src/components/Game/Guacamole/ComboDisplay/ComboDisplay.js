import * as React from "react";
import { Circle } from "rc-progress";

const ComboDisplay = props => {
  const { scoreMultiplier, comboMaxLevel } = props;
  let comboPercentLevel = (scoreMultiplier / comboMaxLevel) * 100;
  return (
    <div className="comboDisplayContainer">
      <div className={"comboDisplayText"}>x{scoreMultiplier}</div>
      <Circle
        percent={comboPercentLevel}
        strokeWidth="6"
        strokeLinecap="round"
        className={"comboDisplayCircle"}
        strokeColor={"#91ff3f"}
      />
    </div>
  );
};

export default ComboDisplay;
