const form = document.getElementById("form");
const success = document.getElementById("success");
const main = document.querySelector("main");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateRecoveryForm()) {
    console.log("request");
  } else {
    console.log("error");
  }
});
function validateRecoveryForm() {
  let proceed = true;

  const email = document.querySelector("#email");
  const emailError = document.querySelector("#emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    emailError.classList.add("visible");
    proceed = false;
  } else {
    email.classList.remove("error");
    emailError.classList.remove("visible");
    proceed = true;
  }
  function shouldProceed(v) {
    if (!v) {
      return false;
    }
    return true;
  }
  return shouldProceed(proceed);
}
