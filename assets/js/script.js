// Variables to get all the HTML elements
let choiceDisplay = document.getElementById("message");
let resultDisplay = document.getElementById("result");
let buttons = document.querySelectorAll("button");

// More variables
let playerSelect;
let playerChoice;

// Necessary basic choices array
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/*
Listens for all the button presses.
*/
document.addEventListener("DOMContentLoaded", function() {
    for (let button of buttons) {
        button.addEventListener("click", function() {
        // If one of the button is one of choice elements then it runs the startGame function to calculate who wins the round.
        if (this.getAttribute("data-type") === "selection") {
            playerSelect = this.getAttribute("data-game-choice");
            playerChoice = choices[playerSelect];
            console.log('pressing game button');
            console.log(playerChoice);
            // startGame();
        } else {
            console.log('pressing menu button')
        }
        });
    }
});

/*
  Function to generate computers choice
*/
let generateComputerChoice = function() {
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    computerChoice = randomChoice;
};

function startGame() {

}

function restartGame() {

}