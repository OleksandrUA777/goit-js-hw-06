const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
const value = document.querySelector("#value");
let counterValue = 0;

decrementButton.addEventListener("click", incrementButtonClickHandler);
incrementButton.addEventListener("click", decrementButtonClickHandler);

function decrementButtonClickHandler(event) {
  counterValue += 1;
  value.textContent = counterValue;
}
function incrementButtonClickHandler(event) {
  counterValue -= 1;
  value.textContent = counterValue;
}
