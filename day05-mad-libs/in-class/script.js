//getRandomIndex
var text = [];

var getRandomIndex = function (arrayLength) {
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var madLibsAdjectivesMain = function (input) {
  if (input !== `create`) {
    var found = false;

    for (var index = 0; index < text.length; index += 1) {
      var currentText = text[index];
      if (currentText == input) {
        found = true;
      }
    }

    if (!found) {
      text.push(input);
      // var message = text; //redundant
      return text;
    } else {
      return "this word already exist in the array.";
    }
  } else {
    var randomIndex = getRandomIndex(text.length);
    var randomAdjective = text[randomIndex];

    var output = `"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ${randomAdjective} wife.`;
    return output;
  }
  //   var madLib =
  //   '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' wife.';
  // }

  //var myOutputValue;
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
