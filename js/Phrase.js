class Phrase {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    };
    
/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        const phraseLetters = this.phrase.split('');
        phraseLetters.map(letter => {
            const div = document.getElementById('phrase');
            const ul = div.firstElementChild;
            const li = document.createElement('li');
            
            if (letter !== ' ') {
                li.className = `hide letter ${letter}`;
            } else {
                li.className = "hide space";
            }
            li.textContent = letter.toUpperCase();
            ul.appendChild(li);
        });    
    };

/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(selectedLetter) {
        if (this.phrase.includes(selectedLetter)) {
            return true;
        } else {
            return false;
        }
    };

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
    showMatchedLetter(li) {
        li.className += ' show';
    };
};