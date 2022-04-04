var emojiNumberCharactersMain = function (input) {
  var counter = 0;
  var msg = "";
  while (counter < input) {
    counter = counter + 1;
    msg = msg + "👍";
    console.log(msg);
  }
  return msg;
};

var emojiSquareMain = function (input) {
  var counter = 0;
  var msg = "";
  for (var i = 0; i < input; i += 1) {
    for (var j = 0; j < input; j += 1) {
      msg = msg + "👍";
    }
    msg = msg + "<br>";
  }
  return msg;
};

// var emojiNumberCharactersMain = function (input) {
//   // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
//   var msg = "";
//   var number = Number(input);
//   for (var i = 0; i <= number; i++) {
//     msg = msg + "😸";
//   }
//   return msg;
// };

// var emojiSquareMain = function (input) {
//   // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
//   var myOutputValue = "";
//   // sideLength represents the length of each side of the square
//   var sideLength = Number(input);
//   for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
//     for (var innerCounter = 0; innerCounter < sideLength; innerCounter += 1) {
//       // Add a 👍 to the current row
//       myOutputValue += "👍";
//     }
//     // Insert a line break to start a new row
//     // myOutputValue = myOutputValue + "what" + "<br>";
//     myOutputValue += "what" + "<br>";
//   }
//   return myOutputValue;
// };

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var myOutputValue = "";
  // sideLength represents the length of each side of the square
  var sideLength = Number(input);
  for (var outerCounter = 0; outerCounter < sideLength; outerCounter += 1) {
    for (var innerCounter = 0; innerCounter < sideLength; innerCounter += 1) {
      // If current iteration represents a border element, draw ✊ instead.
      if (
        outerCounter == 0 ||
        outerCounter == sideLength - 1 ||
        innerCounter == 0 || //
        innerCounter == sideLength - 1
      ) {
        myOutputValue += "✊";
      } else {
        // Add a 👍 to the current row
        myOutputValue += "👍";
      }
    }
    // Insert a line break to start a new row
    myOutputValue += "<br>";
  }
  return myOutputValue;
};
// var emojiOutlineSquareMain = function (input) {
//   // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
