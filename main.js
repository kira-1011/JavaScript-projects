var score = document.getElementById('Score');
var playing = document.getElementById('playing');
var input = document.getElementById('input');
var playerOne = document.getElementById('playerone');
var playerTwo = document.getElementById('playertwo');
var reset = document.getElementById('reset');
var playerOneScore = 0;
var playerTwoScore = 0;

var max = 5;

function playerOnePressed(e) {

    if(playerOneScore < max)
    {
        playerOneScore++;
        score.innerText = playerOneScore + " to " +  playerTwoScore;
    }
}

function playerTwoPressed(e) {
    if(playerTwoScore < max)
    {
        playerTwoScore++;
        score.innerText = playerOneScore + " to " +  playerTwoScore;
    }
    
}

function resetPressed(e) {
    playerTwoScore = 0;
    playerOneScore = 0;
    score.innerText = playerOneScore + " to " +  playerTwoScore;
    
}

function inputBox(e) {
    max = input.value;
    playing.innerText = "Playing to: " + max;
}

playerOne.addEventListener('click', playerOnePressed);
playerTwo.addEventListener('click', playerTwoPressed);
reset.addEventListener('click',resetPressed);
input.addEventListener('input',inputBox);
