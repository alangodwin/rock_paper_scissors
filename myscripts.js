function computerPlayer () {
    let action = ['rock', 'paper', 'scissors']
    return action[Math.floor(Math.random()*action.length)]
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
function game() {
    let playerSelection = ""
    let result = ""
    let playerCount = 0
    let computerCount = 0
    for (let i = 0; i < 5; i++) { //For loop which loops through 5 times
    playerSelection = prompt('Select your weapon: Rock, paper or scissors?')
    let result = playRound(computerPlayer(), playerSelection)
    if (result.search('win')>0){
        playerCount++
    } else {
        computerCount++
    }
    alert(result + " " + playerCount + '/5')
    }
    if (playerCount>computerCount) {
    return alert('You win')
    } else {
        return alert('You lost sorry')
    }
}
