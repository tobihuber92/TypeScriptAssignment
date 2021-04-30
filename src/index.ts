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
var score =0;

// Click-Funktion
btnGreen?.addEventListener("click", function()
{
    irgendwas("green");
});
btnRed?.addEventListener("click", function()
{
    irgendwas("red");
})
btnYellow?.addEventListener("click", function()
{
    irgendwas("yellow");
})
btnBlue?.addEventListener("click", function()
{
    irgendwas("blue");
})
btnStart?.addEventListener("click", function()
{
    startSimon();
})


// Funktion damit ich die Farben mehrmals aufrufen kann
function irgendwas(farbe:string){
    callButton(farbe);
    playAudio(farbe);
    activateButton(farbe);
}

// Funktion die eine zufällige Farbe ermittelt
function nextSequence():void {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomButton = allButtons[randomNumber];
    sequence.push(randomButton);
} 

// Startet die Anwendung
function startSimon(){
    if (start===false){
        start = true;
        nextSequence();
        showColorEffect();
        //console.log(sequence);
    }
}

// Fügt die Farben in ein Array ein
function callButton(farbe:string):void{
    var userClickedButtonColor = farbe
    userClickedPattern.push(userClickedButtonColor)
    //console.log(userClickedPattern);
}

// Funktion um die Sounds abzuspielen
function playAudio(farbe:string){
    const audio = new Audio("../src/sounds/" + farbe + ".mp3")
    audio.play()
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

// Wenn man Start drückt kommt ein zufälliger Sound und ein Button wird auf active gesetzt
function showColorEffect(){

    let start = 0; 
    let effect = setInterval(innerFunction, 500); 

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

