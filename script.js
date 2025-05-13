//For the comp to choose a no btn 1to 100
//Math.Floor removes decimal places 
//+1 ensures we get 1 to 100 not to 99 coz in Js no starts at 0

let compNumber = Math.Floor(Math.random()*100)+1;

//to grab the InputDeviceInfo,guess and message from the html file
//the players guess


const guessInput = document.getElementById ("guessInput");
const submitGuess = document.getElementById ("submitGuess");
const resultMessage = document.getElementById("resultMessage");