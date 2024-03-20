// Validate the form
let form = document.querySelector('#loginForm');
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault(); // Prevent form submission for demonstration purposes

    let errors = [];

    // Check if email is empty
    if (form.email.value === "") {
        const small1 = document.querySelector("#s1");
        small1.innerText = "Email required.";
        document.querySelector("#s1").style.visibility = "visible";
        errors.push("Email required.");
    } 
    else {
        const isValidEmail = validateEmail(form.email.value);
        if (isValidEmail) {
            document.querySelector("#s1").style.visibility = "hidden";
            document.querySelector("#email").style.borderColor = "green";
        } 
        else {
            small1.innerText = "Please enter a proper email.";
            errors.push("Please enter a proper email.");
        }
    }

    // Check if password is empty
    if (form.password.value === "") {
        const small2 = document.querySelector("#s2");
        small2.innerText = "Password required.";
        document.querySelector("#s2").style.visibility = "visible";
        errors.push("Password required.");
    } 
    else {
        if(password.value.length < 5){
            const small2 = document.querySelector("#s2");
            small2.innerText = "Your password should have at least 5 literals in it. Please try again!";
            small2.style.visibility = "visible";
            errors.push("Your password should have at least 5 literals in it. Please try again!");
        }
        else{
            document.querySelector("#s2").style.visibility = "hidden";
            document.querySelector("#password").style.borderColor = "green";
        }
    }

    // If the "Remember Me" checkbox is checked...
    if (document.getElementById('rememberme').checked) {
        // Save the email to localStorage
        localStorage.setItem('email', form.email.value);
    } else {
        // Otherwise, remove the email from localStorage
        localStorage.removeItem('email');
    }

    if (errors.length === 0) {
    showAlertAndRedirectLogin();
    }
}

// Validate the email
function validateEmail(email) {
    const emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    return emailPattern.test(email);
}

function onSubmit(token) {
  document.getElementById("demo-form").submit();
}

document.getElementById('newsletter').addEventListener('change', function() {
    var messageElement = document.getElementById("newsletterMessage");
    if(this.checked) {
        // Checkbox is checked
        messageElement.textContent = "Thank you for subscribing to our newsletter!";
    } else {
        // Checkbox is not checked
        messageElement.textContent = "";
    }
});

// When the page loads...
window.onload = function() {
    // If there's an email in localStorage...
    if (localStorage.getItem('email')) {
        // Set the email field to that email
        form.email.value = localStorage.getItem('email');
        // And check the "Remember Me" box
        document.getElementById('rememberme').checked = true;
    }
};

function showAlertAndRedirectLogin() {
    // Get the current date and time
    let now = new Date();

    // Format the date and time into a readable string
    let lastLoginTime = now.toLocaleString();

    // Show an alert with your custom message and the last login time
    alert('Login successfully! Your login time is' + lastLoginTime + '. You will now be redirected to the homepage.');
    
    // Redirect to the homepage (change the URL as needed)
    window.location.href = 'homepage.html';
}
