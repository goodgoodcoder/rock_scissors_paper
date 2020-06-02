const computerTag = document.querySelector("#computer");
computerTag.style.background = `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;
const rockBtn = document.querySelector("#rock");
const scissorsBtn = document.querySelector("#scissors");
const paperBtn = document.querySelector("#paper");
const scoreTag = document.querySelector("#score");

const rspCoords = {
  rock: "0",
  scissors: "-142px",
  paper: "-284px",
};

let coord = rspCoords.rock;

const intervalMaker = () => {
  return setInterval(() => {
    if (coord === rspCoords.rock) {
      coord = rspCoords.scissors;
    } else if (coord === rspCoords.scissors) {
      coord = rspCoords.paper;
    } else if (coord === rspCoords.paper) {
      coord = rspCoords.rock;
    }
    computerTag.style.background = `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${coord} 0`;
  }, 50);
};
let intervalID = intervalMaker();

let score = 0;

const clickButton = (win, lose) => {
  return () => {
    clearInterval(intervalID);
    if (coord === win) {
      score += 1;
    } else if (coord === lose) {
      score -= 1;
    }
    scoreTag.innerText = score;
    setTimeout(() => {
      intervalID = intervalMaker();
    }, 1000);
  };
};

function init() {
  rockBtn.addEventListener(
    "click",
    clickButton(rspCoords.scissors, rspCoords.paper)
  );
  scissorsBtn.addEventListener(
    "click",
    clickButton(rspCoords.paper, rspCoords.rock)
  );
  paperBtn.addEventListener(
    "click",
    clickButton(rspCoords.rock, rspCoords.scissors)
  );
}

init();
