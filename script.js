function getComputerChoice() {
    let choiceNum = Math.floor(Math.random() * 3);
    switch (choiceNum) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        return "";
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make playerSelection case-insensitive
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (playerSelection === computerSelection) {
      return "It's a Tie!";
    } else {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
  }
  
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
      const computerSelection = getComputerChoice();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }
    }
  
    if (playerScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
      console.log("You lost the game. Better luck next time!");
    } else {
      console.log("The game ended in a tie.");
    }
  }
  
  // Call the game function to start the game
  game();
  