let humanScore = 0;
let computerScore = 0; 

// obtain computer choice or Rock Paper or Scissors
function getComputerChoice() {
    const compGuess = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    console.log(compGuess);
    if (compGuess === 1) {
        return ("rock");
    } else if (compGuess === 2) {
        return ("paper");
    } else {
        return ("scissors");
    }
}

// take input from user of their choice Rock Paper or Scissors
let humanGuess = prompt("Rock, Paper or Scissors - You must choose!");

// parse user selection to lowercase to allow for case insensitivity in user input
function getHumanChoice() {
    if (humanGuess.toLowerCase() === "rock") {
        return ("rock");
    } else if (humanGuess.toLowerCase() === "paper") {
        return ("paper");
    } else if (humanGuess.toLowerCase() === "scissors") {
        return ("scissors");
    } else {
        alert("You didn't enter Rock, Paper or Scissors so you can't play");
    }
}
// console.log(getHumanChoice())

// compare the results of computer and human choice to determine winner

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return ("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++
        return ("You lose! Paper Beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++
        return ("You win! Scissors beats Paper");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++
        return ("You win! Rock Beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++
        return ("You lose! Rock Beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++
        return ("You win! Paper Beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++
        return ("You lose! Scissors beats Paper");
    } else {
        return ("Try again");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
console.log(result);

// keep scores after a round 



// function keepScore() {
//     if (result.includes("You win")) {
//         let humanScore = humanScore++;
//     } else if (result.includes("You lose")) {
//         let computerScore = computerScore++;
//     }
// }
// keepScore();
console.log(humanScore);
console.log(computerScore);