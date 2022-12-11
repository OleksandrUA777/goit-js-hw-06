const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", inputChangeHandler);
function inputChangeHandler(event) {
  if (nameInput.value === "" || nameInput.value === " ") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
}
