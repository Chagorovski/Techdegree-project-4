# Tech Degree Project 4

## Phrase Hunter

- Using JavaScript-OOP I have created a browser-based, word guessing game.
- This game contains three main files
   - Game.js
   - Phrase.js
   - app.js
> Game.js
   - Holds the main functionality of the game.
   - Selects game phrase
   - Adds the phrase
   - Checks for win/lose 
   - removes life if player doesn't guess the corect letter
   - Shows the win/lose display
   - resets the game
> Phrase.js
   - Adds the empty letter spaces
   - Showing the chosen letter or disabling it
> app.js
   - Creates the audio button
   - adds eventListenrs to keyboard-buttons and click 
___ 
- For this project I have used some  resources
    - A sound track from [Kevin MacLeod](https://incompetech.com).
    - Images from [textanim](https://textanim.com/#i).
    - Audio button from [{CSS} Portatl]( https://www.cssportal.com/css3-flip-switch/).

- I have made some changes in the CSS file, added some colors,put some animations.
- I have used this keyframe for the animation
```css
@keyframes pop-in {
  0% {
    opacity: 0;
    transform:perspective(400px) rotateY(-20deg);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
```
- I have used these animations for the title
```css
.animate-pop-in {
  animation: var(--pop-in);
  opacity: 0;
}

.animate-pop-out {
  animation: var(--pop-out);
  opacity: 100;
}
```
- Hover effect for the start and play again button
```css
#btn__reset:hover {
  color: #fff;
  background-color: #4a7bd5;
  transform: scale(1.5);
}
```

- This style is for the Toggle button
```css
.flipswitch {
  position: relative;
  width: 123px;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select: none;
}
.flipswitch input[type=checkbox] {
  display: none;
}
.flipswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  border: 2px solid #999999;
  border-radius: 50px;
}
.flipswitch-inner {
  width: 200%;
  margin-left: -100%;
  -webkit-transition: margin 0.3s ease-in 0s;
  -moz-transition: margin 0.3s ease-in 0s;
  -ms-transition: margin 0.3s ease-in 0s;
  -o-transition: margin 0.3s ease-in 0s;
  transition: margin 0.3s ease-in 0s;
}
.flipswitch-inner:before, .flipswitch-inner:after {
  float: left;
  width: 50%;
  height: 35px;
  padding: 0;
  line-height: 35px;
  font-size: 11px;
  color: white;
  font-family: Trebuchet, Arial, sans-serif;
  font-weight: bold;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.flipswitch-inner:before {
  content: "ON MUSIC";
  padding-left: 12px;
  background-color: #318ACC;
  color: #FFFFFF;
}
.flipswitch-inner:after {
  content: "OFF MUSIC";
  padding-right: 12px;
  background-color: #EBEBEB;
  color: #888888;
  text-align: right;
}
.flipswitch-switch {
  width: 28px;
  margin: 3.5px;
  background: #FFFFFF;
  border: 2px solid #999999;
  border-radius: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 87px;
  -webkit-transition: all 0.3s ease-in 0s;
  -moz-transition: all 0.3s ease-in 0s;
  -ms-transition: all 0.3s ease-in 0s;
  -o-transition: all 0.3s ease-in 0s;
  transition: all 0.3s ease-in 0s;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-inner {
  margin-left: 0;
}
.flipswitch-cb:checked + .flipswitch-label .flipswitch-switch {
  right: 0;
}
```

