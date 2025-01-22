

function getComputerChoice(){
    const minChoiceCode = 1; 
    const maxChoiceCode = 3; 
    let choice = true;
    let randomChoice;
    // generating random choice 

    while (choice){
        randomChoice = Math.floor(Math.random() * (maxChoiceCode - minChoiceCode + 1) + minChoiceCode);
        
            if(randomChoice === 1){
                randomChoice = "rock";
                choice = false;
            }
            else if(randomChoice === 2){
                randomChoice = "paper"
                choice = false;
            }
            else{
                randomChoice = "scissors";
                choice = false;
            }   
    }
    return randomChoice;
}

function getHumanChoice(){
    let userChoice = prompt("Please enter your choice:");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}


/*
function playRound(humanChoice, computerChoice){
    // if the player chooses rock.
    if (humanChoice === "rock"){
        if(computerChoice === "paper"){
            console.log("You Lose! Paper beats Rock.");
            computerScore++;
        }
        else if(computerChoice === "scissors"){
            console.log("You Win! Rock beats Scissors.");
            humanScore++;
        }
        else{
            console.log("Draw!!");
        }
    }
    // if the player chooses paper.
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            console.log("You Win! Paper beats Rock.");
            humanScore++;
        }
        else if(computerChoice === "scissors"){
            console.log("You Lose! Scissors beat Paper.");
            computerScore++;
        }
        else{
            console.log("Draw!");
        }
    }
    // if the player chooses scissors
    else{
        if(computerChoice === "paper"){
            console.log("You Win! Scissors beat Paper.");
            humanScore++;
        }
        else if(computerChoice === "rock"){
            console.log("You Lose! Rock beats Scissors.");
            computerScore++;
        }
        else{
            console.log("Draw!");
        }
    }
}
*/

/*

function playGame(){
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();

    let humanScore = 0; // variable to keep track of Player Score.
    let computerScore = 0; // variable to keep track of Computer Score.

    let humanSelection = 0;
    let computerSelection = 0;

    function chosenChoice(){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
    }

    function playRound(humanChoice, computerChoice){
        // if the player chooses rock.
        if (humanChoice === "rock"){
            if(computerChoice === "paper"){
                console.log("You Lose! Paper beats Rock.");
                computerScore++;
            }
            else if(computerChoice === "scissors"){
                console.log("You Win! Rock beats Scissors.");
                humanScore++;
            }
            else{
                console.log("Draw!!");
            }
        }
        // if the player chooses paper.
        else if(humanChoice === "paper"){
            if(computerChoice === "rock"){
                console.log("You Win! Paper beats Rock.");
                humanScore++;
            }
            else if(computerChoice === "scissors"){
                console.log("You Lose! Scissors beat Paper.");
                computerScore++;
            }
            else{
                console.log("Draw!");
            }
        }
        // if the player chooses scissors
        else{
            if(computerChoice === "paper"){
                console.log("You Win! Scissors beat Paper.");
                humanScore++;
            }
            else if(computerChoice === "rock"){
                console.log("You Lose! Rock beats Scissors.");
                computerScore++;
            }
            else{
                console.log("Draw!");
            }
        }
    }
    chosenChoice();
    playRound();

}
 playGame();
*/