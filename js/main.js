function startBoxBreath() {
  console.log("startBoxBreath function called");
}

let startButton = document.querySelector("#startStop");
startButton.addEventListener(
  "click",
  startBoxBreath
); /* When user clicks start, start the box-breath process */
