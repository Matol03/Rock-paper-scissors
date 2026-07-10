document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".topTable").innerHTML = "";
  for (let i = 0; i < rateTable.length; i++) {
    document.querySelector(".topTable").innerHTML += `<div>
      ${rateTable[i]}
      </div>;`;
  }
});

let rateTable = JSON.parse(localStorage.getItem("ratingScores")) || [];
let rating = [];

let score = {
  wins: 0,

  loses: 0,
  tie: 0,
};

let playGame = (playerMove) => {
  tryAgain();
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

  document.querySelector(".yourMove").innerText = `${NickName}`;
  document.querySelector(".pcMove").innerText = `Computer`;
  document.querySelector(
    ".playerIcon"
  ).innerHTML = ` <img src="${playerMove}.png" class="moveIcon">`;

  setTimeout(() => {
    document.querySelector(
      ".computerIcon"
    ).innerHTML = `<img src="${computerMove}.png" class="moveIcon">`;

    setTimeout(() => {
      document.querySelector(".result").innerText = result;

      setTimeout(() => {
        changeScoreTable();
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

let getVariable1 = () => {
  return score.wins;
};

let getVariable2 = () => {
  return score.loses;
};

let getVariable3 = () => {
  return score.tie;
};

let tryAgain = () => {
  document.querySelector(".buttons").innerHTML = `<div class="TryAgain">
  <button class = 'tryAgainButton'
  onclick = "returnButtons()">
  Play Again
  </button>`;
};

let returnButtons = () => {
  document.querySelector(".buttons").innerHTML = ` <div class="buttons">
  
  <button class="rockButton"
  onclick="
  playGame('rock');
  ">
  <img class="rockIcon" src = "rock.png" /> 
  </button>
  
  <button class="paperButton"
  onclick="
  playGame('paper');
  ">
    <img class="paperIcon" src = "paper.png" /> 
  </button>
  
  <button class="scissorsButton" 
  onclick="
  playGame('scissors');
  ">
    <img class="scissorsIcon" src = "scissors.png" /> 
  </button>
  </div>`;
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
  document.querySelector(".buttons").innerHTML = ` <div class="buttons">
  
  <button class="rockButton"
  onclick="
  playGame('rock');
  ">
  <img class="rockIcon" src = "rock.png" /> 
  </button>
  
  <button class="paperButton"
  onclick="
  playGame('paper');
  ">
    <img class="paperIcon" src = "paper.png" /> 
  </button>
  
  <button class="scissorsButton" 
  onclick="
  playGame('scissors');
  ">
    <img class="scissorsIcon" src = "scissors.png" /> 
  </button>
  </div>`;
};

let render = () => {
  document.querySelector(".rate").innerHTML = "";
  for (let i = 0; i < rateTable.length; i++) {
    document.querySelector(".rate").innerHTML += `<div>
      ${rateTable[i]}
      </div>;`;
  }
  localStorage.setItem("ratingScores", JSON.stringify(rateTable));
};

let NickName = " ";

const Test = () => {
  document.querySelector(".startButton").innerHTML = ``;
  NickName = document.querySelector(".nickname").value;

  document.querySelector(".sub").innerHTML = `<div class = "homePage">

  
  
  
  <div class="buttons">
  
  <button class="rockButton"
  onclick="
  playGame('rock');
  ">
  <img class="rockIcon" src = "rock.png" /> 
  </button>
  
  <button class="paperButton"
  onclick="
  playGame('paper');
  ">
    <img class="paperIcon" src = "paper.png" /> 
  </button>
  
  <button class="scissorsButton" 
  onclick="
  playGame('scissors');
  ">
    <img class="scissorsIcon" src = "scissors.png" /> 
  </button>
  </div>
  
  
  <br>
  <div class="moves">
  
  <div>
    <p class="yourMove"></p>
    <p class="playerIcon"></p>
  </div>
  
  <div>
    <p class="pcMove"></p>
    <p class="computerIcon"></p>
  </div>
  
  </div>
  
  <p class="result"> </p>
  
  
  <div class="scoreTable">
  <div class = "Table">
  <p style="margin-bottom:0">Wins:</p>
  <p class = "win_table">
    0
  </p>
  </div>
  
  <div class = "Table">
    <p style="margin-bottom: 0;">Loses:</p>
    <p class = "lose_table">
     0
    </p>
    </div>
  
    <div class = "Table">
      <p style="margin-bottom: 0;">Ties:</p>
      <p class = "tie_table">
        0
      </p>
      </div>
    </div>
  
  <div class="TryAgain">
  <button class="reset" 
  onclick="
  reset();
  ">
    Reset Score
  </button>

  <button class= 'reset'
  onclick = "location.reload();">
  Go to Homepage
  </button>

  <button class= 'reset'
  onclick = "
  score.wins = getVariable1();
  score.loses = getVariable2();
  score.tie = getVariable3();
  rating = [
    '${NickName}',
    score.wins,
    score.loses,
    score.tie,
  ]
  rateTable.push(rating);
  render();
  ">
  Save result
  </button>
  </div>



  <div class = "rate">


  </div>
  </div>`;

  document.querySelector(".win_table").innerHTML = score.wins;
  document.querySelector(".lose_table").innerHTML = score.loses;
  document.querySelector(".tie_table").innerHTML = score.tie;
};

let Delete = () => {
  localStorage.removeItem("ratingScores");
  location.reload();
};
