const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "Sravani" && password === "sv@123") {
        alert("You have successfully logged in.");
        location.replace("acc_details.html");
    } else
        alert("Invalid username or password");
   
})