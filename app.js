const billInput = document.querySelector("input#bill-amount");
const peopleInput = document.querySelector("input#number-of-people");
const percentagesBtn = document.querySelectorAll("input[type=radio]");
const btnCalc = document.getElementById("calculate");
const tipLabel = document.querySelector("span#tip-amount");
const totalPerson = document.querySelector("span#total-per-person");

let billAmount = billInput.value || 0;

let totalPeople = peopleInput.value || 0;
let tipPercentage =
  [...percentagesBtn].filter((el) => el.checked)[0].value.replace("%", "") || 5;

let totalTip;
let totalPerPerson;

const calculate = () => {
  // Total Tip
  totalTip = ((billAmount * tipPercentage) / 100).toFixed(2);
  tipLabel.textContent = totalTip;
  // Total per person
  totalPerPerson = Math.floor(+billAmount + +totalTip) / +totalPeople;
  totalPerson.textContent = totalPerPerson.toFixed(2);
};

/* E.H */
billInput.addEventListener("change", (e) => {
  billAmount = e.target.value;
});

peopleInput.addEventListener("change", (e) => {
  totalPeople = e.target.value;
});

percentagesBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    tipPercentage = +e.target.value.replace("%", "");
  });
});

btnCalc.addEventListener("click", calculate);
