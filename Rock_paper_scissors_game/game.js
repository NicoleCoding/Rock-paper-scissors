// Declare score for player and computer, assign value 0
let playerScore = 0;
let computerScore = 0;

// Gets a random number which then is assigned to either 'rock', 'paper' or 'scissors'
function getComputerChoice() {
    const number = (Math.random() * 3);
    if(number <= 1) {
        return 'Rock';
    }
    else if(number >= 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }

}

// Compares the value chosen by player and computer, gives score to winner of the round and then returns a message informing if player won or lost
function playRound(playerChoice, computerChoice) {
    if(playerChoice === 'paper' && computerChoice === 'Rock') {
        playerScore++;
        return 'You win! Paper beats rock!';
    }
    else if(playerChoice === 'paper' && computerChoice === 'Scissors') {
        computerScore++;
        return 'You lose! Scissors beat paper!';
    }
    else if(playerChoice === 'rock' && computerChoice === 'Scissors') {
        playerScore++;
        return 'You win! Rock beats scissors!';
    }
    else if(playerChoice === 'rock' && computerChoice === 'Paper') {
        computerScore++;
        return 'You lose! Paper beats rock!';
    }
    else if(playerChoice === 'scissors' && computerChoice === 'Paper') {
        playerScore++;
        return 'You win! Scissors beats paper!';
    }
    else if(playerChoice === 'scissors' && computerChoice === 'Rock') {
        computerScore++;
        return 'You lose! Rock beats scissors!';
    }
    else {
        return 'Draw! Try again!';
    }

}

// 5 rounds of the game, where player gets prompted to enter a value and the computer value is generated via getComputerChoice function. Comparison of the scores and return of whoever is the winner
function game() {
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Write: rock, paper or scissors");
        playerChoice = playerChoice.toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(playRound(playerChoice, computerChoice));

    }
    if(playerScore > computerScore) {
        console.log("You won!");
    }
    else if(playerScore < computerScore) {
        console.log("You lost!");
    }
    else {
        console.log("Noone won!");
    }



}

// Run the game
game();