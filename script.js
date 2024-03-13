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
const contador = document.createElement("p");
const resultContador = document.createElement("p")

container.appendChild(resultado);
container.appendChild(resultContador);

resultado.style.color = "#7b7bff";
resultado.style.fontSize = "1.5em";
resultado.style.margin = "1em";
resultado.style.fontWeight = "bold"

resultContador.style.fontSize = "2em"
resultContador.style.fontWeight = "bolder"


let contValue = 0;
let playerScore = 0;
let computerScore = 0;
contador.textContent = contValue;

const reloadButton = document.getElementById("reloadButton");
reloadButton.addEventListener("click", () => {
    window.location.reload();
});

function updateScore(roundResult) {
    if (roundResult.includes("You win")) {
        playerScore++;
        document.getElementById("playerWins").textContent = `Player score: ${playerScore}`;
    } else if (roundResult.includes('You lose!')) {
        computerScore++;
        document.getElementById("computerWins").textContent = `Computer score: ${computerScore}`;
    }
}

function Winner() {
    let message;
    if(playerScore > computerScore) {
        message = "YOU WIN!!";
        resultContador.style.color = "greenyellow";
    } else if (computerScore > playerScore) {
        message = "COMPUTER WIN!!";
        resultContador.style.color = "red";
    } else {
        message = "IT'S A F***ING TIE!!";
        resultContador.style.color = "lightgreen";
    } 
    resultContador.textContent = message;
    
    if (contValue === 5) {
        reloadButton.style.display = "block";
    }
}


rocks.addEventListener('click', () => {
    if (contValue < 5 ) {
        contValue++;
        const playerSelection = rocks.textContent;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        resultado.textContent = roundResult;  
        updateScore(roundResult);
        if (contValue === 5) {
            resultContador.textContent = Winner();
        }
    }
});

paper.addEventListener('click', () => {

    if (contValue < 5 ) {
        contValue++;
        const playerSelection = paper.textContent;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        resultado.textContent = roundResult;
        updateScore(roundResult);
        if (contValue === 5) {
            resultContador.textContent = Winner();
        }  
    }  
})

scissors.addEventListener('click', () => {

    if (contValue < 5 ) {
        contValue++;
        const playerSelection = scissors.textContent;
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        resultado.textContent = roundResult;  
        updateScore(roundResult);
        if (contValue === 5) {
            resultContador.textContent = Winner();
        }
    }   
})







