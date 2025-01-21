console.log("Hello World!!")
function getComputerChoice(){
    const minChoiceCode = 112; // character code for p
    const maxChoiceCode = 115; // chharacter code for s
    let choice = true;
    let randomChoice;
    // generating random choice 

    while (choice){
        randomChoice = Math.floor(Math.random() * (maxChoiceCode - minChoiceCode + 1) + minChoiceCode);
        // if randomChoice is 113(char code for q we do not have a option for that so continuing the loop)
        if(randomChoice === 113){
            choice = true;
        }
        // converting the rest into our available choices
        // if 112 then alphabet is p and concatenating "aper" to it to return paper and so on for the rest.
        else{
            if(randomChoice === 112){
                console.log(String.fromCharCode(randomChoice) + "aper");
                choice = false;
            }
            else if(randomChoice === 114){
                console.log(String.fromCharCode(randomChoice) + "ock");
                choice = false;
            }
            else{
                console.log(String.fromCharCode(randomChoice) + "cissors");
                choice = false;
            }
        }
    }
}
getComputerChoice();
