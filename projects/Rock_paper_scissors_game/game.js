// Declare score for player and computer, assign value 0. Declare the gameOver variable with initial value of false. 
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// A click event is added on each button, which runs the game until the gameOver variable changes to true. 
document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', () => {
        if(!gameOver) {
            const playerChoice = item.id;
            const computerChoice = getComputerChoice();
            const result = playRound(playerChoice, computerChoice);
            updateScore();
            displayResults(result);
            if(playerScore === 5 || computerScore === 5) {
                endGame();
            }

        }
    });
});


// Gets a random number which then is assigned to either 'rock', 'paper' or 'scissors'
function getComputerChoice() {
    const number = (Math.random() * 3);
    if(number === 0) {
        return 'rock';
    }
    else if(number === 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }

}

// Compares the value chosen by player and computer, gives score to winner of the round and then returns a message informing if player won or lost the round
function playRound(playerChoice, computerChoice) {
    if(playerChoice === 'paper' && computerChoice === 'rock') {
        playerScore++;
        return 'You win! Paper beats rock!';
    }
    else if(playerChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return 'You lose! Scissors beat paper!';
    }
    else if(playerChoice === 'rock' && computerChoice === 'scissors') {
        playerScore++;
        return 'You win! Rock beats scissors!';
    }
    else if(playerChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return 'You lose! Paper beats rock!';
    }
    else if(playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        return 'You win! Scissors beats paper!';
    }
    else if(playerChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return 'You lose! Rock beats scissors!';
    }
    else {
        return 'Draw! Try again!';
    }

}

// Updates the scoreboard
function updateScore() {
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;
    
}

// Displays the result of the round
function displayResults(result) {
    const resultElement = document.getElementById("results");
    resultElement.textContent = result;
}

//Displays the winner of the game
function displayWinner(winner) {
    const winnerElement = document.getElementById("winner");
    winnerElement.textContent = winner === "You win the game!" ? "You win the game" : "Computer wins the game!";
}

// At the end of the game, the winner is displayed. The function checks who has the higher score.
function endGame() {
    gameOver = true;
    if(playerScore > computerScore) {
        displayWinner("You win the game!");
    }
    else if(playerScore < computerScore) {
        displayWinner("Computer wins the game!");
    }
    else {
        displayWinner("It\'s a tie!")
    }
}