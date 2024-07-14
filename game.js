let userScore = 0;
let compScore = 0;

let uscore = document.querySelector(".user-score");
let cscore = document.querySelector(".comp-score");

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector(".msg");

const showUserWin = (userWin) => {
  if (userWin) {
    msg.innerText = "You Won!!!";
    userScore++;
    uscore.innerText = userScore;
  } else {
    msg.innerText = "Computer Won!!!";
    compScore++;
    cscore.innerText = compScore;
  }
};

const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomIdx = Math.floor(Math.random() * 3);
  return option[randomIdx];
};

const play = (userChoice) => {
  const compChoice = genCompChoice();
  if (compChoice === userChoice) {
    msg.innerText = "Draw ! Guess Again..";
  }
  let userWin = true;
  if (userChoice === "rock") {
    //paper,scissor
    userWin = compChoice === "paper" ? false : true;
  } else if (userChoice === "paper") {
    //rock,scissor
    userWin = compChoice === "scissor" ? false : true;
  } else {
    //rock,paper
    userWin = compChoice === "rock" ? false : true;
  }
  showUserWin(userWin);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    play(userChoice);
  });
});
