const userContent = document.getElementById("userContent");
const innerContent = document.getElementById("innerContent");
const logoutButton = document.querySelector(".logout");

const loggedOut = true;

if (loggedOut) {
  userContent.innerHTML = `<h3> Coś poszło nie tak </h3> <p>Taki uzytkownik nie istnieje lub wystapil blad podczas logowania. Sprobuj ponownie pozniej</p> <a href="login.html">Wroc do strony logowania</a>`;
} else {
  console.log("request");
}
logoutButton.addEventListener("click", () => {
  logoutButton();
});
function logout() {
  window.location.href = "login.html";
}
