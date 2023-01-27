function startBoxBreath() {
  console.log("startBoxBreath function called");
  /* Should I again declare the startButton variable - let startButton = document.getElementById("#startStop"); - inside this function, or is this a global variable that carries over from the delcaration below? */
  startButton.style = "display: none;";
  let fewCloudsPic = "https://bit.ly/3bwvcVS";
  console.log("fewCloudsPic variable has been declared");
  breathBox.style = `background-image: ${fewCloudsPic}; color: #fff; transform: scale(1.5); transition: 4s all ease-in-out;`;
  console.log("breathBox style has been applied");
}

let startButton = document.getElementById("#startStop");
console.log("startStop variable has been declared");
let breathBox = document.getElementById("#breathBox");
console.log("breathBox variable has been declared");

startButton.addEventListener(
  "click",
  startBoxBreath
); /* When user clicks start, start the box-breath process */
