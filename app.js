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
document.querySelector("button.close-toaster"),
  addEventListener("click", toggleToaster);

document.addEventListener("mouseout", toggleToaster);
