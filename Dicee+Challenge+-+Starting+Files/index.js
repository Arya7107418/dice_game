window.onload = function() {
  // Add a delay to see "Refresh Me" before updating
  setTimeout(function() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

    if (randomNumber1 > randomNumber2) {
      document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
      document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
      document.querySelector("h1").innerHTML = "Draw!";
    }
  }, 800); // Delay by 1 second
};
