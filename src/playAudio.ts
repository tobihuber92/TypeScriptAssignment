// Funktion um die Sounds abzuspielen

export function playAudio(farbe: string) {
  const audio = new Audio('../src/sounds/' + farbe + '.mp3');
  audio.play();
  //console.log('clicked');
}
