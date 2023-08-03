// index.js
function getRandomDiceNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener("DOMContentLoaded", function () {
  var randomNumber1 = getRandomDiceNumber();
  var randomNumber2 = getRandomDiceNumber();
  var diceImage1 = "images/dice" + randomNumber1 + ".png";
  var diceImage2 = "images/dice" + randomNumber2 + ".png";
  var leftDiceImage = document.querySelector("#left-dice");
  var rightDiceImage = document.querySelector("#right-dice");

  leftDiceImage.setAttribute("src", diceImage1);
  rightDiceImage.setAttribute("src", diceImage2);

  var heading = document.querySelector("h1");
  var resultText;
  if (randomNumber1 > randomNumber2) {
    resultText = "Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    resultText = "Player 2 wins!";
  } else {
    resultText = "It's a draw!";
  }
  heading.innerHTML = resultText;
});
