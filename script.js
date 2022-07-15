"use strict";
//for class use .class name and for id use #id

let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess, typeof guess);

  //when no imput
  if (!guess) {
    // document.querySelector('.message').textContent = ' ⚠️ no Number!';
    displayMessage("⚠️ no Number!");

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number ..! 🏆';
    displayMessage("Correct Number ..! 🏆");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "25rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    //when guess is incorrect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "📈 too high" : "📉 too low";
      score--; //score-- works same as score = score-1
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'Better try next time';
      displayMessage("Better try next time");

      document.querySelector(".score").textContent = 0;
    }
    //when entered number is Greater
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 too high';
  //     score--; //score-- works same as score = score-1
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Better try next time';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //then entered number is smaller
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 too low';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'Better try next time';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//setting up the again i.e., refresh button
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "darkslategrey";
  document.querySelector(".number").style.width = "15rem";
});
