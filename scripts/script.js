// declared variable
const textDisplay = document.getElementById("text-display");
const scoreDisplay = document.getElementById("score-display");
const lifeDisplay = document.getElementById("life-display");
const finalScore = document.getElementById("final-score");

let score;
let life;

// initial setup
function init() {
  score = 0;
  life = 5;
  lifeDisplay.textContent = life;
  scoreDisplay.textContent = score;
}
init();

function play() {
  showScreen("play");
  hideScreen("home");
  hideScreen("score");

  const randomLetter = randomAlphabet();
  displayLetter(randomLetter);
  setBgColor(randomLetter);
}

function keyPressedEvent(event) {
  const letter = textDisplay.innerText;

  if (event.key === letter.toLowerCase()) {
    // update score and display score
    score += 1;
    scoreDisplay.textContent = score;

    // remove background from current letter
    removeBgColor(event.key);

    // play again
    play();
  } else {
    // update life and display life
    life--;
    lifeDisplay.textContent = life;
    if (life === 0 || event.key === "Escape") {
      removeBgColor(letter.toLowerCase());
      console.log(letter.toLowerCase(), typeof letter);
      showScreen("score");
      hideScreen("play");

      // set score to final score
      console.log(score);
      finalScore.textContent = score;
    }
  }
}

document.addEventListener("keyup", keyPressedEvent);

function playAgain() {
  init();
  play();
}
