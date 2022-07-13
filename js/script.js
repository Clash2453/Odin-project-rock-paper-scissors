const buttons = document.querySelectorAll('.card');
buttons.forEach(button => button.addEventListener('click', playGame));
const yourMove = document.getElementById('player-action');
const machineMove = document.getElementById('computer-action');
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
    let humanScore = 0.0;
    let machineScore = 0.0;
    const playerMove = this.dataset.type
    const pveMove = compMove();
    const outcome = determineOutcome(playerMove, pveMove);

    yourMove.src = `../images/${playerMove}.png`; //set the content of the action with the appropriate image
    yourMove.classList.add('active'); //make the action visible
    machineMove.src = `../images/${pveMove}.png`;
    machineMove.classList.add('active');

    if (outcome === 't')
        console.log("It's a tie!");

    else if (outcome === 'w') {
        console.log(`You win! ${playerMove} beats ${pveMove}`);
        humanScore += 1;
    }
    else {
        console.log(`You lose! ${pveMove} beats ${playerMove}`);
        machineScore += 1;
    }
    if(humanScore>machineScore){
        console.log(`Humanity wins this time: ${humanScore} vs ${machineScore}`);
        return;
    }
    if(machineScore>humanScore){
        console.log(`The computer wins but only ingame: ${humanScore} vs ${machineScore}`);
        return; 
    }
    console.log(`It is a tie: ${humanScore} vs ${machineScore}`)
}