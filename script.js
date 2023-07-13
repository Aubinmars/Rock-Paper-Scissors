const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreElement = document.getElementById('player-score');
const compScoreElement = document.getElementById('comp-score');
const output = document.getElementById('output');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3);
  switch (choiceNum) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    default:
      return '';
  }
}

function playRound(playerChoiceInt, computerChoice) {
  let winArray = [
    [0, 2, 1],
    [1, 0, 2],
    [2, 1, 0]
  ];
  let result = winArray[playerChoiceInt][computerChoice];

  if (result === 0) {
    output.textContent = `It's a tie! You chose ${playerChoiceInt} and the computer chose ${computerChoice}`;
  } else if (result === 1) {
    output.textContent = `You won! You chose ${playerChoiceInt} and the computer chose ${computerChoice}`;
    playerScore++;
  } else if (result === 2) {
    output.textContent = `You lost! You chose ${playerChoiceInt} and the computer chose ${computerChoice}`;
    computerScore++;
  }

  playerScoreElement.textContent = `Player Score: ${playerScore}`;
  compScoreElement.textContent = `Computer Score: ${computerScore}`;

  if (playerScore === 5) {
    output.textContent = 'Congratulations! You won the game!';
    disableButtons();
  } else if (computerScore === 5) {
    output.textContent = 'You lost the game. Better luck next time!';
    disableButtons();
  }
}

function disableButtons() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scissorsButton.disabled = true;
}

rockButton.addEventListener('click', function() {
  playRound(0, getComputerChoice());
});

paperButton.addEventListener('click', function() {
  playRound(1, getComputerChoice());
});

scissorsButton.addEventListener('click', function() {
  playRound(2, getComputerChoice());
});
