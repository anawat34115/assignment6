document.getElementById("myRegister").addEventListener("submit", function (event) {
    const errorMsg = document.getElementById("errormsg");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const username = document.getElementsByName("username")[0].value; // Get the username input

    // Clear previous error messages
    errorMsg.innerHTML = ""; 

    // Validate password match
    if (password !== confirmPassword) {
        errorMsg.innerHTML = "Passwords do not match.";
        event.preventDefault(); // Prevent form submission
        return; // Exit the function
    }

    // Store user information in localStorage
    localStorage.setItem("user", JSON.stringify({ username, password })); 
});
