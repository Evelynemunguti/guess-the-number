//For the comp to choose a no btn 1to 100
//Math.Floor removes decimal places 
//+1 ensures we get 1 to 100 not to 99 coz in Js no starts at 0

let compNumber = Math.floor(Math.random()*100)+1;

//to grab the InputDeviceInfo,guess and message from the html file
//the players guess


const guessInput = document.getElementById ("guessInput");
const submitGuess = document.getElementById ("submitGuess");
const resultMessage = document.getElementById("resultMessage");

// To Add a click event to the button
submitGuess.addEventListener("click", 
    function(){
const guess = Number(guessInput.value); //helps turn input into a number

if (guess === compNumber){
    resultMessage.textContent ="correct! You guessed right";  //this resultMessage.textContent stands for what will be returned
}
else if(guess < compNumber){
    resultMessage.textContent = "Ohh No! Too low,Try again";
}
else if (guess > compNumber){
    resultMessage.textContent = "Too high!,Try again";
}

});