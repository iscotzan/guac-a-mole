import React, { Component } from "react";
import { Button, Confirm } from "semantic-ui-react";
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import "./GuacamoleStyle.css";
import Clock from "./../../../../components/Game/Guacamole/Clock/Clock";
import GuacamoleBlock from "./../../../../components/Game/Guacamole/GuacamoleBlock/GuacamoleBlock";
import DifficultyMeter from "./../../../../components/Game/Guacamole/DifficultyMeter/DifficultyMeter";
import Score from "./../../../../components/Game/Guacamole/Score/Score";
import ComboDisplay from "./../../../../components/Game/Guacamole/ComboDisplay/ComboDisplay";
import GameOver from "./../../../../components/Game/Guacamole/GameOver/GameOver.js";
// import Lives from "./../../../../components/Game/Guacamole/Lives/Lives";
import guacamoleGameTranslations from "./translations/guacamoleGame.translations";
import default_state from "./../../../../constants/defaultState";

class GuacamoleGame extends Component {
  constructor(props, context) {
    super(props, context);
    this.props.addTranslation(guacamoleGameTranslations);
    let highScore = 0;
    if (window.localStorage) {
      if (window.localStorage["high_score"]) {
        highScore = JSON.parse(localStorage["high_score"]);
      }
    }
    this.state = { ...default_state, highScore: highScore };
  }

  componentDidMount() {}

  updateDifficulty(difficultyLvl, percent) {
    this.setState({
      difficultyLvl: difficultyLvl,
      difficultyPercent: percent
    });
  }
  componentWillUnmount() {
    // This method is called immediately before the component is removed
    // from the page and destroyed. We can clear the interval here:
    clearInterval(this.state.reduceMoleTimeInterval);
  }
  calculateNewDifficulty(newMoleDisplayTime) {
    let difficultyLvl = 1;
    switch (newMoleDisplayTime) {
      case 5000:
        difficultyLvl = 1;
        return { percent: (difficultyLvl / 6) * 100, lvl: difficultyLvl };
      case 4000:
        difficultyLvl = 2;
        return { percent: (difficultyLvl / 6) * 100, lvl: difficultyLvl };
      case 3000:
        difficultyLvl = 3;
        return { percent: (difficultyLvl / 6) * 100, lvl: difficultyLvl };
      case 2000:
        difficultyLvl = 4;
        return { percent: (difficultyLvl / 6) * 100, lvl: difficultyLvl };
      case 1000:
        difficultyLvl = 5;
        return { percent: (difficultyLvl / 6) * 100, lvl: difficultyLvl };
      case 500:
        difficultyLvl = 6;
        return { percent: (difficultyLvl / 6) * 100, lvl: difficultyLvl };
      default:
        difficultyLvl = 1;
        return { percent: (difficultyLvl / 6) * 100, lvl: difficultyLvl };
    }
  }
  timer() {
    const {
      gamePaused,
      gameTimeCount,
      gameTime,
      gameStarted,
      difficultyLvl,
      difficultyPercent
    } = this.state;
    if (gameStarted && !gamePaused) {
      this.gameEngine();
      const percentTimeLeft = Math.floor(
        ((this.state.gameTimeCount - 1) / this.props.gameTime) * 100
      );
      if (gameTimeCount % 10 === 0 && gameTimeCount !== gameTime) {
        const { moleDisplayTime } = this.state;
        let newDifficultLvl = difficultyLvl;
        let newDifficultyPercent = difficultyPercent;
        const newMoleDisplayTime =
          moleDisplayTime === 500
            ? moleDisplayTime
            : moleDisplayTime > 1000 && moleDisplayTime > 500
              ? moleDisplayTime - 1000
              : moleDisplayTime - 500;
        if (moleDisplayTime !== newMoleDisplayTime) {
          const difficultyUpdatedObject = this.calculateNewDifficulty(
            newMoleDisplayTime
          );
          newDifficultLvl = difficultyUpdatedObject.lvl;
          newDifficultyPercent = difficultyUpdatedObject.percent;
        }
        this.setState({
          difficultyLvl: newDifficultLvl,
          difficultyPercent: newDifficultyPercent,
          moleDisplayTime: newMoleDisplayTime,
          gameTimeCount: gameTimeCount - 1,
          percentTimeLeft: percentTimeLeft
        });
      } else {
        this.setState({
          gameTimeCount: gameTimeCount - 1,
          percentTimeLeft: percentTimeLeft
        });
      }
      if (this.state.gameTimeCount < 1) {
        // clearInterval(this.intervalId);
        this.stopTimer();
        this.gameOver();
      }
    }
    return;
  }

  startGame() {
    console.log("game started");
    //60 second timer run, display, and finish
    const { gameTime, gameOverMessagesArray } = this.state;
    const bombTimes = this.randomBombTimes(0, gameTime);
    const randomGameOverMessage =
      gameOverMessagesArray[
        this.randomBetweenTwoNumbers(0, gameOverMessagesArray.length - 1)
      ];
    console.log("bombTimes: ", bombTimes);
    this.setState({
      gameStarted: true,
      gameOver: false,
      bombTimes: bombTimes,
      gameOverMessage: randomGameOverMessage
    });
    this.startTimer();
    //each 10 seconds, mole stay for a sec less
  }
  initializeState() {
    const { highScore, score } = this.state;
    const newHighScore = highScore > score ? highScore : score;
    localStorage["high_score"] = JSON.stringify(newHighScore);
    this.setState({
      ...default_state,
      lastGameScore: score,
      highScore: newHighScore,
      gameOver: true,
      intervalId: clearInterval(this.state.intervalId)
    });
  }
  gameEngine() {
    //pop one every second
    const randomMole = this.getRandomAvailableMole();
    this.displayMole(randomMole, this.state.moleDisplayTime);
    //check if it's a bomb time
    const { gameTime, gameTimeCount, bombTimes } = this.state;
    for (let i = 0; i < bombTimes.length; i++) {
      if (gameTime - gameTimeCount === parseInt(bombTimes[i] - 1, 10)) {
        const randomBomb = this.getRandomAvailableMole();
        //penaut butter jelly time
        console.log("bomb time: ", gameTime - gameTimeCount);
        this.displayBomb(randomBomb);
      }
    }
    //randomly, not more than 4 times during 60sec game pop a bomb for 3sec
  }
  randomBombTimes(min, max) {
    const howManyBombs = this.randomBetweenTwoNumbers(1, 4);
    // Math.floor(Math.random() * 4) + 1;
    var n = [];
    for (var i = 0; i < howManyBombs; i++) {
      n.push(this.randomBetweenTwoNumbers(min, max));
    }
    return n;
  }
  getRandomAvailableMole() {
    const { avaliableMoleIds } = this.state;
    const totalPawnsAvb = avaliableMoleIds.length;
    // console.log(avaliableMoleIds);
    const randomPlace = this.randomBetweenTwoNumbers(0, totalPawnsAvb);
    //  Math.floor(Math.random() * totalPawnsAvb);

    const randomBowl = avaliableMoleIds[randomPlace];
    this.state.avaliableMoleIds.splice(randomPlace, 1);
    return randomBowl;
  }
  randomBetweenTwoNumbers(min, max) {
    return Math.floor(Math.random() * max) + min;
  }
  displayBomb(activateBowlId) {
    this.setState({
      pawns: {
        ...this.state.pawns,
        [activateBowlId]: {
          ...this.state.pawns[activateBowlId],
          style: "translate(0, 0%)",
          active: true,
          role: "nachos"
        }
      }
    });
    window.setTimeout(() => {
      this.hideMole(activateBowlId);
    }, this.state.bombDisplayTime);
  }

  displayMole(activateBowlId, displayTime) {
    this.setState({
      pawns: {
        ...this.state.pawns,
        [activateBowlId]: {
          ...this.state.pawns[activateBowlId],
          style: "translate(0, 0%)",
          active: true,
          role: "avocado"
        }
      }
    });
    window.setTimeout(() => {
      this.hideMole(activateBowlId);
    }, displayTime);
  }

  hideMole(hideMoleId) {
    //back to availableMoleIds
    this.state.avaliableMoleIds.push(hideMoleId);
    this.setState({
      // avaliableMoleIds: newAvailableMoles,
      pawns: {
        ...this.state.pawns,
        [hideMoleId]: {
          ...this.state.pawns[hideMoleId],
          style: "translate(0, -110%)",
          active: false,
          targetHit: false,
          role: "hiddenMole"
        }
      }
    });
  }
  lockOutClick(bowlNumber, timeToLock) {
    window.setTimeout(() => {
      this.setState({
        pawns: {
          ...this.state.pawns,
          [bowlNumber]: {
            ...this.state.pawns[bowlNumber],
            targetHit: false
          }
        }
      });
      // console.log('unlocking bowl - ', bowlNumber);
    }, timeToLock);
  }
  addToScore(bowlNumber, role) {
    if (this.state.pawns[bowlNumber].targetHit) {
      return;
    }
    // console.log("role clicked: ", role);
    if (role === "avocado") {
      const timestamp_now = Math.floor(Date.now() / 1000);
      const calculateBonus = () => {
        const {
          lastHitTime,
          MultiplierAllowedSecondsTimeGap,
          scoreMultiplier
        } = this.state;
        // console.log("timestamp now: ", timestamp_now);
        // console.log(
        //   "timestamp now - lastTimeHit: ",
        //   timestamp_now - lastHitTime
        // );
        if (timestamp_now - lastHitTime <= MultiplierAllowedSecondsTimeGap) {
          if (scoreMultiplier < 4) {
            return scoreMultiplier + 1; //advance to next combo lvl
          } else {
            return scoreMultiplier;
          }
        } else {
          return 1; //no combo, reset comboScore
        }
      };

      const comboLvl = calculateBonus();
      let prizedPoints = 0;
      switch (comboLvl) {
        case 1:
          prizedPoints = 1;
          break;
        case 2:
          prizedPoints = 4;
          break;
        case 3:
          prizedPoints = 16;
          break;
        case 4:
          prizedPoints = 256;
          break;
        default:
          prizedPoints = 1;
          break;
      }
      const newScore = [parseInt(this.state.score, 10) + prizedPoints];

      this.lockOutClick(bowlNumber, this.state.moleDisplayTime); // lockTime should equal the lifetime of the mole
      this.callPointsDisplay(prizedPoints);
      this.setState({
        pawns: {
          ...this.state.pawns,
          [bowlNumber]: {
            ...this.state.pawns[bowlNumber],
            targetHit: true
          }
        },
        scoreMultiplier: comboLvl,
        score: newScore,
        lastHitTime: timestamp_now
      });
    } else if (role === "nachos") {
      console.log("crumbling nachos, do not squash the nachos! what a mess..");
      this.setState({
        pawns: {
          ...this.state.pawns,
          [bowlNumber]: {
            ...this.state.pawns[bowlNumber],
            targetHit: true
          }
        },
        lives: this.state.lives - 1
      });
      if (this.state.lives - 1 < 1) {
        window.setTimeout(() => {
          this.gameOver();
        }, 800);
      }
    }
  }
  callPointsDisplay(prizedPoints) {
    console.log("+" + prizedPoints);
  }
  drawSingleRow(rowNumber) {
    let guacamoleBowl = [];
    const { mapSize } = this.state;
    const rowKey = JSON.stringify(rowNumber);
    for (let i = 1; i <= mapSize; i++) {
      const bowlNumber = rowKey + i;
      const currentClass =
        this.state.pawns[bowlNumber].role === "hiddenMole"
          ? "hiddenMole"
          : this.state.pawns[bowlNumber].role === "avocado"
            ? this.state.pawns[bowlNumber].targetHit
              ? "game__cross"
              : "game__mole"
            : this.state.pawns[bowlNumber].targetHit
              ? "game__bomb__cross"
              : "game__bomb";

      guacamoleBowl.push(
        <div key={rowKey + i}>
          <GuacamoleBlock
            context={this.state.pawns[bowlNumber]}
            onClick={this.addToScore.bind(this)}
            bowlNumber={bowlNumber}
            currentClass={currentClass}
            disabled={this.state.pawns[bowlNumber].targetHit}
          />
        </div>
      );
    }
    return guacamoleBowl;
  }
  drawGameRows() {
    let guacamoleBowlsRow = [];
    const { mapSize } = this.state;
    for (let rowNumber = 1; rowNumber <= mapSize; rowNumber++) {
      guacamoleBowlsRow.push(
        <div key={rowNumber} className="game-row">
          {this.drawSingleRow(rowNumber)}
        </div>
      );
    }
    return guacamoleBowlsRow;
  }
  gameOver() {
    console.log("game over");
    this.initializeState();
  }
  showConfirmForfeit = () =>
    this.setState({ openConfirmForfeit: true, gamePaused: true });
  handleConfirm = () => {
    this.setState({
      openConfirmForfeit: false,
      gamePaused: false,
      gameOverMessage: this.state.rickRollMessage
    });
    this.gameOver();
  };
  handleCancel = () =>
    this.setState({ openConfirmForfeit: false, gamePaused: false });

  generateGameControllers() {
    if (this.state.gameStarted) {
      return (
        <Button
          color={"red"}
          size="tiny"
          className={"forfeitButton"}
          content={<Translate id="translations.forfeit">Forfeit</Translate>}
          onClick={this.showConfirmForfeit.bind(this)}
        />
      );
    }
  }
  startTimer() {
    this.setState({
      intervalId: setInterval(this.timer.bind(this), 1000),
      timerActive: true,
      currentCount: this.state.gameTime,
      percentTimeLeft: 100
    });
  }
  stopTimer() {
    this.setState({
      intervalId: clearInterval(this.state.intervalId),
      timerActive: false,
      currentCount: 0,
      percentTimeLeft: 0
    });
  }
  render() {
    const {
      // lives,
      difficultyPercent,
      difficultyLvl,
      comboMaxLevel,
      highScore,
      lastGameScore,
      score,
      gameOver,
      openConfirmForfeit,
      gameOverMessage,
      scoreMultiplier
    } = this.state;
    const showGame = this.state.gameStarted ? "show-div" : "hide-div";
    const showGameOver = this.state.gameStarted ? "hide-div" : "show-div";
    return (
      <section id="guacamoleGame" className={""}>
        <div className={showGame}>
          <div className="game-score-container container-style">
            {this.generateGameControllers()}

            <ComboDisplay
              scoreMultiplier={scoreMultiplier}
              comboMaxLevel={comboMaxLevel}
            />
            <DifficultyMeter
              difficultyLvl={difficultyLvl}
              difficultyPercent={difficultyPercent}
            />
            <Clock
              animated
              currentCount={this.state.gameTimeCount}
              percentTimeLeft={this.state.percentTimeLeft}
            />

            {/* <Lives
              lives={lives}
              visualRepresentation={"🥑"}
              className={"livesContainer"}
            /> */}
            <br />
            <Score score={score} />
          </div>
          <div className="extraLayers_guacamoleGame">
            <Confirm
              open={openConfirmForfeit}
              content={"You sure you want to leave them avocados alone?"}
              cancelButton="Never Mind, Guacamole!"
              confirmButton="Stop This Madness"
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
            />
          </div>
          <div className="game-container container-style">
            {this.drawGameRows()}
          </div>
        </div>
        <div className={showGameOver}>
          <GameOver
            score={lastGameScore}
            highScore={highScore}
            gameOver={gameOver}
            restartGame={this.startGame.bind(this)}
            gameOverMessage={gameOverMessage}
          />
        </div>
      </section>
    );
  }
}

export default withLocalize(GuacamoleGame);
