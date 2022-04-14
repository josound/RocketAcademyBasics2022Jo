// var fahrenheitToCelsiusMain = function (input) {
//   // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
//   var myOutputValue = 'hello world';
//   return myOutputValue;
// };

// var fahrenheitToCelsiusMain = function (input) {
//   var convertToCelsius = ((input - 32) * 5) / 9;
//   var myOutputValue = "it's " + convertToCelsius + "celcius";
//   return myOutputValue;
// };

/*
What is the objective? : output total fuel costs 
Break down problem into sub-problems : 
What information do I have? : length of road trip (in km) 
What information do I need? : total fuel cost (in $)
How can I get there? : 9 miles per litre, fuel costs $2.20/litre
*/

// var roadTripCostBaseMain = function (inputKm) {
//   // Complete the Base: Road Trip Cost exercise below with roadTripCostBaseMain as the main function.
//   var costPerLitre = 2.2;
//   var milesPerLitre = 9;
//   var distanceInMiles = inputKm * 0.62;
//   var calTotalFuelCosts = distanceInMiles / (costPerLitre * milesPerLitre);

//   var msg = `The total costs is ${calTotalFuelCosts}`;

//   return msg;
// };

/* 
Version of Road Trip Cost exercise, with Helper Function
*/
var convertKmToMiles = function (distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return distanceInMiles;
};

var calTotalFuelCost = function (distanceInMiles) {
  var milesPerLitreOfFuel = 9;
  var numOfLitreOfFuelNeeded = distanceInMiles / milesPerLitreOfFuel;
  var costPerLitre = 2.2;
  var fuelCost = numLitresOfFuelNeeded * costPerLitre;
  return fuelCost;
};

var roadTripCostBaseMain = function (inputTripDistanceInKm) {
  convertKmToMiles();
  calTotalFuelCost();
  var msg = `Fuel costs ${calTotalFuelCost.toFixed(
    2
  )} for ${inputTripDistanceInKm}km travelled`;
  return msg;
};

// Shortened Version of Road Trip Cost exercise, without Helper Function
var roadTripCostBaseMain = function (distanceInKm) {
  var milesPerLitreOfFuel = 9;
  var costPerLitre = 2.2;
  var distanceInMiles = distanceInKm * 0.62;
  var calTotalFuelCost = (distanceInMiles / milesPerLitreOfFuel) * costPerLitre;

  var msg = `Fuel costs ${calTotalFuelCost.toFixed(
    2
  )} for ${distanceInKm}km travelled`;
  return msg;
};

// totalFuelCostForRoadTripMain;

var roadTripCostComfortableMain = function (input) {
  // Complete the Comfortable: Road Trip Cost exercise below with roadTripCostComfortableMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

// var iceMachineMain = function (input) {
//   // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
//   var myOutputValue = "hello world";
//   return myOutputValue;
// };

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var cellularDataMain = function (input) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
