const form = document.getElementById("form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const remember = document.querySelector("#rememberCheckbox");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateLoginForm()) {
    const data = {
      email: email.value,
      password: password.value,
    };
    login(data);
  } else {
    console.log("error");
  }
});

function validateRegisterForm() {
  let proceed = {
    email: true,
    password: true,
  };
  const emailError = document.querySelector("#emailError");
  const passwordError = document.querySelector("#passwordError");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!emailRegex.test(email.value)) {
    email.classList.add("error");
    emailError.classList.add("visible");
    proceed.email = false;
  } else {
    email.classList.remove("error");
    emailError.classList.remove("visible");
    proceed.email = true;
  }
  if (!passwordRegex.test(password.value)) {
    password.classList.add("error");
    passwordError.classList.add("visible");
    proceed.password = false;
  } else {
    password.classList.remove("error");
    passwordError.classList.remove("visible");
    proceed.password = true;
  }
  function shouldProceed(proceed) {
    for (let key in proceed) {
      if (!proceed[key]) {
        return false;
      }
    }
    return true;
  }
  return shouldProceed(proceed);
}

async function login(data) {
  try {
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: postMessage,
      headres: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.JSON();
    console.log(result);
    if (result.message == "Unauthorized") {
      return;
    } else {
      localStorage.setItem("access_token", result.access_token);
      window.location.href = "/profile.html";
    }
  } catch (error) {
    console.log(error);
  }
}
