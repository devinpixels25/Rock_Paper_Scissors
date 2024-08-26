function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  } else {
    console.log("something went wrong");
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  let askUser = prompt("rock, paper, or scissors?");

  if (askUser === null) {
    return getHumanChoice();
  } else if (askUser.toLowerCase() === "rock") {
    return "rock";
  } else if (askUser.toLowerCase() === "paper") {
    return "paper";
  } else if (askUser.toLowerCase() === "scissors") {
    return "scissors";
  } else {
    return getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;
function playGame() {
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === "rock" && computerChoice === "rock") {
      console.log("Tie this round");
      console.log(`player has ${humanScore}, computer has ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      console.log("Tie this round");
      console.log(`player has ${humanScore}, computer has ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
      console.log("Tie");
      console.log(`player has ${humanScore}, computer has ${computerScore}`);
    } else if (humanChoice === "rock") {
      if (computerChoice === "paper") {
        ++computerScore;
        console.log("computer wins this round");
        console.log(`player has ${humanScore}, computer has ${computerScore}`);
      }

      if (computerChoice === "scissors") {
        ++humanScore;
        console.log("player wins this round");
        console.log(`player has ${humanScore}, computer has ${computerScore}`);
      }
    } else if (humanChoice === "paper") {
      if (computerChoice === "rock") {
        ++humanScore;
        console.log("player wins this round");
        console.log(`player has ${humanScore}, computer has ${computerScore}`);
      }

      if (computerChoice === "scissors") {
        ++computerScore;
        console.log("computer wins this round");
        console.log(`player has ${humanScore}, computer has ${computerScore}`);
      }
    } else if (humanChoice === "scissors") {
      if (computerChoice === "rock") {
        ++computerScore;
        console.log("computer wins this round");
        console.log(`player has ${humanScore}, computer has ${computerScore}`);
      }

      if (computerChoice === "paper") {
        ++humanScore;
        console.log("player wins this round");
        console.log(`player has ${humanScore}, computer has ${computerScore}`);
      }
    }
  }

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}
playGame();
playGame();
playGame();
playGame();
playGame();
