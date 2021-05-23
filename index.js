// Import the Manager class
const Manager = require('./lib/manager');
// Import the Engineer class
const Engineer = require('./lib/engineer');
// Import the Intern class
const Intern = require('./lib/intern');

// Import the file system module
const fs = require("fs");
// Import the inquirer module
const inquirer = require("inquirer");
// Import the path module
const path = require('path');

// The questions that are going to be fed to the inquirer are divided in the following arrays
// Starting questions, there must always be 1 manager and it is the first data that is asked to the user
const managerQuestion = [
    {
        type: "input",
        message: "Enter the Team manager's Name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the Team manager's employee ID",
        name: "id",
    },
    {
        type: "input",
        message: "Enter the Team manager's email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the Team manager's office number",
        name: "number",
    },
];
// Asks the user if they want to add a team member or if they wish to finish the inquirer
const addMemberQuestion = [
    {
        type: "list",
        message: "Do you want to add a team member?",
        choices: ['Engineer', 'Intern', 'Finish'],
        name: "memberType",
    },
]
// Set of questions that are asked if the user wants to add an engineer member
const addEngineerQuestion = [
    {
        type: "input",
        message: "Enter the Engineer's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the Engineer's ID",
        name: "id",
    },
    {
        type: "input",
        message: "Enter the Engineer's email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the Engineer's github username",
        name: "github",
    },
]
// Set of questions that are asked if the user wants to add an Intern member
const addInternQuestion = [
    {
        type: "input",
        message: "Enter the Intern's name",
        name: "name",
    },
    {
        type: "input",
        message: "Enter the Intern's ID",
        name: "id",
    },
    {
        type: "input",
        message: "Enter the Intern's email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the Intern's school name",
        name: "school",
    },
]
// Object that stores the 3 icons that are used for the 3 different types of cards
const iconClass = {
    manager: `<i class="fas fa-mug-hot"></i>`,
    engineer: `<i class="fa fa-glasses"></i>`,
    intern: `<i class="fa fa-user-graduate"></i>`,
}
// Variable that stores the information that is going to be added to the base html code
let cardsInfo = ``;
// Keeps track of how many cards we have added so far
let cardCounter = 0;

// We write the base html file + the cardsInfo data to a file
function writeToFile(data) {
    // We define the path to be saved with the path.join method. We get this file's path with first argument
    // then we move to the dist folder with the second argument and store the file there
    fs.writeFile(path.join(__dirname, './dist/index.html'), data, (err) => {
        // If there is an error throw it to the console
        if (err) throw err;
        // Otherwise log to the console the next message
        console.log("index.html File created succesfully");
    });
}

// Function that merges the base html code and the cards code, then call the write file function, when this functions gets called, no more cards will be added
const buildFile = () => {
    // If our cardCounter module is different than 0, it means that we didn't close the row of cards that we are working on
    // So we add a div tag at the end of the  cardsInfo variable to close the current row of cards
    if (cardCounter % 3 != 0) {
        cardsInfo += `</div>`
    }
// Template literal that contains the base html file and adds the information related to the cards that we built
// Based on the input of the user using inquirer
    const htmlBody =
        `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <!-- Icons -->
    <script src="https://kit.fontawesome.com/e4017d6db4.js" crossorigin="anonymous"></script>
    <!-- Our styles -->
    <link href="../dist/css/style.css" rel="stylesheet"">

    <title>Team Profile Generator</title>
</head>

<body>
    <div class=" row">
    <div class="d-flex align-items-center justify-content-center header-container">
        <h1 class="header-text">My Team</h1>
    </div>
    </div>

    <div class="container">
        
        ${cardsInfo}

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4"
        crossorigin="anonymous"></script>
    </body>

</html>
`

    // Once we merged the data, then call the function that creates the file
    writeToFile(htmlBody);
}

// Depending on what type of team member we are adding, add the required code to the cardInfo variable as a template literal.
const addCards = (newCard) => {
    // Variable that stores the insert tag that belongs to the corresponding card
    let currentIcon;
    // Get the insert tag that belongs to the card that is being added
    switch (newCard.getRole()) {
        case 'Manager':
            currentIcon = iconClass.manager;
            break;
        case 'Engineer':
            currentIcon = iconClass.engineer;
            break;
        case 'Intern':
            currentIcon = iconClass.intern;
            break;
        default:
            currentIcon = 'Something went wrong';
            break;
    }
    // If the module of our card counter is 0, then we are adding a new row of cards (each row has a set of 3 cards)
    // So we must add the div tag that creates a new row and we add that code to our cardsInfo variable
    if (cardCounter % 3 === 0) {
        cardsInfo +=
            `
    <div class="row d-flex align-items-center justify-content-center mt-3">
`;
    }

    // If we are trying to add a new manager, then add the code that corresponds to the manager card to the cardsInfo variable
    // The layout that is being used to create this file can be seen in the index.html file that is located in the src folder
    if (newCard.getRole() === 'Manager') {
        cardsInfo +=
            `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${newCard.getName()}</h5>
                    <p class="card-text">
                        ${currentIcon}
                        ${newCard.getRole()}
                    </p>
                </div>
                <div class="bg-light">
                    <ul class="list-group list-group-flush bg-light card-list">
                        <li class="list-group-item">ID: ${newCard.getID()}</li>
                        <li class="list-group-item">Email: 
                            <a href="mailto:${newCard.getEmail()}">${newCard.getEmail()}</a>
                        </li>
                        <li class="list-group-item">Office number: ${newCard.getOfficeNumber()}</li>
                    </ul>
                </div>
            </div>
        </div>

`;
    }

    // If we are trying to add a new engineer, then add the code that corresponds to the manager card to the cardsInfo variable
    if (newCard.getRole() === 'Engineer') {
        cardsInfo +=
            `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${newCard.getName()}</h5>
                    <p class="card-text">
                        ${currentIcon}
                        ${newCard.getRole()}
                    </p>
                </div>
                <div class="bg-light">
                    <ul class="list-group list-group-flush bg-light card-list">
                        <li class="list-group-item">ID: ${newCard.getID()}</li>
                        <li class="list-group-item">Email: 
                            <a href="mailto:${newCard.getEmail()}">${newCard.getEmail()}</a>
                        </li>
                        <li class="list-group-item">GitHub: 
                            <a href="https://github.com/${newCard.getGithub()}" target="_blank">${newCard.getGithub()}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
    `;
    }

    // If we are trying to add a new intern, then add the code that corresponds to the manager card to the cardsInfo variable
    if (newCard.getRole() === 'Intern') {
        cardsInfo +=
            `
        <div class="col-3">
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${newCard.getName()}</h5>
                    <p class="card-text">
                    ${currentIcon}
                    ${newCard.getRole()}
                    </p>
                </div>
                <div class="bg-light">
                    <ul class="list-group list-group-flush bg-light card-list">
                    <li class="list-group-item">ID: ${newCard.getID()}</li>
                    <li class="list-group-item">Email: 
                        <a href="mailto:${newCard.getEmail()}">${newCard.getEmail()}</a>
                    </li>
                        <li class="list-group-item">School: ${newCard.getSchool()}</li>
                    </ul>
                </div>
            </div>
        </div>
    
    `;
    }

    // If the module of our cardCounter info is 2, that means we already added 3 cards (The counter has still not taken the current card into account, we increase it at the end)
    // Because we completed the set of 3 cards in the row, we must close the div tag for the current row, we add this div tag to out cardsInfo variable
    if (cardCounter % 3 === 2) {
        cardsInfo +=
            `
    </div>
`;
    }
    // We increase the card counter variable
    cardCounter++;
}

// Function that adds a new Engineer team member
const addEngineer = (myCallback) => {
    // Use inquirer to ask the questions related to an engineer team member
    inquirer.prompt(addEngineerQuestion).then((engineerResponse) => {
        // Create a new Engineer object and then add a new card based on that object's information
        addCards(new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github));
        // Once we added the new card, ask if the user wants to add a new member with a callback function
        myCallback();
    });
}
// Function that adds a new Intern team member
const addIntern = (myCallback) => {
    // Use inquirer to ast the questions related to an intern team member
    inquirer.prompt(addInternQuestion).then((internResponse) => {
        // Create a new Intern object and then add a new card based on that object's information
        addCards(new Intern(internResponse.name, internResponse.id, internResponse.email, internResponse.school));
        // Once we added the new card, ask if the user wants to add a new member with a callback function
        myCallback();
    });
}
// Ask if the user wants to add a new member or not
const addTeamMember = () => {
    // Use inquirer to ask if the user wants to add an engineer, intern or none
    inquirer.prompt(addMemberQuestion).then((memberResponse) => {
        // If we want to add someone then
        if (memberResponse.memberType != 'Finish') {
            // If we want to add an Engineer, extecute the addEngineer method, else call the addIntern method
            if (memberResponse.memberType === 'Engineer') {
                addEngineer(addTeamMember);
            } else {
                addIntern(addTeamMember);
            }
        }
        // If we dont want to add more cards, then call the buildFile method
        else {
            buildFile();
        }
    });
}
// Function that adds the Manager team member
const addManager = (myCallback) => {
    // Use inquirer to ast the questions related to the manager team member
    inquirer.prompt(managerQuestion).then((managerResponse) => {
        // Create a new Manager object and then add a new card based on that object's information
        addCards(new Manager(managerResponse.name, managerResponse.id, managerResponse.email, managerResponse.number));
        // Once we added the new card, ask if the user wants to add a new member with a callback function
        myCallback();
    });
}

// Function that starts calling functions that call other functions as callbacks to make the code synchronous, otherwise, inquirer wouldn't work
const init = () => {
    addManager(addTeamMember);
}

// Start the program
init();