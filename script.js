document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const formTitle = document.getElementById("form-title");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const submitBtn = document.getElementById("submit-btn");
    const toggleBtn = document.getElementById("toggle-btn");

    let isSignup = false;

    toggleBtn.addEventListener("click", () => {
        isSignup = !isSignup;

        if (isSignup) {
            formTitle.textContent = "Sign Up";
            submitBtn.textContent = "Sign Up";
            confirmPassword.classList.remove("hidden");
            toggleBtn.textContent = "Back to Login";
            container.classList.add("signup-mode");
        } else {
            formTitle.textContent = "Login";
            submitBtn.textContent = "Login";
            confirmPassword.classList.add("hidden");
            toggleBtn.textContent = "Sign Up";
            container.classList.remove("signup-mode");
        }
    });
var dashboard = document.createElement('a')
    submitBtn.addEventListener("click", () => {
        if (isSignup) {
            if (password.value !== confirmPassword.value) {
                alert("Passwords do not match!");
                return;
            }
            localStorage.setItem(username.value, password.value);
            alert("Signup successful! Please log in.");
            toggleBtn.click();
        } else {
            const storedPassword = localStorage.getItem(username.value);
            if (storedPassword && storedPassword === password.value) {
            window.location.href="index.html"
            } else {
                alert("Invalid username or password.");
            }
        }
    });
});



