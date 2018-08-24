import * as React from "react";

const Score = props => {
  return (
    <div className="scoreContainer">
      <h1 data-shadow={props.score}>  
        {props.score}
      </h1>
    </div>
  );
};

export default Score;
