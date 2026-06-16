/*
    Document Footer
*/

// Creating Document Footer
const bruhdyFooter = document.createElement("footer");
bruhdyFooter.className = "footer";
bruhdyFooter.setAttribute("id", "myfooter");
document.body.appendChild(bruhdyFooter);

var today = new Date();
var thisYear = today.getFullYear();
var copyright = document.createElement("p");
copyright.innerHTML = "\u00A9" + "BroudyNegron" + thisYear;

bruhdyFooter.appendChild(copyright);



/*
    Skills
*/

// Create Skill List
const skills = ["JavaScript", "HTML", "CSS", "C", "Java", "GDScript", "VSCode", "GitHub", "DaVinci Resolve"];
const skillsSection = document.getElementById("skills");
var skillsList = skillsSection.querySelector("ul");

// For each skill in Skill list
for (let mySkill of skills) {

    // Add that skill to the page
    var skill = document.createElement("li");
    skill.innerHTML = (mySkill);
    skillsList.appendChild(skill);
}



/*
    Messaging Form System
*/

const messageForm = document.getElementsByName("leave_message")[0];
messageForm.addEventListener("submit", function(event) {

    // Remove default events (i.e page refresh)
    event.preventDefault();

    // Get user's name, email, and message
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;
    
    // Adding User's message to Message Board
    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");

    // Create list item with user's name and link to their email, along with message
    const newMessage = document.createElement("li"); 
    
    // Email and Name Link
    const emailName = document.createElement("a")
    emailName.className = "email-name";
    emailName.href = `mailto:${usersEmail}`;
    emailName.textContent = usersName;

    // Span for the message
    const messageSpan = document.createElement("span");
    messageSpan.className = "span-text";
    messageSpan.textContent = usersMessage;

    newMessage.appendChild(emailName);
    newMessage.appendChild(messageSpan);

    // Create a remove button that removes specific message
    const removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.innerHTML = "Remove";
    removeButton.type = "button";

    // On Remove button click
    removeButton.addEventListener("click", function() {

        //remove parent (whole message) node
        const entry = this.parentNode;
        entry.remove();
    });

    // Create an edit button
    const editButton = document.createElement("button");
    editButton.className = "edit-button";
    editButton.innerHTML = "Edit";
    editButton.type = "button";

    // On edit button click
    editButton.addEventListener("click", function() {

        // Does not create if edit box already exists
        if (newMessage.querySelector("textarea")) {

            return;
        }

        // Create new text area for user to type in
        const editText = document.createElement("textarea");
        editText.className = "edit-textarea";
        editText.innerHTML = messageSpan.textContent;

        // Create confirm changes button
        const confirmChangesButton = document.createElement("button");
        confirmChangesButton.className = "confirm-button"
        confirmChangesButton.innerHTML = "Confirm";
        confirmChangesButton.type = "button";

        // Create cancel changes button
        const cancelChangesButton = document.createElement("button");
        cancelChangesButton.className = "cancel-button";
        cancelChangesButton.innerHTML = "Cancel";
        cancelChangesButton.type = "button";

        // On confirm changes button click
        confirmChangesButton.addEventListener("click", function() {

            
            messageSpan.textContent = editText.value;
            this.remove();
            editText.remove();
            cancelChangesButton.remove();
        })

        // On cancel changes button click
        cancelChangesButton.addEventListener("click", function() {

            this.remove();
            editText.remove();
            confirmChangesButton.remove()
        })

        
        // Append Editing stuff to Message
        this.parentNode.appendChild(editText);
        this.parentNode.appendChild(confirmChangesButton);
        this.parentNode.appendChild(cancelChangesButton);

    });

    // Append all the buttons and stuff to the message
    newMessage.appendChild(removeButton);
    newMessage.appendChild(editButton);
    
    messageList.appendChild(newMessage);

    // Empties the form 
    messageForm.reset();
});



/*
    Call GitHub API
*/

// A secret tool used for later
const linkSymbol = "🔗";

const myGitHubRepos = "https://api.github.com/users/BruhdyBro/repos";
fetch(myGitHubRepos)
.then((response) => response.json()) // Parse Response into JSON

.then((data) => { // Create list with data
    const repositories = data;
    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    // For each Project in the Repositories
    for (let project of repositories) {

        // Create a list element with project name
        const repo = document.createElement("li");
        repo.innerHTML = (`${project.name} `);

        // Create link to the the Repo
        const repoLink = document.createElement("a");
        repoLink.href = (`https://github.com/${project.full_name}`)
        repoLink.innerHTML = linkSymbol; // Using that secret tool :D
        
        // Append both list element and link 
        repo.appendChild(repoLink);
        projectList.appendChild(repo);
    }
})
//Catch Error
.catch((error) => console.error("Could not fetch Repositories through GitHub API", error));