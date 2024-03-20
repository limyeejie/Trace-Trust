// Validate the form
const form = document.getElementById("form");
form.addEventListener("submit", validateForm);

//validate the form is empty or not
function validateForm(event){

    event.preventDefault(); // Prevent form submission for demonstration purposes

    let formIsValid = true; // Variable to keep track of whether the form is valid
    
    // Check if name is empty or contains numbers
    const small1 = document.querySelector("#s1");
    const username = form.username.value;

    if (username === "") {
        small1.innerText = "Username required.";
        document.querySelector("#s1").style.visibility = "visible";
        formIsValid = false; // Set formIsValid to false
    } else {
        small1.style.visibility = "hidden";
    } 

    // Check if comment is empty
    const small3 = document.querySelector("#s3");
    if (form.discussion.value === "") {
        small3.innerText = "Discussion required.";
        document.querySelector("#s3").style.visibility = "visible";
        formIsValid = false; // Set formIsValid to false
    } else {
        small3.style.visibility = "hidden";
    }

    // If all validation checks have passed, create a discussion object
    if (formIsValid){
    const discussionSec = {
        username: form.username.value,
        discussion: form.discussion.value,
    };

    // Add the discussion to the array and local storage
    discussions.unshift(discussionSec);
    localStorage.setItem('discussions', JSON.stringify(discussions));

    // Update the display
    displayDiscussion();

    //Clear the form
    form.reset();
    showAlertDiscussion()
}
else{
    return false;
}
}

function clearForm() {
    form.reset();
}

function submitForm() {
    // Call the validateForm function and stop if it returns false
    if (!validateForm(event)) {
        return;
    }

    // If the form is valid, show a thank you message
    showAlertDiscussion()
}

function showAlertDiscussion() {
    // Show an alert with your custom message
    alert('Thanks for your sharing!');
}
// Initialize an empty array to store the discussions
let discussions = [];

// Define your hardcoded reviews
const hardcodedDiscussions = [
    {
        username:"Anonymous010",
        discussion:"I must share my experience here ! I responded to an ad for a work-from-home job, only to realize it was a scam to get my personal information"
    },
    {
        username:"IHateScammer",
        discussion:"I found an apartment online and paid the deposit, but when I arrived, the place didn't exist, and the landlord was nowhere to be found."
    },
    {
        username:"ABC",
        discussion:"I responded to an ad for a work-from-home job, only to realize it was a scam to get my personal information."
    },
    {
        username:"HeyThere",
        discussion:"I bought a phone online, and it never arrived. The seller disappeared after taking my money."
    },
    {
        username:"Alo alo",
        discussion:"I invested in a 'guaranteed' high-return scheme only to find out it was a Ponzi scheme."
    },
    {
        username:"error404",
        discussion:"I received an email pretending to be from my bank, asking for my login details. I fell for it and lost access to my account."
    },
    {
        username:"Dorayaki",
        discussion:"I donated to what I thought was a legitimate charity, but it turned out to be a scam."
    },
    {
        username:"Hello",
        discussion:"I received a message saying I won a lottery I never entered. They asked for personal information to claim the prize."
    },
    {
        username:"Bang",
        discussion:"I applied for a loan online and was asked to pay a 'processing fee' upfront. After paying, I never heard from them again."
    },
    {
        username:"Ajdowoe",
        discussion:"Someone called me claiming to be from a tech company, saying my computer had a virus. I ended up giving them access to my computer and paying for unnecessary services."  
    }   
];

window.onload = function() {
    discussions = JSON.parse(localStorage.getItem('discussion')) || [];
    if (discussions.length === 0) {
        discussions = hardcodedDiscussions;
        localStorage.setItem('discussion', JSON.stringify(discussions));
    }
    displayDiscussion();
};

// Display all discussions on the page
function displayDiscussion() {
    const discussionSection = document.getElementById('discussionSection');
    discussionSection.innerHTML = '';

    discussions.forEach(discussion => {
        const discussionDiv = document.createElement('div');
        discussionDiv.className = 'discussion';
        discussionDiv.innerHTML = `
            <div class="discussion-content">
                <h3>${discussion.username}</h3>
                <p>${discussion.discussion}</p>
            </div>
        `;
        discussionSection.appendChild(discussionDiv);
    });
}