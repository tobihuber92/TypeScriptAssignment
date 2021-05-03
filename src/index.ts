//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import { ModuleKind } from '../node_modules/typescript/lib/typescript';

// Klassen zuweisen

let btnGreen = document.querySelector('.quarterCircleGreen');
let btnRed = document.querySelector('.quarterCircleRed');
let btnYellow = document.querySelector('.quarterCircleYellow');
let btnBlue = document.querySelector('.quarterCircleBlue');
let btnStart = document.querySelector('.startSimon');
let scoreSign: any = document.querySelector('.currentScore');
let gameOverSign: any = document.querySelector('.gameOver');
let bestScoreSign: any = document.querySelector('.bestScore');

// Arrays & Variablen

let allButtons = ['green', 'red', 'yellow', 'blue'];
let sequence: any[] = [];
var userClickedPattern: string[] = [];
var start = false;
var score = 0;

// Click-Funktion

btnGreen?.addEventListener('click', function () {
  callButton('green');
});
btnRed?.addEventListener('click', function () {
  callButton('red');
});
btnYellow?.addEventListener('click', function () {
  callButton('yellow');
});
btnBlue?.addEventListener('click', function () {
  callButton('blue');
});
btnStart?.addEventListener('click', function () {
  startSimon();
});

// Funktion die eine zufällige Farbe ermittelt

function nextSequence(): void {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomButton = allButtons[randomNumber];
  sequence.push(randomButton);
  console.log(sequence);
}

//Fügt CSS Klasse "active" hinzu
//--> wenn ein Button aktiviert wird, wird er hervorgehoben

function activateButton(farbe: string) {
  if (farbe === 'green') {
    btnGreen?.classList.add('active');
  } else if (farbe === 'red') {
    btnRed?.classList.add('active');
  } else if (farbe === 'yellow') {
    btnYellow?.classList.add('active');
  } else if (farbe === 'blue') {
    btnBlue?.classList.add('active');
  }

  setTimeout(deactivateButton, 300);
}

// Die Hervorhebung wird deaktiviert

function deactivateButton() {
  btnGreen?.classList.remove('active');
  btnRed?.classList.remove('active');
  btnYellow?.classList.remove('active');
  btnBlue?.classList.remove('active');
}

// Funktion um die Sounds abzuspielen

function playAudio(farbe: string) {
  const audio = new Audio('../src/sounds/' + farbe + '.mp3');
  audio.play();
  console.log('clicked');
}

// Wenn man Start drückt kommt ein zufälliger Sound und ein Button wird auf active gesetzt

function showColorEffect() {
  let start = 0;
  let effect = setInterval(innerFunction, 1000);

  function innerFunction() {
    if (start < sequence.length) {
      var currentColour = sequence[start];
      activateButton(currentColour);
      playAudio(currentColour);
      start++;
    } else {
      clearInterval(effect);
    }
  }
}

// checkt ob userClickedPattern = sequence ist

function check() {
  for (var i = 0; i < userClickedPattern.length; i++) {
    if (userClickedPattern[i] != sequence[i]) return false;
  }

  return true;
}

// GameOver Funktion

function gameOver() {
  const audio = new Audio('../src/sounds/gameOver.mp3');
  audio.play();
  gameOverSign.innerHTML = 'GAME OVER';
  scoreSign.innerHTML = 'Dein Score:';
  score = 0;
  userClickedPattern = [];
  sequence = [];
  start = false;
  console.log('loser');
}

// Startet die Anwendung

function startSimon() {
  if (start === false) {
    start = true;
    nextSequence();
    showColorEffect();
    gameOverSign.innerHTML = '';
  }
}

// Spielt Sound & Animationen ab, Zählt die Scores hoch und gibt diese aus
function callButton(farbe: string): void {
  if (start) {
    var userClickedButtonColor = farbe;

    activateButton(userClickedButtonColor);
    playAudio(userClickedButtonColor);
    userClickedPattern.push(userClickedButtonColor);

    if (check() && userClickedPattern.length === sequence.length) {
      score++;
      userClickedPattern = [];
      nextSequence();
      showColorEffect();
      scoreSign.innerHTML = 'Dein Score:' + score;
      checkIfNewBestscore();
    } else if (!check()) {
      gameOver();
    }
  }
}

// Best Score Funktion mit local storage

function checkIfNewBestscore() {
  var newBestScore = score;
  var bestScore = parseInt(localStorage.getItem('highscore') as string);
  console.log(newBestScore);
  console.log(bestScore);
  if ((localStorage.getItem('highscore') as string) != '') {
    if (newBestScore > bestScore) {
      localStorage.setItem('highscore', newBestScore.toString());
      bestScoreSign.innerText = ('Bester Score:' +
        localStorage.getItem('highscore')) as string;
    }
  } else {
    localStorage.setItem('highscore', newBestScore.toString());
    bestScoreSign.innerText = ('Bester Score:' +
      localStorage.getItem('highscore')) as string;
  }
}

window.onload = function () {
  if (localStorage.getItem('highscore')) {
    bestScoreSign.innerText = ('Bester Score:' +
      localStorage.getItem('highscore')) as string;
  } else {
    localStorage.setItem('highscore', '');
    bestScoreSign.innerText = ('Bester Score:' +
      localStorage.getItem('highscore')) as string;
  }
};
