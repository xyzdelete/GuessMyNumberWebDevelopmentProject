"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector(".number").textContent = secretNumber;

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
        document.querySelector(".message").textContent = "✅ Correct number!";
        // When guess is too low

        document.querySelector("body").style.backgroundColor = "#60b347";

        document.querySelector(".number").style.width = "30rem";
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "⚠️ Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "💀 You lost the game!";
            score--;
            document.querySelector(".score").textContent = score;
        }
        // When guess is too high
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector(".message").textContent = "⚠️ Too low!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent =
                "💀 You lost the game!";
            score--;
            document.querySelector(".score").textContent = score;
        }
    }
});
