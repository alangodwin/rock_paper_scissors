function computerPlayer () {
    let action = ['rock', 'paper', 'scissors']
    return action[Math.floor(Math.random()*action.length)]
}
function playRound (computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (computerSelection === playerSelection) {
        return `You both draw you cant beat ${computerSelection} with ${playerSelection}!`;
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
//function game 