const keys = document.querySelector("svg").children;

document.querySelectorAll("a").forEach((el) =>
  el.addEventListener("click", (e) => {
    const key = e.target.parentNode;
    const id = [...keys].findIndex((el) => el === key);
    playAudio(id);
  })
);

const playAudio = (key) => {
  const audio = new Audio(`audio/key-${key + 1}.mp3`);
  audio.play();
};
