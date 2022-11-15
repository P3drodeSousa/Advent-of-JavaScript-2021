const titles = document.querySelectorAll("h3");
const contents = document.querySelectorAll("ul li a");

const contentsArr = Array.from(contents);

let prev;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = contentsArr.findIndex(
          (el) => el.textContent === entry.target.textContent
        );
        console.log(index);
        contents[index].parentElement.classList.add("selected");

        if (prev) {
          prev.classList.remove("selected");
        }
        prev = contents[index].parentElement;
      }
    });
  },
  {
    threshold: 1,
    rootMargin: "0px 0px -70% 0px",
  }
);

titles.forEach((title) => {
  observer.observe(title);
});
