document.addEventListener('DOMContentLoaded', (event) => {
    let form = document.querySelector('#forgotPasswordForm');
    form.addEventListener("submit", validateForm);
});

// Select the form element
let form = document.getElementById('forgotPasswordForm');

function validateForm(event) {

    event.preventDefault(); // Prevent form submission for demonstration purposes

    let errors = []; // Array to store error messages

    const small1 = document.querySelector("#s1");
    // Check if email is empty
    if (form.email.value === "") {
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
            small1.innerText = "Enter a proper email.";
            errors.push("Enter a proper email.");
        }
    }

    const small2 = document.querySelector("#s2");
    // Check if password is empty
    if (form.password.value === "") {
        small2.innerText = "Password required.";
        document.querySelector("#s2").style.visibility = "visible";
        errors.push("Password required.");
    } 
    else {
        if(password.value.length < 5){
            small2.innerText = "Your password should have at least 5 literals in it. Please try again!";
            small2.style.visibility = "visible";
            errors.push("Your password should have at least 5 literals in it. Please try again!");
        }
        else{
            document.querySelector("#s2").style.visibility = "hidden";
            document.querySelector("#password").style.borderColor = "green";
        }
    }

    const small7 = document.querySelector("#s7");
    // Check if confirm password match password / empty
    if (form.confirmpassword.value === "") {
        small7.innerText = "Confirm password required.";
        document.querySelector("#s7").style.visibility = "visible";
        errors.push("Confirm password required.");
    } 
    else {
        if(form.password.value != form.confirmpassword.value){
            small7.innerText = "Password does not match.";
            document.querySelector("#s7").style.visibility = "visible"; // Show the error message
            errors.push("Password does not match.");
        }
        else{
            document.querySelector("#s7").style.visibility = "hidden";
            document.querySelector("#confirmpassword").style.borderColor = "green";
        }
    }
    // If validation succeeds, show an alert and redirect to the homepage
    if (errors.length === 0) {
        alert('Password changed successfully! You will now be redirected to the homepage.');
        window.location.href = 'homepage.html';
    }
}
function validateEmail(email) {
    var re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
}

