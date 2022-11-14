const incomeInput = document.querySelector(".field input#income");
const incomeDisplay = document.querySelector("div.summary-panel").children;
const addExpenseBtn = document.querySelector(
  "div.wrapper button#add-expense-button"
);

const expenseTable = document.querySelector(
  "div.wrapper div.expenses-panel div.expense-table"
);

let incomeTotal = 0;
let expensesTotal = 0;
let balanceTotal = 0;
const expensesArr = [];

function calculateTotalBalance(incomeTotal, expensesTotal) {
  balanceTotal = +incomeTotal - +expensesTotal;
  incomeDisplay[2].lastElementChild.textContent = `$ ${balanceTotal.toFixed(
    2
  )}`;
  incomeDisplay[2].lastElementChild.classList =
    balanceTotal > 0 ? "summary-amount positive" : "summary-amount negative";
}

function calculateTotalExpenses(arr) {
  expensesTotal = arr.reduce((previous, current) => {
    return +current.amount + previous;
  }, 0);

  incomeDisplay[1].lastElementChild.textContent = `$ ${expensesTotal.toFixed(
    2
  )}`;
  calculateTotalBalance(incomeTotal, expensesTotal);
}

function displayExpenses(arr) {
  expenseTable.innerHTML = "";
  arr.forEach((item, idx) => {
    let html = ` <div>${item.expense}</div>
          <div>$ ${item.amount}</div>
          <div class="delete">
            <button name="delete-expense" class="delete-expense" data-item=${idx}>
              <img src="./images/trash.svg" alt="Tash" />
            </button>
          </div>`;

    expenseTable.insertAdjacentHTML("beforeend", html);
  });

  document
    .querySelectorAll("div.delete button.delete-expense")
    .forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = e.currentTarget.dataset.item;
        expensesArr.splice(id, 1);
        displayExpenses(expensesArr);
        calculateTotalBalance(incomeTotal, expensesTotal);
      });
    });

  calculateTotalExpenses(expensesArr);
}

//E:L
incomeInput.addEventListener("change", (e) => {
  incomeTotal = +e.target.value;
  incomeDisplay[0].lastElementChild.textContent = `$ ${incomeTotal.toFixed(2)}`;
  balanceTotal = +e.target.value;
  calculateTotalBalance(incomeTotal, expensesTotal);
});

addExpenseBtn.addEventListener("click", (e) => {
  const expense = document.querySelector("input#expense-name");
  const amount = document.querySelector("input#expense-amount");

  expensesArr.push({ expense: expense.value, amount: amount.value });
  displayExpenses(expensesArr);

  expense.value = "";
  amount.value = "";
});
