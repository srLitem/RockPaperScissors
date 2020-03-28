// Variable declaration
let resultsArr = ["ROCK", "PAPER", "SCISSORS"] // Results List for the computer
, botWins = 0
, playerWins = 0
, matches = 0
, tieCount = 0;

// Obtaining the elements of the document
buttonSelector = document.querySelectorAll("button");
resultsDiv = document.getElementById("results"); 

// Creation of elements to be added to the document
let roundsResults = document.createElement('p') //Results of each round
, finalResult = document.createElement('p') //Show the winner
, matchesDiv = document.createElement('p'); //Number of matches

// Adding the information class to each element
roundsResults.classList.add('information');
finalResult.classList.add('information');
finalResult.setAttribute('id', 'finalResult');
matchesDiv.classList.add('information', 'matches');

// Add the listener to each button
buttonSelector.forEach((button) => {
    button.addEventListener('click', (e) => {
        userAnswer = button.textContent.toUpperCase();
        roundsResults.textContent = playRound(userAnswer, computerPlay());
        matchText();
        resultsDiv.appendChild(roundsResults);
        verifyWinner();
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
    if (computerSelection === playerSelection) {
        tieCount++;
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
// Function to show how many matches have been played.
function matchText(){
    if(matches == 1){
        matchesDiv.textContent = `You have played ${matches} times. Computer: ${botWins}, Player: ${playerWins}, Ties: ${tieCount}`;
        resultsDiv.appendChild(matchesDiv);
    }else if(matches > 1 && matches != 0){
        matchElement = document.querySelector(".matches");
        matchElement.textContent = `You have played ${matches} times Computer: ${botWins}, Player: ${playerWins}, Ties: ${tieCount}`;
    }
}
// Function to verify if the game ended and show the winner
function verifyWinner(){
    if(botWins == 5){;
        finalResult.textContent = `The computer wins`;
        resultsDiv.appendChild(finalResult)
        buttonSelector.forEach((button) => {
            button.disabled = true;
        })
    }else if(playerWins == 5){
        finalResult.textContent = `The player wins`;
        resultsDiv.appendChild(finalResult);
        buttonSelector.forEach((button) => {
            button.disabled = true;
        })
    }
    //TODO: Maybe add a "Restart" button
}