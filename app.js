const data = [
  {
    id: 1,
    name: "Cameron Williamson",
    email: "cameron.wiliamson@example.com",
    title: "Software Developer",
  },
  {
    id: 2,
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Project Manager",
  },
  {
    id: 3,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Marketing Coordinator",
  },
  {
    id: 4,
    name: "Wade Warren",
    email: "wade.warren@example.com",
    title: "Software Tester",
  },
  {
    id: 5,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Web Designer",
  },
  {
    id: 6,
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Marketing Coordinator",
  },
  {
    id: 7,
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Web Designer",
  },
  {
    id: 8,
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 9,
    name: "Ralph Edwards",
    email: "ralph.edwards@example.com",
    title: "Software Tester",
  },
  {
    id: 10,
    name: "Courtney Henry",
    email: "courtney.henry@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 11,
    name: "Willie Jennings",
    email: "willie.jennings@example.com",
    title: "Team Leader",
  },
  {
    id: 12,
    name: "Neveah Simmons",
    email: "neveah.simmons@example.com",
    title: "Team Leader",
  },
  {
    id: 13,
    name: "Theresa Webb",
    email: "theresa.webb@example.com",
    title: "Software Tester",
  },
  {
    id: 14,
    name: "Debbe Baker",
    email: "debbe.baker@example.com",
    title: "Software Developer",
  },
  {
    id: 15,
    name: "Ronald Richards",
    email: "ronald.richards@example.com",
    title: "Software Developer",
  },
  {
    id: 16,
    name: "Deanna Curtis",
    email: "deanna.curtis@example.com",
    title: "Scrum Master",
  },
  {
    id: 17,
    name: "Felicia Reid",
    email: "felicia.reed@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 18,
    name: "Jessie Alexander",
    email: "jessie.alexander@example.com",
    title: "Project Manager",
  },
  {
    id: 19,
    name: "Sam Smith",
    email: "sam.smith@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 20,
    name: "Eleanor Rigby",
    email: "eleanor.rigby@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 21,
    name: "Devon Lane",
    email: "devon.lane@example.com",
    title: "Team Leader",
  },
  {
    id: 22,
    name: "Guy Hawkins",
    email: "guy.hawkins@example.com",
    title: "Team Leader",
  },
  {
    id: 23,
    name: "Jim Parks",
    email: "jim.parks@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 24,
    name: "Susanne Ford",
    email: "susanne.ford@example.com",
    title: "Software Developer Manager",
  },
  {
    id: 25,
    name: "Kathryn Murphy",
    email: "kathryn.murphy@example.com",
    title: "Project Manager",
  },
  {
    id: 26,
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Software Developer",
  },
  {
    id: 27,
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Software Tester",
  },
  {
    id: 28,
    name: "Karen MacAfee",
    email: "karen.macafee@example.com",
    title: "UI/UX Designer",
  },
  {
    id: 29,
    name: "Dianne Russell",
    email: "dianne.russell@example.com",
    title: "Ethical Hacker",
  },
  {
    id: 30,
    name: "Bessie Cooper",
    email: "bessie.cooper@example.com",
    title: "Scrum Master",
  },
];

const tBody = document.querySelector("table tbody");
const totalResults = (document.querySelector(
  "table tfoot tr"
).firstElementChild.textContent = `${data.length} Results`);
const currentPageInput = document.querySelector("input#currentPage");

// Variable
let arr = [];
let page = 0;
let perPage = 10;
let prevBtn;

// shunk arr at start
(() => {
  sunkArr(perPage, data);
})();

// Create Pagination
function sunkArr(perPage, dataArr) {
  arr = [];
  for (let i = 0; i < dataArr.length; i += perPage) {
    arr.push(dataArr.slice(i, i + 10));
  }
  return arr;
}

//E:H
function loadTable(page, arr) {
  tBody.innerHTML = ``;
  arr[page].forEach(({ id, name, email, title }) => {
    let html = `<tr>
            <td>${id}</td>

            <td class="name">
              <input
                data-id=${id}
                type="text"
                disabled="disabled"
                name="name"
                value=${name}
              />
            </td>

            <td>
              <input
                data-id=${id}
                type="text"
                disabled="disabled"
                name="email"
                value=${email}
              />
            </td>

            <td>
              <input
                data-id=${id}
                type="text"
                disabled="disabled"
                name="title"
                value=${title}
              />
            </td>

            <td>
              <button class="update" name="person-update-${id}" id="personUpdate${id}">
                <img src="./images/update.svg" alt="Update" class="update" />
              </button>
              <button class="edit" name="person-edit-${id}" id="personEdit${id}">
                <img src="./images/edit.svg" alt="Edit" class="edit" />
              </button>
            </td>

          </tr>`;

    tBody.insertAdjacentHTML("beforeend", html);
  });

  document.querySelectorAll("button.edit").forEach((btn) => {
    btn.addEventListener("click", (e) => handleEditData(e));
  });
}

// sort Arr
function sortArr(name, isAscending) {
  const tempArr = arr.flat();
  if (name === "id") {
    return sunkArr(
      perPage,
      tempArr.sort((a, b) =>
        !isAscending ? b[name] - a[name] : a[name] - b[name]
      )
    );
  }
  return sunkArr(
    perPage,
    tempArr.sort((a, b) =>
      isAscending
        ? a[name].localeCompare(b[name])
        : b[name].localeCompare(a[name])
    )
  );
}

//handle input change
function handleInputChange(e) {
  let inputName = e.currentTarget.name;
  arr[page][e.currentTarget.dataset.id].inputName = e.currentTarget.value;
}

// Handle edit Data
function handleEditData(e) {
  let id = e.currentTarget.name.split("-")[2];

  document.querySelectorAll(`input[data-id="${id}"]`).forEach((input) => {
    input.disabled = !input.disabled;
    input.addEventListener("change", (e) => handleInputChange(e));
  });
}

//E:L
window.addEventListener("load", loadTable(page, arr));

// E:L head btns Sort items ascending || descending
document.querySelectorAll("th button.sort").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // toggle sort btn Classes
    const classes = ["descending", "ascending"];
    const isAscending = [...e.currentTarget.classList].includes(...classes);
    e.currentTarget.classList.toggle("ascending", isAscending);
    e.currentTarget.classList.toggle("descending", !isAscending);

    // update table
    const newArr = sortArr(e.currentTarget.value, isAscending);
    loadTable(page, newArr);

    // clean classes between sort btns
    if (prevBtn !== e.currentTarget && prevBtn) {
      prevBtn.className = "sort";
      prevBtn = e.currentTarget;
    }
    prevBtn = e.currentTarget;
  });
});

// Pagination Buttons E:L
// Previous page
document.querySelector("button#previous").addEventListener("click", () => {
  if (page === 0) return;
  page -= 1;
  loadTable(page, arr);
  currentPageInput.value = page + 1;
});

// Next Page
document.querySelector("button#next").addEventListener("click", () => {
  if (page === arr.length - 1) return;
  page += 1;
  currentPageInput.value = page + 1;
  loadTable(page, arr);
});

// change Page Number
currentPageInput.addEventListener("change", (e) => {
  page = +e.currentTarget.value - 1;
  loadTable(page, arr);
});

// Edit Data
