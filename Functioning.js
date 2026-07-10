let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  tie: 0,
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".win_table").innerHTML = score.wins;
  document.querySelector(".lose_table").innerHTML = score.loses;
  document.querySelector(".tie_table").innerHTML = score.tie;
});

let playGame = (playerMove) => {
  let result = "";

  document.querySelector(".computerIcon").innerHTML = "";
  document.querySelector(".result").innerHTML = "";
  const computerMove = pickComputer();

  if (playerMove === "rock") {
    if (computerMove === "rock") result = "Tie!";
    else if (computerMove === "paper") result = "Lose!";
    else if (computerMove === "scissors") result = "Win!";
  } else if (playerMove === "paper") {
    if (computerMove === "rock") result = "Win!";
    else if (computerMove === "paper") result = "Tie!";
    else if (computerMove === "scissors") result = "Lose!";
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") result = "Lose!";
    else if (computerMove === "paper") result = "Win!";
    else if (computerMove === "scissors") result = "Tie!";
  }

  if (result === "Win!") {
    score.wins++;
  } else if (result === "Lose!") {
    score.loses++;
  } else {
    score.tie++;
  }

  document.querySelector(".yourMove").innerText = `Your move:`;
  document.querySelector(".pcMove").innerText = `Computer move:`;
  document.querySelector(
    ".playerIcon"
  ).innerHTML = ` <img src="/rock_paper_scissors/${playerMove}.png" class="moveIcon">`;

  setTimeout(() => {
    document.querySelector(
      ".computerIcon"
    ).innerHTML = `<img src="/rock_paper_scissors/${computerMove}.png" class="moveIcon">`;

    setTimeout(() => {
      document.querySelector(".result").innerText = result;

      setTimeout(() => {
        changeScoreTable();
        localStorage.setItem("score", JSON.stringify(score));
      }, 650);
    }, 700);
  }, 1750);
};

let pickComputer = () => {
  let computerMove = "";

  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) computerMove = "rock";
  else if (randomNumber > 2 / 3) computerMove = "scissors";
  else computerMove = "paper";

  return computerMove;
};

let changeScoreTable = () => {
  document.querySelector(".win_table").innerHTML = score.wins;
  document.querySelector(".lose_table").innerHTML = score.loses;
  document.querySelector(".tie_table").innerHTML = score.tie;
};

let reset = () => {
  score.wins = 0;
  score.loses = 0;
  score.tie = 0;
  localStorage.removeItem("score");
  changeScoreTable();
  document.querySelector(".result").innerText = "";
  document.querySelector(".yourMove").innerText = "";
  document.querySelector(".pcMove").innerText = "";
  document.querySelector(".playerIcon").innerText = "";
  document.querySelector(".computerIcon").innerText = "";
};
