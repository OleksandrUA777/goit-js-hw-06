const form = document.querySelector(".login-form");

form.addEventListener("submit", formSubmitHandler);

function formSubmitHandler(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements[0].value === "" || formElements[1].value === "") {
    alert("Please fill all the fields!!");
  } else {
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
