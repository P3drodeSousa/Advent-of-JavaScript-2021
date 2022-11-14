const titles = document.querySelectorAll("h3");
const contents = document.querySelectorAll("ul li a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry.isIntersecting);
      console.log(
        titles[
          Array.from(contents, (content) => content.textContent).indexOf(
            entry.target.textContent
          )
        ]
      );
      /*    titles[
        Array.from(contents, (content) => content.textContent).indexOf(
          entry.target.textContent
        )
      ].classList.toggle("selected", entry.isIntersecting); */
    });
  },
  {
    threshold: 0.5,
  }
);

titles.forEach((title) => {
  observer.observe(title);
});
