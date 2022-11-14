const cardWrapper = document.querySelector("div.credit-card__wrapper");
const cardNumberImage = document.querySelector(
  "div.card-number div.card-number__emboss"
);
const signatureDiv = document.querySelector("div.expiration-date").children;

// DATA
let cardData = {
  "card-number": "",
  "card-holder": "",
  cvv: "",
  month: "",
  year: "2028",
};

// render Card image id: number that starts the card
function renderCardImage(id) {
  switch (Number(id[0])) {
    case 3:
      cardBrand = cardWrapper.className = "credit-card__wrapper american";
      break;
    case 4:
      cardWrapper.className = "credit-card__wrapper visa";
      break;
    case 5:
      cardWrapper.className = "credit-card__wrapper mastercard";
      break;
    default:
      cardWrapper.className = "credit-card__wrapper discover";
      break;
  }
}

function formatCardNumber(txt) {
  return txt.match(/.{1,4}/g).join(" ");
}

// Handle text input Changes
function handleChange(e) {
  let inputName = e.target.name;
  cardData[inputName] = e.target.value;

  const target = document.querySelector(`div.${inputName}`);
  let data = cardData[inputName];
  // Change card Background Only when card number changes
  if (inputName === "card-number") {
    renderCardImage(data);
  }

  if (inputName === "cvv") {
    cardWrapper.classList.toggle("flip");
    target.textContent = data;
  } else {
    data = inputName !== "card-holder" ? formatCardNumber(data) : data;
    [...target.children].forEach((el) => {
      el.textContent = data;
    });
  }

  if (inputName === "card-holder") {
    document.querySelector("div.signature").textContent = data;
  }
}

// Handle Select change
function handleSelectChange(e) {
  let name = e.target.name.split("-");
  cardData[name[name.length - 1]] = e.target.value;
  [...signatureDiv].forEach((child) => {
    child.textContent = `${cardData.month} / ${cardData.year}`;
  });
}

//E:L
// Cart Number E:L
document.querySelectorAll("form input").forEach((input) => {
  input.addEventListener("change", (e) => handleChange(e));
});

document.querySelector("input[name=cvv]").addEventListener("focus", (e) => {
  cardWrapper.classList.toggle("flip");
});

document.querySelectorAll(".field__option select").forEach((select) => {
  select.addEventListener("change", (e) => handleSelectChange(e));
});
