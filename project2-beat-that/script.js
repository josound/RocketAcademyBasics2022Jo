// 2 players; 2nd goes after the 1st
// Each player will roll 2 dices.
// [1] To start the game, Player 1 will click submit button to roll their dices.
// [2] Upon clicking submit button, Player 1 will be shown (output) their dice roll numbers.
// [3] Player 1 will then input 1 or 2 to determine their score.
// [3.1] how score will be tabulated: if input is 1, dice 1 and dice 2 will be concatenated; if input is 2, dice 2 and dice 1 will be concatenated.
// [4] Repeat steps 1 to 3 for player 2.
// [5] Program will finally compare the scores and show result.
// [5.1] list out all possible scenarios (win, lose, draw).

var gameMode = "player1diceroll";

//initialize array to store 2 dices rolled.
var dicesRolled = [];
// var message = " ";

//initialize first player.
var currentPlayer = 1;

// Player 1 and Player 2 score.
var player1Score = 0;
var player2Score = 0;

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

var getPlayer1Score = function (userInput) {
  let firstDice = dicesRolled[0];
  let secondDice = dicesRolled[1];
  if (userInput === 1) {
    player1Score = Number(String(firstDice) + String(secondDice));
    return `Based on the dice you've rolled, the sum of your score is ${player1Score}. <br><br> Click the buzzer for the next instruction.`;
  }
  if (userInput === 2) {
    player1Score = Number(String(secondDice) + String(firstDice));
    return `Based on the dice you've rolled, the sum of your score is ${player1Score}. <br><br> Click the buzzer for the next instruction.`;
  }
};

var getPlayer2Score = function (userInput) {
  let firstDice = dicesRolled[0];
  let secondDice = dicesRolled[1];
  if (userInput === 1) {
    player2Score = Number(String(firstDice) + String(secondDice));
    return `Based on the dice you've rolled, the sum of your score is ${player2Score}. <br><br> Click the buzzer for the next instruction.`;
  }
  if (userInput === 2) {
    player2Score = Number(String(secondDice) + String(firstDice));
    return `Based on the dice you've rolled, the sum of your score is ${player2Score}. <br><br> Click the buzzer for the next instruction.`;
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
    Now, ENTER either 1 or 2 BELOW and click the blue buzzer ABOVE to define the order of your dice roll. This program will then show you your score.
    `;
  }

  if (gameMode === "player1diceorder") {
    if (input != 1 && input != 2) {
      return `Please only ENTER the number 1 or 2 BELOW. Then, click on the buzzer to check your score.`;
    }
    gameMode = "player2turn";
    currentPlayer = 2;
    //show return current number player 1 chose.
    return getPlayer1Score(input);
  }
  //reflect instruction to Player 2.
  if (gameMode === "player2turn") {
    gameMode = "player2diceroll";
    return `Okay, now's Player 2's turn. <br><br>
    Please CLICK blue buzzer to start the game. `;
  }

  if (gameMode === "player2diceroll") {
    dicesRolled = get2DiceRolls();
    gameMode = "player2diceorder";
    return `Welcome to the game, player ${currentPlayer}. <br><br>
    You rolled 2 dices. <br>
    Dice 1: ${dicesRolled[0]}. <br><br>
    Dice 2: ${dicesRolled[1]}. <br><br>
    Now, ENTER either 1 or 2 BELOW and click the blue buzzer ABOVE to define the order of your dice roll. This program will then show you your score.
    `;
  }

  if (gameMode === "player2diceorder") {
    if (input != 1 && input != 2) {
      return `Please only enter the number 1 or 2 BELOW. Then, click on the buzzer to check your score.`;
    }
    gameMode = "getreadyforresult";
    return getPlayer2Score(input);
  }

  if (gameMode === "getreadyforresult") {
    gameMode = "getresult";
    return `Now that both players have played,
    please click blue buzzer to check who has won. `;
  }

  if (gameMode === "getresult") {
    gameMode = "player1diceroll";
    currentPlayer = 1;
    if (player1Score > player2Score) {
      return `Player 1 wins! <br><br>
      Player 1 score: ${player1Score} <br><br>
      Player 2 score: ${player2Score}`;
    }
    if (player2Score > player1Score) {
      return `Player 2 wins! <br><br>
      Player 2 score: ${player2Score} <br><br>
      Player 1 score: ${player1Score}`;
    }
    return `it's a draw! <br><br>
    Player 1 score: ${player1Score} <br><br>
    Player 2 score: ${player2Score}`;
  }
};

/* need help: In this version, I tried incorporating player 1 and 2 playerScore logic into ONE function (getPlayerScore), but why is player 1 score not shown in results? */

// var gameMode = "player1diceroll";

// //initialize array to store 2 dices rolled.
// var dicesRolled = [];
// // var message = " ";

// //initialize first player.
// var currentPlayer = 1;

// // Player 1 and Player 2 score.
// var player1Score = 0;
// var player2Score = 0;

// // Temporary storage of dice numbers
// var player1CurrentDiceRoll = [];
// var player1CurrentDiceRoll = [];

// //randomly generate a number  from 1 to 6
// var generateRandomNumber = function () {
//   return Math.floor(Math.random() * 6) + 1;
// };

// //push the dice number of each of 2 rolls into the array
// var get2DiceRolls = function () {
//   dicesRolled = [];
//   for (var i = 0; i < 2; i += 1) {
//     dicesRolled.push(generateRandomNumber());
//   }
//   return dicesRolled;
// };

// var getPlayerScore = function (userInput, playerScore, dicesRolled) {
//   let firstDice = dicesRolled[0];
//   let secondDice = dicesRolled[1];
//   if (userInput === 1) {
//     playerScore = Number(String(firstDice) + String(secondDice));
//     if (currentPlayer == 1) {
//       player1Score = playerScore;
//     } else {
//       player2Score = playerScore;
//     }
//     return `Based on the dice you've rolled, the sum of your score is ${playerScore}. <br><br> Click submit for the next instruction.`;
//   }
//   if (userInput === 2) {
//     playerScore = Number(String(secondDice) + String(firstDice));
//     //separate out accordingly.
//     if (currentPlayer == 1) {
//       player1Score = playerScore;
//     } else {
//       player2Score = playerScore;
//     }
//     return `Based on the dice you've rolled, the sum of your score is ${playerScore}. <br><br> Click submit for the next instruction.`;
//   }
// };

// var main = function (input) {
//   input = Number(input);
//   // var gameMode;
//   if (gameMode === "player1diceroll") {
//     dicesRolled = get2DiceRolls();
//     gameMode = "player1diceorder";
//     return `Welcome to the game, player ${currentPlayer}. <br><br>
//     You rolled 2 dices. <br>
//     Dice 1: ${dicesRolled[0]}. <br><br>
//     Dice 2: ${dicesRolled[1]}. <br><br>
//     Now, enter either 1 or 2 to define the order of your dice roll. This program will then show you your score.
//     `;
//   }

//   if (gameMode === "player1diceorder") {
//     if (input != 1 && input != 2) {
//       return `Please only enter the number 1 or 2.`;
//     }
//     gameMode = "player2turn";
//     currentPlayer = 2;
//     //show return current number player 1 chose.
//     return getPlayerScore(input, player1Score);
//   }
//   //reflect instruction to Player 2.
//   if (gameMode === "player2turn") {
//     gameMode = "player2diceroll";
//     return `Okay, now's Player 2's turn. <br><br>
//     Please click submit button to start the game. `;
//   }

//   if (gameMode === "player2diceroll") {
//     dicesRolled = get2DiceRolls();
//     gameMode = "player2diceorder";
//     return `Welcome to the game, player ${currentPlayer}. <br><br>
//     You rolled 2 dices. <br>
//     Dice 1: ${dicesRolled[0]}. <br><br>
//     Dice 2: ${dicesRolled[1]}. <br><br>
//     Now, enter either 1 or 2 to define the order of your dice roll. This program will then show you your score.
//     `;
//   }

//   if (gameMode === "player2diceorder") {
//     if (input != 1 && input != 2) {
//       return `Please only enter the number 1 or 2.`;
//     }
//     gameMode = "getreadyforresult";
//     return getPlayerScore(input, player2Score, dicesRolled);
//   }

//   if (gameMode === "getreadyforresult") {
//     gameMode = "getresult";
//     return `Now that both players have played,
//     please click submit button to view the results of this game. `;
//   }

//   if (gameMode === "getresult") {
//     gameMode = "player1diceroll";
//     if (player1Score > player2Score) {
//       return `Player 1 wins. <br><br>
//       Player 1 score: ${player1Score} <br><br>
//       Player 2 score: ${player2Score}`;
//     }
//     if (player2Score > player1Score) {
//       return `Player 2 wins. <br><br>
//       Player 2 score: ${player2Score} <br><br>
//       Player 1 score: ${player1Score}`;
//     }
//     return `it's a draw! <br><br>
//     Player 1 score: ${player1Score} <br><br>
//     Player 2 score: ${player2Score}`;
//   }
// };
