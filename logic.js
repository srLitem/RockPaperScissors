// Results List
let resultsArr = ["ROCK", "PAPER", "SCISSORS"]
let botWins = 0;
let playerWins = 0;
let matches = 0;
buttonSelector = document.querySelectorAll("button");
resultsDiv = document.getElementById("results");

buttonSelector.forEach((button) => {
    button.addEventListener('click', (e) => {
        userAnswer = button.textContent.toUpperCase();
        alert(playRound(userAnswer, computerPlay()));
        matchText();
        console.log(playerWins, matches)
    })
})

//Function to return a random element from the results Array 
function computerPlay() {
    
    return resultsArr[Math.floor(Math.random() * resultsArr.length)]
}
// Function used to play a single Rock Paper Scissors match
function playRound(playerSelection, computerSelection) {
    matches++;
    alert(`You picked: ${playerSelection}`);
    if (computerSelection === playerSelection) {
        return `There is a tie! You both selected ${playerSelection}`;
    } else {
        switch (playerSelection) {
            case 'ROCK':
                if (computerSelection == 'PAPER') {
                    botWins++;
                    return `You Loose! ${computerSelection} beats ${playerSelection}`;
                    break;
                }
                if (computerSelection == 'SCISSORS') {
                    playerWins++;
                    return `You win! ${playerSelection} beats ${computerSelection}`;
                    break;
                }

            case 'PAPER':
                if (computerSelection == 'ROCK') {
                    playerWins++;
                    return `You Win! ${playerSelection} beats ${computerSelection}`;
                    break;
                }
                if (computerSelection == 'SCISSORS') {
                    botWins++;
                    return `You Loose! ${computerSelection} beat ${playerSelection}`;
                    break;
                }

            case 'SCISSORS':
                if (computerSelection == 'ROCK') {
                    botWins++;
                    return `You Loose! ${computerSelection} beats ${playerSelection}`;
                    break;
                }
                if (computerSelection == 'PAPER') {
                    playerWins++;
                    return `You win! ${playerSelection} beat ${computerSelection}`;
                    break;
                }
        }
    }

}

function verifyWinner(){

    if(botWins == 5){
        let finalResult = document.createElement('div');
        finalResult.classList.add('finalResult');
        finalResult.textContent = `The computer wins`;
        resultsDiv.appendChild(finalResult)
    }else if(playerWins == 5){
        let finalResult = document.createElement('div');
        finalResult.classList.add('finalResult');
        finalResult.textContent = `The player wins`;
        resultsDiv.appendChild(finalResult)
    }
}

function matchText(){
    if(matches == 1){
        let matchesDiv = document.createElement('div');
        matchesDiv.classList.add('matches');
        matchesDiv.textContent = `You have played ${matches} times `;
        resultsDiv.appendChild(matchesDiv);
    }else if(matches > 1 && matches != 0){
        matchElement = document.querySelector(".matches");
        matchElement.textContent = `You have played ${matches} times `;
    }
}