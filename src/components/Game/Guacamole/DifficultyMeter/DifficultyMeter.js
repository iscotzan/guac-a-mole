import React from "react";
import { Circle } from "rc-progress";

  const DifficultyMeter = (props) =>{
    return (
      <div className="difficultyLvlContainer">
        <div className={"difficultyLvlText"}>
          lvl {props.difficultyLvl}
        </div>
        <Circle
          percent={props.difficultyPercent}
          strokeWidth="6"
          strokeLinecap="round"
          className={"difficultyCircle"}
          strokeColor={"#db2828"}
        />
      </div>
    );
  }


export default DifficultyMeter;
