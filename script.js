"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number!";
        score--;
        document.querySelector(".score").textContent = score;

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage("✅ Correct number!");
        // When guess is too low

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";

        document.querySelector(".number").textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(
                guess > secretNumber ? "⚠️ Too high!" : "⚠️ Too low!"
            );
        } else {
            document.querySelector(".message").textContent =
                "💀 You lost the game!";
        }
        score--;
        document.querySelector(".score").textContent = score;
    }
});

document.querySelector(".again").addEventListener("click", function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Start guessing...";
});
