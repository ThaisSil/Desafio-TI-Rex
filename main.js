const buttonHeader = document.getElementById("button-header");
if(buttonHeader){
buttonHeader.addEventListener("click", () => {
  window.location.href = "login.html";
});
}
const getStarted = document.getElementById("button");
if(getStarted){
getStarted.addEventListener("click", () => {
  window.location.href = "login.html";
});
}

/* home page validation subscribe button*/

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailRegex.test(email) == false) {
    alert("Please enter a valid email");
    return false;
  }
  if (!name) {
    alert("Please enter name.");
    return false;
  }

  const userData = { name, email };

  localStorage.setItem("userData", JSON.stringify(userData));

  alert("Form submitted successfully!");

});

// /* login page validation */

// let loginForm = document.querySelector("login-form");
// loginForm.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   if (emailRegex.test(email) == false) {
//     alert("Please enter a valid email");
//     return false;
//   }
//   if (!password) {
//     alert("Please enter password.");
//     return false;
//   }

//    window.location.href = "kanban.html";
//    return true;
// });


