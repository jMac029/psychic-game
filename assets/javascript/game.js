

// Global Variables

let wins = 0;
let losses = 0;
let guessesLeft = 10;
let guessesSoFar = [];
let pyschicChoice = "";

// array of all the letters in the english alphabet
let alphabet = [
			"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
			"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
			];

// for loop through the alphabet array
// for (let i = 0; i < alphabet.length; i++) {
// 		// console.log(alphabet[i]);
// 	};

// Randomly chooses a letter from the alphabet array. This is the psychic's choice.

let pyschic = () =>  {
	pyschicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

	// console.log(pyschicChoice);

}

// Function to Reset Game to original settings
let resetGame = () => {
	guessesLeft = 10;
	guessesSoFar = [];
	pyschic();
};




// Grab users keystroke to intput there guess at the letter and start the game
document.onkeyup = (event) => {

	let userGuess = event.key.toLowerCase();

	console.log(userGuess);


	if (userGuess == pyschicChoice) {
		wins++;
		resetGame();
	} 
	if (userGuess != pyschicChoice) {
		guessesLeft--;
		guessesSoFar.push(userGuess);
	



	// Output to place on the webpage
	let html = 
		"<p>Guess what letter I'm thinking of...</p>" +
		"<p>Wins: " + wins + "</p>" +
		"<p>Losses: " + losses + "</p>" +
		"<p>Guesses Left: " + guessesLeft + "</p>" +
		"<p>Your Guesses so far: " + guessesSoFar + "</p>";

	// Set the inner HTML contents of the game_output id to our html string
    document.querySelector("#game_output").innerHTML = html;

    if ( guessesLeft === 0 ) {
		losses++;
		resetGame();
		}
	}	
}