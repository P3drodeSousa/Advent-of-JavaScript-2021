const stars = document.querySelectorAll("a.star");

document
  .querySelector("div.star-rating")
  .addEventListener("mouseleave", (e) => {
    e.target.classList = "star-rating";
  });

stars.forEach((el) => {
  el.addEventListener("mouseenter", (e) => {
    document.querySelector(
      "div.star-rating"
    ).className = `star-rating star-${e.target.classList[1].replace(
      "star-",
      ""
    )}`;
  });
});
