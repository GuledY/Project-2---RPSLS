const menuIcon = document.querySelector('.menu-icon'); // Mobile navigation icon
const mobileMenu = document.querySelector('.mobile-menu'); // Mobile navigation
const choices = document.querySelectorAll('.choice'); //Game choices
const result = document.getElementById('result'); // Game result
const scoreDisplay = document.getElementById('score'); // Current score
const livesDisplay = document.getElementById('lives'); // Lives
const highscoreDisplay = document.getElementById('highscore'); // Highscore
const resetButton = document.getElementById('reset'); // Add a reset button

//Mobile navigation toggle
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    mobileMenu.classList.toggle('show');
});

// Initially hide the reset button
resetButton.style.display = 'none';

resetButton.addEventListener('click', () => {
    // Reset the game when the reset button is clicked
    userScore = 0;
    userLives = 5;
    updateLives();
    updateScore();
    result.innerHTML = "";

    // Hide the reset button after resetting the game
    resetButton.style.display = 'none';
});

// Initial game state
let userScore = 0;
let userLives = 5;
let highScore = 0;

updateLives();
updateHighscore();

choices.forEach(choice => {
    choice.addEventListener('click', playGame);
});

function playGame(e) {
    if (userLives === 0) {
        result.innerHTML = "Game over! You're out of lives. Click the Reset button to play again.";

        // Show the reset button when the game is over
        resetButton.style.display = 'block';

        if (userScore > highScore) {
            highScore = userScore;
            updateHighscore();
        }
        return;
    }

    const userChoice = e.target.id;
    const computerChoice = getComputerChoice();

    const winner = getWinner(userChoice, computerChoice);

    //If statements to display choice results
    if (winner === 'user') {
        userScore++;
        result.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You win!`;
    } else if (winner === 'computer') {
        userLives--;
        updateLives();
        result.innerHTML = `You chose ${userChoice} and the computer chose ${computerChoice}. You lose.`;
    } else {
        result.innerHTML = `It's a draw! You both chose ${userChoice}.`;
    }

    updateScore();

    //If statement to update highscore after game
    if (userScore > highScore) {
        highScore = userScore;
        updateHighscore();
    }

    //If statement to end game if user runs out of lives
    if (userLives === 0) {
        result.innerHTML += " Game over! You're out of lives. Click the Reset button to play again.";
        resetButton.style.display = 'block';
    }
}
//Updates lives
function updateLives() {
    livesDisplay.textContent = userLives;
}
//Updates highscore
function updateHighscore() {
    highscoreDisplay.textContent = highScore;
}
// Computer random choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * 5);
    return choices[randomIndex];
}

//Calculate winner based on user and computer choice
function getWinner(user, computer) {
    if (user === computer) return 'draw';
    if ((user === 'rock' && (computer === 'scissors' || computer === 'lizard')) ||
        (user === 'paper' && (computer === 'rock' || computer === 'spock')) ||
        (user === 'scissors' && (computer === 'paper' || computer === 'lizard')) ||
        (user === 'lizard' && (computer === 'spock' || computer === 'paper')) ||
        (user === 'spock' && (computer === 'rock' || computer === 'scissors'))) {
        return 'user';
    }
    return 'computer';
}

//Updates score
function updateScore() {
    scoreDisplay.textContent = userScore;
}