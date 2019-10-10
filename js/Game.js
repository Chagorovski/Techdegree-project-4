/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor () {
        this.missed = 0;
        this.phrase = this.createPhrases();
        this.activePhrase = null;
    }

/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases() {
       const phraseArr = [] 

       const phrase_1 = new Phrase ("Show me the money");
       const phrase_2 = new Phrase ("I was born ready");
       const phrase_3 = new Phrase ("Just do it");
       const phrase_4 = new Phrase ("Run forrest run");
       const phrase_5 = new Phrase ("What a lovely day");
       
       phraseArr.push(phrase_1,phrase_2,phrase_3,phrase_4,phrase_5);
       return phraseArr;
    };

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        var phraseSelect = this.phrase[Math.floor(Math.random() * this.phrase.length)]; 
        return phraseSelect;
    }; 
    
/**
* Begins game by selecting a random phrase and displaying it to user
* @return {Oject} Phrase that needs to be displayed
*/
    startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        overlay.classList.remove('start');   
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        return phrase;
    };  
    
// Function that checks is the corect key pressed or else it removes a life

    handleInteraction(pressedButton) {
        let letter = pressedButton.innerHTML;
        this.activePhrase.checkLetter(letter);
        pressedButton.setAttribute('disabled','');

        if (this.activePhrase.checkLetter(letter)) {
            pressedButton.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            this.checkForWin();
        } else {
            pressedButton.classList.add('wrong');
            this.removeLife();
        };
    }

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
        
    };    
}