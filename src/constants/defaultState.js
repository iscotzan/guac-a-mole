const default_state = {
  openConfirmForfeit: false,
  gamePaused: false,
  gameOver: false,
  gameTime: 60,
  gameTimeCount: 60,
  scoreMultiplier: 1,
  MultiplierAllowedSecondsTimeGap: 1.5,
  lastHitTime: null,
  gameInterval: null,
  score: 0,
  lastGameScore: 0,
  highScore: 0,
  lives: 1,
  difficultyLvl: 1,
  difficultyPercent: (1 / 6) * 100,
  comboMaxLevel: 4,
  multiplier: 1, //1hit=1, 2hit=4, 3hit=16, 4hit=256
  gameStarted: false,
  mapSize: 4, //calculated as a 4x4 square.
  possibleRoles: ["avocado", "nachos"],
  bombDisplayTime: 3000,
  moleDisplayTime: 5000, //then 1000ms less after each 10 sec. till 500ms,
  reduceMoleTimeInterval: null,
  intervalId: null,
  timerActive: false,
  percentTimeLeft: 100,
  avaliableMoleIds: [
    "11",
    "12",
    "13",
    "14",
    "21",
    "22",
    "23",
    "24",
    "31",
    "32",
    "33",
    "34",
    "41",
    "42",
    "43",
    "44"
  ],
  pawns: {
    11: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    12: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    13: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    14: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    21: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    22: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    23: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    24: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    31: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    32: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    33: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    34: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    41: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    42: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    43: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    },
    44: {
      role: "avocado",
      active: false,
      targetHit: false,
      lifetime: 0,
      style: "translate(0, -110%)"
    }
  }, //can be avocado, splatter, bomb.
  gameOverMessagesArray: [
    "Not yet, Not yet, Not yet, Not yet, Not yet, EAT ME NOW, Too late. -Avocados",
    "We go Together Like Avocado and Literally Everything",
    "I’M ON THE GAUC & CHIPS DIET",
    "IT’S TIME TO GUAC AND ROLL",
    "IT’S OKAY GUAC, I’M EXTRA TOO"
  ],
  gameOverMessage: "What a Mess"
};

export default default_state;
