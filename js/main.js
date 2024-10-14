function updateElement(id, styles = {}, innerHTML = null) {
  const element = document.getElementById(id);
  if (element) {
    Object.assign(element.style, styles);
    if (innerHTML !== null) element.innerHTML = innerHTML;
  }
}

function changeImage() {
  updateElement("breathe", {
    backgroundImage: "url(https://jooinn.com/images/beautiful-clouds.jpg)",
  });
  hideButton();
}

function hideButton() {
  updateElement("startStop", { display: "none" });
  breatheIn();
}

function breatheIn() {
  updateElement("breathe", {
    backgroundImage: "url(https://jooinn.com/images/beautiful-clouds.jpg)", //fewCloudsPic
    transform: "scale(2)",
    transition: "4s all ease-in-out",
  });
  updateElement("breathCount", {}, "breathe in");
  setTimeout(holdBreathIn, 4000);
}

function holdBreathIn() {
  updateElement("breathCount", {}, "hold ...");
  setTimeout(breatheOut, 4000);
}

function breatheOut() {
  updateElement("breathCount", {}, "breathe out");
  updateElement("breathe", {
    backgroundImage: "url(https://jooinn.com/images/beautiful-clouds.jpg)",
    transform: "scale(1)",
    transition: "4s all ease-in-out",
  });
  setTimeout(holdBreathOut, 4000);
}

function holdBreathOut() {
  updateElement("breathCount", {}, "hold ...");
  updateElement("breathe" {
    transition: "4s all ease-in-out"
  })
}

function startOver() {
  updateElement("breathCount", { display: "none" });
  setTimeout(showStartButtonAgain, 1000);
}

function showStartButtonAgain() {
  updateElement("startStop", { display: "inline-block" }, "again");
}

document.getElementById("startStop").addEventListener("click", changeImage);