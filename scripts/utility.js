// Fucction for show screen
function hideScreen(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

// Fumction for hide screen
function showScreen(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

// function generate random alphabet
function randomAlphabet() {
  const str = "abcdefghijklmnopqrstuvwxyz";
  const alphaArray = str.split("");

  // generate random number
  const index = Math.round(Math.random() * 25);
  const letter = alphaArray[index];
  return letter;
}

// function for display letter
function displayLetter(letter) {
  document.getElementById("text-display").innerText = letter;
}

// function to add bgcolor
function setBgColor(letter) {
  const element = document.getElementById(letter);
  element.classList.add("bg-orange-400");
}
function removeBgColor(expected) {
  const element = document.getElementById(expected);
  element.classList.remove("bg-orange-400");
}
