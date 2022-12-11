const form = document.querySelector(".login-form");
const inputs = document.querySelectorAll("input");

form.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  if (inputs[0].value === "" || inputs[1].value === "") {
    alert("Please fill all the fields!!");
  } else {
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
      email,
      password,
    };

    console.log(formData);
    event.currentTarget.reset();
  }
}
