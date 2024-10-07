document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("myLogin").addEventListener("submit", (event) => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (!storedUser) {
            alert("No registered user found.");
            event.preventDefault();
        } else if (username === storedUser.username && password === storedUser.password) {
            alert("Login successful!");
        } else {
            alert("Incorrect username or password.");
            event.preventDefault();
        }
    });
});
