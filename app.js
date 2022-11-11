const userChoices = document.querySelectorAll("li > button");

const choices = Array.from([...userChoices], (item) => item.textContent.trim());
let computer = choices[Math.floor(Math.random() * choices.length)];

let userChoice;
// E.H
userChoices.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    userChoice = e.target.textContent.trim();
    window.userChoice = userChoice;

    window.location.href = `http://127.0.0.1:5500/winner.html?user=${userChoice}&computer=${computer}`;
  });
});
