const rangeInput = document.getElementById("priceRange");

rangeInput.addEventListener("mousemove", (e) => {
  document.querySelector("div.amount span.dollars").textContent =
    e.target.value / 100;
});
