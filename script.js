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
const container = document.querySelector(".container");
const rocks = document.getElementById("rocks");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const resultado = document.createElement("div");
container.appendChild(resultado);
const contador = document.createElement("p");

rocks.addEventListener('click', () => {
    const playerSelection = rocks.textContent;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    resultado.textContent = roundResult;
});

paper.addEventListener('click', () => {
    const playerSelection = paper.textContent;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    resultado.textContent = roundResult;
})

scissors.addEventListener('click', () => {
    const playerSelection = scissors.textContent;
    const computerSelection = getComputerChoice();
    const roundResult = playRound(playerSelection, computerSelection);
    resultado.textContent = roundResult;
})







