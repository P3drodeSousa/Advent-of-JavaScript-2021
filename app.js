const toaster = document.querySelector("div.toaster");

let secondsSpent = 0;

function toggleToaster() {
  toaster.classList.toggle("collapsed");
}

// Copied from stackoverflow https://stackoverflow.com/questions/4667068/how-to-measure-a-time-spent-on-a-page
(function () {
  requestAnimationFrame(function updateTimeSpent() {
    let timeNow = performance.now();
    secondsSpent = round(timeNow / 1000);
    if (secondsSpent === 15) {
      toggleToaster();
      return;
    }
    requestAnimationFrame(updateTimeSpent);
  });
  let performance = window.performance,
    round = Math.round;
})();

//E:L
//Close modal

const exit = (e) => {
  const shouldExit =
    [...e.currentTarget.classList].includes("close-toaster") ||
    e.currentTarget.className === "close-toaster" ||
    e.keyCode === 27;
  if (shouldExit) {
    toaster.classList.add("collapsed");
  }
};

const mouseEvent = (e) => {
  const shouldShowExitIntent =
    !e.toElement && !e.relatedTarget && e.clientY < 10;

  console.log(shouldShowExitIntent);

  if (shouldShowExitIntent) {
    document.removeEventListener("mouseout", mouseEvent);

    toaster.classList.remove("collapsed");
  }
};

setTimeout(() => {
  document.addEventListener("keydown", exit);
}, 10_000);

document.addEventListener("mouseout", mouseEvent);
document.querySelector("button.close-toaster"), addEventListener("click", exit);
