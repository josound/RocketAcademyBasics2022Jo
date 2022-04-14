/* 
Base: Secret Word
*/
var computerGenerateSecretWord = function () {
  //generate number numbers; 1,2 and 3.
  var randomization = Math.floor(Math.random() * 3) + 1;
  //let each number be represented with a secretword.
  if (randomization === 1) {
    return `awesome`;
  }
  if (randomization === 2) {
    return `great`;
  }
  if (randomization === 3) {
    return `fantastic`;
  }
};

var numCorrectGuessesCounter = 2;
var startingCounter = 0;

var secretWordBaseMain = function (userGuessWord) {
  var computerSecretWord = computerGenerateSecretWord();

  var numGuessesLeftToWin = numCorrectGuessesCounter - startingCounter;

  if (userGuessWord === computerSecretWord) {
    startingCounter = startingCounter + 1;
    if (startingCounter === numCorrectGuessesCounter) {
      return `You won the game!`;
    }
    if (startingCounter <= 2) {
      return `You guessed correctly. However ${numCorrectGuessesCounter} of guesses is needed to win. You need ${numGuessesLeftToWin} more guess to win.`;
    }
  }
  return `Incorrect guess. Try again. You need ${numCorrectGuessesCounter} more guess to win.`;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//computer will randomize numbers 1,2,3
//userGuessDiceRoll = 1 to 6
//3 variables:
//withinNum
//computerDiceRoll
//userDiceRoll

var computerGenerateDiceRoll2 = function () {
  return Math.floor(Math.random() * 6) + 1;
};

var withinNum = function () {
  return Math.floor(Math.random() * 3) + 1;
};

var diceWithinMain = function (userGuess) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var rangeOfGuess = 1;
  var computerDice = 3;
  // var rangeOfGuess = withinNum();
  // var computerDice = computerGenerateDiceRoll2(); //
  if (
    computerDice - rangeOfGuess <= userGuess &&
    userGuess <= computerDice + rangeOfGuess
  ) {
    return `you win! computer played: ${computerDice}. User rolled: ${userGuess}. Range of ${rangeOfGuess}`;
  }

  // if (computerDice >= userGuess) {
  //   return `you win!`;
  // }
  return `you lose. computer played: ${computerDice}. User rolled: ${userGuess}. Range of ${rangeOfGuess}`;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
