var rollDice = function () {
  var randomize = Math.floor(Math.random() * 6) + 1;
  return randomize;
};
// Store guesses in a global array that persists across Submits.
var guesses = [];

var followArraysMain = function (input) {
  // Add the user's guess to the guesses array.
  guesses.push(input);

  // Generate a random dice number.
  var randomDiceNumber = rollDice();
  console.log(`randomDiceNumber: ${randomDiceNumber}`);

  // Initialise output to communicate loss.
  // Output the record of all guesses regardless of loss or win.
  var outOutputValue = "";

  // If the guess matches the dice roll, change output to communicate win.
  if (randomDiceNumber == input) {
    myOutputValue = "You win. Your guesses: " + guesses;
  } else {
    return (myOutputValue = "You lose. Your guesses: " + guesses);
  }
  // Return output value.
  return myOutputValue;
};

var followArraysLoopsMain = function (input) {
  // Attempt the Follow Along exercise from the Looping Over An Array module below with followArraysLoopsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
