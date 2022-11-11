const something = document.getElementById("something");
const overlay = document.querySelector(".overlay");
const close = document.querySelector("button.close");

//E:H
something.addEventListener("click", (e) => {
  overlay.classList.add("show");
});

close.addEventListener("click", (e) => {
  overlay.classList.remove("show");
});
