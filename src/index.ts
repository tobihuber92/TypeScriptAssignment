//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import { ModuleKind } from '../node_modules/typescript/lib/typescript';
import { activateButton } from './activateButtons';
import { playAudio } from './playAudio';
import {
  btnGreen,
  btnRed,
  btnYellow,
  btnBlue,
  btnStart,
  gameOverSign,
  scoreSign,
  bestScoreSign,
  change,
  innerCircle,
  headline,
} from './querySelectors';

//---------- Arrays & Variablen ---------//

let allButtons = ['green', 'red', 'yellow', 'blue'];
let sequence: any[] = [];
var userClickedPattern: string[] = [];
var start = false;
var score = 0;

//---------- Click-Funktion mit addEventListener ----------//

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

//---------- Funktion die eine zufällige Farbe ermittelt und in der Konsole ausgibt ----------/

function nextSequence(): void {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomButton = allButtons[randomNumber];
  sequence.push(randomButton);
  console.log(sequence);
}

//---------- Jede Runde wird ein neuer Color/Sound-Effekt draufgezählt, Abstand zwischen Effekten wird reguliert --> Computer ----------/

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

//---------- Startet die Anwendung ----------//

function startSimon() {
  if (start === false) {
    start = true;
    nextSequence();
    showColorEffect();
    gameOverSign.innerHTML = 'Have fun!';
  }
}

//---------- GameOver-Funktion ----------//

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

//---------- checkt ob userClickedPattern = sequence ist --> d.h. die Länge der Buchstaben der Farben wird verglichen ----------//
//---------- --> userClickedPattern =! sequence --> check ist false und gameOver wird ausgeführt ----------//

function check() {
  for (var i = 0; i < userClickedPattern.length; i++) {
    if (userClickedPattern[i] != sequence[i]) return false;
  }

  return true;
}

//---------- Spielt Sound & Animationen ab, Zählt die Scores hoch und gibt diese aus wenn der User klickt --> User ----------//

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

//---------- Best Score Funktion mit local-storage-Anbindung  ----------//

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

//----------- Funktion damit der beste Score auch für neue Spieler sichtbar bleibt. -----------//
//----------- Wenn ein Highscore vorhanden ist, gibt er diesen aus, wenn nicht gibt er einfach nur Text aus-----------//

window.onload = function () {
  if (localStorage.getItem('highscore')) {
    bestScoreSign.innerText = ('Bester Score:' +
      localStorage.getItem('highscore')) as string;
  } else {
    localStorage.setItem('highscore', '');
    bestScoreSign.innerText = 'Bester Score:' as string;
  }
};

//---------- brightmode ----------//

change.addEventListener('change', () => {
  document.body.classList.toggle('bright');
  innerCircle.classList.toggle('brightCircle');
  scoreSign.classList.toggle('brightScore');
  gameOverSign.classList.toggle('brightScore');
  bestScoreSign.classList.toggle('brightScore');
  btnStart?.classList.toggle('startSimonBright');
  headline.classList.toggle('brightHeadline');
});
