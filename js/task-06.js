const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", inputCheckHandler);

function inputCheckHandler(event) {
  if (
    input.value.length < Number(input.dataset.length) ||
    input.value.length > Number(input.dataset.length)
  ) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else if (input.value.length === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
