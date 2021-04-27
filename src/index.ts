//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import { ModuleKind } from "../node_modules/typescript/lib/typescript";


let btnGreen = document.querySelector('.quarterCircleGreen');
let btnRed = document.querySelector('.quarterCircleRed');
let btnYellow = document.querySelector('.quarterCircleYellow');
let btnBlue = document.querySelector('.quarterCircleBlue');

btnGreen?.addEventListener("click", function(){irgendwas("green")})
btnRed?.addEventListener("click", function(){irgendwas("red")})
btnYellow?.addEventListener("click", function(){irgendwas("yellow")})
btnBlue?.addEventListener("click", function(){irgendwas("blue")})

function irgendwas(farbe:string){
    nextSequence();
    callButton(farbe);
    playAudio(farbe);
    activateButton(farbe);
}


let allButtons = [btnGreen, btnRed, btnYellow, btnBlue]
let sequence: any[] =[];
var userClickedPattern: string[] =[];


function nextSequence():void {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomButton = allButtons[randomNumber];
    sequence.push(randomButton);
} 

function callButton(farbe:string):void{
    var userClickedButtonColor = farbe
    userClickedPattern.push(userClickedButtonColor)
    console.log(userClickedPattern);
    nextSequence();
    //console.log(sequence);
}

function playAudio(farbe:string){
    const audio = new Audio("../src/sounds/" + farbe + ".mp3")
    audio.play()
}

function activateButton(farbe:string){
    if(farbe==="green"){
        btnGreen?.classList.add("active");
        console.log("testgrün");
    }
    else if(farbe==="red"){
        btnRed?.classList.add("active");
        console.log("testrot");
    }
    else if(farbe==="yellow"){
        btnYellow?.classList.add("active");
    }
    else if(farbe==="blue"){
        btnBlue?.classList.add("active");
    }

setTimeout(deactivateButton, 300)
}

function deactivateButton(){
    btnGreen?.classList.remove("active");
    btnRed?.classList.remove("active");
    btnYellow?.classList.remove("active");
    btnBlue?.classList.remove("active");

}