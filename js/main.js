function updateElement(id, styles = {}, innerHTML = null) {
  const element = document.getElementById(id);
  if (element) {
    Object.assign(element.style, styles);
    if (innerHTML !== null) element.innerHTML = innerHTML;
  }
}

function breatheIn() {
  updateElement("breathe", {
    backgroundImage: "url(https://jooinn.com/images/beautiful-clouds.jpg)", //fewCloudsPic
    transform: "scale(2)",
    transition: "4s all ease-in-out",
  });
  updateElement("breathCount", {}, "breathe in");
  setTimeout(holdBreath1, 4000);
}

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
  let fewCloudsPic = "url(https://jooinn.com/images/beautiful-clouds.jpg)";

  /* Slowly decrease the breathbox size*/
  let box = document.getElementById("#breathe");
  box.style = `background-image: ${fewCloudsPic}; transform: scale(1); transition: 4s all ease-in-out;`;
  holdBreath2();
}, 8000);

function holdBreath1() {
  /* Change instruction to hold breath */
  let instruction = document.getElementById("#breathCount");
  instruction.innerHTML = "hold ...";
  breatheOut();
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
  let fewCloudsPic = "url(https://jooinn.com/images/beautiful-clouds.jpg)";
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
