function computerPlayer () {
    let action = ['rock', 'paper', 'scissors']
    return action[Math.floor(Math.random()*action.length)]
}
function playRound (computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        return 'You both draw';
    } else if (computerSelection === 'rock' && playerSelection === 'paper') {
        return 'You win'
    } else if (computerSelection === 'paper' && playerSelection === 'scissors') {
        return 'You win'
    } else if (computerSelection === 'scissors' && playerSelection === 'rock') {
        return 'You win'
    } else {
        return 'You lose'
    }
}