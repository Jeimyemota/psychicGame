

      var computerChoices = ["a", "b", "c", "d","e","f","g",
      "h","i","j","k","l","m","n","o","p","q","r","s","t","u",
      "v","w","x","y","z"];
   
      var wins = 0;
      var losses = 0;
      var guesses = 15;
      var guessLeft = 15;
      var guessLetters = [];

      
      var letterToGuess = null;

      
//code below indicates that the computer will choose at random. 
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Counts the guesses left the user has. 
var updateguessLeft = function() {

  document.querySelector("#gLeft").innerHTML = "Guesses left: " + guessLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {

  //Code below takes the guesses the player has tried. Displays it by commas.  
  document.querySelector("#let").innerHTML = "Your Guesses so far: " + guessLetters.join(", ");
};

// This will be called when everything is resetted. 
var reset = function() {
  totalGuesses = 15;
  guessLeft = 15;
  guessLetters = [];

  updateLetterToGuess();
  updateguessLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateguessLeft();

                  //this makes the user key register and changes the guesses left. 
                  document.onkeyup = function(event) {
                    guessLeft--;

                    //this grabs the string from the character code. changes it to lowercase. 
                  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


                  //updates how many guesses are left and how many od them there are so far.
                  guessLetters.push(userGuess);
                  updateguessLeft();
                  updateGuessesSoFar();

                      //below it states the conditions of winning and losing. 

                        if (guessLeft > 0){
                            if (userGuess == letterToGuess){
                                wins++;
                                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                                alert("Yes, you are psychic!");
                                reset();
                            }
                        }else if(guessLeft == 0){
                            // updates the loss. 
                            losses++;
                            document.querySelector('#losses').innerHTML = "Losses: " + losses;
                            alert("Sorry, you're not psychic, maybe try again?");
                            // Calling reset. 
                            reset();
                        }
};
