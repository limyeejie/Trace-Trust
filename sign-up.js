// Validate the form
const form = document.getElementById("form");
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
            small1.innerText = "Enter a proper email.";
            document.querySelector("#s1").style.visibility = "visible";
            errors.push("Enter a proper email.");
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
            small2.innerText = "At least 5 literals are required.";
            document.querySelector("#s2").style.visibility = "visible";
            errors.push("At least 5 literals are required.");
        }
        else{
            document.querySelector("#s2").style.visibility = "hidden";
            document.querySelector("#password").style.borderColor = "green";
        }
    }

    // Check if confirm password match password / empty
    if (form.confirmpassword.value === "") {
        const small7 = document.querySelector("#s7");
        small7.innerText = "Confirm password required.";
        document.querySelector("#s7").style.visibility = "visible";
        errors.push("Confirm password required.");
    } 
    else {
        if(form.password.value != form.confirmpassword.value){
            const small7 = document.querySelector("#s7");
            small7.innerText = "Password does not match.";
            document.querySelector("#s7").style.visibility = "visible";
            errors.push("Password does not match.");
        }
        else{
            document.querySelector("#s7").style.visibility = "hidden";
            document.querySelector("#confirmpassword").style.borderColor = "green";
        }
    }

    // Check if gender is empty
    if(form.gender.value ===""){
        document.querySelector("#s5").innerText = "Gender required.";
        document.querySelector("#s5").style.visibility = "visible";
        errors.push("Gender required.");
    }
    else{
        document.querySelector("#s5").innerText = "";
    }
    
    // If we reach this point, all validations have passed
    if (errors.length === 0) {
    showAlertAndRedirectSignUp();
    }
}

// Validate the email
function validateEmail(email) {
    const emailPattern = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    return emailPattern.test(email);
}

function showAlertAndRedirectSignUp() {
    // Show an alert with your custom message
    alert('Welcome to Urban Nest Designs! You will now be redirected to the homepage.');

    // Redirect to the homepage (change the URL as needed)
    window.location.href = 'homepage.html';
}
