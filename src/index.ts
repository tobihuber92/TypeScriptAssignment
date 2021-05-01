//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import { ModuleKind } from "../node_modules/typescript/lib/typescript";

// Klassen zuweisen 
let btnGreen = document.querySelector('.quarterCircleGreen');
let btnRed = document.querySelector('.quarterCircleRed');
let btnYellow = document.querySelector('.quarterCircleYellow');
let btnBlue = document.querySelector('.quarterCircleBlue');
let btnStart = document.querySelector('.startSimon');


// Arrays & Variablen
let allButtons = [("green"), ("red"), ("yellow"), ("blue")]
let sequence: any[] =[];
var userClickedPattern: string[] =[];
var start = false; 

// Click-Funktion
btnGreen?.addEventListener("click", function()
{
    callButton("green");
});
btnRed?.addEventListener("click", function()
{
    callButton("red");
})
btnYellow?.addEventListener("click", function()
{
    callButton("yellow");
})
btnBlue?.addEventListener("click", function()
{
    callButton("blue");
})
btnStart?.addEventListener("click", function()
{
    startSimon();
})


/* // Funktion damit ich die Farben mehrmals aufrufen kann
function clickedColors(farbe:string){
    callButton(farbe);
    //playAudio(farbe);
    //activateButton(farbe);
} */

// Funktion die eine zufällige Farbe ermittelt
function nextSequence():void {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomButton = allButtons[randomNumber];
    sequence.push(randomButton);
    console.log(sequence)

} 

//Fügt CSS Klasse "active" hinzu 
//--> wenn ein Button aktiviert wird, wird er hervorgehoben
function activateButton(farbe:string){
    if(farbe==="green"){
        btnGreen?.classList.add("active");
    }
    else if(farbe==="red"){
        btnRed?.classList.add("active");
    }
    else if(farbe==="yellow"){
        btnYellow?.classList.add("active");
    }
    else if(farbe==="blue"){
        btnBlue?.classList.add("active");
    }

setTimeout(deactivateButton, 300)
}

// Die Hervorhebung wird deaktiviert
function deactivateButton(){
    btnGreen?.classList.remove("active");
    btnRed?.classList.remove("active");
    btnYellow?.classList.remove("active");
    btnBlue?.classList.remove("active");
}

 // Funktion um die Sounds abzuspielen
function playAudio(farbe:string){
    const audio = new Audio("../src/sounds/" + farbe + ".mp3")
    audio.play()
    console.log("clicked")
} 

// Wenn man Start drückt kommt ein zufälliger Sound und ein Button wird auf active gesetzt
function showColorEffect(){

    let start = 0; 
    let effect = setInterval(innerFunction, 1000); 

    function innerFunction(){
        if(start < sequence.length){
            var currentColour = sequence[start]
            activateButton(currentColour);
            playAudio(currentColour); 
            start++;
        }
        else{
            clearInterval(effect)
        }
    }
} 


// To check if userClickedPattern contains inside gamePattern
function check() {
    for (var i = 0; i < userClickedPattern.length; i++) {
      if (userClickedPattern[i] != sequence[i]) return false
    }
  
    return true
  }

  // To reset the game when its game over
function gameOver() {
    userClickedPattern = []
    sequence = []
    start = false
    alert("GAME OVER")

  
   console.log("loser")
  }

// Startet die Anwendung
function startSimon(){
    if (start===false){
        start = true;
        nextSequence();
        showColorEffect();
    }
}

// Fügt die Farben in ein Array ein
function callButton(farbe:string):void{

     if(start){
        var userClickedButtonColor = farbe

        activateButton(userClickedButtonColor)
        playAudio(userClickedButtonColor)
        userClickedPattern.push(userClickedButtonColor)

        if(check() && userClickedPattern.length === sequence.length){

            userClickedPattern=[]
            nextSequence();
            showColorEffect();
        }

        else if(!check()){
        gameOver();        }
}}

