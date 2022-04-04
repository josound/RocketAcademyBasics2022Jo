//user inputs either scissors, paper or stone.
//computer randomizes scissors, paper or stone.
//computer outputs won, lose, or it's a draw.
//if user's input and computer's randomized result is same, output is a draw.
//if user's input differs from computer's randomized result, output is either a win or draw.
//for player to win, scissors > paper, paper > stone, stone > scissors.

// var userName = "";
// var user = "user";
// var computer = "computer";

var computerWinCount = 0;
var playerWinCount = 0;
var drawCount = 0;

var whoWinMessage = function () {
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

// greetUser(userName);
// var initialMessage = function () {
//   return `Welcome to the game. To begin, please enter your name.`;
// };

// var greetUser = function (name) {
//   initialMessage();
//   return `Hello ${name}. Please enter either scissors, paper, or stone to begin.`;
// };

var main = function (userInput) {
  //when user inputs anything that is not either the keywords (scissors, paper, or stone), the output will remind them to attempt the correct input again.
  //only when the user inputs the exact keyword (of either scissors, paper, or stone), the program (inclusive of formula, value assignment, and conditions/rules) will run.

  if (
    userInput === `scissors` ||
    userInput === `paper` ||
    userInput === `stone`
  ) {
    //computer randomizes scissors, paper or stone.
    //formula/computation to compute the integers 1, 2 and 3.
    var computerRandomize = Math.floor(Math.random() * 3) + 1;
    console.log(`logging computerRandomize ${computerRandomize}`);

    //assigning each randomized integer (1,2,3) to an item (scissor, paper or stone <- such that user and computer are comparing the same thing).
    if (computerRandomize === 1) {
      computerRandomize = `scissors`;
    } else if (computerRandomize === 2) {
      computerRandomize = `paper`;
    } else if (computerRandomize === 3) {
      computerRandomize = `stone`;
    }
  }
  if (userInput === `scissors` && computerRandomize === `paper`) {
    playerWinCount += 1;
    return "You win!" + "<br>" + "<br>" + whoWinMessage();
  }
  if (userInput === `scissors` && computerRandomize === `stone`) {
    computerWinCount += 1;
    return "You Lose." + "<br>" + "<br>" + whoWinMessage();
  }
  if (userInput === `scissors` && computerRandomize === `scissors`) {
    drawCount += 1;
    return "Oh, its a draw." + "<br>" + "<br>" + whoWinMessage();
  }
  //define what computer outputs when user inputs paper.
  if (userInput === `paper` && computerRandomize === `paper`) {
    drawCount += 1;
    return "Oh, its a draw." + "<br>" + "<br>" + whoWinMessage();
  }
  if (userInput === `paper` && computerRandomize === `stone`) {
    playerWinCount += 1;
    return "You win!" + "<br>" + "<br>" + whoWinMessage();
  }
  if (userInput === `paper` && computerRandomize === `scisors`) {
    computerWinCount += 1;
    return "You lose." + "<br>" + "<br>" + whoWinMessage();
  }
  //define what computer outputs when user inputs stone.
  if (userInput === `stone` && computerRandomize === `paper`) {
    computerWinCount += 1;
    return "You lose." + "<br>" + "<br>" + whoWinMessage();
  }
  if (userInput === `stone` && computerRandomize === `stone`) {
    drawCount += 1;
    return (
      "Oh, its a draw. You can try again." + "<br>" + "<br>" + whoWinMessage()
    );
  }
  if (userInput === `stone` && computerRandomize === `scissors`) {
    playerWinCount += 1;
    return (
      "You win! You can try playing again" + "<br>" + "<br>" + whoWinMessage()
    );
  } else
    return `To play this game, please input either scissors or paper or stone.`;
};

/*
Attempted to segregate Main into Helper function, it's not yet completed, only halfway done as I intend to clarify approach before continuing...
*/

// var computerRandomize = function () {
//   var computeRandomize = math.floor(math.random() * 3);
//   return computeRandomize;
// };

// var computerPlays = function () {
//   if (computerRandomize() === 1) {
//     return `scissors`;
//   }
//   else if (computerRandomize() === 2) {
//     return `Paper`;
//   }
//   else if (computerRandomize() === 3)
//   {
//     return `stone`;
//   }
// };

// var main = function (userInput) {
//   if (userInput === `scissors` || userInput === `paper` || userInput === `stone`) {
//     var computeRandomize = computerRandomize();
//     var assignValue = computerPlays();

//     if (userInput === `scissors` && randomizeInput === 1) {
//       return `its a draw!`;
//     }

//   }
//   else {
//     return `please input scissors or paper or stone`;
//   }
// };
