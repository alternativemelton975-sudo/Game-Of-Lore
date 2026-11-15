
function startGame() {
var userInput = prompt("The house is dark and empty. At least you think it is. A dark figure walks around the otherside of the house. What world are you in?");

userInput = userInput.toLowerCase();
if (userInput === "3, 18, 15, 23") {
    window.location.href = "ACreekingSense.html";
}

userInput = userInput.toLowerCase();
if (userInput !== "3, 18, 15, 23") {
    window.location.href = "ADeepCommunication.html";
}
}
