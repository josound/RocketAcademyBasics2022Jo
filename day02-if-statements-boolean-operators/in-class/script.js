// var lucky11Main = function (input) {
//   // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

/*
Base:Lucky 11
*/

var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  return Math.floor(Math.random() * 6) + 1;
};

var lucky11Main = function (inputGuess) {
  var dice1 = rollDice();
  var dice2 = rollDice();
  // if one of dice roll is equal to user guess, user win.
  // if total dice roll is equal to 11, user win.
  // otherwise, user loses.
  if (dice1 == inputGuess || dice2 == inputGuess || dice1 + dice2 == 11) {
    return `you win!`;
  } else {
    return `you lose!`;
  }
};

/*
Base: Hawker Food Categorisation 
*/
//input dish name
// chicken rice, nasi lemak, hokkien mee, laksa, soup...
// output

var hawkerFoodCategorisationMain = function (input) {
  var myOutputValue = "the door shall not open.";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue = "you wrote the secret phrase!";
  } else if (input == "not so palatable papaya") {
    myOutputValue += " but you are nearly there.";
  } else {
    myOutputValue += " nope, this is far from the right phrase.";
  }

  // return myOutputValue as output
  return myOutputValue;
};

// var hawkerFoodCategorisationMain = function (input) {
//   // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

/* 
Comfortable: 4D with Single-Digit Comparison 
*/
var generateDigit = function () {
  var randomDigit = math.floor(math.random() * 10);
  return randomDigit;
};

var fourDSingleDigitMain = function (input) {
  var FirstDigit4D = generateDigit();
  var SecondDigit4D = generateDigit();
  var ThirdDigit4D = generateDigit();
  var FourthDigit4D = generateDigit();
  if (
    input == FirstDigit4D ||
    input == SecondDigit4D ||
    input == ThirdDigit4D ||
    input == FourthDigit4D
  ) {
    return `you win!`;
  }
  return `try again next time!`;
};
// var fourDSingleDigitMain = function (input) {
//   // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
