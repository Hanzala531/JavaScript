let numberToGuess = Math.floor(Math.random() * 100 + 1); // Number to be guessed
let prevGuess = []; // Store previous guesses
let numGuess = 1; // Number of guesses made
let playGame = true; // Flag to control game state

// DOM elements
const submit = document.querySelector('#sbt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResults = document.querySelector('.lastResults');
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

// Event listener for the submit button
if (playGame) {
    document.querySelector('#guessForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a valid number");
    } else if (guess < 1 || guess > 100) {
        alert("Please guess a number between 1 and 100");
    } else {
        prevGuess.push(guess);
        displayGuess(guess);
        if (numGuess === 10) {
            displayMessage(`Game Over. The number was ${numberToGuess}`);
            endGame();
        } else {
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === numberToGuess) {
        displayMessage('Your guess was correct!');
        endGame();
    } else if (guess < numberToGuess) {
        displayMessage('Your guess was too low');
    } else if (guess > numberToGuess) {
        displayMessage('Your guess was too high');
    }
}

function displayGuess(guess) {
    userInput.value = "";
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    lastResults.innerHTML = `${11 - numGuess} guesses left`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function() {
        numberToGuess = Math.floor(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        lastResults.innerHTML = '10 guesses left';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}