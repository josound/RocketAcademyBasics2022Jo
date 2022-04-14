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

// var computerWinCount = 0;
// var playerWinCount = 0;
// var drawCount = 0;

// var main = function () {
//   return (
//     `Computer win count: ${computerWinCount}.` +
//     "<br>" +
//     "<br>" +
//     `Player win count: ${playerWinCount}.` +
//     "<br>" +
//     "<br>" +
//     `Number of Draws: ${drawCount}`
//   );
// };

/* ______ */

/*beat that game */

var gameMode = "player1diceroll";

//initialize array to store 2 dices rolled.
var dicesRolled = [];
// var message = " ";

//initialize first player.
var currentPlayer = 1;

// Player 1 and Player 2 score.
var player1Score = 0;
var player2Score = 0;

// Temporary storage of dice numbers
var player1CurrentDiceRoll = [];
var player1CurrentDiceRoll = [];

//randomly generate a number  from 1 to 6
var generateRandomNumber = function () {
  return Math.floor(Math.random() * 6) + 1;
};

//push the dice number of each of 2 rolls into the array
var get2DiceRolls = function () {
  dicesRolled = [];
  for (var i = 0; i < 2; i += 1) {
    dicesRolled.push(generateRandomNumber());
  }
  return dicesRolled;
};

var getPlayerScore = function (userInput, playerScore, dicesRolled) {
  let firstDice = dicesRolled[0];
  let secondDice = dicesRolled[1];
  if (userInput === 1) {
    playerScore = Number(String(firstDice) + String(secondDice));
    if (currentPlayer == 1) {
      player1Score = playerScore;
    } else {
      player2Score = playerScore;
    }
    return `Based on the dice you've rolled, the sum of your score is ${playerScore}. <br><br> Click submit for the next instruction.`;
  }
  if (userInput === 2) {
    playerScore = Number(String(secondDice) + String(firstDice));
    //separate out accordingly.
    if (currentPlayer == 1) {
      player1Score = playerScore;
    } else {
      player2Score = playerScore;
    }
    return `Based on the dice you've rolled, the sum of your score is ${playerScore}. <br><br> Click submit for the next instruction.`;
  }
};

var main = function (input) {
  input = Number(input);
  // var gameMode;
  if (gameMode === "player1diceroll") {
    dicesRolled = get2DiceRolls();
    gameMode = "player1diceorder";
    return `Welcome to the game, player ${currentPlayer}. <br><br> 
    You rolled 2 dices. <br> 
    Dice 1: ${dicesRolled[0]}. <br><br>
    Dice 2: ${dicesRolled[1]}. <br><br>
    Now, enter either 1 or 2 to define the order of your dice roll. This program will then show you your score. 
    `;
  }

  if (gameMode === "player1diceorder") {
    if (input != 1 && input != 2) {
      return `Please only enter the number 1 or 2.`;
    }
    gameMode = "player2turn";
    currentPlayer = 2;
    //show return current number player 1 chose.
    return getPlayerScore(input, player1Score);
  }
  //reflect instruction to Player 2.
  if (gameMode === "player2turn") {
    gameMode = "player2diceroll";
    return `Okay, now's Player 2's turn. <br><br> 
    Please click submit button to start the game. `;
  }

  if (gameMode === "player2diceroll") {
    dicesRolled = get2DiceRolls();
    gameMode = "player2diceorder";
    return `Welcome to the game, player ${currentPlayer}. <br><br> 
    You rolled 2 dices. <br> 
    Dice 1: ${dicesRolled[0]}. <br><br>
    Dice 2: ${dicesRolled[1]}. <br><br>
    Now, enter either 1 or 2 to define the order of your dice roll. This program will then show you your score. 
    `;
  }

  if (gameMode === "player2diceorder") {
    if (input != 1 && input != 2) {
      return `Please only enter the number 1 or 2.`;
    }
    gameMode = "getresult";
    return getPlayerScore(input, player2Score, dicesRolled);
  }

  if (gameMode === "getreadyforresult") {
    gameMode = "getresult";
    return `Now that both players have played,
    please click submit button to view the results of this game. `;
  }

  if (gameMode === "getresult") {
    gameMode = "player1diceroll";
    if (player1Score > player2Score) {
      return `Player 1 wins. <br><br> 
      Player 1 score: ${player1Score} <br><br>
      Player 2 score: ${player2Score}`;
    }
    if (player2Score > player1Score) {
      return `Player 2 wins. <br><br> 
      Player 2 score: ${player2Score} <br><br>
      Player 1 score: ${player1Score}`;
    }
    return `it's a draw! <br><br> 
    Player 1 score: ${player1Score} <br><br>
    Player 2 score: ${player2Score}`;
  }
};
