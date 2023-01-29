/* function breatheIn2() {
  console.log("breatheIn1 function has started");
  let breatheIn1 = document.getElementById("#breathe");
  console.log("breatheIn1 variable has been declared");

  breatheIn1.style = `background-image: ${fewCloudsPic}; transform: scale(1.2); transition: 3s all ease-in-out; color: #fff; font-family: "Quicksand", sans-serif;`;
  console.log("breathBox style has been applied");
  breatheIn1.innerHTML = "1 ...";
} */

function breatheIn1() {
  let breatheInCount1 = document.getElementById("#breathe");
  breatheInCount1.style = `transform: scale(1.2); transition: 3s all ease-in-out;`;
  breatheInCount1.innerHTML = "1 ...";
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
  /* Change the background image first to a local file to reduce lag time */
  document.getElementById("#breathe").style.backgroundImage =
    "url(/images/few-clouds.jpg)";

  /* Hide the start button after it is clicked */
  hideButton();
}

/* Does declaring this as a variable outside of the functions allow the functions inside to read this variable? Or is this a wasted line of code here? */
let startButton = document.getElementById("#startStop");
console.log("startStop variable has been declared");

/* When user the clicks the start button, begin the box-breath 'animation'*/
startButton.addEventListener("click", changeImage);
