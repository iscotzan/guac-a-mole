import * as React from "react";
import "./SplashButton.css";
const SplashButton = props => {
  return (
    <div>
      <button className="splash-button" onClick={props.onClick}>
        {props.buttonText}
        <div className="splash-button__horizontal" />
        <div className="splash-button__vertical" />
      </button>
    </div>
  );
};

export default SplashButton;
