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
    for (let i = 0; i < 5; i++) {

        const playerMove = prompt("Enter your move: ");
        const pveMove = compMove();
        const outcome = determineOutcome(playerMove, pveMove);

        if(outcome === 't')
            console.log("It's a tie!");

        else if(outcome === 'w')
            console.log(`You win! ${playerMove} beats ${pveMove}`);
        
        else
            console.log(`You lose! ${pveMove} beats ${playerMove}`);
    }
}
playGame()