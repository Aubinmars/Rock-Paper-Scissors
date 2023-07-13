// Game variables
let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;

// Button elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

// Score elements
const playerScoreElement = document.getElementById('player-score');
const compScoreElement = document.getElementById('comp-score');

// Output element
const outputElement = document.getElementById('output');

// Function to generate a random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to handle game logic
function playGame(playerChoice) {
  const computerChoice = getComputerChoice();

  switch (playerChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      playerScore++;
      outputElement.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      compScore++;
      outputElement.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      outputElement.textContent = "It's a tie!";
      break;
  }

  // Update scores on the page
  playerScoreElement.textContent = `Player Score: ${playerScore}`;
  compScoreElement.textContent = `Computer Score: ${compScore}`;

  // Check if a player has won
  if (playerScore === 5) {
    outputElement.textContent = "Congratulations! You've won the game!";
    disableButtons();
  } else if (compScore === 5) {
    outputElement.textContent = "Oh no! The computer has won the game!";
    disableButtons();
  }
}

// Function to disable game buttons
function disableButtons() {
  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
}

// Event listeners for the game buttons
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));
