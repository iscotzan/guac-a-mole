import React from "react";

const Lives = props => {
  const { visualRepresentation, lives } = props;
  let livesDisplay = [];
  if (typeof visualRepresentation === "number") {
    return (
      <div className="livesContainer">
        <h1>{lives}</h1>
      </div>
    );
  } else {
    for (let i = 0; i < lives; i++) {
      livesDisplay.push(
        <span className="singleLife" key={i}>
          {visualRepresentation}
        </span>
      );
    }
    return <div className="livesContainer">{livesDisplay}</div>;
  }
};

export default Lives;
