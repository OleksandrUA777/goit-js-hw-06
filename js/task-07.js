const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.addEventListener("input", sliderChangeHandler);

function sliderChangeHandler(event) {
  let value = slider.value;
  text.style.fontSize = value + "px";
}
