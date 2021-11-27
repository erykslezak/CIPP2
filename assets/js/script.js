// Variables to get all the HTML elements
let choiceDisplay = document.getElementById("message");
let resultDisplay = document.getElementById("result");
let buttons = document.querySelectorAll("button");

// More variables
let playerSelect;
let playerChoice;
let gameLevel = 0;

// Necessary basic choices array
let choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

/*
On window load function to hide the game and results window and wait for user choice of game difficulty.
*/
window.onload = function() {
	hide(document.getElementsByClassName('scores'));
	hide(document.getElementById("rock"));
	hide(document.getElementById("paper"));
	hide(document.getElementById("scissors"));
	hide(document.getElementById("lizard"));
	hide(document.getElementById("spock"));
	hide(document.getElementsByClassName("guides"));
};

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
		/*  
		If it is the 'Easy' difficulty button then checks for length of choices array.
		If it's 5 then removes last 2 (lizard and spock) and sets game level to 1.
		*/	
        } else if (this.getAttribute("data-difficulty") === "1") {
			console.log('pressing easy game button');
			console.log(choices);
			if (choices.length === 5) {
				choices.splice(-2);
				removeHardGame();
				gameLevel = 1;
				console.log(choices);
			}
		/* 
		If it is the 'Hard' difficulty button then checks for length of choices array.
		If it's 3 then adds lizard and spock to choice array and sets game level to 2.
		*/
		} else if (this.getAttribute("data-difficulty") === "2") {
			console.log('pressing hard game button');
			addHardGame();
			gameLevel = 2;
			console.log(choices);
			if (choices.length === 3) {
				choices.push("lizard", "spock");
				console.log(choices);	
			}
		// Restarts the last ran game mode.
		} else if (this.getAttribute("id") === "restart-game") {
			console.log('pressing restart button');
			restartGame();
		// For any other buttons than the ones above.
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
			// Checks if score is 5, if it is then displays message and plays victory sound to user.
			if (userScore === 5) {
				hideGameButtons();
				playSound('assets/sounds/win.mp3');
				document.getElementById("computer-score").innerText = 0;
			    document.getElementById("user-score").innerText = 0;			    
			    resultDisplay.style.fontSize = "30px";
				resultDisplay.innerHTML = "YOU WON THE GAME!!!";
			}
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
			// Checks if score is 5, if it is then displays message and plays lost game sound to user.
			if (computerScore === 5) {
				hideGameButtons();
				playSound('assets/sounds/lose.mp3');
				document.getElementById("computer-score").innerText = 0;
			    document.getElementById("user-score").innerText = 0;			    
			    resultDisplay.style.fontSize = "30px";
				resultDisplay.innerHTML = "YOU LOST THE GAME!!!";
			}
            break;
		// Checks for draw and displays message.
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

/*
  Function to restart the current game.
*/
function restartGame() {
	if(gameLevel === 1) {
		removeHardGame();
	} else if(gameLevel === 2) {
		addHardGame();
	} else {
		alert('Please select difficulty first.')
	}
}

/*
  Function to play sound when one of the game buttons have been pressed.
*/
function playSound(url) {
	let sound = new Audio(url);
	sound.play();
}

/*
  Functions to show and hide html elements.
  https://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
*/
function hide (elements) {
	elements = elements.length ? elements : [elements];
	for (var index = 0; index < elements.length; index++) {
	    elements[index].style.display = 'none';
	}
}
  
function show (elements, specifiedDisplay) {
	elements = elements.length ? elements : [elements];
	for (var index = 0; index < elements.length; index++) {
	    elements[index].style.display = specifiedDisplay || 'block';
	}
}

function hideGameButtons() {
	hide(document.getElementById("rock"));
	hide(document.getElementById("paper"));
	hide(document.getElementById("scissors"));
	hide(document.getElementById("lizard"));
	hide(document.getElementById("spock"));	
}

function removeHardGame() {
	generalGame();
	hide(document.getElementById("lizard"));
	hide(document.getElementById("spock"));
	show(document.getElementsByClassName("easy-guide"));
	hide(document.getElementsByClassName("hard-guide"));
}

function addHardGame() {
	generalGame();
	show(document.getElementById("lizard"));
	show(document.getElementById("spock"));
	hide(document.getElementsByClassName("easy-guide"));
	show(document.getElementsByClassName("hard-guide"));
}

/*
  Function that hides and shows from html according to game difficulty.
*/
function generalGame() {
	show(document.getElementsByClassName("guides"));
	hide(document.getElementById('game-type'));
	show(document.getElementsByClassName('scores'));
	show(document.getElementById("rock"));
	show(document.getElementById("paper"));
	show(document.getElementById("scissors"));
	document.getElementById("computer-score").innerText = 0;
	document.getElementById("user-score").innerText = 0;
	choiceDisplay.innerHTML = "";
	resultDisplay.innerHTML = "";
}

/*
  Modal script to make pop up windows
  https://stackoverflow.com/questions/40645032/creating-multiple-modals-on-a-single-page
  https://www.w3schools.com/howto/howto_css_modals.asp
*/
// Get the button that opens the modal
var btn = document.querySelectorAll(".modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("modal-close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
	btn[i].onclick = function(e) {
    	e.preventDefault();
    	modal = document.querySelector(e.target.getAttribute("data-href"));
    	modal.style.display = "block";
 	}
};

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
	spans[i].onclick = function() {
    	for (var index in modals) {
    		if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    	}
 	}
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     	for (var index in modals) {
      		if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     	}
    }
};