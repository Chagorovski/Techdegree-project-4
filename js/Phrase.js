class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase().replace(/[^\w\s]/g, "");
  };

  // Display phrase-placeholder on game board
  addPhraseToDisplay() {
    const phraseLetters = [...this.phrase];
    const phraseDiv = document.querySelector('#phrase');
    const phraseUl = phraseDiv.querySelector('ul');

    phraseLetters.forEach(phraseLetter => {
      const phraseLi = document.createElement('li');
      phraseLetter = phraseLetter.toUpperCase();
      phraseLi.innerHTML = phraseLetter;
      if(phraseLi.innerHTML != ' ') {
        phraseLi.className += "hide";
        phraseLi.className += " letter ";
        phraseLi.className += phraseLetter;
      } else {
        phraseLi.className += "space";
      }
      phraseUl.appendChild(phraseLi);
    })
  };

  // letter placeholders for phrase to the display
  checkLetter(inputLetter) {
    if(this.phrase.includes(inputLetter)) {
      return true;
    } else {
      return false;
    }
  };

  // Displays matched letter if check letter returns match remove hidden class of letter
  showMatchedLetter(inputLetter) {
    const phraseLis= document.querySelectorAll("#phrase li");
    phraseLis.forEach(li => {
      if(li.textContent === inputLetter.toUpperCase()) {
        li.className -= "hide";
        li.className += " show";
      }
    })
  };
};