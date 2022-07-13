const buttons = document.querySelectorAll('.card');
buttons.forEach(button => button.addEventListener('click', playGame));
const yourMove = document.getElementById('player-action');
const machineMove = document.getElementById('computer-action');
const resultTracker = document.getElementById('results');
const scoreboard = document.getElementById('score');
let humanScore = 0.0;
let machineScore = 0.0;

//table that determines the outcome of the game
// human input as columns
// comp move as rows 

const possibilities = [
    ['t', 'w', 'l'],
    ['l', 't', 'w'],
    ['w', 'l', 't']


];

function determineOutcome(player, computer){
    const moves = ["rock", "paper", "scissors"];
    const input = moves.indexOf(player.toLowerCase());
    const pve = moves.indexOf(computer.toLowerCase());
    const outcome = possibilities[pve][input];
    return outcome;
}

function compMove(){
    let move = Math.floor(Math.random()*3);
    switch(move){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}
function playGame(){
    const playerMove = this.dataset.type
    const pveMove = compMove();
    const outcome = determineOutcome(playerMove, pveMove);

    yourMove.src = `../images/${playerMove}.png`; //set the content of the action with the appropriate image
    yourMove.classList.add('active'); //make the action visible
    machineMove.src = `../images/${pveMove}.png`;
    machineMove.classList.add('active');

    if (outcome === 't'){
        console.log("It's a tie!");
        resultTracker.textContent = `It's a tie!`;
        machineMove.style.backgroundColor = 'rgb(249, 166, 2)';
        yourMove.style.backgroundColor = 'rgb(249, 166, 2)';
    }

    else if (outcome === 'w') {
        console.log(`You win! ${playerMove} beats ${pveMove}`);
        resultTracker.textContent = `You win! ${playerMove} beats ${pveMove}`;        machineMove.style.backgroundColor = 'rgb(181, 48, 69)';
        yourMove.style.backgroundColor = 'rgb(0, 192, 42)';
        humanScore += 1;
    }
    else {
        console.log(`You lose! ${pveMove} beats ${playerMove}`);
        resultTracker.textContent = `You lose. ${playerMove} loses to ${pveMove}`;
        machineMove.style.backgroundColor = 'rgb(0, 192, 42)';
        yourMove.style.backgroundColor = 'rgb(181, 48, 69)';
        machineScore += 1;
    }
    scoreboard.textContent = `Humanity: ${humanScore} vs Machines: ${machineScore}`
}