import { btnGreen, btnRed, btnYellow, btnBlue } from './querySelectors';

//Fügt CSS Klasse "active" hinzu
//--> wenn ein Button aktiviert wird, wird er hervorgehoben

export function activateButton(farbe: string) {
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

export function deactivateButton() {
  btnGreen?.classList.remove('active');
  btnRed?.classList.remove('active');
  btnYellow?.classList.remove('active');
  btnBlue?.classList.remove('active');
}
