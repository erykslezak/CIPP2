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
            startGame();
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

/*
  The main function to display the results and calculate who won the round.
*/
function startGame() {
    generateComputerChoice();
    // An if function to decide which message to display, being either draw or win/lose.
	if (playerChoice === computerChoice) {
		choiceDisplay.innerHTML = 'You chose ' + playerChoice + ' while the computer also chose ' + computerChoice + '.';
	} else {
		choiceDisplay.innerHTML = 'You chose ' + playerChoice + ' while the computer chose ' + computerChoice + '.';
	}
    // Switch statement to decide between user choice and computer choice.
    switch (playerChoice + computerChoice) {
		case 'scissorspaper':
		case 'scissorslizard':
		case 'rockscissors':
		case 'rocklizard':
		case 'paperrock':
		case 'paperspock':
		case 'lizardspock':
		case 'lizardpaper':
		case 'spockscissors':
		case 'spockrock':
			resultDisplay.style.color = "green";
            resultDisplay.innerHTML = "Somehow you won!";
			// Gets the user current score from the html element and updates it.
			let userScore = parseInt(document.getElementById("user-score").innerText);
			document.getElementById("user-score").innerText = ++userScore;
            break;
        case 'paperscissors':
		case 'lizardscissors':
		case 'scissorsrock':
		case 'lizardrock':
		case 'rockpaper':
		case 'spockpaper':
		case 'spocklizard':
		case 'paperlizard':
		case 'scissorsspock':
		case 'rockspock':
			resultDisplay.style.color = "red";    
            resultDisplay.innerHTML = "Ha! You lost.";
			// Gets the computers current score from the html element and updates it.
			let computerScore = parseInt(document.getElementById("computer-score").innerText);
			document.getElementById("computer-score").innerText = ++computerScore;
            break;
        case 'paperpaper':
		case 'scissorsscissors':
		case 'rockrock':
		case 'spockspock':
		case 'lizardlizard':
			resultDisplay.style.color = "blue";
		    resultDisplay.innerHTML = "You got lucky there, it's a draw!";
		    break;    
    }
}

function restartGame() {

}