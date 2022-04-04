// var sayHi = function (personName) {
//   return `hi ${personName}`;
// };

// var main = function (inputTom) {
//   return sayHi(inputTom);
// };

// var main = function (inputTom) {
//   var myOutputValue = sayHi(inputTom);
//   return myOutputValue;
// };

// var calulateAreaOfCircle = function (radius) {
//   var pi = 3.14;
//   var area = pi * radius * radius;
//   return area;
// };

// var main = function (input) {
//   var area = calulateAreaOfCircle(input);

//   var msg = `a circle of radius ${input} units has area of ${area} `;
//   return msg;
// };

// var computerGenerateSecretWord = function () {
//   //generate number numbers; 1,2 and 3.
//   var randomization = Math.floor(Math.random() * 3) + 1;
//   //let each number be represented with a secretword.
//   if (randomization === 1) {
//     return `awesome`;
//   }
//   if (randomization === 2) {
//     return `great`;
//   }
//   if (randomization === 3) {
//     return `fantastic`;
//   }
// };

// var numCorrectGuessesCounter = 2;
// var startingCounter = 0;

// var main = function (userGuessWord) {
//   var computerSecretWord = computerGenerateSecretWord();

//   var numGuessesLeftToWin = numCorrectGuessesCounter - startingCounter;

//   if (userGuessWord === computerSecretWord) {
//     startingCounter = startingCounter + 1;
//     if (startingCounter === numCorrectGuessesCounter) {
//       return `You won the game!`;
//     }
//     if (startingCounter <= 2) {
//       return `You guessed correctly. However ${numCorrectGuessesCounter} of guesses is needed to win. You need ${numGuessesLeftToWin} more guess to win.`;
//     }
//   }
//   return `Incorrect guess. Try again. You need ${numCorrectGuessesCounter} more guess to win.`;
// };

// var letters = ["a", "b", "c"];

// var main = function (input) {
//   var myOutputValue = `your letter:  ${letters[input]}`;
//   return myOutputValue;
// };

var computerWinCount = 0;
var playerWinCount = 0;
var drawCount = 0;

var main = function () {
  return (
    `Computer win count: ${computerWinCount}.` +
    "<br>" +
    "<br>" +
    `Player win count: ${playerWinCount}.` +
    "<br>" +
    "<br>" +
    `Number of Draws: ${drawCount}`
  );
};
