let getComputerChoice = () => {
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

function playGame() {
    console.log(playRound(prompt("Type your selection for the round 1: rocks, paper or scissors"), getComputerChoice()));
    console.log(playRound(prompt("Type your selection for the round 2: rocks, paper or scissors"), getComputerChoice()));
    console.log(playRound(prompt("Type your selection for the round 3: rocks, paper or scissors"), getComputerChoice()));
    console.log(playRound(prompt("Type your selection for the round 4: rocks, paper or scissors"), getComputerChoice()));
    console.log(playRound(prompt("Type your selection for the round 5: rocks, paper or scissors"), getComputerChoice()));
}

playGame();
