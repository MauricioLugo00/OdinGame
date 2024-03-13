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

const playerSelection = prompt("Type your selection: rocks, paper or scissors");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));








