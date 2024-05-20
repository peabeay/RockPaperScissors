
// obtain computer choice of Rock Paper or Scissors
function getComputerChoice() {
    const compGuess = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (compGuess === 1) {
        return ("rock");
    } else if (compGuess === 2) {
        return ("paper");
    } else {
        return ("scissors");
    }
}
// obtain human choice by listening to button events

const gamePlay = document.querySelector(".gamePlay")
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
let humanChoice = ""

rock.addEventListener("click", () => {
    humanChoice = "rock"
    playGame();
})
paper.addEventListener("click", () => {
    humanChoice = "paper"
    playGame();
})
scissors.addEventListener("click", () => {
    humanChoice = "scissors"
    playGame();
})

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
    }
}

let humanScore = 0;
let computerScore = 0;
const results = document.createElement("div")
gamePlay.appendChild(results)
const scores = document.createElement("div")
scores.textContent = "Current scores - Player: " + humanScore + " Computer: " + computerScore;
gamePlay.appendChild(scores)
const gameOver = document.createElement("h2")
function playGame() {
    if (humanScore >= 5 || computerScore >= 5) {}
    else if (humanScore < 5 && computerScore < 5) {
        let result = playRound(humanChoice, getComputerChoice());
        if (result.includes("win")) {
            humanScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }

        const roundWinner = document.createElement("p")
        roundWinner.textContent = result;
        results.replaceChildren(roundWinner)
        scores.textContent = "Current scores - Player: " + humanScore + " Computer: " + computerScore;
        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                gameOver.textContent = "Game over! You win!"
                gamePlay.appendChild(gameOver);
            }
            else if (humanScore < computerScore) {
                gameOver.textContent = "Game over! You lose!"
                gamePlay.appendChild(gameOver);
            }
        }
    }
}
