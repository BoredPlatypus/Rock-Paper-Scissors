let humanScore = 0; // variable to keep track of Player Score.
let computerScore = 0; // variable to keep track of Computer Score.

function getComputerChoice(){
    const minChoiceCode = 112; // character code for p
    const maxChoiceCode = 115; // chharacter code for s
    let choice = true;
    let randomChoice;
    // generating random choice 

    while (choice){
        randomChoice = Math.floor(Math.random() * (maxChoiceCode - minChoiceCode + 1) + minChoiceCode);
        // if randomChoice is 113(char code for q, we do not have a option for that so continuing the loop)
        if(randomChoice === 113){
            choice = true;
        }
        // converting the rest into our available choices
        // if 112 then alphabet is p and concatenating "aper" to it to return paper and so on for the rest.
        else{
            if(randomChoice === 112){
                randomChoice = String.fromCharCode(randomChoice) + "aper";
                choice = false;
            }
            else if(randomChoice === 114){
                randomChoice = String.fromCharCode(randomChoice) + "ock";
                choice = false;
            }
            else{
                randomChoice = String.fromCharCode(randomChoice) + "cissors";
                choice = false;
            }
        }
    }
    return randomChoice;
}

function getHumanChoice(){
    let userChoice = prompt("Please enter your choice:");
    userChoice = userChoice.toLowerCase();
    return userChoice;
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

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function noOfRounds(){
    
}