function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;

    if (randomNumber === 0) {
        computerSelection = "Rocks";
    } else if (randomNumber === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }

    return computerSelection;
};

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice === computerChoice) {
        return "It's a tie. Two players select: " + playerChoice + ".";
    }

    if (
        (playerChoice === "rocks" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rocks") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win! " + playerChoice + " beats " + computerChoice + ".";
    } else {
        return "You lose! " + computerChoice + " beats " + playerChoice + ".";
    }
}

const playerSelection1 = prompt("Type your selection for round 1: rocks, paper or scissors");
const playerSelection2 = prompt("Type your selection for round 2: rocks, paper or scissors");
const playerSelection3 = prompt("Type your selection for round 3: rocks, paper or scissors");
const playerSelection4 = prompt("Type your selection for round 4: rocks, paper or scissors");
const playerSelection5 = prompt("Type your selection for round 5: rocks, paper or scissors");

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection1, computerSelection));
console.log(playRound(playerSelection2, computerSelection));
console.log(playRound(playerSelection3, computerSelection));
console.log(playRound(playerSelection4, computerSelection));
console.log(playRound(playerSelection5, computerSelection));



