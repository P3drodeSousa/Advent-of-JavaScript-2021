const minInput = document.querySelector(".minutes input");
const secInput = document.querySelector(".seconds input");
const btnStart = document.querySelector("button.start");
const ring = document.querySelector(".ring");
const inputs = [minInput, secInput];

let min = minInput.value;
let sec = secInput.value;

let isPaused = true;
let nIntervId;

const renderBtnTxt = () => {
  return (btnStart.textContent = isPaused ? "Start" : "Pause");
};

const pause = () => {
  clearInterval(nIntervId);
};

const resetTimer = () => {
  ring.classList.remove("ending");
  minInput.value = "15";
  secInput.value = "00";
  renderBtnTxt();
};

const startTimer = () => {
  min = minInput.value;
  sec = secInput.value;
  isPaused = !isPaused;

  renderBtnTxt();

  return isPaused ? pause() : myTimer();
};

const myTimer = () => {
  nIntervId = setInterval(() => {
    if (!sec) {
      isPaused = true;
      ring.classList.add("ending");
      pause();
      return setTimeout(function () {
        alert("🚨Timer's up !!");
        resetTimer();
      }, 10);
    }

    if (sec == 00) {
      min -= 1;
      sec = 59;
      minInput.value = min < 10 ? "0" + min : min;
      secInput.value = sec < 10 ? "0" + sec : sec;
    } else {
      sec -= 1;
      secInput.value = sec < 10 ? "0" + sec : sec;
    }
  }, 1000);
};

// EVENT LISTENERS
btnStart.addEventListener("click", startTimer);

inputs.forEach((el) => {
  el.addEventListener("change", (e) => {
    el.setAttribute("value", e.target.value);
  });
});

document.querySelector(".settings").addEventListener("click", (e) => {
  isPaused = true;
  pause();
  renderBtnTxt();
  inputs.forEach((el) => {
    el.toggleAttribute("disabled");
  });
});
