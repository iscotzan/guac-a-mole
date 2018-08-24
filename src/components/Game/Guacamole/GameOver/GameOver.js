import * as React from "react";
import { Grid } from "semantic-ui-react";
import { Translate } from "react-localize-redux";
import SplashButton from "./../SplashButton/SplashButton";
const GameOver = props => {
  const showGameOver = props.gameOver ? "show-div textAndScores" : "hide-div";

  return (
    <div className="game-over-container centered container-style">
      {/* game over stats */}
      <Grid centered>
        <div className={showGameOver}>
          <h1>
            <Translate id="translations.gameOver">Game Over</Translate>
          </h1>
          <div>
            <h3>
              <Translate id="translations.yourScore">Your Score</Translate>:
              {props.score}
            </h3>
            <h5>
              <Translate id="translations.highScore">High Score</Translate>:
              {props.highScore < props.score ? props.score : props.highScore}
            </h5>
          </div>
        </div>
        <div>
          <SplashButton
            buttonText={<Translate id="translations.play">Play</Translate>}
            onClick={props.restartGame}
          />
        </div>
      </Grid>
    </div>
  );
};

export default GameOver;
