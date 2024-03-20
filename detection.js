const form = document.getElementById("form-detection");
form.addEventListener("submit", validateForm);

function validateForm(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const small = document.querySelector("#s1");
    if (form.detection.value.trim() === "") { // Trim to remove leading and trailing whitespaces
        small.innerText = "Message required.";
        small.style.visibility = "visible";
    } else {
        small.style.visibility = "hidden";
        submitForm(); // Proceed with form submission
    }
}

function clearForm() {
    form.reset();
    document.querySelector("#s1").style.visibility = "hidden"; // Reset error message visibility
}

function submitForm() {
    const userMessage = document.getElementById("detection").value;
    const isPossiblyScam = analyzeScamMessage(userMessage);
    
    if (isPossiblyScam) { // Check if the message is possibly a scam
        alert(`This message is possibly a scam. Be careful!`);
    } else {
        alert(`This message is unlikely to be a scam. But still need to be aware.`);
    }

    clearForm(); // Reset the form after submission
}

// Function to detect scam keywords and calculate the likelihood
function analyzeScamMessage(message) {
    const lowerMessage = message.toLowerCase();
    const scamKeywords = [
        'the job is very easy',
        'you have to pay',
        'urgent action required',
        'guaranteed income',
        'work from home', 
        'get rich quick',
        'free trial offer',
        'limited time offer',
        'lottery winner',
        'inheritance claim',
        'money laundering',
        'phishing attempt',
        'credit card details required',
        'bank account information',
        'unclaimed funds',
        'tax refund processing',
        'investment opportunity',
        'cash prize notification',
        'identity theft protection',
        'online survey rewards',
        'suspicious activity detected',
        'virus detected on your device',
    ];

    for (const keyword of scamKeywords) {
        if (lowerMessage.includes(keyword)) {
            return true; // If any keyword is found, return true indicating it's possibly a scam
        }
    }

    return false; // If none of the keywords are found, return false
}
