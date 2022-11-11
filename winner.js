const userPickImg = document.querySelector(".your-pick");
const computerPickImg = document.querySelector(".computer-pick");
const winnerDiv = document.querySelector(".winner");
let user;
let computer;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// validate results
const selectWinner = () => {
  switch (user + computer) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      winnerDiv.classList.add("you-win");
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      winnerDiv.classList.add("computer-wins");
      break;
    case "paperpaper":
    case "scissorsscissors":
    case "rockrock":
      document
        .querySelectorAll("h1")
        .forEach((el) => (el.style.visibility = "hidden"));
      setTimeout(() => {
        alert("Tied !!!!");
      }, 600);

      break;
  }
};

// Create Images of user & computer choices
const createImageElement = (items) => {
  items.forEach((el) => {
    const img = document.createElement("img");
    img.src = `./images/${el.name}.png`;
    el.target.append(img);
  });
};

// E:L
document.querySelector("button.play-again").addEventListener("click", (e) => {
  window.location.href = "http://127.0.0.1:5500/index.html";
});

window.addEventListener("load", (e) => {
  user = urlParams.get("user");
  computer = urlParams.get("computer");

  let items = [
    { name: user, target: userPickImg },
    { name: computer, target: computerPickImg },
  ];

  createImageElement(items);
  selectWinner();
});
