const passwordLenght = document.querySelector("div.field>input#length");
let length = document.querySelector("div.field>input#length").value;

//E:L
passwordLenght.addEventListener("change", (e) => {
  console.log(e.target.value);
});
