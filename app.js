const passwordLenght = document.querySelector("div.field > input#length");
const lengthText = document.querySelector("div.field > span#lengthText");
const displayPassword = document.querySelector("div.field > input#password");
const checkboxInputs = document.querySelectorAll("input[type=checkbox]");
const btnCopy = document.querySelector("button.copy");
// DATA
const uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const special = [
  "~",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  "?",
  ", ",
  ".",
  "|",
  "\\",
];
const numbers = Array.from({ length: 10 }, (_, i) => i++);
const similar = ["L", "i", "l", "o", "O", "0"];

// Variables
let length = document.querySelector("div.field>input#length").value;
let generatedPasswordFinal = "";

//E:H
const generatePassword = (
  length,
  hasUppercase,
  hasLowerCase,
  hasNumbers,
  hasSpecial,
  hasSimilar
) => {
  let availableChars = [
    ...(hasUppercase ? uppercase : []),
    ...(hasLowerCase ? lowercase : []),
    ...(hasNumbers ? numbers : []),
    ...(hasSpecial ? special : []),
    ...(hasSimilar ? similar : []),
  ];

  generatedPasswordFinal = "";

  if (availableChars.length < 1) {
    return (displayPassword.value = generatedPasswordFinal);
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generatedPasswordFinal += availableChars[randomIndex];
  }

  displayPassword.value = generatedPasswordFinal;
};

function getChekcInputsValues() {
  let data = {};
  checkboxInputs.forEach((el) => {
    if (!data[el.name]) {
      data[el.name] = el.checked;
    }
  });

  generatePassword(
    length,
    data.uppercase,
    data.lowercase,
    data.numbers,
    data.symbols,
    data.similar
  );
}

//E:L
passwordLenght.addEventListener("change", (e) => {
  length = +e.target.value;
  lengthText.textContent = e.target.value;
  getChekcInputsValues();
});

btnCopy.addEventListener("click", (e) => {
  e.currentTarget.classList.add("copied");
  navigator.clipboard.writeText(generatedPasswordFinal);
  setTimeout(() => {
    alert("Copied: " + generatedPasswordFinal);
  }, 500);
});

checkboxInputs.forEach((input) => {
  input.addEventListener("click", () => {
    getChekcInputsValues();
  });
});

window.addEventListener("load", (e) => {
  getChekcInputsValues();
});
