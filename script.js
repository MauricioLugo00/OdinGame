function playGame() {

    let getComputerChoice = (computerSelection, playerSelection) => {

        const randomNumber = Math.floor(Math.random() * 3);
        
        if (randomNumber == 0) {
            computerSelection ="rocks";
        } else if (randomNumber == 1){
            computerSelection = "paper";
        } else if (randomNumber == 2){
            computerSelection = "scissors"
        }

        playerSelection = playerSelection.toLowerCase(); 


        //PLayer win
        if (computerSelection === "rocks" && playerSelection === "paper"){
            return "You win! Paper beats Rocks"
        } else if (computerSelection === "paper" && playerSelection === "scissors") {
            return "You win! Scissors beats Paper"
        } else if (computerSelection === "scissors" && playerSelection === "rocks"){
            return "You win! Rocks beats Scissors"
        } 

        else if(computerSelection == ("paper" || "rocks" || "scissors") && playerSelection == ("paper" || "rocks" || "scissors"))
        return "It's a tie"

        //Player win

        else if (computerSelection === "paper" && playerSelection === "rocks"){
            return "You lose! Paper beats Rocks"
        } else if (computerSelection === "rocks" && playerSelection === "scissors") {
            return "You lose! Rocks beats Scissors"
        } else if (computerSelection === "scissors" && playerSelection === "paper") {
            return "You lose! Scissors beats Paper"
        }   
    
    }
    
    const playerSelection = prompt("");
    const computerSelection = null;
    console.log(getComputerChoice(computerSelection, playerSelection))

        
}

console.log(playGame(playGame(playGame(playGame(playGame())))))


