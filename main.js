const loginButton = document.getElementById("button-header");
loginButton.addEventListener("click", () => {
  window.location.href = "login.html";
});
const getStarted = document.getElementById("button");
getStarted.addEventListener("click", () => {
  window.location.href = "login.html";
});

// home page validation subscribe button
function validateForm(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email");
    return false;
  }
  if (!name) {
    alert("Please enter name.");
    return false;
  }
}

const userData = {
  email: email,
  name: name,
};

localStorage.setItem("userData", JSON.stringify(userData));

document.getElementById("form").reset();

alert("registration completed successfully!");

// return true;

/* login page validation */

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

const subscribeForm = document.getElementById("form");
if (subscribeForm) {
  subscribeForm.addEventListener("submit", validateForm);
}
