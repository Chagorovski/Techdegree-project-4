// Global variables
const hearts = document.getElementsByClassName('tries');
let newPhrase = {};

class Game {
    constructor() {
        this.hits = 0;
        this.misses = 0;
        this.phrases = [
            "Show me the money",
            "I was born ready",
            "Just do it",
            "Run forrest run",
            "What a lovely day",
            "The world is yours" ];
    };

/**
* Selects random phrase from phrases property
* and return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        const random = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[random];  
    };

/**
* Handles game interactions by selecting 
* listening to screen kyw clicks and checks for win or remove a life
*/  
    handleInteraction(button) {
        const lis = document.getElementsByClassName(button.textContent);

        if (newPhrase.checkLetter(button.textContent)) {
            for (let i = 0; i < lis.length; i++) {
            newPhrase.showMatchedLetter(lis[i]);
            this.hits += 1;
            this.checkForWin(this.hits);
            }; 
        } else {
            button.className += ' wrong';
            button.disabled = true; 
            this.removeLife();
        }
    };

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        hearts[this.misses].style.display = 'none';
        this.misses += 1;

        if (this.misses === 5) {
           this.gameOver('lose');
        }            
    };

/**
* Checks for winning move
* and return {boolean} True if game has been won, false if game wasn't won
*/
    checkForWin(hits) {
        const letters = newPhrase.phrase.split('');
        const letterLength = letters.filter(letter => letter !== ' ').length;
        
        if (hits === letterLength) {
           this.gameOver('win');
        }
    };

// Style for start-screen,game-over-msg and reset-button.
    styleOverlay(winOrLose, message, btnClass, btnMessage){
        const startScreen = document.getElementById('overlay');
        startScreen.className = winOrLose;
        startScreen.style.display = '';

        const gameOverMessage = document.getElementById('game-over-message');
        gameOverMessage.className = winOrLose;
        gameOverMessage.textContent = message;

        const resetButton = document.getElementById('btn__reset');
        resetButton.className = btnClass;
        resetButton.textContent = btnMessage;
    };

/**
* Displays game over message
* Whether or not the user won the game
*/
    gameOver(winOrLose) {

        if (winOrLose === 'lose'){
            this.styleOverlay(winOrLose, 'YOU LOSE!', 'lose-button', 'Try Again');
        } else if (winOrLose === 'win'){
            this.styleOverlay(winOrLose, 'YOU WIN!', 'win-button', 'Play Again');
        }
    };

/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        this.misses = 0;
        this.hits = 0;

        const phraseDiv = document.getElementById('phrase');
        const phraseUl = phraseDiv.firstElementChild;
        phraseUl.innerHTML = '';

        const letterKeys = document.getElementsByClassName('key');
        for(let i = 0; i < letterKeys.length; i ++) {
            letterKeys[i].disabled = '';
            letterKeys[i].className = 'key';
        }

        for(let j = 0; j < hearts.length; j ++) {
            hearts[j].style.display = '';
        }

        newPhrase = new Phrase(this.getRandomPhrase());
        newPhrase.addPhraseToDisplay();
        return newPhrase;
    };
};