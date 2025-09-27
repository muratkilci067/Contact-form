const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function (e) {
  e.preventDefault(); 

  clearErrors();

  let hasError = false;

  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const radio1 = document.getElementById("radio1");
  const radio2 = document.getElementById("radio2");
  const consent = document.getElementById("consent");

  const emailRegex = /^[\w.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

  if (!firstName.value.trim()) {
    showError(firstName, "first-error");
    hasError = true;
  }

  if (!lastName.value.trim()) {
    showError(lastName, "last-error");
    hasError = true;
  }

  if (!emailRegex.test(email.value.trim())) {
    showError(email, "email-error");
    hasError = true;
  }

  if (!radio1.checked && !radio2.checked) {
    const radioWrapper = document.querySelector(".radio-selects");
    radioWrapper.classList.add("error");
    document.getElementById("radio-error").classList.add("error");
    hasError = true;
  }

  if (!message.value.trim()) {
    showError(message, "message-error");
    hasError = true;
  }

  if (!consent.checked) {
    showError(consent, "consent-error");
    hasError = true;
  }

  if (!hasError) {
    document.querySelector(".success-msg").style.display = "block";
    document.querySelector("form").reset();
  }
  setTimeout(()=>{
    document.querySelector(".success-msg").style.display = "none";
  },5000);
});

function showError(inputElement, errorElementId) {
  inputElement.classList.add("error");

  const errorElement = document.getElementById(errorElementId);
  if (errorElement) {
    errorElement.classList.add("error");
    errorElement.style.display = "block";
  }
}

function clearErrors() {
  document.querySelectorAll(".error").forEach((el) => {
    el.classList.remove("error");
    if (el.tagName.toLowerCase() === "small") {
      el.style.display = "none";
    }
  });
}
