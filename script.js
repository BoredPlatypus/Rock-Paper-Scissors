

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


function playGame(){


        let humanScore = 0; // variable to keep track of Player Score.
        let computerScore = 0; // variable to keep track of Computer Score.

        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        function playRound(humanChoice,computerChoice){
            if(humanChoice === computerChoice){
                alert("Draw!");
            }
            else if(humanChoice === "rock" && computerChoice ==="paper"){
                computerScore++;
                alert("You Lose! Paper beats Rock.");
                alert("Your Score: " + humanScore +" Computer Score: " + computerScore);           
            }
            else if(humanChoice === "paper" && computerChoice === "rock"){
                humanScore++;
                alert("You Win! Paper beats Rock.");
                alert("Your Score: " + humanScore +" Computer Score: " + computerScore);  
            }
            else if(humanChoice === "scissors" && computerChoice === "paper"){
                humanScore++;
                alert("You Win! Scissors beats Paper.");
                alert("Your Score: " + humanScore +" Computer Score: " + computerScore);  
            }
            else if(humanChoice === "paper" && computerChoice === "scissors"){
                computerScore++;
                alert("You Lose! Scissors beats paper");
                alert("Your Score: " + humanScore +" Computer Score: " + computerScore);  
            }
            else if(humanChoice === "rock" && computerChoice === "scissors"){
                humanScore++;
                alert("You Win! Rock beats Scissors");
                alert("Your Score: " + humanScore +" Computer Score: " + computerScore);  
            }
            else{
                computerScore++;
                alert("You Lose! Rock beats Scissors.");
                alert("Your Score: " + humanScore +" Computer Score: " + computerScore);  
            }
        }
        playRound(humanChoice,computerChoice);
        counter++;
 
      
    if(humanScore > computerScore){
        alert("Your Score: " + humanScore +" Computer Score: " + computerScore);  
        alert("You Win!");

    } 
    else{
        alert("Your Score: " + humanScore +" Computer Score: " + computerScore);  
        alert("You Lose!");
    }


}
playGame();

