const inputs = document.querySelectorAll("input[type=text]");

let entries = [];
let selected = 0;

const code = Array.from({ length: 10 }, (_, i) => i)
  .sort(() => 0.5 - Math.random())
  .slice(0, inputs.length);

const verify = () => {
  setTimeout(() => {
    alert(`${entries.join(",") == code ? "Yay !!!" : "Wrong Code !!!!"}  `);
  }, 500);
};

document.addEventListener("paste", (e) => {
  e.preventDefault();
  let paste = (e.clipboardData || window.Clipboard).getData("text");
  if (paste.length !== inputs.length) return;

  entries = [...paste.split("")];
  inputs.forEach((input, idx) => {
    input.value = entries[idx];
  });
  verify();
});

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    entries.push(e.target.value);
    selected += 1;

    if (selected == inputs.length) {
      verify();
    } else {
      inputs[selected].focus();
    }
  });
});

console.log("VERIFICATION CODE: ", code.join(""));

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  verify();
});
