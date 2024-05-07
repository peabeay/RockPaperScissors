
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const compGuess = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (compGuess === 1) {
        return "Rock";
    } else if (compGuess === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}
console.log(getComputerChoice())

function getHumanChoice() {
    let humanGuess = prompt("Rock, Paper or Scissors - You must choose!");
        if (humanGuess.toLowerCase() === "rock") {
            return "Rock";
        } else if (humanGuess.toLowerCase() === "paper") {
            return "Paper";
        } else if (humanGuess.toLowerCase() === "scissors") {
            return "Scissors";
        } else {
            alert("You didn't enter Rock, Paper or Scissors so you can't play");
        }
    }

console.log(getHumanChoice())

function playRound(humanChoice, computerGuess) {
    
}

// use random number generation to pick a number between 1 and 3
// if number returned is 1, then print rock. etc.

// Prompt for human choice of "Rock, Paper or Scissors"
