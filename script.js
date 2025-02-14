

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

function getHumanChoice(playerChoice){
    return playerChoice;
}


function playGame(){

        let humanChoice = 0;
        let computerChoice = 0;
        
        const choiceRock = document.querySelector("#rock");
        choiceRock.addEventListener("click" , () =>{
            humanChoice = getHumanChoice("rock");
            computerChoice = getComputerChoice();
            playRound(humanChoice,computerChoice);
            gameOver();
        });
        const choicePaper = document.querySelector("#paper");
        choicePaper.addEventListener("click", ()=>{
            humanChoice = getHumanChoice("paper");
            computerChoice = getComputerChoice();
            playRound(humanChoice,computerChoice);
            gameOver();
        });
        const choiceScissors = document.querySelector("#scissors");
        choiceScissors.addEventListener("click", ()=>{
            humanChoice = getHumanChoice("scissors");
            computerChoice = getComputerChoice();
            playRound(humanChoice,computerChoice);
            gameOver();
        });


        let humanScore = 0; // variable to keep track of Player Score.
        let computerScore = 0; // variable to keep track of Computer Score.
        let scoreDiv = document.querySelector(".score");
        let currentResultDiv = document.querySelector(".winorlose");
        let finalResult = document.querySelector(".declarewinner");
        scoreDiv.style.fontSize = "25px";
        scoreDiv.style.color = "brown";
        currentResultDiv.style.fontSize = "25px";
        currentResultDiv.style.color = "brown";
        finalResult.style.fontSize = "25px";
        finalResult.style.color = "brown";

        

        function playRound(humanChoice,computerChoice){
            if(humanScore === 5 || computerScore === 5){
                return;
            }
            if(humanChoice === computerChoice){
                currentResultDiv.textContent = "Draw!";
                scoreDiv.textContent = "Your Score: " + humanScore +" Computer Score: " + computerScore;
            }
            else if(humanChoice === "rock" && computerChoice ==="paper"){
                computerScore++;
                currentResultDiv.textContent = "You Lose! Paper beats Rock.";
                scoreDiv.textContent = "Your Score: " + humanScore +" Computer Score: " + computerScore;           
            }
            else if(humanChoice === "paper" && computerChoice === "rock"){
                humanScore++;
                currentResultDiv.textContent = "You Win! Paper beats Rock.";
                scoreDiv.textContent = "Your Score: " + humanScore +" Computer Score: " + computerScore;  
            }
            else if(humanChoice === "scissors" && computerChoice === "paper"){
                humanScore++;
                currentResultDiv.textContent = "You Win! Scissors beats Paper.";
                scoreDiv.textContent = "Your Score: " + humanScore +" Computer Score: " + computerScore;  
            }
            else if(humanChoice === "paper" && computerChoice === "scissors"){
                computerScore++;
                currentResultDiv.textContent = "You Lose! Scissors beats paper.";
                scoreDiv.textContent = "Your Score: " + humanScore +" Computer Score: " + computerScore;  
            }
            else if(humanChoice === "rock" && computerChoice === "scissors"){
                humanScore++;
                currentResultDiv.textContent = "You Win! Rock beats Scissors.";
                scoreDiv.textContent = "Your Score: " + humanScore +" Computer Score: " + computerScore;  
            }
            else{
                computerScore++;
                currentResultDiv.textContent = "You Lose! Rock beats Scissors.";
                scoreDiv.textContent = "Your Score: " + humanScore +" Computer Score: " + computerScore;  
            }
        }
        function gameOver(){
            if(humanScore === 5 || computerScore === 5){
                if(humanScore > computerScore){
                    finalResult.textContent = "You are the Winner!";
                }
                else{
                    finalResult.textContent = "Better Luck Next Time!!";
                }
            }
            return;
        }

}

playGame();

