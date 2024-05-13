
// obtain computer choice of Rock Paper or Scissors
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
// and parse user selection to lowercase to allow for case insensitivity in user input
function getHumanChoice() {
    let humanGuess = prompt("Rock, Paper or Scissors - You must choose!");
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


// compare the results of computer and human choice to determine winner

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return ("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        return ("You lose! Paper Beats Rock");
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        return ("You win! Scissors beats Paper");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        return ("You win! Rock Beats Scissors");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        return ("You lose! Rock Beats Scissors");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        return ("You win! Paper Beats Rock");
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        return ("You lose! Scissors beats Paper");
    } else {
        return ("Try again");
    }
}
// loop the playRound function until either score reaches 5

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    while (humanScore < 5 && computerScore < 5) {
        let result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result);
        if (result.includes("win")) {
            humanScore++;
            console.log("You Win!");
        } else if (result.includes("lose")) {
            computerScore++;
            console.log("You Lose!");
        } else {
            console.log("It's a tie!");
        }
        console.log("Your Score: " + humanScore);
        console.log("Computer's Score: " + computerScore);
    }
    console.log("Final Results - Your Score: " + humanScore + " Computer's Score: " + computerScore)
    if (humanScore > computerScore) {
        console.log("You Win! Congratulations!");
    } else if (computerScore > humanScore) {
        console.log("You lose! Better luck next time!")
    }
}
playGame();
