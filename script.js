// If the user enters anything that isn't any of those 3 options, then the question
// needs to be asked again.
// let userPlay = userPlay.toUpperCase();
// console.log(userPlay);

// console.log(numPlay);
// let check = "";

// Function to initialise the computer's choice
function computerPlay() {
	let computerChoice = "";
	const numPlay = Math.floor(Math.random() * 3) + 1;
	switch (numPlay) {
		case 1:
			computerChoice = "ROCK";
			break;
		case 2:
			computerChoice = "PAPER";
		case 3:
			computerChoice = "SCISSORS";
			break;
		default:
			computerChoice = "";
	}
	return computerChoice;
}

// function to check who won the round
function playRound(playerSelection, computerSelection) {
	let result = "";

	if (playerSelection === "ROCK") {
		if (computerSelection === "ROCK") {
			result = "It's a draw";
		} else if (computerSelection === "PAPER") {
			result = "You lose!";
		} else if (computerSelection === "SCISSORS") {
			result = "You win!";
		}
	} else if (playerSelection === "PAPER") {
		if (computerSelection === "ROCK") {
			result = "You win!";
		} else if (computerSelection === "PAPER") {
			result = "It's a draw";
		} else if (computerSelection === "SCISSORS") {
			result = "You lose!";
		}
	} else if (playerSelection === "SCISSORS") {
		if (computerSelection === "ROCK") {
			result = "You lose!";
		} else if (computerSelection === "PAPER") {
			result = "You win!";
		} else if (computerSelection === "SCISSORS") {
			result = "It's a draw";
		}
	}

	return `You chose: ${playerSelection} and the computer chose: ${computerSelection}. ${result}`;
}

// game begins
// First we need user to enter Rock, Paper of Scissors
const userPlay = window.prompt("Rock! Paper! Scissors! Shoot!");

// if the user enters anything that is not ROCK, PAPER, or SCISSORS, then prompt again
if (
	userPlay.toUpperCase() !== "ROCK" &&
	userPlay.toUpperCase() !== "PAPER" &&
	userPlay.toUpperCase() !== "SCISSORS"
) {
	console.log("That is not how you play the game. Restart");
} else {
	const playerSelection = userPlay.toUpperCase();
	const computerSelection = computerPlay();
	console.log(playRound(playerSelection, computerSelection));
}
