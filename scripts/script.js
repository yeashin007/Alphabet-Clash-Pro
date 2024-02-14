function play() {
  showScreen("play");
  hideScreen("home");

  let letter = randomAlphabet();
  displayLetter(letter);
  setBgColor(letter);
}

function keyPressedEvent(event) {
  const letter = document.getElementById("text-display").innerText;

  if (event.key === letter.toLowerCase()) {
    removeBgColor(event.key);
    play();
  }
}

document.addEventListener("keyup", keyPressedEvent);
