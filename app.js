const monthText = document.querySelector("div.month");
const wrapper = document.querySelector(".wrapper");

// DATE API
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

let daysInCurrentMonth;
let firstDay;

/* const isToday = (someDate) => {
  return (
    someDate.getDate() == date.getDate() &&
    someDate.getMonth() == date.getMonth() &&
    someDate.getFullYear() == date.getFullYear()
  );
}; */

//U:F
function daysInPreviousMonth() {
  return new Date(year, month, 0).getDate();
}

// return total days in a month
function getDaysInMonth() {
  return new Date(year, month + 1, 0).getDate();
}

function getDaysNextMonth() {
  return new Date(year, month + 2, 0).getDate();
}

function getFirstDayOfMonth() {
  return new Date(year, month, 1).getDay();
}

const createArr = (length) => {
  return (arr = Array.from({ length: length }, (_, i) => i + 1));
};

const populateWrapper = (length) => {
  createArr(length).forEach((i) => {
    const div = document.createElement("div");
    wrapper.append(div);
  });
};

//E:H
const renderDays = () => {
  renderMonthName();

  daysInCurrentMonth = getDaysInMonth();
  firstDay = getFirstDayOfMonth();

  const daysDivs = document.querySelectorAll("div:not([class]");
  const days = [];

  if (firstDay !== 0) {
    days.push(createArr(daysInPreviousMonth()).slice(-firstDay));
  }

  days.push(createArr(daysInCurrentMonth));

  days.push(
    createArr(getDaysNextMonth()).slice(0, daysDivs.length - days.flat().length)
  );

  days.flat().forEach((item, idx) => {
    daysDivs[idx].textContent = item;

    /*     if (isToday(item)) {
      daysDivs[idx].className = "today";
    } */

    daysDivs[idx].style.color =
      idx < firstDay || idx > daysInCurrentMonth + firstDay - 1
        ? "silver"
        : "black";
  });
};

const renderMonthName = () => {
  const currentMonthName = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date(year, month, 1));

  monthText.textContent = `${year} - ${currentMonthName}`;
};
//E:L
window.addEventListener("load", () => {
  populateWrapper(42);
  renderDays();
});

document.querySelector(".previous").addEventListener("click", () => {
  month -= 1;
  if (month < 0) {
    year--;
    month = 11;
  }

  renderDays();
});

document.querySelector(".next").addEventListener("click", () => {
  month += 1;

  if (month > 11) {
    year++;
    month = 0;
  }
  renderDays();
});
