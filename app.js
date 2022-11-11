const userChoices = document.querySelectorAll("li > button");

let userChoice;
// E.H
userChoices.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    userChoice = e.target.textContent.trim();
    window.userChoice = userChoice;

    window.location = "http://127.0.0.1:5500/winner.html";
  });
});
