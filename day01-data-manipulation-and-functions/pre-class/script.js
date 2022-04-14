var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue = "Hello " + input + ". The name " + input + "is taken.";
  return myOutputValue;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.
  var distanceInMiles = input * 0.62;

  var myOutputValue = "it's " + distanceInMiles;
  return myOutputValue;
};

// var functionsExampleMain = function (input) {
//   // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var convertMinsToHour = function (mins) {
//   return mins / 60;
// };
// var calTrainTwoSpeed = function (delay) {
//   var trainSpeed = 200;
//   var timeToTokyo = 2;
//   var distanceToTokyo = trainSpeed * timeToTokyo;
//   var remainingTimeForTravel = timeToTokyo - convertMinsToHour(delay);
//   trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;

//   //   var myOutputValue = "it's " + trainTwoNewSpeed;
//   //   return myOutputValue;
//   // };

//   // return the new speed; 'toFixed' limits the ans to a specified decimal place
//   return trainTwoNewSpeed.toFixed(2);
// };

// /*
//   MAIN FUNCTION
// */
// var trainSpeedMain = function (input) {
//   // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
//   var trainTwoNewSpeed = calcTrainTwoSpeed(input);
//   var myOutputValue = `Given a ${input}min delay, train 2 needs to travel at a speed of ${trainTwoNewSpeed} km/h in order to arrive at the same time as train 1`;
//   return myOutputValue;
// };

// var trainSpeedMain = function (input) {
//   // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

// var clockMain = function (input) {
//   // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

var trainSpeedMain = function (input) {
  var convertMinsToHour = input / 60;
  var trainSpeed = 200;
  var timeToTokyo = 2;
  var distanceToTokyo = trainSpeed * timeToTokyo;
  var remainingTimeForTravel = timeToTokyo - convertMinsToHour;

  var trainTwoNewSpeed = distanceToTokyo / remainingTimeForTravel;

  return trainTwoNewSpeed;
};





var calCelsius = function (input) {
  var convertToCelsius = (input-32) x 5/9;
  
}

