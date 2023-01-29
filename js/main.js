setTimeout(function showStartButttonAgain() {
  /* Show start button */
  let startButton = document.getElementById("#startStop");
  startButton.style = "display: inline-block;";
  startButton.innerHTML = "again";
}, 17000);

setTimeout(function startOver() {
  /* Remove text */
  let instruction = document.getElementById("#breathCount");
  instruction.style = "display: none;";
}, 16000);

setTimeout(function holdBreath2() {
  /* Change instruction to hold breath */
  let instruction = document.getElementById("#breathCount");
  instruction.innerHTML = "hold ...";

  /* Gradually return to the original image */
  let box = document.getElementById("#breathe");
  box.style = `transition: 4s all ease-in-out;`;
}, 12000);

setTimeout(function breatheOut() {
  /* Change instruction to breathe out */
  let instruction = document.getElementById("#breathCount");
  instruction.innerHTML = "breathe out";

  /* Keep the fewCloudsPic showing */
  let fewCloudsPic = "url(https://bit.ly/3bwvcVS)";

  /* Slowly decrease the breathbox size*/
  let box = document.getElementById("#breathe");
  box.style = `background-image: ${fewCloudsPic}; transform: scale(1); transition: 4s all ease-in-out;`;
  holdBreath2();
}, 8000);

setTimeout(function holdBreath1() {
  /* Change instruction to hold breath */
  let instruction = document.getElementById("#breathCount");
  instruction.innerHTML = "hold ...";
  breatheOut();
}, 4000);

function breatheIn() {
  let box = document.getElementById("#breathe");

  /* Keep the fewCloudsPic showing */
  let fewCloudsPic = "url(https://bit.ly/3bwvcVS)";

  /* Slowly increase the breathbox size*/
  box.style = `background-image: ${fewCloudsPic}; transform: scale(2); transition: 4s all ease-in-out;`;

  /* Show instruction to breathe in */
  let instruction = document.getElementById("#breathCount");
  instruction.innerHTML = "breathe in";

  /* Hold your breath */
  holdBreath1();
}

function hideButton() {
  /* Should I again declare the startButton variable inside this function? Or is this a global variable that carries over from the declaration below (outside of the function)? */

  let startButton = document.getElementById("#startStop");
  console.log("startStop variable has been declared within the function");
  startButton.style = "display: none;";

  /* Start the breathbox 'animation' and counting */
  breatheIn();
  console.log("breatheIn function was called from within startBoxBreath");
}

function changeImage() {
  /* Change the background image first to a local file to try to reduce lag time */
  let fewCloudsPic = "url(https://bit.ly/3bwvcVS)";
  let currentImage = document.getElementById("#breathe");
  currentImage.style = `background-image: ${fewCloudsPic};`;

  /* Hide the start button after it is clicked */
  hideButton();
}

/* Does declaring this as a variable outside of the functions allow the functions inside to read this variable? Or is this a wasted line of code here? */
let startButton = document.getElementById("#startStop");
console.log("startStop variable has been declared");

/* When user the clicks the start button, begin the box-breath 'animation'*/
startButton.addEventListener("click", changeImage);
