setTimeout(function holdBreath1() {
  /* Change instruction to hold breath */
  let counting = document.getElementById("#breathCount");
  counting.innerHTML = "hold ...";
}, 8000);

function breatheIn1() {
  let breatheInCount1 = document.getElementById("#breathe");

  /* Keep the fewCloudsPic showing */
  let fewCloudsPic = "url(https://bit.ly/3bwvcVS)";

  /* Slowly increase the breathbox size*/
  breatheInCount1.style = `background-image: ${fewCloudsPic}; transform: scale(2); transition: 6s all ease-in-out;`;

  /* Show instruction to breathe in */
  let counting = document.getElementById("#breathCount");
  counting.innerHTML = "breathe in ...";

  /* Hold your breath */
  holdBreath1();
}

function hideButton() {
  /* Should I again declare the startButton variable inside this function? Or is this a global variable that carries over from the declaration below (outside of the function)? */

  let startButton = document.getElementById("#startStop");
  console.log("startStop variable has been declared within the function");
  startButton.style = "display: none;";

  /* Start the breathbox 'animation' and counting */
  breatheIn1();
  console.log("breatheIn1 function was called from within startBoxBreath");
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
