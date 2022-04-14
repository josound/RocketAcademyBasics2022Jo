var followAlongMain = function () {
  var myOutputValue = "";

  for (var i = 0; i < 6; i += 1) {
    // The 'i' loop runs input number of times
    for (var j = 0; j < 6; j += 1) {
      // The 'j' loops runs input number of time each then 'i' increments
      // Each time the inner loop runs, it adds "x" to output
      myOutputValue = myOutputValue + "x";

      console.log("j :", j);
    }
    // At the end of each 'i' loop, add a <br> tag to begin a new row
    myOutputValue = myOutputValue + "<br>";
    console.log("i :", i);
  }

  // After the outer loop has run to completion, return the output compiled
  // by the above loops.
  return myOutputValue;
};

// var followAlongMain = function (input) {
//   // Attempt the Follow Along exercise from the Loops module below with followAlongMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

var simpleLoopMain = function (input) {
  // Attempt the Simple Loop with Variations exercise from the Loops module below with simpleLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var loopWithinLoopMain = function (input) {
  // Attempt the Loop Within Loop exercise from the Loops module below with loopWithinLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var infiniteLoopMain = function (input) {
  // Attempt the Infinite Loop exercise from the Loops module below with infiniteLoopMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
