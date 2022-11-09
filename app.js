const keys = document.querySelectorAll("button");
const arrKey = Array.from(keys, (item) => item.dataset.key);

let randomNumber;
let random;
let prec;

//  class jiggle
const randomKey = () => {
  randomNumber = Math.floor(Math.random() * arrKey.length + 1);
  random = arrKey[randomNumber];
  console.log(prec);
  if (prec) {
    prec.classList = "key";
  }

  keys[randomNumber].classList = "jiggle";
};

document.addEventListener("keydown", (e) => {
  e.preventDefault();
  if (random == e.key.toUpperCase()) {
    prec = keys[randomNumber];
    randomKey();
  }
});

randomKey();
