// Global variable for the main overlay
const overlay = document.getElementById('overlay');

class Game {
  constructor() {
    this.missed = 0;
    this.activePhrase = null;
    this.phrases = [
      this.addPhrase("Show me the money"),
      this.addPhrase("I was born ready"),
      this.addPhrase("Just do it"),
      this.addPhrase("Run forrest run"),
      this.addPhrase("What a lovely day"),
      this.addPhrase("The world is yours")
    ];
  };

  addPhrase (phrase) {
    return new Phrase(phrase);
  };

  // Begins gam
  startGame() {   
    overlay.style.display = 'none';
    const header = document.querySelector(".header");
    header.className ="";
    header.className += "header animate-pop-in";
    this.activePhrase = new Phrase(this.getRandomPhrase());
    return this.activePhrase.addPhraseToDisplay();
  }

  // Selects random phrase
  getRandomPhrase() {
    let randomIndex= Math.floor(Math.random()*(this.phrases.length));
    return this.phrases[randomIndex].phrase; 
  }

/**
 * Handles user interaction with the game. 
 * Checks if key is pressed or clicked ,adds the classes "wrong" and "chosen".
 * If player makes wrong choise life is removed else letter is shown. 
 * @param {object} event  - event listener object
 */
  handleInteraction(event) {
    if(event.target.className === "key") {
      const keyButton = event.target;
      keyButton.setAttribute("disabled", true);
      if(game.activePhrase.checkLetter(keyButton.textContent) === false) {
        keyButton.className += " wrong";
        return game.removeLife();
      } else {
        keyButton.className += " chosen";
        game.activePhrase.showMatchedLetter(keyButton.textContent);
        if(game.checkForWin() === true){
          return game.gameOver()
        };
      }
    } else {
      const pressedKey = (event.key);
      const keyboard = document.querySelectorAll( "#qwerty button");
      keyboard.forEach(key => {
        if(key.innerHTML === pressedKey) {
          key.setAttribute("disabled", true);
          if(game.activePhrase.checkLetter(pressedKey) === false) {
            key.className += " wrong";
            return game.removeLife();
          } else {
            key.className += " chosen";
            game.activePhrase.showMatchedLetter(pressedKey);
            if(game.checkForWin() === true) {
              return game.gameOver();
            }
          }
        }
      })
    }
  };

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out.
 */
  removeLife() {
    const lifeHearts = document.querySelectorAll(".tries img");
    lifeHearts[this.missed].src = "images/lostHeart.png";

    this.missed += 1;
    if(this.missed === 5) {
      return game.gameOver();
    }
  };

  // Checks for winning move
  checkForWin() {
    let hideList = document.querySelectorAll(".hide");
    if(hideList.length === 0){
      return true
    } else {
      return false;
    }
  };

/**
 * Displays the original start screen overlay, and
 * depending on the outcome of the game, updates the overlay `h1` element with a
 * friendly win or loss message, and replaces the overlay’s `start` CSS class with
 * either the `win` or `lose` CSS class.
 */
  gameOver() {
    const gameOverMsg = document.querySelector('#game-over-message');
    const gameBtn = document.querySelector('#btn__reset');
    const header = document.querySelector(".header");
    header.className = "";
    header.className += "header animate-pop-out";
  
    if(this.missed === 5) {
      gameOverMsg.textContent = "Nice try, loosing is part of the game";
      overlay.className = "lose animate-pop-in";
    } else {
      gameOverMsg.textContent = "We have a WINNER !";
      overlay.className = "win animate-pop-in";
    }

    gameBtn.textContent = "Play Again";
    overlay.style.display = 'block';

    this.missed = 0;
    this.activePhrase = null;
    const phraseUl = document.querySelector("ul");
    phraseUl.innerHTML = "";
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => {
      key.className = "key";
      key.removeAttribute("disabled");
    })
    const lifeHearts = document.querySelectorAll(".tries img");
    lifeHearts.forEach(lifeHeart => {
      lifeHeart.src = "images/liveHeart.png";
    })
  };
};