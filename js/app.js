/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game;
 const startGameButton = document.getElementById('btn__reset');

 // Listens for the start button  
 startGameButton.addEventListener('click',function () {
     game = new Game;
     game.startGame();
 })