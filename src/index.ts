//THIS IS THE ENTRY FILE - WRITE YOUR MAIN LOGIC HERE!
import { ModuleKind } from "../node_modules/typescript/lib/typescript";


let btnGreen = document.querySelector('.quarterCircleGreen');
let btnRed = document.querySelector('.quarterCircleRed');
let btnYellow = document.querySelector('.quarterCircleYellow');
let btnBlue = document.querySelector('.quarterCircleBlue');

btnGreen?.addEventListener("click", function(){callButton("green")})
btnRed?.addEventListener("click", function(){callButton("red")})
btnYellow?.addEventListener("click", function(){callButton("yellow")})
btnBlue?.addEventListener("click", function(){callButton("blue")})

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
