let theFavNumber = 7; // fave number
let guess;

while (guess !== theFavNumber) { // use to keep running til it got the right answer
    guess = Number(prompt("Guess the favorite number:"));

    if (guess > theFavNumber) {
        console.log("Too high!");
    } else if (guess < theFavNumber) {
        console.log("Too low!");
    } else {
        console.log("Correct!");
    }
}
