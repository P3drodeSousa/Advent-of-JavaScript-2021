const questions = document.querySelectorAll("ul li a");

let prec;

const toggleClass = (target) => {
  target.classList.toggle("expand");
};

const changeIcon = (target) => {
  target.classList.add("visible");
};

questions.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (prec == e.target.parentNode) {
      toggleClass(prec);
      prec = null;
      return;
    }

    if (!prec) {
      prec = e.target.parentNode;
    } else {
      toggleClass(prec);
      prec = e.target.parentNode;
    }
    toggleClass(e.target.parentNode);
    changeIcon(e.target.children[0]);
  });
});
