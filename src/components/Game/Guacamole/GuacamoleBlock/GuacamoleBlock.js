import React from "react";

const GuacamoleBowl = props => {
  return (
    <div className="game-block" style={{ display: props.context.display }}>
      <div className="game__whack">
        <button
          className={props.currentClass}
          onClick={props.onClick.bind(
            this,
            props.bowlNumber,
            props.context.role
          )}
          disabled={props.disabled}
          style={{
            WebkitTransform: props.context.style
          }}
        />
      </div>

      <div className="game-plate" />
    </div>
  );
};

export default GuacamoleBowl;
