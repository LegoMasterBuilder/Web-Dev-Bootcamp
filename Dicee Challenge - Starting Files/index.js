//Inside index.js, create a new variable called randomNumber1 
//then set the value of this variable to a random number between 1 and 6. 
//Test it out in the console to make sure it works as expected.

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice number.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //dice number.png

document.getElementsByClassName("img1")[0].src = "images/" + randomDiceImage1;
document.getElementsByClassName("img2")[0].src = "images/" + randomDiceImage2;

if (randomNumber1 == randomNumber2) {
    // Draw!
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
} else if (randomNumber1 > randomNumber2) {
    // Player 1 Wins!
    document.getElementsByTagName("h1")[0].innerHTML = "🚩  Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    // Player 2 Wins!
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!  🚩";
}