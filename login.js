function validateLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email");
    return false;
  }
  if (!password) {
    alert("Please enter password.");
    return false;
  }

  window.location.href = "kanban.html";

  return true;
}
const loginForm = document.getElementById("login-form");
if (loginForm) {
  loginForm.addEventListener("submit", validateLogin);
}
