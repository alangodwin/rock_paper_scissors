function computerPlayer () {
    let action = ['rock', 'paper', 'scissors'];
    return action[Math.floor(Math.random()*action.length)];
}
function playRound (computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (computerSelection === playerSelection) {
        return `You both draw, you can't beat ${computerSelection} with ${playerSelection}!`;
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'You win! Paper beats rock!';
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win! Scissors beats paper!';
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win! Rock beats Scissors';
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    }
}

const scoreboard = document.querySelector('#scoreboard');
const score = document.createElement('p');
score.classList.add('score');
scoreboard.appendChild(score);

const roundResult = document.createElement('p');
roundResult.classList.add('roundResult');
scoreboard.appendChild(roundResult);

var computerScore = 0
var playerScore = 0
const computerScoreBoard = document.querySelector('#computerScoreBoard');
computerScoreBoard.classList.add('computerScoreBoard');

const playerScoreBoard = document.querySelector('#playerScoreBoard');
playerScoreBoard.classList.add('playerScoreBoard');

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => { //adds click even listener to each button and returns id
    button.addEventListener('click', () => {
      playerSelection = (button.id);
      console.log(playerSelection)
      let gameResult = playRound(computerPlayer(), playerSelection);
      console.log(gameResult)
      if (typeof computerScore != "number"){
        computerScore = 0;
        playerScore = 0;
      }
      if (gameResult.search('win')>0){
        playerScore++;
      } 
      if (gameResult.search('lose')>0) {
        computerScore++;
      }
      if (computerScore == 5) {
          computerScore ="you win!"
          playerScore = "you lose!"
      } 
      if (playerScore == 5) 
      { computerScore ="you lose!"
      playerScore = "you win!"
      }
      computerScoreBoard.textContent =  "computer score:" + computerScore
      playerScoreBoard.textContent = "player score:" + playerScore
      roundResult.textContent =  gameResult
    });
});


/*
function game() {
    let playerSelection = "";
    let result = "";
    let playerCount = 0;
    let computerCount = 0;
    score.textContent = "player:" + playerCount + "/computer:" + computerCount;
    while (playerCount < 2 && computerCount < 2 ) { //while loop which loops till player reaches 5points
        endResult.textContent = " "
        buttons.forEach((button) => { //adds click even listener to each button and returns id
            button.addEventListener('click', () => {
              playerSelection = (button.id);
            });
          });
        let result = playRound(computerPlayer(), playerSelection);
        if (result.search('win')>0){
            playerCount++;
        } else {
            computerCount++;
        }
        score.textContent = "player:" + playerCount + "/computer:" + computerCount;
        }
        if (playerCount>computerCount) {
        endResult.textContent = "You win";
        } else {
        endResult.textContent = 'You lost sorry'
        }
}
*/

//btn.addEventListener('click', game);
//play.addEventListener('click', game)