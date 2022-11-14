let formData = {};

function erroMsg(message) {
  return `<img src="./images/error.svg" alt="Error" />
    ${message}
      </div>`;
}

let successHTML = `<img src="./images/success.svg" alt="Success" />`;

//E:H
function validateInputOnChange(input) {
  if (input.value.trim().length < 1) {
    return displayErrorMsg(input, `A ${input.name} is Required`);
  }
  if (input.name === "email") return validateEmail(input);
  if (input.name === "confirm-password")
    return confirmPassword(formData.password, input.value, input);

  if (!formData[input.name]) {
    formData[input.name] = input.value;
  } else {
    formData[input.name] = input.value;
  }

  displaySuccessMsg(input);
}

function displaySuccessMsg(input) {
  input.parentNode.lastElementChild.previousElementSibling.innerHTML = "";
  input.parentNode.lastElementChild.innerHTML = successHTML;
}

function displayErrorMsg(input, message) {
  formData[(input.name.error = true)];
  input.parentNode.lastElementChild.innerHTML = "";
  input.parentNode.lastElementChild.previousElementSibling.innerHTML =
    erroMsg(message);
}

function validateEmail(input) {
  const emailRegex = new RegExp(
    /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    "gm"
  );
  const isValidEmail = emailRegex.test(input.value);

  return isValidEmail
    ? displaySuccessMsg(input)
    : displayErrorMsg(input, "Email is not Valid !!");
}

function confirmPassword(password, confirmPassword, input) {
  return password === confirmPassword
    ? displaySuccessMsg(input)
    : displayErrorMsg(input, "Password and Confirm Password  do not match !!");
}

// E:L
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", (e) => {
    validateInputOnChange(e.currentTarget);
  });
});

document.querySelectorAll("button.show-hide").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const parent = e.currentTarget.parentNode;
    if (parent.children[0].type == "password") {
      parent.children[0].type = "text";
    } else {
      parent.children[0].type = "password";
    }
    parent.classList.toggle("show");
  });
});

/* document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(Object.keys(formData).length);
  alert(`Form submitted ${JSON.stringify(formData, 0, 2)}`);
});
 */
